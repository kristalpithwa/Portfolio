import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientCanvas from "@/components/ui/ClientCanvas";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { personalInfo, seoConfig } from "@/data/portfolioData";
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

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.websiteUrl),
  title: {
    default: seoConfig.title,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
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
    canonical: personalInfo.websiteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.websiteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: seoConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.shortRole}`,
    description: seoConfig.description,
    creator: seoConfig.twitterHandle,
  },
  icons: {
    icon: "/images/emoji.svg",
    shortcut: "/images/emoji.svg",
    apple: "/images/emoji.svg",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.jobTitle,
    description: personalInfo.about.bio,
    url: personalInfo.websiteUrl,
    image: personalInfo.avatar,
    sameAs: [
      `https://github.com/${personalInfo.name.toLowerCase().replace(/\s+/g, "")}`,
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
      name: personalInfo.location,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${personalInfo.name} - ${personalInfo.jobTitle}`,
    url: personalInfo.websiteUrl,
    logo: `${personalInfo.websiteUrl}/images/emoji.svg`,
    description: seoConfig.description,
    sameAs: [
      `https://github.com/${personalInfo.name.toLowerCase().replace(/\s+/g, "")}`,
      "https://www.linkedin.com/in/kristal-pithwa",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: personalInfo.email,
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
        item: personalInfo.websiteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${personalInfo.websiteUrl}#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Work",
        item: `${personalInfo.websiteUrl}#work`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${personalInfo.websiteUrl}#contact`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
