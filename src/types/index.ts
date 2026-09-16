import React from "react";
import type Matter from "matter-js";
import { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  tags: string[];
  link: string;
  color: string;
  images: string[];
  shortDescription: string;
  fullDescription: React.ReactNode;
}

export interface StatItem {
  value: string;
  label: string;
  desc: string;
}

export interface KeyHighlight {
  label: string;
  icon: IconType;
  color: string;
}

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
  hover: string;
  target?: string;
}

export interface ContactOption {
  href: string;
  icon: IconType;
  label: string;
  value: string;
  badge: string;
  accent: string;
  border: string;
  external?: boolean;
}

export interface SkillItem {
  name: string;
  level: string;
  icon: IconType;
  color?: string;
}

export interface TechCategory {
  title: string;
  icon: IconType;
  description: string;
  accent: string;
  border: string;
  skills: SkillItem[];
}

export interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface ThemeConfig {
  glow: string;
  glowFrom: string;
  glowTo: string;
  text: string;
  border: string;
  bg: string;
  btn: string;
}

export interface CustomBubbleData {
  tech: string;
  radius: number;
  hue: number;
  fontSize: number;
  fontFamily: string;
}

export interface BubbleBody extends Matter.Body {
  customBubble?: CustomBubbleData;
}

export interface TrustBadge {
  label: string;
  icon?: IconType;
  description?: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  tagline: string;
  roleBadge: string;
  description: string;
  profileUrl: string;
  ratingOrStatus: string;
  ratingSubtitle: string;
  accentColor: string;
  glowColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  borderColor: string;
  buttonGradient: string;
  buttonShadow: string;
  icon: IconType;
  highlights: string[];
  contractTypes: string[];
  verified: boolean;
}

export interface AvailablePlatformsSection {
  sectionTag: string;
  subtitleTag: string;
  title: string;
  highlight: string;
  description: string;
  liveStatusText: string;
  responseTime: string;
  platforms: PlatformItem[];
  trustSignals: TrustBadge[];
}

export interface TestimonialItem {
  id: string;
  projectTitle: string;
  clientName: string;
  rating: number;
  date: string;
  feedback: string;
  platform: string;
  platformIcon?: IconType;
  verified: boolean;
  tags?: string[];
}

export interface ClientFeedbackSection {
  sectionTag: string;
  subtitleTag: string;
  title: string;
  highlight: string;
  description: string;
  totalScore: string;
  totalReviews: string;
  jobSuccessScore: string;
  upworkProfileUrl: string;
  feedbacks: TestimonialItem[];
}



