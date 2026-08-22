import { Geist, Geist_Mono } from "next/font/google";
import ClientCanvas from "@/components/ui/ClientCanvas";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kristalpithwa.vercel.app"),
  title: {
    default:
      "Kristal Pithwa | Expert Mobile Developer | React Native | iOS | Android",
    template: "%s | Mobile Developer | Kristal Pithwa",
  },
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
  authors: [{ name: "Kristal Pithwa" }],
  creator: "Kristal Pithwa",
  publisher: "Kristal Pithwa",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://kristalpithwa.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kristalpithwa.vercel.app",
    siteName: "Kristal Pithwa Portfolio",
    title: "Kristal Pithwa | Expert Mobile Developer",
    description:
      "Expert React Native, iOS, and Android developer with 5+ years experience. View my portfolio of 20+ apps and NPM packages built with performance and design excellence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristal Pithwa | Mobile Developer",
    description:
      "Expert React Native, iOS & Android developer. 5+ years building production apps. View portfolio of 20+ applications.",
    creator: "@kristalpithwa",
  },
  icons: {
    icon: "/images/emoji.svg",
    shortcut: "/images/emoji.svg",
    apple: "/images/emoji.svg",
  },
  manifest: "/manifest.json",
  // Add your Google Search Console verification code here:
  // verification: { google: "your-actual-code-from-search-console" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kristal Pithwa",
    jobTitle: "Senior Mobile Developer",
    description:
      "Expert mobile developer specializing in React Native, iOS & Android development with 5+ years of experience building production applications.",
    url: "https://kristalpithwa.vercel.app",
    image: "https://kristalpithwa.vercel.app/kristal.jpg",
    sameAs: [
      "https://github.com/kristalpithwa",
      "https://www.linkedin.com/in/kristal-pithwa",
    ],
    knowsAbout: [
      "React Native",
      "iOS Development",
      "Android Development",
      "JavaScript",
      "TypeScript",
      "Mobile App Architecture",
      "Cross-platform Development",
    ],
    workLocation: {
      "@type": "Place",
      name: "Remote",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kristal Pithwa - Mobile Developer",
    url: "https://kristalpithwa.vercel.app",
    logo: "https://kristalpithwa.vercel.app/images/emoji.svg",
    description:
      "Professional mobile app development portfolio showcasing React Native, iOS and Android applications.",
    sameAs: [
      "https://github.com/kristalpithwa",
      "https://www.linkedin.com/in/kristal-pithwa",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "crystalpithwa@gmail.com",
      availableLanguage: ["en"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kristalpithwa.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://kristalpithwa.vercel.app#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Work",
        item: "https://kristalpithwa.vercel.app#work",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://kristalpithwa.vercel.app#contact",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies does Kristal Pithwa specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kristal specializes in React Native, iOS, and Android development with expertise in building cross-platform mobile applications with native performance and pixel-perfect UI.",
        },
      },
      {
        "@type": "Question",
        name: "How many years of experience does Kristal have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kristal has 5+ years of professional experience building production mobile applications for iOS and Android platforms.",
        },
      },
      {
        "@type": "Question",
        name: "What is Kristal's experience level?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kristal has delivered 20+ apps ranging from startups to enterprise applications with a focus on performance, UI/UX, and smooth animations.",
        },
      },
      {
        "@type": "Question",
        name: "How can I hire Kristal for mobile app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out via the contact form on the portfolio website at kristalpithwa.vercel.app or email crystalpithwa@gmail.com.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#060b18] text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500/20 selection:text-white antialiased">
        <ClientCanvas />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
