const COOKIE_KEY = 'forma3d-cookie-consent';
const cookieBanner = document.querySelector('#cookie-banner');
const consentDialog = document.querySelector('#consent-dialog');
const toast = document.querySelector('#toast');

function readConsent() {
  try { return JSON.parse(localStorage.getItem(COOKIE_KEY)); } catch { return null; }
}

function applyConsent(consent) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...consent, updatedAt: new Date().toISOString() }));
  cookieBanner.hidden = true;
  // Load analytics or marketing tags here only after explicit consent.
}

function showCookieSettings() {
  const current = readConsent();
  document.querySelector('#analytics-choice').checked = Boolean(current?.analytics);
  document.querySelector('#marketing-choice').checked = Boolean(current?.marketing);
  consentDialog.showModal();
}

document.querySelector('#year').textContent = new Date().getFullYear();
if (!readConsent()) cookieBanner.hidden = false;

document.querySelectorAll('[data-cookie-settings]').forEach(button => button.addEventListener('click', showCookieSettings));
document.querySelector('[data-cookie-accept]').addEventListener('click', () => applyConsent({ essential: true, analytics: true, marketing: true }));
document.querySelector('[data-cookie-reject]').addEventListener('click', () => applyConsent({ essential: true, analytics: false, marketing: false }));
document.querySelector('[data-cookie-save]').addEventListener('click', event => {
  event.preventDefault();
  applyConsent({ essential: true, analytics: document.querySelector('#analytics-choice').checked, marketing: document.querySelector('#marketing-choice').checked });
  consentDialog.close();
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-privacy], [data-terms]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showToast('Inclua aqui o texto jurídico revisado da sua loja antes de publicar.');
}));

document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const phone = document.querySelector('[data-whatsapp]').getAttribute('href').replace(/\D/g, '');
  if (phone === '5500000000000') {
    showToast('Configure o número de WhatsApp comercial antes de receber pedidos.');
    return;
  }
  const lines = [
    'Olá! Quero pedir um orçamento de impressão 3D.',
    `Nome: ${form.get('name')}`,
    `Contato: ${form.get('contact')}`,
    `Material: ${form.get('material') || 'Preciso de orientação'}`,
    `Cor: ${form.get('color') || 'Não informada'}`,
    `Uso: ${form.get('application') || 'Não informado'}`,
    `Projeto: ${form.get('description') || 'Sem detalhes adicionais'}`,
    `Link do arquivo: ${form.get('fileLink') || 'Não informado'}`
  ];
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 4200);
}
