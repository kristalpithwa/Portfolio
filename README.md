# ✨ Modern Developer Portfolio & Showcase

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Matter.js-0.19-EB445A?style=for-the-badge" alt="Matter.js" />
</p>

A modern, high-performance, and visually captivating portfolio built with **Next.js 15 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Matter.js** interactive physics.

Designed specifically for Software Engineers, Mobile Developers (React Native / iOS / Android), and Full-Stack Developers to showcase projects, technical skills, open-source contributions, and experience with a sleek, glassmorphic dark-mode aesthetic.

---

## 🌟 Single-File Dynamic Configuration

> **💡 Zero Headaches, Single Source of Truth:**
> You can update your **entire portfolio** (bio, avatar, links, projects, skills, metrics, and SEO) by editing **just one single file**:
> 
> 👉 **[`src/data/portfolioData.tsx`](src/data/portfolioData.tsx)**

No need to search through dozens of components or pages to change your name, email, skills, or projects.

---

## 🚀 Features

- ⚡ **Next.js 15 App Router & React 18**: Server-side rendering, static site generation (SSG) for dynamic project routes (`/project/[id]`), and lightning-fast page loads.
- ⚛️ **Interactive Physics Hero (Matter.js)**: Floating tech bubbles that respond to gravity, mouse movement, and collision physics.
- 🎨 **Modern Glassmorphic Dark UI**: Custom ambient glows, gradient text, smooth micro-interactions, and 100% responsive design.
- 📱 **Featured Projects & Category Filters**: Filter projects (Mobile Apps, NPM Packages, etc.) with rich screenshots and dedicated detail pages.
- 🐙 **Live GitHub Contribution Heatmap**: Real-time GitHub commit calendar integration via `react-github-calendar`.
- 🛠️ **Categorized Tech Stack Bento Grid**: Visual breakdown across Core Mobile, Full-Stack Ecosystem, and Languages/Tools.
- 💼 **Interactive 3D Phone Mockup**: Live animated preview card simulating mobile app interactions.
- 🔍 **Complete SEO & JSON-LD Schemas**: Dynamic OpenGraph previews, Twitter cards, Sitemap, Robots.txt, and Schema.org structured data (Person, Organization, FAQ, Breadcrumbs).

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Physics Engine** | [Matter.js](https://brm.io/matter-js/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Feather & Simple Icons) |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) & [@vercel/speed-insights](https://vercel.com/speed-insights) |

---

## 📁 Project Structure

```text
├── public/                     # Static assets (images, icons, previews)
├── src/
│   ├── app/                    # Next.js App Router pages & SEO
│   │   ├── layout.tsx          # Root layout with SEO & JSON-LD schemas
│   │   ├── page.tsx            # Main portfolio landing page
│   │   ├── opengraph-image.tsx # Dynamic OpenGraph social preview
│   │   ├── project/[id]/       # Dynamic project detail pages
│   │   ├── robots.txt/         # SEO crawler rules
│   │   └── sitemap.xml/        # SEO sitemap generator
│   ├── components/
│   │   ├── common/             # Reusable UI & physics canvas components
│   │   ├── layout/             # Layout components (Navbar, Footer)
│   │   ├── sections/           # Modular homepage sections (Hero, About, Tech, Work, Contact)
│   │   └── ui/                 # Animated UI elements
│   ├── data/
│   │   ├── portfolioData.tsx   # ⭐ MASTER SINGLE SOURCE OF TRUTH DATA FILE
│   │   ├── constants.ts        # Backward-compatibility re-export
│   │   └── projects.tsx        # Backward-compatibility re-export
│   ├── lib/                    # Helper utilities
│   └── types/                  # TypeScript interface definitions
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind styling tokens & keyframes
└── package.json                # Dependencies and scripts
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher (Node.js 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the repository

```bash
git clone https://github.com/kristalpithwa/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## ✏️ How to Customize for Yourself (in 3 Minutes)

All portfolio data, identity, projects, skills, links, stats, and SEO settings are centralized into **one single master data file**:

👉 **[`src/data/portfolioData.tsx`](src/data/portfolioData.tsx)**

Simply open `src/data/portfolioData.tsx` and edit the following sections:

| Section | Description |
| :--- | :--- |
| **`personalInfo`** | Name, initials, roles, email, location, avatar URL, resume link, site URL, and hero bio. |
| **`personalInfo.hero`** | Hero headlines, primary/secondary CTA links, and 3D phone mockup metrics. |
| **`personalInfo.about`** | About section philosophy heading and detailed bio narrative. |
| **`stats`** | Metric counters (years of experience, apps shipped, performance stats). |
| **`keyHighlights`** | Core competency badges, icons, and accent colors. |
| **`socialLinks` & `contactOptions`** | GitHub, LinkedIn, and direct email links/badges. |
| **`techStackSection`** | Categorized skill groups (Mobile, Full-Stack, Languages & Tools) with levels and colors. |
| **`fallingBubbleTech`** | Keywords for the interactive floating physics canvas. |
| **`openSourceSection`** | Your GitHub username for the live contribution calendar. |
| **`PROJECTS`** | Your project showcase items (tags, screenshots, short & full feature descriptions). |
| **`seoConfig`** | Meta title, description, keywords, Twitter handle, and FAQ structured data. |

---

## 🚢 Deployment

### Deploy with Vercel (Recommended)

The easiest way to deploy your Next.js portfolio is with the [Vercel Platform](https://vercel.com/new):

1. Push your code to your GitHub repository.
2. Import your repository to **Vercel**.
3. Vercel will automatically detect Next.js and build your portfolio.
4. Click **Deploy**!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to fork and customize it for your personal portfolio!
