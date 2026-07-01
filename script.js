const revealElements = document.querySelectorAll('.reveal');
const themeToggle = document.querySelector('.theme-toggle');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progress-fill');
        const target = entry.target.dataset.fill || '0';
        fill.style.width = `${target}%`;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.35 }
);

progressBars.forEach((bar) => progressObserver.observe(bar));

const counterElements = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

const startCounter = (element) => {
  const target = Number(element.dataset.target) || 0;
  const suffix = element.dataset.suffix || '';
  const duration = 1400;
  const startTime = performance.now();

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const currentValue = Math.floor(progress * target);
    element.textContent = `${currentValue}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  };

  requestAnimationFrame(step);
};

counterElements.forEach((element) => counterObserver.observe(element));

const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const initialTheme = savedTheme || systemTheme;

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('light-mode', theme === 'light');
  themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-pressed', theme === 'light');
  localStorage.setItem('theme', theme);
};

applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.classList.contains('light-mode') ? 'dark' : 'light';
  applyTheme(nextTheme);
});

if (mobileMenuToggle && nav) {
  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
