import localFont from "next/font/local";
import { Geist } from "next/font/google";
import ClientCanvas from "@/components/ui/ClientCanvas";
import "./globals.css";

const libreBaskerville = localFont({
  src: [
    { path: "../../public/fonts/LibreBaskerville-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/LibreBaskerville-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-libre",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Kristal Pithwa | Mobile App Developer",
    template: "%s | Kristal Pithwa",
  },
  description:
    "Mobile App Developer specializing in React Native, iOS & Android. 5+ years building production cross-platform applications.",
  keywords: ["React Native", "Mobile Developer", "iOS", "Android", "Portfolio"],
  authors: [{ name: "Kristal Pithwa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kristal Pithwa Portfolio",
    title: "Kristal Pithwa | Mobile App Developer",
    description:
      "Mobile App Developer specializing in React Native, iOS & Android.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/emoji.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${geist.variable}`}
    >
      <body className="min-h-screen bg-[#060b18] overflow-x-hidden font-libre">
        <ClientCanvas />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
