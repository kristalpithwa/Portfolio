import React from "react";
import type Matter from "matter-js";

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
