// Main JavaScript file

// Sticky shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
});

// Mobile toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
// Close menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-reveal with IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside the same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.1}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// Highlight active nav link on scroll
const navLinkItems = document.querySelectorAll('.nav-link');
const linkedSectionIds = [...navLinkItems].map(l => l.getAttribute('href').slice(1));
const linkedSections = linkedSectionIds.map(id => document.getElementById(id)).filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkItems.forEach(link => {
        link.classList.toggle('nav-link--active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.3 });
linkedSections.forEach(s => sectionObserver.observe(s));

// ── Language: each language is its own page (/, /de/, /hu/, /ro/) ──
// Pages are pre-rendered by build.js; the switcher and modal are plain links.
const pageLang = document.documentElement.lang;
const storage = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};

// Opened straight from disk: folder links need an explicit index.html
if (location.protocol === 'file:') {
  document.querySelectorAll('a.lang-btn, a.lang-modal-btn').forEach(a => {
    const href = a.getAttribute('href');
    if (href.endsWith('/')) a.setAttribute('href', href + 'index.html');
  });
}

document.querySelectorAll('a.lang-btn, a.lang-modal-btn').forEach(a => {
  a.addEventListener('click', () => storage.set('lang', a.dataset.lang));
});

const savedLang = storage.get('lang');
const langModal = document.getElementById('lang-modal');
if (pageLang !== 'en') {
  // Landing on a language page counts as choosing it
  storage.set('lang', pageLang);
} else if (savedLang && savedLang !== 'en' && translations[savedLang]) {
  // Returning visitor on the English root: send them to their language
  const target = savedLang + '/' + (location.protocol === 'file:' ? 'index.html' : '');
  location.replace(target + location.hash);
} else if (!savedLang && langModal) {
  requestAnimationFrame(() => langModal.classList.add('visible'));
}

// ── Contact form: send via FormSubmit (AJAX), show status inline ──
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const statusEl = contactForm.querySelector('.form-status');
  const submitBtn = contactForm.querySelector('.form-submit');
  const tr = (key) => {
    const lang = document.documentElement.lang;
    return (translations[lang] || translations.en)[key] || translations.en[key];
  };

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm));
    if (data._honey) return; // bot filled the honeypot

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = tr('contact.form.sending');
    statusEl.className = 'form-status';
    statusEl.textContent = '';

    try {
      const endpoint = contactForm.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || res.status);
      statusEl.classList.add('form-status--ok');
      statusEl.textContent = tr('contact.form.success');
      contactForm.reset();
    } catch (err) {
      console.error('Contact form error:', err);
      statusEl.classList.add('form-status--error');
      statusEl.textContent = tr('contact.form.error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}
