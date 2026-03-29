// Language Toggle Functionality
function setLanguage(lang) {
  // Update toggle button active state
  document.querySelectorAll('.lang-option').forEach(option => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });

  // Update all translatable elements
  document.querySelectorAll('[data-en][data-zh]').forEach(el => {
    const text = el.dataset[lang];
    if (text) {
      el.innerHTML = text;
    }
  });

  // Show/hide language-specific elements
  document.querySelectorAll('[data-lang-show]').forEach(el => {
    el.style.display = el.dataset.langShow === lang ? '' : 'none';
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Save preference
  localStorage.setItem('duke-csa-lang', lang);
}

// Initialize language from localStorage or default to 'en'
function initLanguage() {
  const savedLang = localStorage.getItem('duke-csa-lang') || 'en';
  setLanguage(savedLang);
}

// Toggle language on click
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = localStorage.getItem('duke-csa-lang') || 'en';
      const newLang = currentLang === 'en' ? 'zh' : 'en';
      setLanguage(newLang);
    });
  }
  initLanguage();
});
