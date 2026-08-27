import { IconType } from "react-icons";
import {
  FiSmartphone,
  FiCpu,
  FiCode,
  FiMail,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { SiApple, SiReact } from "react-icons/si";

interface StatItem {
  value: string;
  label: string;
  desc: string;
}

export const stats: StatItem[] = [
  { value: "5+", label: "Years Experience", desc: "Mobile Development" },
  { value: "20+", label: "Apps Shipped", desc: "iOS & Android" },
  { value: "100%", label: "App Store Ready", desc: "Clean Submissions" },
  { value: "60fps", label: "Performance", desc: "Smooth UX & UI" },
];

interface KeyHighlight {
  label: string;
  icon: IconType;
  color: string;
}

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

interface ContactOption {
  href: string;
  icon: IconType;
  label: string;
  value: string;
  badge: string;
  accent: string;
  border: string;
  external?: boolean;
}

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
