/* ============================================
   ENROSADIRA — Navigation
   Sticky header, scroll spy, mobile menu
   ============================================ */

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('navHamburger');
  const allNavLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // ---------- Sticky Header ----------
  let lastScrollY = 0;

  function updateNav() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // Initial check

  // ---------- Scroll Spy ----------
  function updateActiveLink() {
    const scrollY = window.scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        allNavLinks.forEach((link) => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ---------- Mobile Hamburger Menu ----------
  function toggleMenu() {
    const isOpen = navLinks.classList.contains('nav__links--open');

    navLinks.classList.toggle('nav__links--open');
    hamburger.classList.toggle('nav__hamburger--open');
    hamburger.setAttribute('aria-expanded', !isOpen);

    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close menu when a nav link is clicked
  allNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('nav__links--open')) {
        toggleMenu();
      }
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
      toggleMenu();
    }
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('nav__links--open')) {
      toggleMenu();
    }
  });

})();
