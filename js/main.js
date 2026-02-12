/* ============================================
   ENROSADIRA — Main JS
   GSAP + ScrollTrigger + Lenis
   ============================================ */

(function () {
  'use strict';

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Lenis Smooth Scroll ----------
  let lenis;

  if (!prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    // Sync Lenis with GSAP ticker
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // Handle anchor link clicks with Lenis
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        if (lenis) {
          lenis.scrollTo(target, { offset: -72 });
        } else {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }
    });
  });

  // ---------- Register GSAP Plugins ----------
  gsap.registerPlugin(ScrollTrigger);

  // Skip all GSAP animations if reduced motion
  if (prefersReducedMotion) {
    // Make everything visible
    gsap.set('.anim-fade-up, .anim-reveal, .anim-reveal-right, .anim-card, .anim-step', {
      opacity: 1,
      x: 0,
      y: 0,
    });
    return; // Exit early — no animations
  }

  // ---------- Hero Animations ----------
  // Hero text fade-in on load
  const heroTl = gsap.timeline({ delay: 0.3 });

  heroTl
    .to('.hero__title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .to('.hero__tagline', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .to('.hero__cta', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .to('.hero__scroll-indicator', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.3');

  // Hero mountain parallax
  ScrollTrigger.matchMedia({
    // Desktop only parallax
    '(min-width: 769px)': function () {
      gsap.to('.hero__mountain', {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    },
  });

  // ---------- Section Reveal Animations ----------
  // Generic reveal: fade up
  gsap.utils.toArray('.anim-reveal').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Reveal from right
  gsap.utils.toArray('.anim-reveal-right').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ---------- Service Cards (Staggered) ----------
  const serviceCards = gsap.utils.toArray('.service-card');
  if (serviceCards.length) {
    gsap.to(serviceCards, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services__grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  // ---------- Methodology Timeline Steps ----------
  const steps = gsap.utils.toArray('.methodology__step');
  steps.forEach((step) => {
    gsap.to(step, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: step,
        start: 'top 80%',
        toggleActions: 'play none none none',
        onEnter: () => step.classList.add('is-active'),
      },
    });
  });

  // ---------- Results Counter Animation ----------
  const counterElements = gsap.utils.toArray('.result-card__number');
  counterElements.forEach((el) => {
    const target = parseFloat(el.dataset.target) || 0;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimals) || 0;

    const counter = { val: 0 };

    gsap.to(counter, {
      val: target,
      duration: 2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        el.textContent = prefix + counter.val.toFixed(decimals) + suffix;
      },
    });
  });

  // ---------- Team Cards (Staggered) ----------
  const teamCards = gsap.utils.toArray('.team-card');
  if (teamCards.length) {
    gsap.to(teamCards, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.team__grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }

  // ---------- Methodology Line Fill (CSS approach) ----------
  // Since we can't directly animate ::after, use a child element approach
  // Insert a fill div into the line
  const lineEl = document.querySelector('.methodology__line');
  if (lineEl) {
    const fill = document.createElement('div');
    fill.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:0%;background:linear-gradient(to bottom, var(--accent-gold), var(--accent-teal));transition:none;';
    fill.classList.add('methodology__line-fill');
    lineEl.appendChild(fill);

    gsap.to(fill, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.methodology__timeline',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.5,
      },
    });
  }

})();
