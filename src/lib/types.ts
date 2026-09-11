import type { Localized } from "@/i18n/config";

export type ProjectCategory =
  | "Web Application"
  | "Backend / API"
  | "Mobile Application"
  | "Full-Stack"
  | "AI / Machine Learning"
  | "DevOps"
  | "Testing / QA";

export type ProjectStatus =
  | "Production"
  | "Completed"
  | "In Development"
  | "Archived";

export interface Screenshot {
  src: string;
  alt: Localized<string>;
  caption?: Localized<string>;
}

export interface Challenge {
  problem: string;
  solution: string;
}

export interface ProjectRepository {
  label: Localized<string>;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  /** Product name — shared across languages. */
  name: string;
  /** One or two sentences shown on cards and in meta descriptions. */
  summary: Localized<string>;
  /** Longer overview shown at the top of the case study. */
  description: Localized<string>;
  role: Localized<string>;
  /** What you personally built or owned. Shown under "My role" on the case study. */
  contribution: Localized<string>;
  /** Key — the visible label comes from the dictionary. */
  category: ProjectCategory;
  technologies: string[];
  problem: Localized<string>;
  solution: Localized<string>;
  features: Localized<string[]>;
  architecture: Localized<string[]>;
  challenges: Localized<Challenge[]>;
  /** Leave empty when no measurable results exist — never invent numbers. */
  results: Localized<string[]>;
  screenshots: Screenshot[];
  /** Thumbnail shown on cards. Falls back to a generated placeholder when omitted. */
  thumbnail?: Screenshot;
  githubUrl?: string;
  /**
   * For systems split across several repositories (e.g. a mobile app and a
   * web backend). When set, these are rendered instead of `githubUrl`.
   */
  repositories?: ProjectRepository[];
  demoUrl?: string;
  apiDocsUrl?: string;
  /** Key — the visible label comes from the dictionary. */
  status: ProjectStatus;
  year: number;
  /** Featured projects are shown on the home page. */
  featured?: boolean;
}

export interface SkillGroup {
  name: Localized<string>;
  /** Technology names — not localized. */
  skills: string[];
}

export interface Experience {
  company: string;
  position: Localized<string>;
  /** Free-form, e.g. "Jan 2023 — Present". */
  period: Localized<string>;
  location?: Localized<string>;
  summary?: Localized<string>;
  responsibilities: Localized<string[]>;
  technologies: string[];
  highlights?: Localized<string[]>;
}

export interface Education {
  institution: string;
  program: Localized<string>;
  period: Localized<string>;
  notes?: Localized<string[]>;
}

export interface Certification {
  name: Localized<string>;
  issuer: Localized<string>;
  date: Localized<string>;
  credentialUrl?: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  role: Localized<string>;
  /** Short line under the name in the hero. */
  headline: Localized<string>;
  /** One-paragraph professional statement. */
  statement: Localized<string>;
  /** A few headline technologies shown in the hero so visitors see the stack at a glance. */
  keyTechnologies: string[];
  url: string;
  email: string;
  location?: Localized<string>;
  /** Path to a CV in /public. The "Download CV" button is hidden when omitted. */
  cvUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
}
