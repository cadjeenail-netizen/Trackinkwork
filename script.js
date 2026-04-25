/* ═══════════════════════════════════════
   TRACKINKWORK · App Logic v2.2
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
  // ── NOUVEAUX THÈMES ──
  {
    id: 'clair', name: 'Clair',
    colors: ['#a5b4fc','#93c5fd'],
    light: true,
    vars: {
      '--bg-base':'#f8fafc','--blob-1-color':'#ddd6fe','--blob-2-color':'#bfdbfe','--blob-3-color':'#e0e7ff','--blob-opacity':'0.75',
      '--accent':'#7c3aed','--accent-light':'rgba(124,58,237,0.12)','--accent-glow':'rgba(124,58,237,0.3)',
      '--success':'#059669','--success-bg':'rgba(5,150,105,0.1)','--success-border':'rgba(5,150,105,0.25)','--success-glow':'rgba(5,150,105,0.15)',
      '--clean-accent':'#2563eb','--clean-bg':'rgba(37,99,235,0.1)','--clean-border':'rgba(37,99,235,0.25)','--clean-glow':'rgba(37,99,235,0.15)',
      '--glass-bg':'rgba(255,255,255,0.65)','--glass-bg-2':'rgba(255,255,255,0.85)','--glass-border':'rgba(0,0,0,0.07)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.07),0 1px 0 rgba(255,255,255,0.95) inset',
      '--text-1':'#0f172a','--text-2':'rgba(15,23,42,0.65)','--text-3':'rgba(15,23,42,0.4)',
      '--nav-btn-bg':'rgba(0,0,0,0.05)',
    }
  },
  {
    id: 'anthracite', name: 'Sombre Neutre',
    colors: ['#374151','#4b5563'],
    vars: {
      '--bg-base':'#111827','--blob-1-color':'#374151','--blob-2-color':'#4b5563','--blob-3-color':'#1f2937','--blob-opacity':'0.9',
      '--accent':'#9ca3af','--accent-light':'rgba(156,163,175,0.15)','--accent-glow':'rgba(156,163,175,0.3)',
      '--success':'#6ee7b7','--success-bg':'rgba(110,231,183,0.12)','--success-border':'rgba(110,231,183,0.28)','--success-glow':'rgba(110,231,183,0.15)',
      '--clean-accent':'#93c5fd','--clean-bg':'rgba(147,197,253,0.12)','--clean-border':'rgba(147,197,253,0.28)','--clean-glow':'rgba(147,197,253,0.15)',
      '--glass-bg':'rgba(255,255,255,0.05)','--glass-bg-2':'rgba(255,255,255,0.08)','--glass-border':'rgba(255,255,255,0.1)',
      '--glass-shadow':'0 8px 32px rgba(0,0,0,0.5),0 1px 0 rgba(255,255,255,0.05) inset',
      '--text-1':'#f9fafb','--text-2':'rgba(249,250,251,0.6)','--text-3':'rgba(249,250,251,0.35)',
      '--nav-btn-bg':'rgba(255,255,255,0.08)',
    }
  },
];

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
const today = new Date();
const state = {
  workYear:  today.getFullYear(),
  workMonth: today.getMonth(),
  cleanYear:  today.getFullYear(),
  cleanMonth: today.getMonth(),
  work:  {},
  clean: {},
  dailyRate: 50,
  cleanRate: 0,
  pocketMoney: 0,
  monthlyGoal: 0,
  theme: 'violet',
  _justToggled: null,
};

// ══════════════════════════════════════
// PERSISTENCE
// ══════════════════════════════════════
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    work: state.work, clean: state.clean,
    dailyRate: state.dailyRate, cleanRate: state.cleanRate,
    pocketMoney: state.pocketMoney,
    monthlyGoal: state.monthlyGoal, theme: state.theme,
  }));
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const p = JSON.parse(raw);
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
    state.work        = p.work        || {};
    state.clean       = p.clean       || {};
    state.dailyRate   = p.dailyRate   || 50;
    state.cleanRate   = p.cleanRate   ?? 0;
    state.pocketMoney = p.pocketMoney ?? 0;
    state.monthlyGoal = p.monthlyGoal ?? 0;
    state.theme       = p.theme       || 'violet';
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

function vibrate(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

// ══════════════════════════════════════
// WORK CALENDAR
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
    state._justToggled = { y, m, d, type: 'work' };
    vibrate([15, 8, 15]);
    showToast(`✅ +${fmt(state.dailyRate)} journée complète`);
  } else if (cur === 1) {
    state.work[key][String(d)] = 0.5;
    state._justToggled = { y, m, d, type: 'work' };
    vibrate([10]);
    showToast(`½ +${fmt(state.dailyRate * 0.5)} demi-journée`);
  } else {
    delete state.work[key][String(d)];
    state._justToggled = null;
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
    grid.appendChild(makeWorkCell(d, y, m, false, dow === 0 || dow === 6, isTdy, val));
  }
  const total = startOff + daysInMo;
  const rem   = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= rem; d++) {
    grid.appendChild(makeWorkCell(d, y, m, true));
  }
  animateGrid('calendar-grid');
  setTimeout(() => { state._justToggled = null; }, 500);
}

function makeWorkCell(d, y, m, isOther, isWeekend, isToday, val) {
  const cell = document.createElement('div');
  const classes = ['day-cell'];
  if (isOther)   classes.push('other-month');
  if (isWeekend && !isOther) classes.push('weekend');
  if (isToday)   classes.push('today');
  if (val === 1)   classes.push('worked');
  if (val === 0.5) classes.push('worked-half');
  const jt = state._justToggled;
  if (!isOther && jt && jt.y === y && jt.m === m && jt.d === d && val > 0)
    classes.push('confirm-anim');
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
    state._justToggled = { y, m, d, type: 'clean' };
    vibrate([15, 8, 15]);
    showToast('🚗 Nettoyage ajouté');
  } else {
    days.splice(idx, 1);
    state._justToggled = null;
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
    grid.appendChild(makeCleanCell(d, y, m, false, dow === 0 || dow === 6, isTdy, isCleanDay(y, m, d)));
  }
  const total = startOff + daysInMo;
  const rem   = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= rem; d++) {
    grid.appendChild(makeCleanCell(d, y, m, true));
  }
  animateGrid('clean-calendar-grid');
  setTimeout(() => { state._justToggled = null; }, 500);
}

function makeCleanCell(d, y, m, isOther, isWeekend, isToday, cleaned) {
  const cell = document.createElement('div');
  const classes = ['day-cell'];
  if (isOther)   classes.push('other-month');
  if (isWeekend && !isOther) classes.push('weekend');
  if (isToday)   classes.push('today');
  if (cleaned)   classes.push('cleaned');
  const jt = state._justToggled;
  if (!isOther && cleaned && jt && jt.y === y && jt.m === m && jt.d === d)
    classes.push('confirm-anim');
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
    btn.innerHTML = state.theme === t.id ? '<span class="swatch-check">✓</span>' : '';
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
// OBJECTIF MENSUEL — Apple Watch Ring
// ══════════════════════════════════════
function renderGoal() {
  const card   = document.getElementById('goal-card');
  const circle = document.getElementById('goal-progress-circle');
  const pctTxt = document.getElementById('goal-pct-text');
  const amtTxt = document.getElementById('goal-amount-text');
  const subTxt = document.getElementById('goal-sub-text');
  const barFill = document.getElementById('goal-bar-fill');
  if (!card || !circle) return;

  const now = new Date();
  const key = monthKey(now.getFullYear(), now.getMonth());
  const wDays = Object.values(state.work[key] || {}).reduce((s, v) => s + v, 0);
  const cDays = (state.clean[key] || []).length;
  const current = wDays * state.dailyRate + cDays * state.cleanRate + state.pocketMoney;
  const goal    = state.monthlyGoal;

  const CIRC = 2 * Math.PI * 48; // 301.59
  const pct  = goal > 0 ? Math.min(current / goal, 1) : 0;
  const offset = CIRC * (1 - pct);

  circle.style.strokeDashoffset = offset;
  pctTxt.textContent  = goal > 0 ? Math.round(pct * 100) + '%' : '—';
  amtTxt.textContent  = fmt(current);

  if (goal > 0) {
    const remain = goal - current;
    subTxt.textContent = remain > 0
      ? `Il manque ${fmt(remain)} pour atteindre ${fmt(goal)}`
      : `🎉 Objectif atteint ! (+${fmt(-remain)})`;
    barFill.style.width = (pct * 100) + '%';
    card.classList.toggle('reached', pct >= 1);
  } else {
    subTxt.textContent = 'Définissez un objectif dans les réglages';
    barFill.style.width = '0%';
    card.classList.remove('reached');
  }
}

// ══════════════════════════════════════
// CHART — 6 derniers mois (SVG natif)
// ══════════════════════════════════════
function renderChart() {
  const container = document.getElementById('earnings-chart');
  if (!container) return;

  const months = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  const data = months.map(({ year, month }) => {
    const key = monthKey(year, month);
    const wDays = Object.values(state.work[key] || {}).reduce((s, v) => s + v, 0);
    const cDays = (state.clean[key] || []).length;
    const wEarn = wDays * state.dailyRate;
    const cEarn = cDays * state.cleanRate;
    return {
      label: new Date(year, month).toLocaleDateString('fr-FR', { month: 'short' }),
      work: wEarn,
      clean: cEarn,
      total: wEarn + cEarn,
    };
  });

  const allZero = data.every(d => d.total === 0);
  if (allZero) {
    container.innerHTML = '<div class="chart-empty">Aucune donnée à afficher</div>';
    return;
  }

  const maxVal = Math.max(1, ...data.map(d => d.total));
  // SVG dimensions
  const W = 320, CH = 96; // chart height
  const barW = 34, gap = 12;
  const startX = (W - (6 * barW + 5 * gap)) / 2;
  const LABEL_H = 18, VAL_TOP = 14;
  const SVG_H = VAL_TOP + CH + LABEL_H;

  const bars = data.map((d, i) => {
    const x    = startX + i * (barW + gap);
    const totalH = (d.total / maxVal) * CH;
    const workH  = (d.work  / maxVal) * CH;
    const cleanH = totalH - workH;
    const yBase  = VAL_TOP + CH; // bottom of chart

    const valLabel = d.total > 0
      ? `<text x="${x + barW / 2}" y="${VAL_TOP + CH - totalH - 3}"
           text-anchor="middle" font-size="8" fill="var(--text-2)" font-family="inherit">
           ${d.total >= 1000 ? (d.total / 1000).toFixed(1) + 'k' : Math.round(d.total)}
         </text>`
      : '';

    return `
      <g>
        ${workH > 0 ? `<rect x="${x}" y="${yBase - workH}" width="${barW}" height="${workH}"
          fill="var(--success)" rx="4" opacity="0.82"/>` : ''}
        ${cleanH > 0.5 ? `<rect x="${x}" y="${yBase - totalH}" width="${barW}" height="${cleanH}"
          fill="var(--clean-accent)" rx="4" opacity="0.82"/>` : ''}
        ${totalH < 1 ? `<rect x="${x}" y="${yBase - 3}" width="${barW}" height="3"
          fill="var(--text-3)" rx="1.5" opacity="0.3"/>` : ''}
        ${valLabel}
        <text x="${x + barW / 2}" y="${SVG_H}"
          text-anchor="middle" font-size="9.5" fill="var(--text-3)" font-family="inherit"
          text-transform="capitalize">${d.label}</text>
      </g>`;
  }).join('');

  // Legend
  const legend = `
    <g transform="translate(${startX}, ${SVG_H - LABEL_H - 2})">
    </g>`;

  container.innerHTML = `
    <svg viewBox="0 0 ${W} ${SVG_H + 2}" width="100%" style="overflow:visible">
      ${bars}
    </svg>
    <div style="display:flex;gap:12px;margin-top:10px;justify-content:center">
      <span style="font-size:10px;color:var(--text-3);display:flex;align-items:center;gap:4px">
        <span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:var(--success);opacity:0.82"></span>Travail
      </span>
      ${state.cleanRate > 0 ? `<span style="font-size:10px;color:var(--text-3);display:flex;align-items:center;gap:4px">
        <span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:var(--clean-accent);opacity:0.82"></span>Clean
      </span>` : ''}
    </div>`;
}

// ══════════════════════════════════════
// STATS AVANCÉES (Résumé)
// ══════════════════════════════════════
function renderAdvancedStats() {
  const now   = new Date();
  const y     = now.getFullYear();
  const m     = now.getMonth();
  const key   = monthKey(y, m);

  // Moyenne journalière = total mois / nb jours cochés
  const workDaysObj = state.work[key] || {};
  const workedCount = Object.keys(workDaysObj).length;
  const monthTotal  = Object.values(workDaysObj).reduce((s, v) => s + v, 0) * state.dailyRate
                    + (state.clean[key] || []).length * state.cleanRate;
  const avg = workedCount > 0 ? monthTotal / workedCount : 0;

  // Projection = (total / jours écoulés) × jours dans le mois
  const daysElapsed = now.getDate();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const projection  = daysElapsed > 0 ? (monthTotal / daysElapsed) * daysInMonth : 0;

  // Meilleur mois de l'année
  let bestLabel = '—', bestTotal = 0;
  for (let mo = 0; mo < 12; mo++) {
    const k = monthKey(y, mo);
    const wD = Object.values(state.work[k] || {}).reduce((s, v) => s + v, 0);
    const cD = (state.clean[k] || []).length;
    const t  = wD * state.dailyRate + cD * state.cleanRate;
    if (t > bestTotal) {
      bestTotal = t;
      bestLabel = new Date(y, mo).toLocaleDateString('fr-FR', { month: 'short' });
    }
  }

  const el = id => document.getElementById(id);
  el('adv-avg').textContent  = avg > 0       ? fmt(avg)        : '—';
  el('adv-proj').textContent = projection > 0 ? fmt(projection) : '—';
  el('adv-best').textContent = bestTotal > 0  ? bestLabel       : '—';
}

// ══════════════════════════════════════
// EXPORT PDF (JS natif — window.print)
// ══════════════════════════════════════
function exportPDF() {
  const y = state.workYear;
  const m = state.workMonth;
  const key = monthKey(y, m);
  const label = new Date(y, m, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  const workDays  = state.work[key]  || {};
  const cleanDays = state.clean[key] || [];
  const totalWorkUnits = Object.values(workDays).reduce((s, v) => s + v, 0);
  const workEarn  = totalWorkUnits * state.dailyRate;
  const cleanEarn = cleanDays.length * state.cleanRate;
  const total     = workEarn + cleanEarn;

  const daysInMonth = new Date(y, m + 1, 0).getDate();
  let rows = '';
  for (let d = 1; d <= daysInMonth; d++) {
    const wv  = workDays[String(d)] || 0;
    const cl  = cleanDays.includes(d);
    const dow = new Date(y, m, d).toLocaleDateString('fr-FR', { weekday: 'short' });
    const wLabel  = wv === 1 ? 'Journée' : wv === 0.5 ? 'Demi-journée' : '';
    const clLabel = cl ? '🚗' : '';
    const earn    = wv * state.dailyRate + (cl ? state.cleanRate : 0);
    const isWeekend = [0, 6].includes(new Date(y, m, d).getDay());
    rows += `<tr style="${isWeekend ? 'color:#888' : ''}">
      <td>${d} ${dow.charAt(0).toUpperCase() + dow.slice(1)}</td>
      <td>${wLabel}</td>
      <td style="text-align:center">${clLabel}</td>
      <td style="text-align:right">${earn > 0 ? (earn + ' €') : '—'}</td>
    </tr>`;
  }

  const html = `<!DOCTYPE html><html lang="fr"><head>
    <meta charset="UTF-8"/>
    <title>TrackInkWork · ${label}</title>
    <style>
      body { font-family: Arial, sans-serif; font-size: 13px; color: #111; margin: 0; padding: 32px; }
      h1 { font-size: 22px; margin: 0 0 4px; }
      .sub { color: #666; font-size: 12px; margin-bottom: 24px; }
      .summary { display: flex; gap: 32px; margin-bottom: 24px; padding: 16px 20px;
                 background: #f5f3ff; border-radius: 10px; }
      .stat-val { font-size: 20px; font-weight: 700; }
      .stat-lbl { font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }
      table { width: 100%; border-collapse: collapse; }
      th { background: #f0f0f0; padding: 8px 10px; text-align: left; border-bottom: 2px solid #ddd; font-size: 11px; text-transform: uppercase; }
      td { padding: 6px 10px; border-bottom: 1px solid #eee; }
      tr:last-child td { border-bottom: none; }
      .total-row { font-weight: 700; font-size: 15px; margin-top: 20px; text-align: right; }
      @media print { body { padding: 20px; } }
    </style>
  </head><body>
    <h1>TrackInkWork</h1>
    <div class="sub">Rapport mensuel · ${label.charAt(0).toUpperCase() + label.slice(1)}</div>
    <div class="summary">
      <div><div class="stat-val">${totalWorkUnits % 1 === 0 ? totalWorkUnits : totalWorkUnits.toFixed(1)}</div><div class="stat-lbl">Jours travaillés</div></div>
      <div><div class="stat-val">${cleanDays.length}</div><div class="stat-lbl">Nettoyages</div></div>
      <div><div class="stat-val">${workEarn} €</div><div class="stat-lbl">Travail</div></div>
      ${state.cleanRate > 0 ? `<div><div class="stat-val">${cleanEarn} €</div><div class="stat-lbl">Clean</div></div>` : ''}
      <div><div class="stat-val" style="color:#6d28d9">${total} €</div><div class="stat-lbl">Total</div></div>
    </div>
    <table>
      <thead><tr><th>Jour</th><th>Travail</th><th style="text-align:center">Clean</th><th style="text-align:right">Gains</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="total-row">Total mensuel : <span style="color:#6d28d9">${total} €</span></div>
  </body></html>`;

  const w = window.open('', '_blank', 'width=780,height=900');
  if (!w) { showToast('Autorisez les popups pour le PDF'); return; }
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => { w.print(); }, 400);
  showToast(`PDF · ${label}`);
}

// ══════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════
function bindSettings() {
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

  document.getElementById('export-pdf-btn').addEventListener('click', exportPDF);

  // Argent de poche
  const pocketInput = document.getElementById('pocket-money');
  if (pocketInput) {
    pocketInput.addEventListener('change', () => {
      const v = parseInt(pocketInput.value, 10);
      if (!isNaN(v) && v >= 0) {
        state.pocketMoney = v;
        save();
        renderGoal();
        showToast(`💰 Argent de poche : ${fmt(v)}`);
      } else {
        pocketInput.value = state.pocketMoney;
      }
    });
  }

  // Objectif mensuel
  const goalInput = document.getElementById('goal-input');
  if (goalInput) {
    goalInput.addEventListener('change', () => {
      const v = parseInt(goalInput.value, 10);
      if (!isNaN(v) && v >= 0) {
        state.monthlyGoal = v;
        save();
        renderGoal();
        showToast(`🎯 Objectif : ${fmt(v)}`);
      } else {
        goalInput.value = state.monthlyGoal;
      }
    });
  }
  // Bouton modifier objectif → modal directement
  document.getElementById('goal-edit-btn')?.addEventListener('click', showGoalModal);
  document.getElementById('goal-modal-cancel')?.addEventListener('click', hideGoalModal);
  document.getElementById('goal-modal-confirm')?.addEventListener('click', confirmGoalModal);
  document.getElementById('goal-modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('goal-modal-overlay')) hideGoalModal();
  });

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
  const pi = document.getElementById('pocket-money');
  if (pi) pi.value = state.pocketMoney;
  const gi = document.getElementById('goal-input');
  if (gi) gi.value = state.monthlyGoal;
  renderThemeGrid();
}

// ══════════════════════════════════════
// MODAL RESET
// ══════════════════════════════════════
function showModal() { document.getElementById('modal-overlay').classList.add('show'); }
function hideModal() { document.getElementById('modal-overlay').classList.remove('show'); }

// ══════════════════════════════════════
// MODAL OBJECTIF
// ══════════════════════════════════════
function showGoalModal() {
  const overlay = document.getElementById('goal-modal-overlay');
  const inp     = document.getElementById('goal-modal-input');
  if (!overlay) return;
  if (inp) { inp.value = state.monthlyGoal || ''; }
  overlay.classList.add('show');
  setTimeout(() => { if (inp) { inp.focus(); inp.select(); } }, 300);
}
function hideGoalModal() {
  document.getElementById('goal-modal-overlay')?.classList.remove('show');
}
function confirmGoalModal() {
  const inp = document.getElementById('goal-modal-input');
  const v   = parseInt(inp?.value, 10);
  if (!isNaN(v) && v >= 0) {
    state.monthlyGoal = v;
    save();
    renderGoal();
    const gi = document.getElementById('goal-input');
    if (gi) gi.value = v;
    showToast(`🎯 Objectif : ${fmt(v)}`);
    vibrate([15, 8, 15]);
  }
  hideGoalModal();
}

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
// ONBOARDING
// ══════════════════════════════════════
function checkOnboarding() {
  const hasData = Object.keys(state.work).length > 0 || Object.keys(state.clean).length > 0;
  if (hasData) return;
  const el = document.getElementById('onboarding-overlay');
  if (!el) return;
  requestAnimationFrame(() => el.classList.add('show'));
  document.getElementById('onboarding-close').addEventListener('click', () => {
    el.classList.remove('show');
  }, { once: true });
}

// ══════════════════════════════════════
// TABS + SWIPE
// ══════════════════════════════════════
const TAB_ORDER = ['workday', 'clean', 'resume', 'settings'];

const TAB_COLORS = {
  workday:  { bg: 'rgba(52,211,153,0.18)',  glow: 'rgba(52,211,153,0.45)'  },
  clean:    { bg: 'rgba(56,189,248,0.18)',  glow: 'rgba(56,189,248,0.45)'  },
  resume:   { bg: 'rgba(129,140,248,0.18)', glow: 'rgba(129,140,248,0.45)' },
  settings: { bg: 'rgba(251,146,60,0.18)',  glow: 'rgba(251,146,60,0.45)'  },
};

function updateTabIndicator(tabId) {
  const indicator = document.getElementById('tab-indicator');
  const btn = document.querySelector(`[data-tab="${tabId}"]`);
  if (!indicator || !btn) return;
  const p = 3;
  indicator.style.left   = (btn.offsetLeft + p) + 'px';
  indicator.style.top    = p + 'px';
  indicator.style.width  = (btn.offsetWidth - p * 2) + 'px';
  indicator.style.height = (btn.offsetHeight - p * 2) + 'px';
  // Couleur unique par onglet
  const c = TAB_COLORS[tabId] || TAB_COLORS.workday;
  indicator.style.setProperty('--ind-color', c.bg);
  indicator.style.setProperty('--ind-glow',  c.glow);
  indicator.style.background = `linear-gradient(135deg,rgba(255,255,255,0.22) 0%,rgba(255,255,255,0.07) 100%),${c.bg}`;
  indicator.style.boxShadow  = `0 1px 0 rgba(255,255,255,0.22) inset,0 4px 20px ${c.glow},0 2px 8px rgba(0,0,0,0.2)`;
}

function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${id}`)?.classList.add('active');
  document.querySelector(`[data-tab="${id}"]`)?.classList.add('active');
  updateTabIndicator(id);
  if (id === 'clean')    renderCleanCalendar();
  if (id === 'resume')   renderResume();
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
// VISUAL — grid entrance animation
// ══════════════════════════════════════
function animateGrid(id) {
  const g = document.getElementById(id);
  if (!g) return;
  g.classList.remove('animating');
  void g.offsetWidth;
  g.classList.add('animating');
}

// ══════════════════════════════════════
// RÉSUMÉ TAB
// ══════════════════════════════════════
function renderResume() {
  const now  = new Date();
  const year = now.getFullYear();

  document.getElementById('resume-year').textContent = year;

  const allKeys = new Set([
    ...Object.keys(state.work),
    ...Object.keys(state.clean),
  ]);
  for (let m = 0; m < 12; m++) allKeys.add(monthKey(year, m));

  const sorted = [...allKeys]
    .filter(k => k.startsWith(String(year)))
    .sort((a, b) => b.localeCompare(a));

  let totalWorkDays = 0, totalClean = 0, totalWorkEarn = 0, totalCleanEarn = 0;
  sorted.forEach(k => {
    const wDays = Object.values(state.work[k] || {}).reduce((s, v) => s + v, 0);
    const cDays = (state.clean[k] || []).length;
    totalWorkDays  += wDays;
    totalClean     += cDays;
    totalWorkEarn  += wDays * state.dailyRate;
    totalCleanEarn += cDays * state.cleanRate;
  });

  const grand = totalWorkEarn + totalCleanEarn;
  document.getElementById('resume-grand-total').textContent = fmt(grand);
  document.getElementById('resume-work-days').textContent   = totalWorkDays % 1 === 0 ? totalWorkDays : totalWorkDays.toFixed(1);
  document.getElementById('resume-clean-count').textContent = totalClean;
  document.getElementById('resume-work-earn').textContent   = fmt(totalWorkEarn);
  document.getElementById('resume-clean-earn').textContent  = fmt(totalCleanEarn);

  renderGoal();
  renderAdvancedStats();
  renderChart();

  const list = document.getElementById('resume-months');
  list.innerHTML = '';

  const maxTotal = Math.max(1, ...sorted.map(k => {
    const wE = Object.values(state.work[k] || {}).reduce((s,v) => s+v, 0) * state.dailyRate;
    const cE = (state.clean[k] || []).length * state.cleanRate;
    return wE + cE;
  }));

  const monthIcons = ['🎄','❄️','🌸','🌿','☀️','🏖️','🌻','🍂','🎃','🍁','🌧️','⛄'];

  sorted.forEach(k => {
    const [yr, mo] = k.split('-').map(Number);
    const label = new Date(yr, mo - 1, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    const wDays = Object.values(state.work[k] || {}).reduce((s, v) => s + v, 0);
    const cDays = (state.clean[k] || []).length;
    const wEarn = wDays * state.dailyRate;
    const cEarn = cDays * state.cleanRate;
    const rowTotal = wEarn + cEarn;
    const pct = (rowTotal / maxTotal) * 100;

    const wLabel = wDays > 0 ? `💼 ${wDays % 1 === 0 ? wDays : wDays.toFixed(1)}j` : '';
    const cLabel = cDays > 0 ? `🚗 ${cDays}` : '';
    const metaParts = [wLabel, cLabel].filter(Boolean).join(' · ');

    const card = document.createElement('div');
    card.className = 'glass-card resume-month-card';
    card.innerHTML = `
      <div class="resume-month-icon">${monthIcons[mo - 1] || '📅'}</div>
      <div class="resume-month-body">
        <div class="resume-month-name">${label}</div>
        <div class="resume-month-meta">${metaParts || '—'}</div>
        <div class="resume-bar-track">
          <div class="resume-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="resume-month-total${rowTotal === 0 ? ' zero' : ''}">${rowTotal > 0 ? fmt(rowTotal) : '—'}</div>`;

    card.addEventListener('click', () => {
      state.workYear  = yr;
      state.workMonth = mo - 1;
      switchTab('workday');
      renderWorkCalendar();
    });

    list.appendChild(card);
  });

  if (list.children.length === 0) {
    list.innerHTML = `<div class="resume-empty">
      <div class="resume-empty-icon">📭</div>
      <div class="resume-empty-text">Aucune donnée pour cette année</div>
    </div>`;
  }
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
  checkOnboarding();
  // Positionne l'indicateur après layout
  requestAnimationFrame(() => updateTabIndicator('workday'));
});
