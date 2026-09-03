import React from "react";
import {
  FiSmartphone,
  FiCpu,
  FiCode,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiLayout,
  FiServer,
} from "react-icons/fi";
import {
  SiApple,
  SiAndroid,
  SiReact,
  SiExpo,
  SiXcode,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import {
  Project,
  StatItem,
  KeyHighlight,
  SocialLink,
  ContactOption,
  TechCategory,
  NavLinkItem,
  FAQItem,
} from "@/types";

/**
 * ==============================================================================
 * 🌟 PORTFOLIO MASTER DATA FILE
 * ==============================================================================
 * Everything you need to customize your portfolio is in this single file!
 * Simply update the values below to personalize your portfolio website.
 * ==============================================================================
 */

export const personalInfo = {
  // Basic Identity
  name: "Kristal Pithwa",
  firstName: "Kristal",
  lastName: "Pithwa",
  initials: "KP",
  role: "Expert Mobile Developer & React Native Specialist",
  shortRole: "Senior Mobile Engineer",
  jobTitle: "Senior Mobile Developer",
  statusBadge: "Available for new mobile projects & contract",
  avatar: "https://lh3.googleusercontent.com/d/1ZTxWFS8pLTLI_k1n2bn_MU_1MQPFfMfY",
  email: "crystalpithwa@gmail.com",
  location: "Remote",
  resumeUrl:
    "https://drive.google.com/drive/folders/19cMUgW-c2jWw7XNj3_33FYw7Q4_Q-aH9?usp=drive_link",
  websiteUrl: "https://kristalpithwa.vercel.app",

  // Hero Section Customization
  hero: {
    headlinePrefix: "Kristal",
    headlineSuffix: "Pithwa.",
    subheadline: "Expert Mobile Developer & React Native Specialist",
    bio: "I architect and ship high-performance mobile applications for iOS & Android. With 5+ years of production experience, I specialize in 60fps animations, cross-platform architecture, and publishing to the App Store & Google Play.",
    primaryCtaText: "Explore Featured Apps",
    primaryCtaLink: "#work",
    secondaryCtaText: "Copy Email",
    contactCtaText: "Get In Touch →",
    contactCtaLink: "#contact",

    // Interactive 3D Phone Mockup on Hero
    mockup: {
      ownerName: "Kristal Pithwa",
      ownerRole: "Mobile Architect",
      statLeft: { label: "Apps Built", value: "20+ Production" },
      statRight: { label: "Frame Rate", value: "60 FPS Native" },
      featuredAppTitle: "RecordSocial",
      featuredAppBadge: "Live",
      featuredAppSubtitle: "GPS Music Radar • 1.2k Active",
      performanceLabel: "Reanimated 3 UI",
      performanceValue: "100% Smooth",
      badgeTop: { value: "5+ Years", label: "React Native Specialist" },
      badgeBottom: { value: "iOS & Android", label: "App Store Deployed" },
    },
  },

  // About Me Section Customization
  about: {
    sectionTag: "About Kristal",
    philosophyTag: "Engineering Philosophy",
    title: "Crafting fluid, high-performance mobile experiences.",
    bio: "With over 5+ years of specialized mobile development, I bridge the gap between design vision and technical execution. I build production-grade applications using React Native, TypeScript, and native bridges, focusing on silky 60fps animations, intuitive UX, and clean architecture.",
  },
};

/**
 * 📊 Statistics / Key Metrics
 */
export const stats: StatItem[] = [
  { value: "5+", label: "Years Experience", desc: "Mobile Development" },
  { value: "20+", label: "Apps Shipped", desc: "iOS & Android" },
  { value: "100%", label: "App Store Ready", desc: "Clean Submissions" },
  { value: "60fps", label: "Performance", desc: "Smooth UX & UI" },
];

/**
 * ✨ Key Highlights & Badges
 */
export const keyHighlights: KeyHighlight[] = [
  {
    label: "React Native & Expo Specialist",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    label: "Native iOS & Android Modules",
    icon: SiApple,
    color: "text-slate-200",
  },
  {
    label: "60 FPS Reanimated 3 Animations",
    icon: FiCpu,
    color: "text-purple-400",
  },
  {
    label: "App Store & Google Play Deployment",
    icon: FiSmartphone,
    color: "text-emerald-400",
  },
  {
    label: "TypeScript & Scalable Architecture",
    icon: FiCode,
    color: "text-blue-400",
  },
];

/**
 * 🧭 Navigation Bar Links
 */
export const navLinks: NavLinkItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Tech", href: "#tech", id: "tech" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

/**
 * 🌐 Social Profiles
 */
export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/kristalpithwa",
    icon: FiGithub,
    label: "GitHub",
    hover: "hover:text-white hover:border-white/20",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/kristal-pithwa",
    icon: FiLinkedin,
    label: "LinkedIn",
    hover: "hover:text-cyan-400 hover:border-cyan-400/30",
    target: "_blank",
  },
  {
    href: "mailto:crystalpithwa@gmail.com",
    icon: FiMail,
    label: "Email",
    hover: "hover:text-purple-400 hover:border-purple-400/30",
  },
];

/**
 * 📬 Contact Options & Cards
 */
export const contactOptions: ContactOption[] = [
  {
    href: "mailto:crystalpithwa@gmail.com",
    icon: FiMail,
    label: "Direct Email",
    value: "crystalpithwa@gmail.com",
    badge: "Fastest response",
    accent: "group-hover:text-cyan-400",
    border: "hover:border-cyan-500/40",
  },
  {
    href: "https://www.linkedin.com/in/kristal-pithwa",
    icon: FiLinkedin,
    label: "LinkedIn Profile",
    value: "kristal-pithwa",
    badge: "Connect & Chat",
    accent: "group-hover:text-blue-400",
    border: "hover:border-blue-500/40",
    external: true,
  },
  {
    href: "https://github.com/kristalpithwa",
    icon: FiGithub,
    label: "GitHub Repositories",
    value: "kristalpithwa",
    badge: "Open Source & Code",
    accent: "group-hover:text-purple-400",
    border: "hover:border-purple-500/40",
    external: true,
  },
];

export const contactSection = {
  sectionTag: "Let's Connect",
  subtitleTag: "Start a Conversation",
  heading: "Have a Mobile App Idea?",
  highlight: "Let's Build It.",
  description:
    "Whether you need a brand-new React Native app from scratch, performance optimization for an existing codebase, or an experienced developer for your team — I'm here to help.",
  email: "crystalpithwa@gmail.com",
  statusText:
    "Current Status: Open to Opportunities • Replies within 24 Hours",
};

/**
 * 🛠️ Technical Stack & Categorized Skills
 */
export const techStackSection = {
  sectionTag: "Technical Arsenal",
  subtitleTag: "Skills & Capabilities",
  title: "Technologies I Master",
  description:
    "Specialized in high-performance mobile architectures, native bridging, and modern full-stack web standards.",
  categories: [
    {
      title: "Core Mobile Development",
      icon: FiSmartphone,
      description:
        "Engineering production-grade iOS & Android applications with React Native, Expo, and fluid 60fps native interactions.",
      accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
      border: "border-cyan-500/30",
      skills: [
        {
          name: "React Native",
          level: "Expert",
          icon: SiReact,
          color: "#61DAFB",
        },
        { name: "Expo", level: "Expert", icon: SiExpo, color: "#FFFFFF" },
        {
          name: "iOS / Xcode",
          level: "Advanced",
          icon: SiXcode,
          color: "#1575F9",
        },
        {
          name: "Android",
          level: "Advanced",
          icon: SiAndroid,
          color: "#3DDC84",
        },
      ],
    },
    {
      title: "Frontend & Backend Ecosystem",
      icon: FiLayout,
      description:
        "Building full-stack web architectures with high-performance React/Next.js interfaces and robust Node.js/Express services.",
      accent: "from-purple-500/20 via-indigo-500/10 to-transparent",
      border: "border-purple-500/30",
      skills: [
        { name: "React", level: "Expert", icon: SiReact, color: "#61DAFB" },
        {
          name: "Node.js",
          level: "Expert",
          icon: SiNodedotjs,
          color: "#5FA04E",
        },
        {
          name: "Express.js",
          level: "Expert",
          icon: SiExpress,
          color: "#FFFFFF",
        },
        {
          name: "Next.js",
          level: "Advanced",
          icon: SiNextdotjs,
          color: "#FFFFFF",
        },
      ],
    },
    {
      title: "Languages, State & Design Systems",
      icon: FiServer,
      description:
        "Type-safe software design with TypeScript/JavaScript, centralized state with Redux, and modern styling via Tailwind CSS.",
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
      border: "border-emerald-500/30",
      skills: [
        {
          name: "TypeScript",
          level: "Expert",
          icon: SiTypescript,
          color: "#3178C6",
        },
        {
          name: "JavaScript",
          level: "Expert",
          icon: SiJavascript,
          color: "#F7DF1E",
        },
        {
          name: "Tailwind CSS",
          level: "Advanced",
          icon: SiTailwindcss,
          color: "#06B6D4",
        },
        {
          name: "Redux Toolkit",
          level: "Expert",
          icon: SiRedux,
          color: "#764ABC",
        },
      ],
    },
  ] as TechCategory[],
};

/**
 * 🎈 Floating Bubble Canvas Words
 */
export const fallingBubbleTech: string[] = [
  "React Native",
  "Expo",
  "Next.js",
  "TypeScript",
  "React",
  "JavaScript",
  "Tailwind",
  "Redux",
  "iOS",
  "Android",
  "Firebase",
  "Git",
  "Node.js",
  "GraphQL",
  "Swift",
  "Kotlin",
  "CI/CD",
  "REST API",
  "Docker",
];

/**
 * 🐙 Open Source Activity & GitHub Calendar
 */
export const openSourceSection = {
  sectionTag: "Open Source Activity",
  subtitleTag: "Continuous Shipping",
  title: "GitHub Contribution Activity",
  description:
    "Consistent code commits, open-source packages, and real-world mobile app maintenance.",
  githubUsername: "kristalpithwa",
  githubProfileUrl: "https://github.com/kristalpithwa",
};

/**
 * 💼 Featured Projects
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "React Native LinkedIn Login (Library)",
    tags: ["React-Native", "TypeScript", "NPM Package", "Auth"],
    link: "https://www.npmjs.com/package/@kristalpithwa/react-native-linkedin-login",
    color: "border-blue-500",
    images: [],
    shortDescription:
      "A React Native library that simplifies LinkedIn login integration using a WebView modal. It provides a ready-to-use component for handling TypeScript-based authentication flows with ease.",
    fullDescription: (
      <>
        <p>
          I developed this library to solve the complexity of integrating
          LinkedIn OAuth2 authentication in React Native apps. Existing
          solutions were often outdated or lacked proper TypeScript support.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Easy Integration:</strong> Drop-in component that handles
            the entire login flow.
          </li>
          <li>
            <strong>TypeScript Support:</strong> Fully typed props and
            responses.
          </li>
          <li>
            <strong>WebView Based:</strong> Uses{" "}
            <code>react-native-webview</code> for a seamless in-app experience.
          </li>
          <li>
            <strong>Customizable:</strong> Supports custom styling and container
            configurations.
          </li>
        </ul>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Usage Example
        </h3>
        <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-white/10">
          <pre>
            {`<LinkedInModal
  clientID="YOUR_CLIENT_ID"
  clientSecret="YOUR_CLIENT_SECRET"
  redirectUri="YOUR_REDIRECT_URI"
  onSuccess={(token) => console.log(token)}
/>`}
          </pre>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "React Native Open Street Map View (Library)",
    tags: [
      "React-Native",
      "OpenStreetMap",
      "Maps",
      "TypeScript",
      "NPM Package",
    ],
    link: "https://www.npmjs.com/package/react-native-open-street-map-view",
    color: "border-emerald-500",
    images: [],
    shortDescription:
      "A React Native component for rendering OpenStreetMap on Android and iOS. It serves as a drop-in replacement for Google Maps, offering features like zoom, routing, and markers.",
    fullDescription: (
      <>
        <p>
          This package allows developers to integrate OpenStreetMap (OSM) into
          their React Native applications without relying on Google Maps API
          keys for basic usage. It wraps native map implementations to provide a
          consistent JS API.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Why OpenStreetMap?
        </h3>
        <p>
          OpenStreetMap is a free, editable map of the whole world that is being
          built by volunteers predominantly from scratch and released with an
          open-content license.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Component Features
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Zoom & Pan:</strong> Smooth intuitive map interactions.
          </li>
          <li>
            <strong>Markers:</strong> Add custom markers to specific
            coordinates.
          </li>
          <li>
            <strong>Polylines:</strong> Draw routes and shapes on the map.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Works on both iOS and Android.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Social Music App - Dedicated Developer",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "Firebase",
      "Spotify SDK",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/in/app/record-social/id6446630104",
    color: "border-blue-500",
    images: [
      "/images/RecordSocial/230x498bb.webp",
      "/images/RecordSocial/230x498bb (1).webp",
      "/images/RecordSocial/230x498bb (2).webp",
      "/images/RecordSocial/230x498bb (3).webp",
      "/images/RecordSocial/230x498bb (4).webp",
    ],
    shortDescription:
      "The Social Music App is the ultimate social platform for music enthusiasts worldwide, designed to connect friends based on music taste with GPS features.",
    fullDescription: (
      <>
        <p>
          As the dedicated developer, I built the &quot;Social Music App&quot;
          to be the ultimate social platform for music enthusiasts. It features
          a stunning user interface designed to connect friends based on their
          music preferences.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Core Functionalities
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Spotify Integration:</strong> Users can share and listen to
            tracks directly within the app.
          </li>
          <li>
            <strong>Geolocation:</strong> A GPS feature allows users to see what
            music is trending around them, from schools to workplaces.
          </li>
          <li>
            <strong>Real-time Chat:</strong> Connect with other music lovers
            instantly.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Clinic System App - Dedicated Developer",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "Firebase",
      "Spotify SDK",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/us/app/validi-clinic-system/id1049757545",
    color: "border-purple-500",
    images: [
      "/images/Validi/230x498bb.webp",
      "/images/Validi/230x498bb (1).webp",
      "/images/Validi/230x498bb (2).webp",
      "/images/Validi/230x498bb (5).webp",
    ],
    shortDescription:
      "Clinic Management System App designed for registered staff, providing seamless access to client profiles, medical history, and detailed journal entries.",
    fullDescription: (
      <>
        <p>
          Designed and developed for registered medical staff, this application
          provides seamless access to client profiles and enables the creation
          of detailed journal entries.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          System Capabilities
        </h3>
        <p>Profiles include vital information such as:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Medical History</li>
          <li>Prescribed Treatments</li>
          <li>Allergies</li>
          <li>Emergency Contacts</li>
        </ul>
        <p className="mt-4">
          The app ensures data security and compliance while improving the
          efficiency of clinic operations.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Learning App for students",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "ChatGPT",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/us/app/adaptive-instruction-advisor/id6461770153?uo=2",
    color: "border-purple-500",
    images: [
      "/images/AIA/230x498bb.webp",
      "/images/AIA/230x498bb (1).webp",
      "/images/AIA/230x498bb (2).webp",
      "/images/AIA/230x498bb (3).webp",
    ],
    shortDescription:
      "Adaptive learning applications help students of all ages improve their writing skills with AI-powered instant feedback on responses.",
    fullDescription: (
      <>
        <p>
          This adaptive learning application mimics a personal tutor for writing
          skills. By leveraging Artificial Intelligence, specifically ChatGPT
          integration, the program provides instant, personalized feedback on
          student responses to writing prompts.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Adaptive Learning
        </h3>
        <p>
          The system adapts to the student&apos;s writing style, providing
          progressively more challenging prompts and feedback as the
          student&apos;s skills improve. It tracks progress over time and offers
          insights to teachers and parents.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Battle Rap Live App - Dedicated Developer",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "Firebase",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/us/app/battleraplive/id346512771",
    color: "border-yellow-500",
    images: [
      "/images/BRL/230x498bb.webp",
      "/images/BRL/230x498bb (1).webp",
      "/images/BRL/230x498bb (2).webp",
      "/images/BRL/230x498bb (4).webp",
    ],
    shortDescription:
      "Discover your rap potential with BattleRapLive, the ultimate freestyle and battle rap app. Designed to awaken the MC within.",
    fullDescription: (
      <>
        <p>
          BattleRapLive brings a mobile recording studio right to your pocket.
          Whether you&apos;re a seasoned rapper or a newcomer looking to step
          into the cypher, this app is perfect for every skill level.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Mobile Studio:</strong> High-quality voice recording with
            beat overlays.
          </li>
          <li>
            <strong>Battle Mode:</strong> Challenge friends or random opponents
            to rap battles.
          </li>
          <li>
            <strong>Community:</strong> Share your tracks and get rated by the
            community.
          </li>
        </ul>
      </>
    ),
  },
];

/**
 * 🔎 SEO & Metadata Settings
 */
export const seoConfig = {
  title:
    "Kristal Pithwa | Expert Mobile Developer | React Native | iOS | Android",
  titleTemplate: "%s | Mobile Developer | Kristal Pithwa",
  description:
    "Kristal Pithwa is an expert mobile developer with 5+ years experience building React Native, iOS, and Android applications. Specialized in cross-platform development, animations, and pixel-perfect UI. View 20+ production apps and NPM packages.",
  keywords: [
    "React Native developer",
    "iOS developer",
    "Android developer",
    "mobile developer",
    "cross-platform development",
    "React Native expert",
    "mobile development",
    "app developer for hire",
    "freelance mobile developer",
    "native iOS development",
    "Android development expert",
    "mobile app portfolio",
    "TypeScript mobile development",
    "app performance optimization",
    "UI/UX developer",
  ],
  twitterHandle: "@kristalpithwa",
  faq: [
    {
      question: "What technologies does Kristal Pithwa specialize in?",
      answer:
        "Kristal specializes in React Native, iOS, and Android development with expertise in building cross-platform mobile applications with native performance and pixel-perfect UI.",
    },
    {
      question: "How many years of experience does Kristal have?",
      answer:
        "Kristal has 5+ years of professional experience building production mobile applications for iOS and Android platforms.",
    },
    {
      question: "What is Kristal's experience level?",
      answer:
        "Kristal has delivered 20+ apps ranging from startups to enterprise applications with a focus on performance, UI/UX, and smooth animations.",
    },
    {
      question: "How can I hire Kristal for mobile app development?",
      answer:
        "You can reach out via the contact form on the portfolio website or email crystalpithwa@gmail.com.",
    },
  ] as FAQItem[],
};
