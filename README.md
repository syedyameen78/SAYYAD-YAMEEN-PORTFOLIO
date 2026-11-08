# SAYYAD YAMEEN — Premium Personal Portfolio Website

An international design-agency-grade personal portfolio engineered for **SAYYAD YAMEEN** — AI & ML Developer, Data Science Student, Python Developer, and UI/UX Designer.

Built with modern high-performance technologies: **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🌟 Brand Identity & Tagline

- **Name:** SAYYAD YAMEEN
- **Brand Logo:** `SY. | SAYYAD YAMEEN`
- **Brand Tagline:** *"Think. Design. Develop. Innovate."*
- **Headline:** *"Building Intelligent Solutions & Beautiful Digital Experiences."*

---

## 🎨 Design Theme & System

- **Deep Black:** `#030712`, `#060a16`
- **Midnight Navy:** `#0b132b`, `#0c1735`
- **Electric Blue:** `#2563eb`, `#3b82f6`
- **Radiant Violet:** `#8b5cf6`, `#7c3aed`
- **Cyan Accents:** `#06b6d4`, `#00f2fe`
- **Glassmorphism:** Frosted translucent panels with 16px blur, subtle border glow, and ambient radial light orbs.

---

## 📸 The 4 Original Photographs

All 4 genuine photographs are integrated without AI face modification or distortion:
- `public/images/yameen-hero.jpg` — Main hero profile photograph (Daytime mountain horizon with light blue sweatshirt).
- `public/images/yameen-about.jpg` — About Me section (Black jacket, sunglasses overlooking cloud sea).
- `public/images/yameen-gallery.png` — Personal photography gallery (Smiling at sunrise over foggy forested valleys).
- `public/images/yameen-sunset.png` — Inspiration background & gallery featured panoramic (Golden hour sunset sitting atop summit ridge over clouds).

---

## 🚀 Sections & Features

1. **Top Reading Progress Bar:** Real-time gradient indicator tracking scroll position.
2. **Interactive Background:** Dynamic HTML5 canvas particles, futuristic tech grid, and ambient glowing orbs.
3. **Sticky Navigation Bar:** Section spy highlighting, blur backdrop, mobile drawer with hamburger animation.
4. **Hero Section:** Smooth typing role cycler, prominent portrait framing with glowing cyan aura, CTA buttons, verified social links, and floating tech badges.
5. **About Me:** Editorial layout, original photograph with tagline, 5 interactive focus cards, and expandable "Read Full Philosophy" modal.
6. **Technical Toolkit:** 4 structured categories (Programming, AI & Data Science, Web Development, UI/UX Design) with category filtering and zero fake proficiency percentages.
7. **Featured Projects:**
   - **01 AI-BASED ROBOT:** Voice control, object detection, obstacle avoidance, automated navigation + interactive simulator.
   - **02 MOVIE REVIEW ANALYZER USING ML:** Sentiment prediction, confidence score, text classifier + live in-modal review analyzer.
   - **03 RESUME BUILDER:** Form fields, templates, live preview, and vector PDF export.
   - **04 PERSONAL PORTFOLIO:** Agency-grade React architecture and design token inspector.
8. **UI/UX Design Showcase:** Separate dedicated interface design portfolio featuring AI Research Dashboard, PulseHealth mobile companion, Quantum design system, and ApexFlow FinTech platform with modal inspection.
9. **Education Journey:** Animated interactive timeline showcasing **B.Tech in Data Science** and **Diploma in Artificial Intelligence & Machine Learning**.
10. **Beyond The Code:** Personal photography gallery with cinematic layouts, metadata, and full-screen image lightbox.
11. **What Inspires Me:** Cinematic sunset background with cards covering Artificial Intelligence, Emerging Tech, Machine Learning, Data Science, Software Development, UI/UX Design, and Innovation.
12. **Verified Resume:** Document summary card, in-browser full view, and verified one-click PDF download (`public/resume/sayyad-yameen-resume.pdf`).
13. **Contact Section:**
    - Validated form (Name, Email, Subject, Message) with anti-spam honeypot.
    - Integrated with **EmailJS** (`@emailjs/browser`) with automated fallback and direct mail trigger.
    - Prominent **WhatsApp Me** click-to-chat integration (`wa.me` with prefilled greeting).
14. **Footer:** Quick links, dynamic copyright year, personal tagline, and Back-to-Top smooth scroll.

---

## 🛠️ Quickstart & Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration & Environment Variables

Copy `.env.example` to `.env`:
```env
# EmailJS Setup (Optional for direct email sending)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Contact Information
VITE_WHATSAPP_NUMBER=919876543210
VITE_CONTACT_EMAIL=sayyadyameen.dev@gmail.com
VITE_GITHUB_URL=https://github.com
VITE_LINKEDIN_URL=https://linkedin.com
```

---

## 🚢 Deployment to Vercel

1. Push this project to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Set the build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Under **Environment Variables**, add any custom keys from your `.env`.
6. Click **Deploy**. Your portfolio will be live with free global CDN and HTTPS!
