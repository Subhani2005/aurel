# AUREL — Luxury Interior Architecture & Design Studio

> A cinematic, responsive commercial website for **AUREL**, an international luxury interior architecture and design atelier with studios in Milan, New York, London, and Kyoto.

---

## 🏛️ Brand Identity & Aesthetics

- **Warm Ivory:** `#F5F1E9`
- **Soft Beige:** `#E8DED0`
- **Warm Sand:** `#C8B69D`
- **Charcoal:** `#24221F`
- **Deep Brown:** `#46382F`
- **Muted Gold:** `#AD9470`
- **Typography:** *Cormorant Garamond*, *Playfair Display*, and *Manrope*

---

## 🛠️ Technology Stack

- **React.js 18** — Main frontend framework
- **JavaScript (ES6+)** — Application & state logic
- **CSS3 (Custom Modular Stylesheets)** — Pure custom CSS (zero Tailwind CSS), design tokens, and fluid typography
- **React Router DOM v6** — Multi-page client-side routing
- **GSAP & ScrollTrigger** — Advanced scroll reveals and transitions
- **Framer Motion** — Smooth page entries, exits, and interactive states
- **Lenis** — Kinetic smooth scrolling
- **Lucide React** — Minimalist architectural iconography
- **Vite 5** — High-performance build tool & development server

---

## 📂 Project Structure

```
AUREL/
├── public/
│   └── favicon.svg                  # Brand monogram favicon
├── src/
│   ├── components/
│   │   ├── beforeAfter/
│   │   │   ├── ComparisonSlider.jsx # Draggable mouse/touch comparison slider
│   │   │   └── ComparisonSlider.css
│   │   ├── common/
│   │   │   ├── Navbar.jsx           # Floating navigation with scroll states & mobile drawer
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx           # Comprehensive atelier footer & dispatch signup
│   │   │   ├── Footer.css
│   │   │   ├── CustomCursor.jsx     # Magnetic interactive cursor
│   │   │   ├── CustomCursor.css
│   │   │   ├── SmoothScroll.jsx     # Lenis smooth scroll provider
│   │   │   ├── SearchModal.jsx      # Instant live search across all works & styles
│   │   │   ├── SearchModal.css
│   │   │   ├── VideoModal.jsx       # Cinema showreel modal
│   │   │   ├── VideoModal.css
│   │   │   ├── Toast.jsx            # Action & wishlist notifications
│   │   │   └── Toast.css
│   │   ├── home/
│   │   │   ├── HeroSlider.jsx       # Word-by-word reveal & image crossfade hero
│   │   │   ├── HeroSlider.css
│   │   │   ├── FeaturedProjects.jsx # Asymmetrical editorial showcase
│   │   │   ├── FeaturedProjects.css
│   │   │   ├── PhilosophySection.jsx# Split-screen manifesto
│   │   │   ├── PhilosophySection.css
│   │   │   ├── ServicesSection.jsx  # Interactive spatial disciplines with live preview
│   │   │   ├── ServicesSection.css
│   │   │   ├── StatsSection.jsx     # Viewport-triggered animated counters
│   │   │   ├── StatsSection.css
│   │   │   ├── TestimonialsSection.jsx# Patron endorsements slider
│   │   │   ├── TestimonialsSection.css
│   │   │   ├── CtaSection.jsx       # Full-bleed architectural CTA
│   │   │   └── CtaSection.css
│   │   └── projects/
│   │       ├── ProjectCard.jsx      # Masonry card with hover reveals & wishlist
│   │       ├── ProjectCard.css
│   │       ├── FilterBar.jsx        # Category tab selector with counts
│   │       └── FilterBar.css
│   ├── context/
│   │   ├── WishlistContext.jsx      # localStorage-backed saved collection
│   │   └── SearchContext.jsx        # Global modal search state
│   ├── data/
│   │   ├── projectsData.js          # 10 deep architectural monographs
│   │   ├── collectionsData.js       # 6 design style typologies
│   │   ├── servicesData.js          # 6 studio services & deliverables
│   │   ├── transformationsData.js   # 4 before & after transformation cases
│   │   ├── testimonialsData.js      # Client reviews & credentials
│   │   ├── studioData.js            # Manifesto, team, process, milestones & locations
│   │   └── statsData.js             # Numerical achievements
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectsPage.css
│   │   ├── ProjectDetailPage.jsx
│   │   ├── ProjectDetailPage.css
│   │   ├── CollectionsPage.jsx
│   │   ├── CollectionsPage.css
│   │   ├── BeforeAfterPage.jsx
│   │   ├── BeforeAfterPage.css
│   │   ├── WishlistPage.jsx
│   │   ├── WishlistPage.css
│   │   ├── AboutPage.jsx
│   │   ├── AboutPage.css
│   │   ├── ContactPage.jsx
│   │   └── ContactPage.css
│   ├── styles/
│   │   ├── variables.css            # Luxury color tokens, typography & spacing
│   │   ├── global.css               # Architectural resets & utility classes
│   │   └── animations.css          # Keyframe micro-animations & transitions
│   ├── App.jsx                      # Route definitions & Framer Motion transitions
│   ├── App.css
│   └── main.jsx                     # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build production bundle:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## ✨ Key Features & UX Implementations

1. **Full-screen Hero Slider with Word-by-Word Text Reveal:**
   - 4 high-resolution interior photographs with slow zoom and crossfade.
   - Heading reveals word-by-word with staggered CSS animation timing.
   - Cinema showreel video modal with playback controls and ambient audio toggle.
2. **Asymmetrical Projects Showcase:**
   - Varied aspect ratios (monolith, tall, standard, wide) avoiding repetitive card templates.
   - Interactive category filtering with real-time project counts.
3. **Comprehensive Project Detail Monographs:**
   - Location, scale, year, duration, client scope.
   - Spatial narrative, design inspiration, and architectural engineering highlights.
   - Material swatch cards with tactile color swatches.
   - Chromatic palette chips with hex values and mood notes.
   - High-resolution gallery with full-screen lightbox inspection.
   - Previous and Next project pager navigation.
4. **Draggable Before & After Room Transformation Slider:**
   - Real-time mouse and touch drag slider with percentage clipping.
   - 4 distinct transformation case studies with architectural changes checklist.
5. **Persistent Wishlist Dossier:**
   - Heart button on every card toggles saved status.
   - Synced with browser `localStorage`.
   - Toast feedback notifications on add/remove.
   - Dedicated Wishlist gallery with empty state and direct consultation booking.
6. **Consultation Enquiry Flow:**
   - Strict field validation (name, email, phone, location, description).
   - Real-time error messages.
   - Generates an encrypted reference ID and stores enquiries in `localStorage`.
   - Displays a confirmation summary card with project details.
7. **Brand Storytelling & Architectural Process:**
   - Studio manifesto and four-stage design methodology.
   - Team profiles with editorial portraits and bios.
   - Milestones timeline from 2006 to present.
   - Interactive FAQ accordion.
