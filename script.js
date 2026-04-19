/* ═══════════════════════════════════════
   TRACKINKWORK · App Logic v2
   ═══════════════════════════════════════ */

const STORAGE_KEY = 'trackinkwork_v2';

// ══════════════════════════════════════
// THEMES
// ══════════════════════════════════════
const THEMES = [
  {
    id: 'violet', name: 'Violet Nuit',
    colors: ['#6d28d9','#1d4ed8'],
    vars: {
      '--bg-base':'#0d0820','--blob-1-color':'#6d28d9','--blob-2-color':'#1d4ed8','--blob-3-color':'#0e7490','--blob-opacity':'0.55',
      '--accent':'#4F8EF7','--accent-light':'rgba(79,142,247,0.25)','--accent-glow':'rgba(79,142,247,0.45)',
      '--success':'#34D399','--success-bg':'rgba(52,211,153,0.18)','--success-border':'rgba(52,211,153,0.35)','--success-glow':'rgba(52,211,153,0.25)',
      '--clean-accent':'#60A5FA','--clean-bg':'rgba(96,165,250,0.18)','--clean-border':'rgba(96,165,250,0.35)','--clean-glow':'rgba(96,165,250,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.35),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'rouge', name: 'Rouge Sombre',
    colors: ['#991b1b','#b91c1c'],
    vars: {
      '--bg-base':'#180505','--blob-1-color':'#991b1b','--blob-2-color':'#b91c1c','--blob-3-color':'#9a3412','--blob-opacity':'0.6',
      '--accent':'#F87171','--accent-light':'rgba(248,113,113,0.25)','--accent-glow':'rgba(248,113,113,0.45)',
      '--success':'#FCA5A5','--success-bg':'rgba(252,165,165,0.18)','--success-border':'rgba(252,165,165,0.35)','--success-glow':'rgba(252,165,165,0.25)',
      '--clean-accent':'#FDBA74','--clean-bg':'rgba(253,186,116,0.18)','--clean-border':'rgba(253,186,116,0.35)','--clean-glow':'rgba(253,186,116,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.4),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'noir', name: 'Noir Minuit',
    colors: ['#1c1c1e','#3a3a3c'],
    vars: {
      '--bg-base':'#000000','--blob-1-color':'#2c2c2e','--blob-2-color':'#3a3a3c','--blob-3-color':'#1c1c1e','--blob-opacity':'0.9',
      '--accent':'#ffffff','--accent-light':'rgba(255,255,255,0.12)','--accent-glow':'rgba(255,255,255,0.25)',
      '--success':'#a3e635','--success-bg':'rgba(163,230,53,0.15)','--success-border':'rgba(163,230,53,0.35)','--success-glow':'rgba(163,230,53,0.2)',
      '--clean-accent':'#38bdf8','--clean-bg':'rgba(56,189,248,0.15)','--clean-border':'rgba(56,189,248,0.35)','--clean-glow':'rgba(56,189,248,0.2)',
      '--glass-bg':'rgba(255,255,255,0.05)','--glass-bg-2':'rgba(255,255,255,0.08)','--glass-border':'rgba(255,255,255,0.1)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.6),0 1px 0 rgba(255,255,255,0.05) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.6)','--text-3':'rgba(255,255,255,0.3)',
      '--nav-btn-bg':'rgba(255,255,255,0.08)',
    }
  },
  {
    id: 'ocean', name: 'Océan',
    colors: ['#1e40af','#0891b2'],
    vars: {
      '--bg-base':'#020f20','--blob-1-color':'#1e40af','--blob-2-color':'#0891b2','--blob-3-color':'#0369a1','--blob-opacity':'0.6',
      '--accent':'#38bdf8','--accent-light':'rgba(56,189,248,0.25)','--accent-glow':'rgba(56,189,248,0.45)',
      '--success':'#67e8f9','--success-bg':'rgba(103,232,249,0.18)','--success-border':'rgba(103,232,249,0.35)','--success-glow':'rgba(103,232,249,0.25)',
      '--clean-accent':'#a78bfa','--clean-bg':'rgba(167,139,250,0.18)','--clean-border':'rgba(167,139,250,0.35)','--clean-glow':'rgba(167,139,250,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.35),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'foret', name: 'Forêt',
    colors: ['#14532d','#166534'],
    vars: {
      '--bg-base':'#020f08','--blob-1-color':'#14532d','--blob-2-color':'#166534','--blob-3-color':'#15803d','--blob-opacity':'0.65',
      '--accent':'#4ade80','--accent-light':'rgba(74,222,128,0.25)','--accent-glow':'rgba(74,222,128,0.45)',
      '--success':'#86efac','--success-bg':'rgba(134,239,172,0.18)','--success-border':'rgba(134,239,172,0.35)','--success-glow':'rgba(134,239,172,0.25)',
      '--clean-accent':'#fbbf24','--clean-bg':'rgba(251,191,36,0.18)','--clean-border':'rgba(251,191,36,0.35)','--clean-glow':'rgba(251,191,36,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.35),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'blanc', name: 'Blanc Solaire',
    colors: ['#c7d2fe','#bae6fd'],
    light: true,
    vars: {
      '--bg-base':'#f0f4ff','--blob-1-color':'#a5b4fc','--blob-2-color':'#7dd3fc','--blob-3-color':'#ddd6fe','--blob-opacity':'0.6',
      '--accent':'#4F46E5','--accent-light':'rgba(79,70,229,0.12)','--accent-glow':'rgba(79,70,229,0.3)',
      '--success':'#059669','--success-bg':'rgba(5,150,105,0.12)','--success-border':'rgba(5,150,105,0.3)','--success-glow':'rgba(5,150,105,0.2)',
      '--clean-accent':'#2563eb','--clean-bg':'rgba(37,99,235,0.12)','--clean-border':'rgba(37,99,235,0.3)','--clean-glow':'rgba(37,99,235,0.2)',
      '--glass-bg':'rgba(255,255,255,0.6)','--glass-bg-2':'rgba(255,255,255,0.8)','--glass-border':'rgba(0,0,0,0.08)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.08),0 1px 0 rgba(255,255,255,0.9) inset',
      '--text-1':'#0f172a','--text-2':'rgba(15,23,42,0.6)','--text-3':'rgba(15,23,42,0.35)',
      '--nav-btn-bg':'rgba(0,0,0,0.06)',
    }
  },
  {
    id: 'sunset', name: 'Coucher de Soleil',
    colors: ['#c2410c','#be185d'],
    vars: {
      '--bg-base':'#180808','--blob-1-color':'#c2410c','--blob-2-color':'#be185d','--blob-3-color':'#b45309','--blob-opacity':'0.6',
      '--accent':'#fb923c','--accent-light':'rgba(251,146,60,0.25)','--accent-glow':'rgba(251,146,60,0.45)',
      '--success':'#fcd34d','--success-bg':'rgba(252,211,77,0.18)','--success-border':'rgba(252,211,77,0.35)','--success-glow':'rgba(252,211,77,0.25)',
      '--clean-accent':'#f472b6','--clean-bg':'rgba(244,114,182,0.18)','--clean-border':'rgba(244,114,182,0.35)','--clean-glow':'rgba(244,114,182,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.4),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'rose', name: 'Rose Néon',
    colors: ['#9d174d','#7c3aed'],
    vars: {
      '--bg-base':'#130010','--blob-1-color':'#9d174d','--blob-2-color':'#7c3aed','--blob-3-color':'#be185d','--blob-opacity':'0.6',
      '--accent':'#f0abfc','--accent-light':'rgba(240,171,252,0.25)','--accent-glow':'rgba(240,171,252,0.45)',
      '--success':'#f9a8d4','--success-bg':'rgba(249,168,212,0.18)','--success-border':'rgba(249,168,212,0.35)','--success-glow':'rgba(249,168,212,0.25)',
      '--clean-accent':'#c4b5fd','--clean-bg':'rgba(196,181,253,0.18)','--clean-border':'rgba(196,181,253,0.35)','--clean-glow':'rgba(196,181,253,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.4),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'or', name: 'Or Bronze',
    colors: ['#78350f','#92400e'],
    vars: {
      '--bg-base':'#0f0800','--blob-1-color':'#78350f','--blob-2-color':'#92400e','--blob-3-color':'#713f12','--blob-opacity':'0.65',
      '--accent':'#fbbf24','--accent-light':'rgba(251,191,36,0.25)','--accent-glow':'rgba(251,191,36,0.45)',
      '--success':'#fde68a','--success-bg':'rgba(253,230,138,0.18)','--success-border':'rgba(253,230,138,0.35)','--success-glow':'rgba(253,230,138,0.25)',
      '--clean-accent':'#fb923c','--clean-bg':'rgba(251,146,60,0.18)','--clean-border':'rgba(251,146,60,0.35)','--clean-glow':'rgba(251,146,60,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.4),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'menthe', name: 'Menthe Fraîche',
    colors: ['#065f46','#0e7490'],
    vars: {
      '--bg-base':'#001510','--blob-1-color':'#065f46','--blob-2-color':'#0e7490','--blob-3-color':'#047857','--blob-opacity':'0.65',
      '--accent':'#34d399','--accent-light':'rgba(52,211,153,0.25)','--accent-glow':'rgba(52,211,153,0.45)',
      '--success':'#6ee7b7','--success-bg':'rgba(110,231,183,0.18)','--success-border':'rgba(110,231,183,0.35)','--success-glow':'rgba(110,231,183,0.25)',
      '--clean-accent':'#22d3ee','--clean-bg':'rgba(34,211,238,0.18)','--clean-border':'rgba(34,211,238,0.35)','--clean-glow':'rgba(34,211,238,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.35),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
  {
    id: 'saphir', name: 'Saphir Royal',
    colors: ['#1e3a8a','#312e81'],
    vars: {
      '--bg-base':'#030818','--blob-1-color':'#1e3a8a','--blob-2-color':'#312e81','--blob-3-color':'#1d4ed8','--blob-opacity':'0.6',
      '--accent':'#818cf8','--accent-light':'rgba(129,140,248,0.25)','--accent-glow':'rgba(129,140,248,0.45)',
      '--success':'#a5b4fc','--success-bg':'rgba(165,180,252,0.18)','--success-border':'rgba(165,180,252,0.35)','--success-glow':'rgba(165,180,252,0.25)',
      '--clean-accent':'#7dd3fc','--clean-bg':'rgba(125,211,252,0.18)','--clean-border':'rgba(125,211,252,0.35)','--clean-glow':'rgba(125,211,252,0.25)',
      '--glass-bg':'rgba(255,255,255,0.07)','--glass-bg-2':'rgba(255,255,255,0.12)','--glass-border':'rgba(255,255,255,0.14)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.4),0 1.5px 0 rgba(255,255,255,0.08) inset',
      '--text-1':'#ffffff','--text-2':'rgba(255,255,255,0.65)','--text-3':'rgba(255,255,255,0.38)',
      '--nav-btn-bg':'rgba(255,255,255,0.12)',
    }
  },
];

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
const today = new Date();
const state = {
  // Work tab navigation
  workYear:  today.getFullYear(),
  workMonth: today.getMonth(),
  // Clean tab navigation
  cleanYear:  today.getFullYear(),
  cleanMonth: today.getMonth(),
  // Data
  work:  {},   // { "2026-04": { "1": 1, "5": 0.5 } }  1=full, 0.5=half
  clean: {},   // { "2026-04": [1,5,10] }
  dailyRate: 50,
  cleanRate: 0,
  theme: 'violet',
};

// ══════════════════════════════════════
// PERSISTENCE
// ══════════════════════════════════════
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    work: state.work, clean: state.clean,
    dailyRate: state.dailyRate, cleanRate: state.cleanRate, theme: state.theme,
  }));
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);

    // Migration from v1 format
    if (p.data && !p.work) {
      state.work = {};
      Object.keys(p.data).forEach(k => {
        state.work[k] = {};
        (p.data[k] || []).forEach(d => { state.work[k][String(d)] = 1; });
      });
      state.clean     = {};
      state.dailyRate = p.dailyRate || 50;
      state.theme     = 'violet';
      return;
    }

    state.work      = p.work      || {};
    state.clean     = p.clean     || {};
    state.dailyRate = p.dailyRate || 50;
    state.cleanRate = p.cleanRate ?? 0;
    state.theme     = p.theme     || 'violet';
  } catch (_) { /* start fresh */ }
}

// ══════════════════════════════════════
// HELPERS
// ══════════════════════════════════════
function monthKey(y, m) {
  return `${y}-${String(m + 1).padStart(2, '0')}`;
}

function fmt(amount) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0,
  }).format(amount);
}

// ══════════════════════════════════════
// WORK CALENDAR
// Work day cycle: 0 → 1 (full) → 0.5 (half) → 0 (none)
// ══════════════════════════════════════
function getWorkDay(y, m, d) {
  return (state.work[monthKey(y, m)] || {})[String(d)] || 0;
}

function cycleWorkDay(y, m, d) {
  const key = monthKey(y, m);
  if (!state.work[key]) state.work[key] = {};
  const cur = state.work[key][String(d)] || 0;
  if (cur === 0) {
    state.work[key][String(d)] = 1;
    showToast(`✅ +${fmt(state.dailyRate)} journée complète`);
  } else if (cur === 1) {
    state.work[key][String(d)] = 0.5;
    showToast(`½ +${fmt(state.dailyRate * 0.5)} demi-journée`);
  } else {
    delete state.work[key][String(d)];
    showToast('Jour retiré');
  }
  save();
}

function monthWorkTotal(y, m) {
  const days = state.work[monthKey(y, m)] || {};
  return Object.values(days).reduce((s, v) => s + v, 0) * state.dailyRate;
}

function renderWorkCalendar() {
  const { workYear: y, workMonth: m } = state;
  const now = new Date();

  document.getElementById('month-title').textContent =
    new Date(y, m, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  document.getElementById('total-amount').textContent = fmt(monthWorkTotal(y, m));

  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';

  const firstDow   = new Date(y, m, 1).getDay();
  const startOff   = firstDow === 0 ? 6 : firstDow - 1;
  const daysInMo   = new Date(y, m + 1, 0).getDate();
  const daysInPrev = new Date(y, m, 0).getDate();

  for (let i = startOff - 1; i >= 0; i--) {
    grid.appendChild(makeWorkCell(daysInPrev - i, y, m, true));
  }
  for (let d = 1; d <= daysInMo; d++) {
    const dow   = new Date(y, m, d).getDay();
    const isTdy = now.getFullYear() === y && now.getMonth() === m && now.getDate() === d;
    const val   = getWorkDay(y, m, d);
    const cell  = makeWorkCell(d, y, m, false, dow === 0 || dow === 6, isTdy, val);
    grid.appendChild(cell);
  }
  const total = startOff + daysInMo;
  const rem   = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= rem; d++) {
    grid.appendChild(makeWorkCell(d, y, m, true));
  }
}

function makeWorkCell(d, y, m, isOther, isWeekend, isToday, val) {
  const cell = document.createElement('div');
  const classes = ['day-cell'];
  if (isOther)   classes.push('other-month');
  if (isWeekend && !isOther) classes.push('weekend');
  if (isToday)   classes.push('today');
  if (val === 1)   classes.push('worked');
  if (val === 0.5) classes.push('worked-half');
  cell.className = classes.join(' ');
  cell.innerHTML = `
    <span class="day-number">${d}</span>
    <span class="day-badge">½</span>
    <span class="day-dot"></span>`;
  if (!isOther) {
    cell.addEventListener('click', () => {
      cycleWorkDay(y, m, d);
      renderWorkCalendar();
    });
  }
  return cell;
}

// ══════════════════════════════════════
// CLEAN CALENDAR
// ══════════════════════════════════════
function isCleanDay(y, m, d) {
  return (state.clean[monthKey(y, m)] || []).includes(d);
}

function toggleCleanDay(y, m, d) {
  const key  = monthKey(y, m);
  const days = state.clean[key] ? [...state.clean[key]] : [];
  const idx  = days.indexOf(d);
  if (idx === -1) {
    days.push(d);
    showToast('🚗 Nettoyage ajouté');
  } else {
    days.splice(idx, 1);
    showToast('Nettoyage retiré');
  }
  state.clean[key] = days;
  save();
}

function renderCleanCalendar() {
  const { cleanYear: y, cleanMonth: m } = state;
  const now = new Date();

  document.getElementById('clean-month-title').textContent =
    new Date(y, m, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  const count = (state.clean[monthKey(y, m)] || []).length;
  document.getElementById('clean-count').textContent =
    `${count} nettoyage${count !== 1 ? 's' : ''}`;
  document.getElementById('clean-total').textContent =
    state.cleanRate > 0 ? fmt(count * state.cleanRate) : '—';

  const grid = document.getElementById('clean-calendar-grid');
  grid.innerHTML = '';

  const firstDow   = new Date(y, m, 1).getDay();
  const startOff   = firstDow === 0 ? 6 : firstDow - 1;
  const daysInMo   = new Date(y, m + 1, 0).getDate();
  const daysInPrev = new Date(y, m, 0).getDate();

  for (let i = startOff - 1; i >= 0; i--) {
    grid.appendChild(makeCleanCell(daysInPrev - i, y, m, true));
  }
  for (let d = 1; d <= daysInMo; d++) {
    const dow   = new Date(y, m, d).getDay();
    const isTdy = now.getFullYear() === y && now.getMonth() === m && now.getDate() === d;
    const cell  = makeCleanCell(d, y, m, false, dow === 0 || dow === 6, isTdy, isCleanDay(y, m, d));
    grid.appendChild(cell);
  }
  const total = startOff + daysInMo;
  const rem   = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= rem; d++) {
    grid.appendChild(makeCleanCell(d, y, m, true));
  }
}

function makeCleanCell(d, y, m, isOther, isWeekend, isToday, cleaned) {
  const cell = document.createElement('div');
  const classes = ['day-cell'];
  if (isOther)   classes.push('other-month');
  if (isWeekend && !isOther) classes.push('weekend');
  if (isToday)   classes.push('today');
  if (cleaned)   classes.push('cleaned');
  cell.className = classes.join(' ');
  cell.innerHTML = `
    <span class="day-number">${d}</span>
    <span class="day-car">🚗</span>`;
  if (!isOther) {
    cell.addEventListener('click', () => {
      toggleCleanDay(y, m, d);
      renderCleanCalendar();
    });
  }
  return cell;
}

// ══════════════════════════════════════
// THEMES
// ══════════════════════════════════════
function applyTheme(id) {
  const theme = THEMES.find(t => t.id === id) || THEMES[0];
  state.theme = theme.id;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function renderThemeGrid() {
  const grid    = document.getElementById('theme-grid');
  const display = document.getElementById('theme-name-display');
  grid.innerHTML = '';
  const current = THEMES.find(t => t.id === state.theme) || THEMES[0];
  if (display) display.textContent = current.name;

  THEMES.forEach(t => {
    const btn = document.createElement('button');
    btn.className = `theme-swatch${state.theme === t.id ? ' active' : ''}`;
    btn.title = t.name;
    btn.style.background = `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]})`;
    btn.innerHTML = state.theme === t.id
      ? '<span class="swatch-check">✓</span>' : '';
    btn.addEventListener('click', () => {
      applyTheme(t.id);
      save();
      renderThemeGrid();
      showToast(`Thème : ${t.name}`);
    });
    grid.appendChild(btn);
  });
}

// ══════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════
function bindSettings() {
  // Rate
  const rateInput = document.getElementById('daily-rate');
  rateInput.addEventListener('change', () => {
    const v = parseInt(rateInput.value, 10);
    if (!isNaN(v) && v > 0) {
      state.dailyRate = v;
      save();
      renderWorkCalendar();
      showToast('Tarif mis à jour');
    } else {
      rateInput.value = state.dailyRate;
    }
  });

  // Clean rate
  const cleanRateInput = document.getElementById('clean-rate');
  cleanRateInput.addEventListener('change', () => {
    const v = parseInt(cleanRateInput.value, 10);
    if (!isNaN(v) && v >= 0) {
      state.cleanRate = v;
      save();
      renderCleanCalendar();
      showToast('Tarif nettoyage mis à jour');
    } else {
      cleanRateInput.value = state.cleanRate;
    }
  });

  // Export
  document.getElementById('export-btn').addEventListener('click', () => {
    const json = JSON.stringify(
      { work: state.work, clean: state.clean, dailyRate: state.dailyRate }, null, 2
    );
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(new Blob([json], { type: 'application/json' })),
      download: `trackinkwork-${new Date().toISOString().slice(0,10)}.json`,
    });
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Données exportées');
  });

  // Reset
  document.getElementById('reset-btn').addEventListener('click', showModal);
  document.getElementById('modal-cancel').addEventListener('click', hideModal);
  document.getElementById('modal-confirm').addEventListener('click', () => {
    state.work = {};
    state.clean = {};
    save();
    hideModal();
    renderWorkCalendar();
    renderCleanCalendar();
    showToast('Données réinitialisées');
  });
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) hideModal();
  });
}

function renderSettings() {
  document.getElementById('daily-rate').value  = state.dailyRate;
  document.getElementById('clean-rate').value  = state.cleanRate;
  renderThemeGrid();
}

// ══════════════════════════════════════
// MODAL
// ══════════════════════════════════════
function showModal() { document.getElementById('modal-overlay').classList.add('show'); }
function hideModal() { document.getElementById('modal-overlay').classList.remove('show'); }

// ══════════════════════════════════════
// TOAST
// ══════════════════════════════════════
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ══════════════════════════════════════
// TABS + SWIPE
// ══════════════════════════════════════
const TAB_ORDER = ['workday', 'clean', 'settings'];

function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${id}`)?.classList.add('active');
  document.querySelector(`[data-tab="${id}"]`)?.classList.add('active');
  if (id === 'clean')    renderCleanCalendar();
  if (id === 'settings') renderSettings();
}

function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

function bindSwipe() {
  let startX = 0;
  const mc = document.querySelector('.main-content');
  mc.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  mc.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 55) return;
    const active = document.querySelector('.tab-btn.active');
    if (!active) return;
    const cur = TAB_ORDER.indexOf(active.dataset.tab);
    if (dx < 0 && cur < TAB_ORDER.length - 1) switchTab(TAB_ORDER[cur + 1]);
    if (dx > 0 && cur > 0)                    switchTab(TAB_ORDER[cur - 1]);
  }, { passive: true });
}

function bindCalendarNav() {
  document.getElementById('prev-month').addEventListener('click', () => {
    state.workMonth--;
    if (state.workMonth < 0)  { state.workMonth = 11; state.workYear--; }
    renderWorkCalendar();
  });
  document.getElementById('next-month').addEventListener('click', () => {
    state.workMonth++;
    if (state.workMonth > 11) { state.workMonth = 0;  state.workYear++; }
    renderWorkCalendar();
  });
  document.getElementById('clean-prev-month').addEventListener('click', () => {
    state.cleanMonth--;
    if (state.cleanMonth < 0)  { state.cleanMonth = 11; state.cleanYear--; }
    renderCleanCalendar();
  });
  document.getElementById('clean-next-month').addEventListener('click', () => {
    state.cleanMonth++;
    if (state.cleanMonth > 11) { state.cleanMonth = 0;  state.cleanYear++; }
    renderCleanCalendar();
  });
}

// ══════════════════════════════════════
// BOOT
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  load();
  applyTheme(state.theme);
  bindTabs();
  bindSwipe();
  bindCalendarNav();
  bindSettings();
  renderWorkCalendar();
});
