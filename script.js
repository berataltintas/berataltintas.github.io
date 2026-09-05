const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const newsToggle = document.querySelector('[data-news-toggle]');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

newsToggle?.addEventListener('click', () => {
  const hiddenNews = document.querySelectorAll('.older-news');
  const isExpanded = newsToggle.getAttribute('aria-expanded') === 'true';
  hiddenNews.forEach((item) => item.classList.toggle('is-visible', !isExpanded));
  newsToggle.setAttribute('aria-expanded', String(!isExpanded));
  newsToggle.innerHTML = isExpanded
    ? 'Show earlier news <span aria-hidden="true">↓</span>'
    : 'Hide earlier news <span aria-hidden="true">↑</span>';
});
