
import type { ReactNode } from 'react';

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link?: string;
}

export interface SkillItem {
  name: string;
  icon: ReactNode;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  icon: ReactNode;
}

export interface NavLink {
    name: string;
    href: string;
}
