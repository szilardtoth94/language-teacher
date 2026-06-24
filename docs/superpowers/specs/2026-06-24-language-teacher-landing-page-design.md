# Foreign Language Teacher — Landing Page Design Spec

**Date:** 2026-06-24  
**Type:** Static single-page marketing website  
**Goal:** Attract new students to a private language teacher offering English, German, Hungarian, and Romanian lessons.

---

## Context

The teacher is early in their career (authentic beginner, ~2 years experience). The site must NOT display experience metrics or authority-based social proof. Instead, the tone and copy lean into genuine strengths: personal dedication, flexible approach, multilingual breadth, and tailored attention. The page must feel professional and marketable while remaining honest.

---

## Stack

- Pure HTML5 + CSS3 + vanilla JavaScript
- Single `index.html` file (self-contained)
- Google Fonts: `Playfair Display` (headings) + `Inter` (body)
- No frameworks, no backend, no build step
- Deployable as a static file on any host (GitHub Pages, Netlify, etc.)

---

## Visual Identity

| Token | Value |
|---|---|
| Primary | Deep navy `#1a2744` |
| Accent | Warm amber/gold `#f0a500` |
| Background | Off-white `#f9f7f4` |
| Surface | White `#ffffff` |
| Text | Dark slate `#2d3748` |
| Text muted | `#718096` |

**Tone:** Warm, friendly, professional. Never corporate. Never boastful.  
**Motion:** Subtle CSS scroll-reveal animations. Smooth scroll navigation.  
**Responsive:** Mobile-first, fully responsive at all breakpoints.

---

## Sections

### 1. Navbar
- Sticky, slim bar with subtle drop-shadow on scroll
- Left: placeholder logo / teacher name
- Right: smooth-scroll links — About · Languages · Services · Contact
- Mobile: hamburger menu collapses to full-screen overlay

### 2. Hero
- Full-width gradient background (navy → deep blue-purple)
- Headline: *"Your Personal Guide to a New Language"*
- Subheadline: *"Patient, dedicated, and tailored to you — in English, German, Hungarian, or Romanian."*
- Two CTAs: **"Book a Free Trial Lesson"** (primary, amber) → scrolls to contact | **"Learn More"** (ghost) → scrolls to about
- Four animated language flag badges (🇬🇧 🇩🇪 🇭🇺 🇷🇴) as floating accent elements
- Hero does NOT reference experience years, student counts, or authority claims

### 3. About
- Two-column layout (avatar placeholder left, text right)
- Warm, personal tone: passion for languages, love of teaching, patient approach
- Highlights (icon + text, no numbers):
  - "Personalized lessons for every student"
  - "Flexible scheduling around your life"
  - "Patient, encouraging, supportive"
- No stat badges, no "X years experience" counters

### 4. Languages
- 4 cards in a 2×2 (desktop) / 1-col (mobile) grid
- Languages: English 🇬🇧 · German 🇩🇪 · Hungarian 🇭🇺 · Romanian 🇷🇴
- Each card: flag emoji, language name, short pitch (1–2 sentences), level dots (A1–C2 range offered)
- No "native speaker" or "certified" claims in placeholder copy

### 5. Services
- 6 cards in responsive 3-col (desktop) / 2-col (tablet) / 1-col (mobile) grid
- Services:
  1. Online Lessons — video call, flexible location
  2. In-Person Lessons — local sessions
  3. Exam Prep — Goethe, ECL, IELTS, and others
  4. Business Language — professional vocabulary & communication
  5. Kids & Teenagers — age-appropriate, engaging methods
  6. Conversation Practice — fluency through real dialogue
- Each card: icon (emoji or SVG), title, 2-line description

### 6. Why Choose Me
- 3 horizontal highlight blocks with large icons
  1. **Tailored to You** — every lesson built around the student's goals and pace
  2. **Flexible & Patient** — scheduling that fits your life, teaching that fits your style
  3. **4 Languages, One Teacher** — consistent relationship across all your language needs
- No testimonials, no results/success stories

### 7. Contact
- Two-column layout
- Left: warm invitation paragraph, placeholder email/phone/location icons
- Right: form fields — Name, Email, Phone (optional), Language Interest (dropdown: English / German / Hungarian / Romanian / Not sure yet), Message, Submit
- Form action: `mailto:` (opens email client, no backend required)
- Friendly submit button label: "Send a Message"

### 8. Footer
- Teacher name + tagline
- Placeholder social media icon links (Facebook, Instagram, LinkedIn)
- Copyright line

---

## Copy Tone Guide

| Avoid | Use instead |
|---|---|
| "Expert teacher" | "Dedicated teacher" |
| "Proven results" | "Lessons built around you" |
| "X years experience" | (omit entirely) |
| "Hundreds of students" | (omit entirely) |
| "Native-level proficiency" | (omit entirely) |
| "Certified / qualified" | (omit — placeholder only) |

---

## Out of Scope

- Pricing section (explicitly excluded)
- Testimonials (explicitly excluded)
- Backend form handling
- Blog or content section
- Student portal / login
- Language switcher (deferred to future version)
