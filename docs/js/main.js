/* Fun-Gus Transmedia Site — Main JS */

// ===== Shared Nav =====
function loadNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  const listA = [
    { href: 'digital-story.html', label: 'Digital Story' },
    { href: 'explainer-video.html', label: 'Explainer Video' },
  ];
  const listB = [
    { href: 'trading-cards.html', label: 'Trading Cards' },
    { href: 'reviews.html', label: 'Fake Reviews' },
    { href: 'newsletter.html', label: 'Newsletter' },
    { href: 'comic.html', label: 'Comic' },
  ];

  function dropdownHTML(label, href, items) {
    const subLinks = items
      .map(i => `<li><a href="${i.href}" class="${currentPage === i.href ? 'active' : ''}">${i.label}</a></li>`)
      .join('');
    const isActive = items.some(i => currentPage === i.href) || currentPage === href;
    return `<li class="nav-dropdown">
      <a href="${href}" class="${isActive ? 'active' : ''}">${label} <span class="nav-caret">&#9662;</span></a>
      <ul class="nav-dropdown-menu">${subLinks}</ul>
    </li>`;
  }

  const contactActive = currentPage === 'contact.html' ? 'active' : '';

  navEl.innerHTML = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">MY FUNGAL ADVENTURE</a>
        <ul class="nav-links" id="nav-links">
          ${dropdownHTML('List A', 'list-a.html', listA)}
          ${dropdownHTML('List B', 'list-b.html', listB)}
          <li><a href="contact.html" class="${contactActive}">Contact</a></li>
        </ul>
        <button class="nav-hamburger" id="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-links');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      if (menu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }
}

// ===== Shared Footer =====
function loadFooter() {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  footerEl.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-tagline">Nature was online first.</div>
        <p>&copy; 2026 Fun-Gus: The Forest Has WiFi. All rights reserved.</p>
        <p style="margin-top: 0.5rem;">
          <a href="contact.html">Get in Touch</a>
        </p>
      </div>
    </footer>
  `;
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  loadNav();
  loadFooter();
  initScrollReveal();
});
