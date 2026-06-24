# Language Teacher Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, mobile-responsive static landing page for a foreign language teacher offering English, German, Hungarian, and Romanian lessons.

**Architecture:** Single `index.html` with external `css/styles.css` and `js/main.js`. No build step, no framework, no backend. All interactivity (sticky nav, scroll-reveal, mobile menu, contact form via mailto) is vanilla JS/CSS.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS (ES6+), Google Fonts (Playfair Display + Inter).

## Global Constraints

- No mention of years of experience, student counts, or authority claims anywhere in copy
- Tone: warm, personal, dedicated — never corporate or boastful
- Color tokens: primary `#1a2744`, accent `#f0a500`, bg `#f9f7f4`, surface `#ffffff`, text `#2d3748`, muted `#718096`
- Fonts: `Playfair Display` for headings, `Inter` for body — loaded from Google Fonts
- Contact form uses `mailto:` only — no backend
- All content is placeholder — no real personal data
- Fully responsive: mobile-first, works at 320px–1440px+
- No pricing section, no testimonials, no results claims

---

### Task 1: Project Scaffold + CSS Foundation

**Files:**
- Create: `index.html`
- Create: `css/styles.css`
- Create: `js/main.js`

**Interfaces:**
- Produces: HTML shell with `<head>`, Google Fonts link, CSS/JS references; CSS custom properties; reset; utility classes used by all later tasks

- [ ] **Step 1: Create the file structure**

```bash
mkdir -p css js
touch index.html css/styles.css js/main.js
```

- [ ] **Step 2: Write `index.html` scaffold**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anna Müller — Language Teacher | English · German · Hungarian · Romanian</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <!-- Navbar -->
  <!-- Hero -->
  <!-- About -->
  <!-- Languages -->
  <!-- Services -->
  <!-- Why Choose Me -->
  <!-- Contact -->
  <!-- Footer -->
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Write CSS custom properties and reset in `css/styles.css`**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --primary: #1a2744;
  --primary-light: #253560;
  --accent: #f0a500;
  --accent-dark: #d4920a;
  --bg: #f9f7f4;
  --surface: #ffffff;
  --text: #2d3748;
  --muted: #718096;
  --border: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06);
  --shadow-md: 0 4px 16px rgba(0,0,0,.10);
  --shadow-lg: 0 10px 40px rgba(0,0,0,.12);
  --radius: 12px;
  --radius-lg: 20px;
  --transition: 0.25s ease;
}

html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; color: var(--text); background: var(--bg); line-height: 1.6; }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; border: none; background: none; font: inherit; }

h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.2; }

.container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }
.section { padding: 96px 0; }
.section-label { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
.section-title { font-size: clamp(2rem, 4vw, 2.75rem); color: var(--primary); margin-bottom: 16px; }
.section-sub { font-size: 1.1rem; color: var(--muted); max-width: 560px; }

.btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 50px; font-weight: 600; font-size: 0.95rem; transition: var(--transition); }
.btn-primary { background: var(--accent); color: var(--primary); }
.btn-primary:hover { background: var(--accent-dark); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn-ghost { border: 2px solid rgba(255,255,255,0.4); color: white; }
.btn-ghost:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

/* Scroll-reveal utility */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

- [ ] **Step 4: Verify in browser**

Open `index.html` in a browser. Page should load with `var(--bg)` background (`#f9f7f4`) and no errors in the console.

- [ ] **Step 5: Commit**

```bash
git init
git add index.html css/styles.css js/main.js
git commit -m "feat: project scaffold, CSS tokens and reset"
```

---

### Task 2: Navbar

**Files:**
- Modify: `index.html` (Navbar section)
- Modify: `css/styles.css` (append navbar styles)
- Modify: `js/main.js` (append navbar JS)

**Interfaces:**
- Consumes: `.container`, CSS custom properties from Task 1
- Produces: `<nav id="navbar">` with `.nav-links` anchors used by hero CTAs; `.nav-toggle` hamburger for mobile; `navbar--scrolled` class toggled by JS

- [ ] **Step 1: Add navbar HTML inside `<body>` (replace `<!-- Navbar -->` comment)**

```html
<nav id="navbar">
  <div class="container nav-inner">
    <a href="#" class="nav-logo">
      <span class="nav-logo-name">Anna Müller</span>
      <span class="nav-logo-tag">Language Teacher</span>
    </a>
    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" role="list">
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#languages" class="nav-link">Languages</a></li>
      <li><a href="#services" class="nav-link">Services</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <a href="#contact" class="btn btn-nav">Book a Free Trial</a>
  </div>
</nav>
```

- [ ] **Step 2: Add navbar CSS**

```css
/* ── Navbar ── */
#navbar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(26, 39, 68, 0.96);
  backdrop-filter: blur(8px);
  transition: box-shadow var(--transition);
}
#navbar.navbar--scrolled { box-shadow: 0 2px 20px rgba(0,0,0,.25); }

.nav-inner { display: flex; align-items: center; gap: 32px; height: 68px; }
.nav-logo { display: flex; flex-direction: column; margin-right: auto; }
.nav-logo-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: white; line-height: 1.1; }
.nav-logo-tag { font-size: 0.68rem; letter-spacing: 0.08em; color: var(--accent); text-transform: uppercase; }

.nav-links { display: flex; gap: 8px; list-style: none; }
.nav-link { padding: 8px 14px; border-radius: 6px; color: rgba(255,255,255,.82); font-size: 0.9rem; font-weight: 500; transition: var(--transition); }
.nav-link:hover { color: white; background: rgba(255,255,255,.08); }

.btn-nav { padding: 10px 22px; font-size: 0.875rem; background: var(--accent); color: var(--primary); border-radius: 50px; font-weight: 600; white-space: nowrap; transition: var(--transition); }
.btn-nav:hover { background: var(--accent-dark); transform: translateY(-1px); }

.nav-toggle { display: none; flex-direction: column; gap: 5px; padding: 6px; }
.nav-toggle span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: var(--transition); }
.nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .btn-nav { display: none; }
  .nav-links {
    display: none; flex-direction: column; gap: 0;
    position: fixed; inset: 68px 0 0 0;
    background: var(--primary); padding: 24px;
  }
  .nav-links.open { display: flex; }
  .nav-link { padding: 16px; font-size: 1.1rem; border-radius: 8px; }
}
```

- [ ] **Step 3: Add navbar JS to `js/main.js`**

```js
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
```

- [ ] **Step 4: Verify in browser**

- Navbar is dark and sticky at top
- Scrolling past 20px adds a shadow
- On mobile (<768px): hamburger appears, clicking it opens full-screen overlay, links close it

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: sticky navbar with mobile hamburger menu"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `index.html` (Hero section)
- Modify: `css/styles.css` (append hero styles)

**Interfaces:**
- Consumes: `.btn`, `.btn-primary`, `.btn-ghost`, `.container` from Task 1; `#about`, `#contact` anchors from later tasks (links will work once those sections exist)
- Produces: `<section id="hero">` with flag badges, headline, CTAs

- [ ] **Step 1: Add hero HTML (replace `<!-- Hero -->` comment)**

```html
<section id="hero">
  <div class="hero-bg-shapes" aria-hidden="true">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
  </div>
  <div class="container hero-inner">
    <div class="hero-content">
      <div class="hero-flags" aria-label="Languages taught">
        <span class="flag-badge">🇬🇧 English</span>
        <span class="flag-badge">🇩🇪 German</span>
        <span class="flag-badge">🇭🇺 Hungarian</span>
        <span class="flag-badge">🇷🇴 Romanian</span>
      </div>
      <h1 class="hero-headline">Your Personal Guide<br /><em>to a New Language</em></h1>
      <p class="hero-sub">Patient, dedicated, and tailored to you — whether you're a complete beginner or looking to reach the next level.</p>
      <div class="hero-ctas">
        <a href="#contact" class="btn btn-primary">Book a Free Trial Lesson</a>
        <a href="#about" class="btn btn-ghost">Learn More</a>
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="hero-avatar-wrap">
        <div class="hero-avatar-placeholder">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
            <circle cx="60" cy="45" r="22" fill="rgba(255,255,255,0.3)"/>
            <ellipse cx="60" cy="95" rx="35" ry="22" fill="rgba(255,255,255,0.3)"/>
          </svg>
        </div>
        <div class="hero-lang-float hero-lang-1">🇬🇧</div>
        <div class="hero-lang-float hero-lang-2">🇩🇪</div>
        <div class="hero-lang-float hero-lang-3">🇭🇺</div>
        <div class="hero-lang-float hero-lang-4">🇷🇴</div>
      </div>
    </div>
  </div>
  <div class="hero-wave" aria-hidden="true">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f9f7f4"/>
    </svg>
  </div>
</section>
```

- [ ] **Step 2: Add hero CSS**

```css
/* ── Hero ── */
#hero {
  position: relative; overflow: hidden;
  background: linear-gradient(135deg, var(--primary) 0%, #253a70 60%, #1e2f5a 100%);
  padding: 100px 0 0;
  min-height: 92vh;
  display: flex; flex-direction: column;
}

.hero-bg-shapes { position: absolute; inset: 0; pointer-events: none; }
.shape { position: absolute; border-radius: 50%; }
.shape-1 { width: 500px; height: 500px; background: rgba(240,165,0,.07); top: -120px; right: -100px; }
.shape-2 { width: 300px; height: 300px; background: rgba(255,255,255,.04); bottom: 60px; left: -60px; }

.hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; flex: 1; padding-bottom: 80px; }

.hero-flags { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
.flag-badge {
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.2);
  color: white; padding: 6px 14px;
  border-radius: 50px; font-size: 0.85rem; font-weight: 500;
  backdrop-filter: blur(4px);
  animation: flagFloat 3s ease-in-out infinite;
}
.flag-badge:nth-child(2) { animation-delay: .4s; }
.flag-badge:nth-child(3) { animation-delay: .8s; }
.flag-badge:nth-child(4) { animation-delay: 1.2s; }

@keyframes flagFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

.hero-headline { font-size: clamp(2.4rem, 5vw, 3.6rem); color: white; margin-bottom: 20px; }
.hero-headline em { color: var(--accent); font-style: italic; }
.hero-sub { font-size: 1.15rem; color: rgba(255,255,255,.78); max-width: 480px; margin-bottom: 40px; line-height: 1.7; }
.hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }

/* Avatar visual */
.hero-visual { display: flex; justify-content: center; align-items: center; }
.hero-avatar-wrap { position: relative; width: 320px; height: 360px; }
.hero-avatar-placeholder {
  width: 260px; height: 300px;
  background: rgba(255,255,255,.1);
  border: 2px solid rgba(255,255,255,.15);
  border-radius: var(--radius-lg);
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(6px);
  margin: 30px auto 0;
}

.hero-lang-float {
  position: absolute; background: white;
  border-radius: 12px; padding: 10px 14px;
  font-size: 1.4rem; box-shadow: var(--shadow-md);
  animation: floatBadge 4s ease-in-out infinite;
}
.hero-lang-1 { top: 10px; left: 0; animation-delay: 0s; }
.hero-lang-2 { top: 10px; right: 0; animation-delay: 1s; }
.hero-lang-3 { bottom: 40px; left: 0; animation-delay: 2s; }
.hero-lang-4 { bottom: 40px; right: 0; animation-delay: 3s; }
@keyframes floatBadge { 0%,100%{transform:translateY(0) rotate(-2deg);} 50%{transform:translateY(-10px) rotate(2deg);} }

.hero-wave { margin-top: auto; line-height: 0; }
.hero-wave svg { width: 100%; display: block; }

@media (max-width: 768px) {
  #hero { min-height: auto; padding: 80px 0 0; }
  .hero-inner { grid-template-columns: 1fr; gap: 40px; text-align: center; padding-bottom: 60px; }
  .hero-visual { display: none; }
  .hero-flags { justify-content: center; }
  .hero-ctas { justify-content: center; }
  .hero-sub { margin-left: auto; margin-right: auto; }
}
```

- [ ] **Step 3: Verify in browser**

- Hero shows dark gradient background with headline, flag badges, and two CTA buttons
- Four floating emoji badges animate gently on desktop
- On mobile: visual column is hidden, content centered
- Wave SVG creates smooth transition into page background

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: hero section with headline, flag badges, and CTAs"
```

---

### Task 4: About Section

**Files:**
- Modify: `index.html` (About section)
- Modify: `css/styles.css` (append about styles)

**Interfaces:**
- Consumes: `.section`, `.container`, `.section-label`, `.section-title`, `.reveal` from Task 1
- Produces: `<section id="about">` with two-column layout; `.about-highlights` used nowhere else

- [ ] **Step 1: Add about HTML (replace `<!-- About -->` comment)**

```html
<section id="about" class="section">
  <div class="container about-inner">
    <div class="about-image reveal">
      <div class="about-avatar-wrap">
        <div class="about-avatar-placeholder">
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" width="80">
            <circle cx="60" cy="48" r="28" fill="#cbd5e0"/>
            <ellipse cx="60" cy="110" rx="44" ry="28" fill="#cbd5e0"/>
          </svg>
          <p class="about-avatar-label">Photo coming soon</p>
        </div>
        <div class="about-flag-ring" aria-hidden="true">
          <span>🇬🇧</span><span>🇩🇪</span><span>🇭🇺</span><span>🇷🇴</span>
        </div>
      </div>
    </div>
    <div class="about-content reveal">
      <p class="section-label">About me</p>
      <h2 class="section-title">A Dedicated Teacher<br />Who Loves Languages</h2>
      <p class="about-bio">I'm passionate about languages and the doors they open — to new cultures, new friendships, and new opportunities. My approach is simple: every student is different, and every lesson should reflect that. I take the time to understand your goals, your learning style, and your pace.</p>
      <p class="about-bio" style="margin-top:16px;">Whether you're picking up your very first words or preparing for an exam, I'm here to guide you step by step — with patience, encouragement, and genuine enthusiasm for your progress.</p>
      <ul class="about-highlights">
        <li class="about-highlight">
          <span class="highlight-icon">🎯</span>
          <div>
            <strong>Lessons tailored to you</strong>
            <p>Your goals and pace shape every session — no generic textbooks.</p>
          </div>
        </li>
        <li class="about-highlight">
          <span class="highlight-icon">🕐</span>
          <div>
            <strong>Flexible scheduling</strong>
            <p>Morning, evening, weekends — we find a time that works for your life.</p>
          </div>
        </li>
        <li class="about-highlight">
          <span class="highlight-icon">💛</span>
          <div>
            <strong>Patient and encouraging</strong>
            <p>Mistakes are part of learning. A supportive environment makes all the difference.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about CSS**

```css
/* ── About ── */
.about-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 72px; align-items: center; }

.about-avatar-wrap { position: relative; display: inline-block; }
.about-avatar-placeholder {
  width: 280px; height: 320px;
  background: linear-gradient(135deg, #e2e8f0, #edf2f7);
  border-radius: var(--radius-lg);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
  box-shadow: var(--shadow-md);
}
.about-avatar-label { font-size: 0.8rem; color: var(--muted); }

.about-flag-ring {
  display: flex; justify-content: space-around;
  background: white; border-radius: 50px;
  padding: 10px 20px; margin-top: 16px;
  box-shadow: var(--shadow-sm);
  font-size: 1.5rem;
}

.about-bio { color: var(--muted); line-height: 1.8; font-size: 1.025rem; }

.about-highlights { list-style: none; margin-top: 32px; display: flex; flex-direction: column; gap: 20px; }
.about-highlight { display: flex; gap: 16px; align-items: flex-start; }
.highlight-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
.about-highlight strong { display: block; color: var(--primary); font-weight: 600; margin-bottom: 2px; }
.about-highlight p { color: var(--muted); font-size: 0.92rem; }

@media (max-width: 768px) {
  .about-inner { grid-template-columns: 1fr; gap: 40px; }
  .about-image { display: flex; justify-content: center; }
  .about-avatar-placeholder { width: 220px; height: 250px; }
}
```

- [ ] **Step 3: Verify in browser**

- Two-column layout: avatar placeholder left, bio and highlights right
- Three highlight items with icons, bold titles, and muted descriptions
- Stacks to single column on mobile

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: about section with bio and key highlights"
```

---

### Task 5: Languages Section

**Files:**
- Modify: `index.html` (Languages section)
- Modify: `css/styles.css` (append languages styles)

**Interfaces:**
- Consumes: `.section`, `.container`, `.section-label`, `.section-title`, `.reveal` from Task 1
- Produces: `<section id="languages">` with four `.lang-card` elements

- [ ] **Step 1: Add languages HTML (replace `<!-- Languages -->` comment)**

```html
<section id="languages" class="section" style="background: var(--primary);">
  <div class="container">
    <div class="section-header reveal" style="text-align:center; margin-bottom:56px;">
      <p class="section-label" style="color:var(--accent);">Languages</p>
      <h2 class="section-title" style="color:white;">Four Languages.<br />One Trusted Teacher.</h2>
      <p class="section-sub" style="color:rgba(255,255,255,.65); margin: 0 auto;">From absolute beginner to advanced — I'll guide you at every level in all four languages.</p>
    </div>
    <div class="lang-grid">
      <div class="lang-card reveal">
        <div class="lang-flag">🇬🇧</div>
        <h3 class="lang-name">English</h3>
        <p class="lang-desc">The world's lingua franca — open doors in travel, business, and culture. From everyday conversation to professional fluency.</p>
        <div class="lang-levels">
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
        </div>
        <p class="lang-level-label">A1 → C2 · All levels</p>
      </div>
      <div class="lang-card reveal">
        <div class="lang-flag">🇩🇪</div>
        <h3 class="lang-name">German</h3>
        <p class="lang-desc">One of Europe's most spoken languages — essential for study, work, or life in Germany, Austria, and Switzerland.</p>
        <div class="lang-levels">
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
        </div>
        <p class="lang-level-label">A1 → C2 · All levels</p>
      </div>
      <div class="lang-card reveal">
        <div class="lang-flag">🇭🇺</div>
        <h3 class="lang-name">Hungarian</h3>
        <p class="lang-desc">A unique and beautiful language — whether for heritage, family, or curiosity, I'll make it approachable and enjoyable.</p>
        <div class="lang-levels">
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot"></span>
          <span class="level-dot"></span>
        </div>
        <p class="lang-level-label">A1 → B2 · Beginner to upper-intermediate</p>
      </div>
      <div class="lang-card reveal">
        <div class="lang-flag">🇷🇴</div>
        <h3 class="lang-name">Romanian</h3>
        <p class="lang-desc">A rich Romance language — perfect for connecting with Romanian culture, family, or expanding your language portfolio.</p>
        <div class="lang-levels">
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot active"></span>
          <span class="level-dot"></span>
          <span class="level-dot"></span>
        </div>
        <p class="lang-level-label">A1 → B2 · Beginner to upper-intermediate</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add languages CSS**

```css
/* ── Languages ── */
.lang-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

.lang-card {
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--radius);
  padding: 32px 24px;
  transition: var(--transition);
}
.lang-card:hover {
  background: rgba(255,255,255,.10);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,.25);
}

.lang-flag { font-size: 3rem; margin-bottom: 16px; }
.lang-name { font-size: 1.4rem; color: white; margin-bottom: 10px; }
.lang-desc { font-size: 0.9rem; color: rgba(255,255,255,.65); line-height: 1.7; margin-bottom: 24px; }

.lang-levels { display: flex; gap: 6px; margin-bottom: 8px; }
.level-dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,.2); }
.level-dot.active { background: var(--accent); }

.lang-level-label { font-size: 0.75rem; color: rgba(255,255,255,.45); }

@media (max-width: 900px) { .lang-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 540px) { .lang-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Verify in browser**

- Dark navy background section with 4 language cards in a row
- Each card has flag emoji, name, description, level dots, and level range label
- Cards lift on hover
- Responsive: 2 columns at tablet, 1 column on mobile

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: languages section with four language cards and level indicators"
```

---

### Task 6: Services Section

**Files:**
- Modify: `index.html` (Services section)
- Modify: `css/styles.css` (append services styles)

**Interfaces:**
- Consumes: `.section`, `.container`, `.section-label`, `.section-title`, `.section-sub`, `.reveal` from Task 1
- Produces: `<section id="services">` with 6 `.service-card` elements

- [ ] **Step 1: Add services HTML (replace `<!-- Services -->` comment)**

```html
<section id="services" class="section">
  <div class="container">
    <div class="section-header reveal" style="margin-bottom:56px;">
      <p class="section-label">What I offer</p>
      <h2 class="section-title">Lessons Designed<br />Around Your Goals</h2>
      <p class="section-sub">Whether you're learning for fun, work, family, or exams — there's a format that fits your life.</p>
    </div>
    <div class="services-grid">
      <div class="service-card reveal">
        <div class="service-icon">💻</div>
        <h3 class="service-title">Online Lessons</h3>
        <p class="service-desc">Learn from anywhere via video call. All you need is an internet connection — I take care of the rest.</p>
      </div>
      <div class="service-card reveal">
        <div class="service-icon">🏠</div>
        <h3 class="service-title">In-Person Lessons</h3>
        <p class="service-desc">Face-to-face sessions for a more personal experience. Available locally — get in touch to discuss location.</p>
      </div>
      <div class="service-card reveal">
        <div class="service-icon">📝</div>
        <h3 class="service-title">Exam Preparation</h3>
        <p class="service-desc">Targeted prep for Goethe, ECL, IELTS, and other language certificates. Focused practice, real results.</p>
      </div>
      <div class="service-card reveal">
        <div class="service-icon">💼</div>
        <h3 class="service-title">Business Language</h3>
        <p class="service-desc">Professional vocabulary, emails, presentations, and meetings — for the language skills your career needs.</p>
      </div>
      <div class="service-card reveal">
        <div class="service-icon">🎒</div>
        <h3 class="service-title">Kids &amp; Teenagers</h3>
        <p class="service-desc">Age-appropriate, engaging lessons that make learning fun. Building confidence and curiosity from day one.</p>
      </div>
      <div class="service-card reveal">
        <div class="service-icon">💬</div>
        <h3 class="service-title">Conversation Practice</h3>
        <p class="service-desc">Speak more, hesitate less. Regular conversation practice to build fluency, confidence, and natural flow.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add services CSS**

```css
/* ── Services ── */
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 36px 28px;
  transition: var(--transition);
  position: relative; overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-dark));
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s ease;
}
.service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: transparent; }
.service-card:hover::before { transform: scaleX(1); }

.service-icon { font-size: 2.2rem; margin-bottom: 16px; }
.service-title { font-size: 1.15rem; color: var(--primary); margin-bottom: 10px; font-family: 'Inter', sans-serif; font-weight: 600; }
.service-desc { font-size: 0.92rem; color: var(--muted); line-height: 1.7; }

@media (max-width: 900px) { .services-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 540px) { .services-grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Verify in browser**

- 6 cards in a 3-column grid on desktop
- Each card has emoji icon, bold title, description
- Hovering lifts the card and reveals a gold accent bar at the top
- Responsive: 2 columns at tablet, 1 column on mobile

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: services section with six offering cards"
```

---

### Task 7: Why Choose Me Section

**Files:**
- Modify: `index.html` (Why Choose Me section)
- Modify: `css/styles.css` (append why-choose-me styles)

**Interfaces:**
- Consumes: `.section`, `.container`, `.section-label`, `.section-title`, `.reveal` from Task 1
- Produces: `<section id="why">` with three `.why-card` elements

- [ ] **Step 1: Add why-choose-me HTML (replace `<!-- Why Choose Me -->` comment)**

```html
<section id="why" class="section why-section">
  <div class="container">
    <div class="why-inner">
      <div class="why-header reveal">
        <p class="section-label">Why choose me</p>
        <h2 class="section-title">The Difference a<br />Dedicated Teacher Makes</h2>
        <a href="#contact" class="btn btn-primary" style="margin-top:28px; display:inline-flex;">Get Started Today</a>
      </div>
      <div class="why-cards">
        <div class="why-card reveal">
          <div class="why-icon-wrap">
            <span class="why-icon">🎯</span>
          </div>
          <h3 class="why-title">Tailored to You</h3>
          <p class="why-desc">No cookie-cutter lessons. Each session is built around your specific goals, interests, and learning style — because what works for one student may not work for another.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon-wrap">
            <span class="why-icon">🤝</span>
          </div>
          <h3 class="why-title">Flexible &amp; Patient</h3>
          <p class="why-desc">Learning a language takes time and that's completely okay. I adapt to your schedule and your pace, with an encouraging attitude every step of the way.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon-wrap">
            <span class="why-icon">🌍</span>
          </div>
          <h3 class="why-title">4 Languages, 1 Teacher</h3>
          <p class="why-desc">English, German, Hungarian, Romanian — one consistent, trusted relationship across all your language learning needs. No need to find a different teacher for each language.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add why-choose-me CSS**

```css
/* ── Why Choose Me ── */
.why-section { background: linear-gradient(135deg, #fef9f0, #fff8ec); }

.why-inner { display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: start; }
.why-header { position: sticky; top: 100px; }

.why-cards { display: flex; flex-direction: column; gap: 28px; }
.why-card {
  display: flex; gap: 24px; align-items: flex-start;
  background: white; border-radius: var(--radius);
  padding: 32px; box-shadow: var(--shadow-sm);
  border: 1px solid rgba(240,165,0,.15);
  transition: var(--transition);
}
.why-card:hover { box-shadow: var(--shadow-md); transform: translateX(6px); }

.why-icon-wrap { 
  flex-shrink: 0; width: 52px; height: 52px;
  background: linear-gradient(135deg, #fef3d0, #fde68a);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
}
.why-icon { font-size: 1.5rem; }
.why-title { font-size: 1.1rem; font-weight: 600; color: var(--primary); margin-bottom: 8px; font-family: 'Inter', sans-serif; }
.why-desc { font-size: 0.92rem; color: var(--muted); line-height: 1.75; }

@media (max-width: 768px) {
  .why-inner { grid-template-columns: 1fr; gap: 40px; }
  .why-header { position: static; }
}
```

- [ ] **Step 3: Verify in browser**

- Warm cream background section
- Two-column: sticky header left, stacked cards right
- Cards have gold icon backgrounds, slide right on hover
- On mobile: stacks to single column

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: why-choose-me section with three differentiator cards"
```

---

### Task 8: Contact Section + Footer

**Files:**
- Modify: `index.html` (Contact section and Footer)
- Modify: `css/styles.css` (append contact and footer styles)

**Interfaces:**
- Consumes: `.section`, `.container`, `.section-label`, `.section-title`, `.reveal`, `.btn`, `.btn-primary` from Task 1
- Produces: `<section id="contact">` with two-column layout and `mailto:` form; `<footer>`

- [ ] **Step 1: Add contact HTML (replace `<!-- Contact -->` comment)**

```html
<section id="contact" class="section" style="background: var(--primary);">
  <div class="container">
    <div class="contact-inner">
      <div class="contact-info reveal">
        <p class="section-label" style="color:var(--accent);">Get in touch</p>
        <h2 class="section-title" style="color:white;">Ready to Start<br />Your Language Journey?</h2>
        <p class="contact-intro">I'd love to hear from you. Fill in the form and I'll get back to you within 24 hours to arrange your free trial lesson.</p>
        <ul class="contact-details">
          <li class="contact-detail">
            <span class="contact-detail-icon">✉️</span>
            <span>anna.muller.languages@email.com</span>
          </li>
          <li class="contact-detail">
            <span class="contact-detail-icon">📞</span>
            <span>+00 000 000 0000</span>
          </li>
          <li class="contact-detail">
            <span class="contact-detail-icon">📍</span>
            <span>Online · In-Person (Your City)</span>
          </li>
        </ul>
      </div>
      <div class="contact-form-wrap reveal">
        <form class="contact-form" action="mailto:anna.muller.languages@email.com" method="POST" enctype="text/plain">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Your Name *</label>
              <input type="text" id="name" name="Name" placeholder="Jane Smith" required />
            </div>
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input type="email" id="email" name="Email" placeholder="jane@example.com" required />
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number (optional)</label>
            <input type="tel" id="phone" name="Phone" placeholder="+1 234 567 8900" />
          </div>
          <div class="form-group">
            <label for="language">Language you're interested in *</label>
            <select id="language" name="Language" required>
              <option value="" disabled selected>Select a language…</option>
              <option value="English">English 🇬🇧</option>
              <option value="German">German 🇩🇪</option>
              <option value="Hungarian">Hungarian 🇭🇺</option>
              <option value="Romanian">Romanian 🇷🇴</option>
              <option value="Not sure">Not sure yet</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Your Message *</label>
            <textarea id="message" name="Message" rows="4" placeholder="Tell me a bit about your goals and current level…" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary form-submit">Send a Message →</button>
        </form>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add footer HTML (replace `<!-- Footer -->` comment)**

```html
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <span class="footer-name">Anna Müller</span>
      <span class="footer-tagline">Language Teacher · English · German · Hungarian · Romanian</span>
    </div>
    <div class="footer-social" aria-label="Social media">
      <a href="#" aria-label="Facebook" class="social-link">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href="#" aria-label="Instagram" class="social-link">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="#" aria-label="LinkedIn" class="social-link">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
    <p class="footer-copy">© 2026 Anna Müller. All rights reserved.</p>
  </div>
</footer>
```

- [ ] **Step 3: Add contact and footer CSS**

```css
/* ── Contact ── */
.contact-inner { display: grid; grid-template-columns: 1fr 1.3fr; gap: 72px; align-items: start; }

.contact-intro { color: rgba(255,255,255,.7); line-height: 1.8; margin: 16px 0 32px; font-size: 1rem; }
.contact-details { list-style: none; display: flex; flex-direction: column; gap: 14px; }
.contact-detail { display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,.75); font-size: 0.95rem; }
.contact-detail-icon { font-size: 1.2rem; flex-shrink: 0; }

.contact-form-wrap { background: white; border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-lg); }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.form-group label { font-size: 0.85rem; font-weight: 600; color: var(--primary); }
.form-group input, .form-group select, .form-group textarea {
  padding: 12px 16px; border: 1.5px solid var(--border); border-radius: 8px;
  font-family: 'Inter', sans-serif; font-size: 0.95rem; color: var(--text);
  background: var(--bg); transition: border-color var(--transition);
  outline: none;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(240,165,0,.15);
}
.form-group textarea { resize: vertical; min-height: 110px; }
.form-submit { width: 100%; justify-content: center; padding: 16px; font-size: 1rem; margin-top: 4px; }

@media (max-width: 768px) {
  .contact-inner { grid-template-columns: 1fr; gap: 40px; }
  .form-row { grid-template-columns: 1fr; }
}

/* ── Footer ── */
.footer { background: #111827; padding: 40px 0; }
.footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
.footer-brand { display: flex; flex-direction: column; gap: 4px; }
.footer-name { font-family: 'Playfair Display', serif; color: white; font-size: 1.1rem; }
.footer-tagline { font-size: 0.75rem; color: rgba(255,255,255,.4); }
.footer-social { display: flex; gap: 12px; }
.social-link {
  width: 38px; height: 38px; border-radius: 8px;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.6);
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}
.social-link:hover { background: var(--accent); color: var(--primary); }
.footer-copy { color: rgba(255,255,255,.3); font-size: 0.8rem; width: 100%; text-align: center; }

@media (max-width: 600px) {
  .footer-inner { flex-direction: column; text-align: center; align-items: center; }
}
```

- [ ] **Step 4: Verify in browser**

- Dark navy contact section with two columns: info left, white card form right
- Form has name, email, phone, language dropdown, message fields
- Submit opens email client (mailto:)
- Footer is dark with name, social icons, copyright
- Fully stacks on mobile

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: contact section with form and footer"
```

---

### Task 9: Scroll-Reveal Animations + Final Polish

**Files:**
- Modify: `js/main.js` (append scroll-reveal and polish)
- Modify: `css/styles.css` (append stagger delays)

**Interfaces:**
- Consumes: `.reveal` class on all section elements from Tasks 2–8; `#navbar` from Task 2
- Produces: Fully animated page with staggered reveals, consistent spacing and responsive behavior

- [ ] **Step 1: Add scroll-reveal JS to `js/main.js`**

```js
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
```

- [ ] **Step 2: Add active nav link highlighting JS**

Append to `js/main.js`:

```js
// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks2 = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks2.forEach(link => {
        link.classList.toggle('nav-link--active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));
```

- [ ] **Step 3: Add active nav link CSS**

Append to `css/styles.css`:

```css
.nav-link--active { color: white !important; background: rgba(255,255,255,.1) !important; }
```

- [ ] **Step 4: Add section divider between About and Languages**

In `css/styles.css`, append:

```css
/* Smooth section transition */
#about { background: var(--bg); }
#services { background: var(--bg); }
```

- [ ] **Step 5: Final visual QA checklist**

Open the page in a browser and verify each item:

- [ ] Navbar sticks at top and shows shadow after scrolling 20px
- [ ] Mobile hamburger opens/closes nav overlay
- [ ] Hero gradient, floating flag badges, and CTAs all render
- [ ] Hero "Book a Free Trial" and "Learn More" scroll to correct sections
- [ ] About section: two columns on desktop, stacked on mobile
- [ ] Languages: 4-col desktop → 2-col tablet → 1-col mobile
- [ ] Services: 3-col desktop → 2-col tablet → 1-col mobile
- [ ] Why Choose Me: sticky left column + cards on desktop, stacked on mobile
- [ ] Contact form renders correctly, submit opens email client
- [ ] Footer shows name, social icons, copyright
- [ ] All `.reveal` elements animate in on scroll
- [ ] No horizontal scroll on any viewport
- [ ] No console errors

- [ ] **Step 6: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: scroll-reveal animations, active nav highlighting, final polish"
```

---

## Self-Review

**Spec coverage check:**
- Navbar with sticky shadow + mobile menu ✅ Task 2
- Hero with flag badges, headline, two CTAs ✅ Task 3
- About with warm bio, no stat badges, 3 highlights ✅ Task 4
- Languages section 4 cards with level dots ✅ Task 5
- Services section 6 cards ✅ Task 6
- Why Choose Me 3 highlights (not testimonials/results) ✅ Task 7
- Contact form with mailto + footer ✅ Task 8
- Scroll-reveal + responsive ✅ Task 9
- No experience years, student counts, or authority claims ✅ enforced via Global Constraints
- Tone: warm/personal, not corporate ✅ copy in every task
- Color tokens match spec ✅ Task 1 CSS variables
- Google Fonts: Playfair Display + Inter ✅ Task 1

**Placeholder scan:** No TBDs, no "implement later", all steps have actual code. ✅

**Type consistency:** CSS class names consistent across all tasks — `.reveal`, `.container`, `.section`, `.btn`, `.btn-primary`, `.btn-ghost` all defined in Task 1 and used correctly in Tasks 2–9. ✅
