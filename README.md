# Nash — Personal Developer Portfolio

A modern, premium, visually captivating, and fully responsive personal developer portfolio engineered with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Built with a focus on frontend craftsmanship, real-world information systems, dual-theme architecture with automatic profile picture switching, and zero-configuration production deployment on **Vercel** and **GitHub**.

---

## 🌟 Key Features

- **Dual-Theme Engine (Dark & Light Mode)**:
  - Persistent state via `localStorage` with OS `prefers-color-scheme` initial detection.
  - Zero-flash inline theme loader in `index.html`.
  - Sophisticated custom palettes (Dark: `#08090C`, `#111318`, `#161920` with `#00E5A8` emerald glow; Light: `#F8FAFC`, `#FFFFFF` with `#059669` emerald accents).
- **Dual Profile Pictures**:
  - Automatically loads `/images/profile-dark.png` in Dark Mode and `/images/profile-light.png` in Light Mode.
  - Seamless animated transition without layout shifts.
  - Graceful fallback: If an image fails to load, gracefully displays the alternative asset or avatar without breaking layout.
- **Featured Information Systems & Case Studies**:
  - **DesinioKoleksyon**: Printing Services Management & Point-of-Sale (POS) System (React, Supabase, PostgreSQL).
  - **Rice Mill By-Product Management System**: Bulk inventory & delayed receivables ledger (React, PHP, MySQL).
  - **Barangay Kinilis Digital Governance Portal**: Community clearances, resident tracking, and public announcements (React, Supabase, Vercel).
  - **Nexus Hub — Digital HQ**: Enterprise digital workplace with Role-Based Access Control (RBAC) and audit logging.
- **Dual Case-Study Experience**:
  - Interactive in-page modal dialog.
  - Direct URL navigation (`/project/:id`) with Vercel SPA rewrites configured in `vercel.json`.
- **Organized Technical Skills Matrix**:
  - Categorized into Frontend, Backend & Database, Development Tools, Deployment, and UI/UX.
  - Transparent skill level badges (*Experienced*, *Familiar*, *Currently Learning*).
- **GitHub Showcase**:
  - Live public repository card integration with automatic rate-limit fallback.
  - Simulated contribution frequency heat-grid.
- **Production Contact Form**:
  - Client-side validation (name, email format, subject, message length).
  - Web3Forms / Formspree support configurable via `.env`.
  - Interactive loading spinner, success toast, and error messaging.

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS
- **Animation**: [Framer Motion 11](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM 6](https://reactrouter.com/)
- **Typography**: Google Fonts (*Space Grotesk*, *Inter*, *JetBrains Mono*)
- **Deployment**: Vercel & GitHub Pages

---

## 📁 Directory Structure

```text
nash-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   ├── images/
│   │   ├── profile-dark.png
│   │   └── profile-light.png
│   └── projects/
│       ├── desinio.png
│       ├── ricemill.png
│       ├── barangay.png
│       └── nexushub.png
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── GithubShowcase.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socialLinks.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── ProjectDetails.jsx
│   ├── utils/
│   │   └── theme.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/kenntott/nash-portfolio.git
cd nash-portfolio
npm install
```

### 3. Environment Variables (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your free Web3Forms Access Key from [web3forms.com](https://web3forms.com) to enable live email delivery:
```env
VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🎨 Customizing Your Portfolio

1. **Replace Profile Pictures**:
   - Dark theme avatar: Place your dark-mode styled photo at `public/images/profile-dark.png`.
   - Light theme avatar: Place your light-mode styled photo at `public/images/profile-light.png`.
2. **Personal Information**:
   - Edit name, title, bio, email, and social links in [`src/data/socialLinks.js`](file:///c:/xampp/htdocs/nash-portfolio/src/data/socialLinks.js).
3. **Projects Showcase**:
   - Update descriptions, features, live URLs, or GitHub links in [`src/data/projects.js`](file:///c:/xampp/htdocs/nash-portfolio/src/data/projects.js).
4. **Skills & Tech Stack**:
   - Adjust proficiency categories (*Experienced*, *Familiar*, *Currently Learning*) in [`src/data/skills.js`](file:///c:/xampp/htdocs/nash-portfolio/src/data/skills.js).
5. **Resume**:
   - Drop your updated PDF at `public/resume.pdf`.

---

## 🌐 Deployment to Vercel

This repository is optimized for one-click deployment on **Vercel**:
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

> `vercel.json` is preconfigured with SPA rewrites so direct navigation to `/project/:id` functions without 404 errors.

---

## 📄 License
MIT License. Created by Nash.
