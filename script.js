/* ═══════════════════════════════════════
   TRACKINKWORK · App Logic
   ═══════════════════════════════════════ */

const STORAGE_KEY = 'trackinkwork_v1';

// ── State ──────────────────────────────
const state = {
  currentYear:  new Date().getFullYear(),
  currentMonth: new Date().getMonth(), // 0-indexed
  data:         {},   // { "2026-04": [1,5,10], ... }
  dailyRate:    50,
};

// ── Persistence ────────────────────────
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    data:      state.data,
    dailyRate: state.dailyRate,
  }));
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.data      = parsed.data      || {};
    state.dailyRate = parsed.dailyRate || 50;
  } catch (_) { /* corrupt data, start fresh */ }
}

// ── Helpers ────────────────────────────
function monthKey(year, month) {
  return `${year}-${String(month + 1).padStart(2, '0')}`;
}

function getWorkedDays(year, month) {
  return state.data[monthKey(year, month)] || [];
}

function isWorked(year, month, day) {
  return getWorkedDays(year, month).includes(day);
}

function toggleDay(year, month, day) {
  const key   = monthKey(year, month);
  const days  = state.data[key] ? [...state.data[key]] : [];
  const idx   = days.indexOf(day);
  if (idx === -1) {
    days.push(day);
    showToast(`+${fmt(state.dailyRate)} ajouté`);
  } else {
    days.splice(idx, 1);
    showToast(`Jour retiré`);
  }
  state.data[key] = days;
  save();
}

function monthTotal(year, month) {
  return getWorkedDays(year, month).length * state.dailyRate;
}

function fmt(amount) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0,
  }).format(amount);
}

// ── Calendar ───────────────────────────
function renderCalendar() {
  const { currentYear: y, currentMonth: m } = state;
  const today = new Date();

  // Header
  const label = new Date(y, m, 1).toLocaleDateString('fr-FR', {
    month: 'long', year: 'numeric',
  });
  document.getElementById('month-title').textContent = label;
  document.getElementById('total-amount').textContent = fmt(monthTotal(y, m));

  // Grid
  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';

  // First day of month (Monday=0 for our grid)
  const firstDay = new Date(y, m, 1).getDay(); // 0=Sun … 6=Sat
  const startOffset = (firstDay === 0 ? 6 : firstDay - 1); // Mon-based
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const daysInPrev  = new Date(y, m, 0).getDate();

  // Prev month filler
  for (let i = startOffset - 1; i >= 0; i--) {
    const cell = makeCell(daysInPrev - i, 'other-month');
    grid.appendChild(cell);
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const date   = new Date(y, m, d);
    const dow    = date.getDay(); // 0=Sun, 6=Sat
    const isWEnd = dow === 0 || dow === 6;
    const isTdy  = today.getFullYear() === y &&
                   today.getMonth()    === m &&
                   today.getDate()     === d;
    const worked = isWorked(y, m, d);

    const classes = ['day-cell'];
    if (isWEnd)  classes.push('weekend');
    if (isTdy)   classes.push('today');
    if (worked)  classes.push('worked');

    const cell = makeCell(d, ...classes.slice(1));
    cell.addEventListener('click', () => {
      toggleDay(y, m, d);
      renderCalendar();
      renderClean();
    });
    grid.appendChild(cell);
  }

  // Next month filler (fill to complete last row)
  const total = startOffset + daysInMonth;
  const remainder = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= remainder; d++) {
    grid.appendChild(makeCell(d, 'other-month'));
  }
}

function makeCell(dayNum, ...extraClasses) {
  const cell = document.createElement('div');
  cell.className = ['day-cell', ...extraClasses].join(' ');
  cell.innerHTML = `
    <span class="day-number">${dayNum}</span>
    <span class="day-dot"></span>
  `;
  return cell;
}

// ── Clean Tab ─────────────────────────
function renderClean() {
  const list = document.getElementById('clean-list');
  list.innerHTML = '';

  const now = new Date();

  // Collect all month keys that have data + show trailing 12 months
  const months = new Set();
  Object.keys(state.data).forEach(k => months.add(k));
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.add(monthKey(d.getFullYear(), d.getMonth()));
  }

  // Sort descending
  const sorted = [...months].sort((a, b) => b.localeCompare(a));

  let yearTotal = 0;
  const currentYear = now.getFullYear();
  Object.keys(state.data).forEach(k => {
    if (k.startsWith(String(currentYear))) {
      yearTotal += (state.data[k]?.length || 0) * state.dailyRate;
    }
  });
  document.getElementById('year-total').textContent = fmt(yearTotal);

  if (sorted.length === 0) {
    list.innerHTML = `
      <div class="clean-empty">
        <div class="clean-empty-icon">📭</div>
        <div class="clean-empty-text">Aucune donnée enregistrée</div>
      </div>`;
    return;
  }

  // Max days for bar scale
  const maxDays = Math.max(1, ...sorted.map(k => {
    const [yr, mo] = k.split('-').map(Number);
    return getWorkedDays(yr, mo - 1).length;
  }));

  sorted.forEach(key => {
    const [yr, mo] = key.split('-').map(Number);
    const worked   = getWorkedDays(yr, mo - 1);
    const total    = worked.length * state.dailyRate;
    const label    = new Date(yr, mo - 1, 1).toLocaleDateString('fr-FR', {
      month: 'long', year: 'numeric',
    });
    const pct = (worked.length / maxDays) * 100;

    const monthIcons = ['🌟','❄️','🌸','🌿','☀️','🏖️','🌻','🍂','🎃','🦃','❄️','🎄'];
    const icon = monthIcons[mo - 1] || '📅';

    const card = document.createElement('div');
    card.className = 'glass-card clean-month-card';
    card.innerHTML = `
      <div class="clean-month-icon">${icon}</div>
      <div class="clean-month-info">
        <div class="clean-month-name">${label}</div>
        <div class="clean-month-days">${worked.length} jour${worked.length !== 1 ? 's' : ''} travaillé${worked.length !== 1 ? 's' : ''}</div>
        <div class="clean-bar-wrap">
          <div class="clean-bar" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="clean-month-amount${total === 0 ? ' zero' : ''}">${fmt(total)}</div>
    `;

    // Tap to jump to that month
    card.addEventListener('click', () => {
      state.currentYear  = yr;
      state.currentMonth = mo - 1;
      switchTab('workday');
      renderCalendar();
    });

    list.appendChild(card);
  });
}

// ── Settings ───────────────────────────
function renderSettings() {
  document.getElementById('daily-rate').value = state.dailyRate;
}

function bindSettings() {
  const rateInput = document.getElementById('daily-rate');
  rateInput.addEventListener('change', () => {
    const v = parseInt(rateInput.value, 10);
    if (!isNaN(v) && v > 0) {
      state.dailyRate = v;
      save();
      renderCalendar();
      renderClean();
      showToast('Tarif mis à jour');
    } else {
      rateInput.value = state.dailyRate;
    }
  });

  // Export
  document.getElementById('export-btn').addEventListener('click', () => {
    const json = JSON.stringify({ data: state.data, dailyRate: state.dailyRate }, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `trackinkwork-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Données exportées');
  });

  // Reset
  document.getElementById('reset-btn').addEventListener('click', () => {
    showModal();
  });

  document.getElementById('modal-cancel').addEventListener('click', hideModal);
  document.getElementById('modal-confirm').addEventListener('click', () => {
    state.data = {};
    save();
    hideModal();
    renderCalendar();
    renderClean();
    showToast('Données réinitialisées');
  });

  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) hideModal();
  });
}

// ── Modal ──────────────────────────────
function showModal() {
  document.getElementById('modal-overlay').classList.add('show');
}
function hideModal() {
  document.getElementById('modal-overlay').classList.remove('show');
}

// ── Toast ──────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── Tab Navigation ─────────────────────
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(`tab-${tabId}`)?.classList.add('active');
  document.querySelector(`[data-tab="${tabId}"]`)?.classList.add('active');

  if (tabId === 'clean')    renderClean();
  if (tabId === 'settings') renderSettings();
}

function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

// ── Calendar navigation ────────────────
function bindCalendarNav() {
  document.getElementById('prev-month').addEventListener('click', () => {
    state.currentMonth--;
    if (state.currentMonth < 0) { state.currentMonth = 11; state.currentYear--; }
    renderCalendar();
  });
  document.getElementById('next-month').addEventListener('click', () => {
    state.currentMonth++;
    if (state.currentMonth > 11) { state.currentMonth = 0; state.currentYear++; }
    renderCalendar();
  });
}

// ── Swipe between tabs ─────────────────
(function bindSwipe() {
  const tabs = ['workday', 'clean', 'settings'];
  let startX = 0;
  const mc = document.querySelector('.main-content');
  mc.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  mc.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 50) return;
    const active = document.querySelector('.tab-btn.active');
    if (!active) return;
    const cur = tabs.indexOf(active.dataset.tab);
    if (dx < 0 && cur < tabs.length - 1) switchTab(tabs[cur + 1]);
    if (dx > 0 && cur > 0)               switchTab(tabs[cur - 1]);
  }, { passive: true });
})();

// ── Boot ───────────────────────────────
function init() {
  load();
  bindTabs();
  bindCalendarNav();
  bindSettings();
  renderCalendar();
}

document.addEventListener('DOMContentLoaded', init);
