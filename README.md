# ✨ Modern Developer Portfolio

A modern, high-performance, and visually captivating portfolio built with **Next.js 15 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Matter.js** interactive physics.

Designed specifically for Software Engineers, Mobile Developers (React Native / iOS / Android), and Frontend Developers to showcase projects, technical skills, open-source work, and experience with a polished, glassmorphic dark-mode aesthetic.

---

## 🚀 Features

- ⚡ **Next.js 15 App Router & React 18**: Server-side rendering, static generation (SSG) for project dynamic routes, and fast page loads.
- ⚛️ **Interactive Physics Hero (Matter.js)**: Fun, interactive physics-based floating skill badges that respond to gravity and user interaction.
- 🎨 **Modern Glassmorphic Dark UI**: Custom gradients, glowing borders, smooth micro-interactions, and responsive layout powered by Tailwind CSS & Framer Motion.
- 📱 **Featured Projects & Filter Tabs**: Filter projects by category (Mobile Apps, NPM Packages, etc.) with dedicated dynamic project detail pages (`/project/[id]`).
- 🐙 **GitHub Contributions Heatmap**: Live GitHub activity calendar integration via `react-github-calendar`.
- 🛠️ **Categorized Tech Stack Grid**: Interactive tech breakdown across Core Mobile, Frameworks, State Management, Architecture, and DevOps.
- 💼 **Resume & Social Links**: Quick access to Google Drive resume/portfolio drive links, LinkedIn, GitHub, and email contact forms.
- 🔍 **SEO & Performance Ready**: OpenGraph metadata, dynamic OG image generation, Sitemap, Robots.txt, and Vercel Analytics/Speed Insights integrated.

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
├── public/                     # Static assets (images, icons, resume)
├── src/
│   ├── app/                    # Next.js App Router pages & metadata
│   │   ├── layout.tsx          # Root layout with SEO & global providers
│   │   ├── page.tsx            # Main portfolio homepage
│   │   ├── opengraph-image.tsx # Dynamic OpenGraph social preview image
│   │   ├── project/[id]/       # Dynamic project detail pages
│   │   ├── robots.txt/         # SEO robots configuration
│   │   └── sitemap.xml/        # SEO sitemap configuration
│   ├── components/
│   │   ├── common/             # Reusable UI components (Footer, etc.)
│   │   ├── layout/             # Layout components (Navbar, etc.)
│   │   ├── sections/           # Homepage sections
│   │   │   ├── Hero.tsx        # Hero with Matter.js physics badges
│   │   │   ├── AboutMe.tsx     # Bio, highlights, and profile picture
│   │   │   ├── TechStack.tsx   # Skill grid and competencies
│   │   │   ├── FeaturedWork.tsx# Project portfolio cards & filtering
│   │   │   ├── OpenSource.tsx  # GitHub calendar and contributions
│   │   │   └── Contact.tsx     # Contact details & links
│   │   └── ui/                 # Atomic UI components
│   ├── data/
│   │   ├── constants.ts        # Stats, contact links, key highlights
│   │   └── projects.tsx        # Projects data and showcase items
│   └── lib/                    # Utility functions
├── next.config.mjs             # Next.js configuration & image domains
├── tailwind.config.js          # Tailwind CSS custom themes & animations
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

Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## ✏️ How to Customize for Yourself

You can easily adapt this portfolio to your own profile by modifying a few configuration files:

### 1. Update Personal Info & Social Links
Open [`src/data/constants.ts`](file:///src/data/constants.ts):
- Update `stats` (years of experience, apps shipped, etc.).
- Update `contactOptions` (email, LinkedIn username/URL, GitHub username/URL).
- Update `keyHighlights` (your specialties and key domains).

### 2. Update Projects
Open [`src/data/projects.tsx`](file:///src/data/projects.tsx):
- Edit or add your projects with title, description, category (`apps`, `packages`), screenshots, tech tags, and live/GitHub/App Store links.

### 3. Update Profile Picture & About Me
Open [`src/components/sections/AboutMe.tsx`](file:///src/components/sections/AboutMe.tsx):
- Replace the image `src` with your own image URL or place your image in `public/` (e.g. `/profile.jpg`).
- Edit the bio text and engineering philosophy to match your experience.

### 4. Update Resume / Google Drive Link
Open [`src/components/layout/Navbar.tsx`](file:///src/components/layout/Navbar.tsx) and [`src/components/sections/Hero.tsx`](file:///src/components/sections/Hero.tsx):
- Replace `googleDriveLink` with your own Google Drive resume/portfolio folder or direct PDF link.

### 5. Update GitHub Activity Heatmap
Open [`src/components/sections/OpenSource.tsx`](file:///src/components/sections/OpenSource.tsx):
- Change `username="kristalpithwa"` to your GitHub username.

### 6. Update SEO & Metadata
Open [`src/app/layout.tsx`](file:///src/app/layout.tsx):
- Update `metadata` title, description, OpenGraph tags, and canonical website URL.

---

## 🚢 Deployment

### Deploy with Vercel (Recommended)

The easiest way to deploy your Next.js portfolio is with the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub/GitLab repository.
2. Import your repository to **Vercel**.
3. Vercel will automatically detect Next.js and build your portfolio.
4. Click **Deploy**!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to fork and customize it for your personal portfolio!
