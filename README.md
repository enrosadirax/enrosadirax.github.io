# Enrosadira

Consulting and marketing website for **Enrosadira** — a hospitality intelligence agency specializing in hotels and restaurants in the Dolomites.

## Tech Stack

- Plain HTML, CSS, JavaScript (no build step)
- [GSAP 3](https://gsap.com/) + ScrollTrigger for animations
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- Google Fonts (Inter + Playfair Display)
- [Formspree](https://formspree.io/) for contact form

## Getting Started

Open `index.html` in a browser, or serve locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## File Structure

```
consulting/
├── index.html              # Main single-page site
├── legal.html              # Privacy policy + Impressum
├── css/
│   ├── style.css           # Layout, typography, responsive
│   └── animations.css      # Keyframes, reduced-motion
├── js/
│   ├── main.js             # GSAP + Lenis + scroll animations
│   ├── nav.js              # Header, scroll spy, mobile menu
│   └── form.js             # Contact form validation
└── assets/
    └── images/
        └── mountain-silhouette.svg
```

## Configuration

- **Formspree**: Replace `YOUR_FORM_ID` in the contact form action URL in `index.html`
- **Contact info**: Update email, phone, and address placeholders
- **Team**: Replace placeholder names and add real photos
- **Legal**: Fill in actual company registration details

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Animations gracefully degrade with `prefers-reduced-motion`.
