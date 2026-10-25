// Menú móvil
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

function toggleMenu(open) {
  menu.classList.toggle('hidden', !open);
  btn.setAttribute('aria-expanded', String(open));
  document.getElementById('ico-open').classList.toggle('hidden', open);
  document.getElementById('ico-close').classList.toggle('hidden', !open);
}

btn.addEventListener('click', () => toggleMenu(menu.classList.contains('hidden')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// Pestañas Antes vs Después
const compare = document.getElementById('compare');
const tabs = { 
  antes: document.getElementById('tab-antes'), 
  despues: document.getElementById('tab-despues') 
};

function setState(state) {
  compare.dataset.state = state;
  Object.entries(tabs).forEach(([k, el]) => el.setAttribute('aria-selected', String(k === state)));
  compare.querySelectorAll('[data-antes]').forEach(el => {
    if (el.classList.contains('bar')) el.style.width = el.dataset[state] + '%';
    else el.textContent = el.dataset[state];
  });
}

tabs.antes.addEventListener('click', () => setState('antes'));
tabs.despues.addEventListener('click', () => setState('despues'));

// Año dinámico en copyright
document.getElementById('year').textContent = new Date().getFullYear();