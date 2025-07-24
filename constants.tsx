import React from 'react';
import type { ExperienceItem, ProjectItem, SkillItem, CertificationItem, NavLink } from './types';

// --- ICONS --- //
// Using simple paths for brevity. In a real app, these would be more complex.
const HtmlIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const CssIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 2v10"/><path d="m4.93 4.93 7.07 7.07"/></svg>;
const JsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20 4.4A10.24 10.24 0 0 0 12 2C6.5 2 2 6.5 2 12s4.5 10 10 10a10.24 10.24 0 0 0 8-2.4"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>;
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76A6 6 0 0 1 12 6v0a6 6 0 0 1-4.24 1.76" /><path d="M16.24 7.76A6 6 0 0 0 12 6v0a6 6 0 0 0-4.24 1.76" /><path d="M17.66 11.2A9 9 0 0 1 12 9.05V9.05a9 9 0 0 1-5.66 2.15" /><path d="M17.66 11.2A9 9 0 0 0 12 9.05V9.05a9 9 0 0 0-5.66 2.15" /><path d="M21.17 14.86A12.01 12.01 0 0 1 12 12.1v0a12.01 12.01 0 0 1-9.17 2.76" /><path d="M21.17 14.86A12.01 12.01 0 0 0 12 12.1v0a12.01 12.01 0 0 0-9.17 2.76" /></svg>;
const NodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20 6L9 17l-5-5"/></svg>;
const ExpressIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m13 17-5-5 5-5"/><path d="m6 17-5-5 5-5"/></svg>;
const MongoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2a10 10 0 1 0 10 10H12V2Z"/><path d="M12 2a10 10 0 0 0-9.96 10.5h9.96V2Z"/></svg>;
const ProjectManagementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1V21c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h7.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M15 2v5h5"/><path d="M10 16s.8-1.4 2-2 2-2 2-2"/><path d="M10 11h4"/></svg>;
const PmiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

// --- PORTFOLIO DATA --- //

export const NAV_LINKS: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Allsoft Solutions & Services Pvt. Ltd., Noida',
    role: 'Full Stack Development Intern',
    duration: 'June 2025 – August 2025 | Ongoing',
    description: [
      'Gaining hands-on experience in building and deploying full-stack web applications.',
      'Working in agile environment with exposure to front-end (React.js) and back-end (Node.js, Express.js, MongoDB) technologies.',
      'Collaborating with senior developers and mentors on debugging, optimization, and problem-solving.'
    ],
  },
  {
    company: 'K.R. Mangalam University',
    role: 'Student Ambassador',
    duration: 'May 2025 – Present',
    description: [
      'Represented the institution during events, webinars, and digital outreach.',
      'Promoted academic culture via peer engagement, student tours, and feedback-driven insights for admission and marketing teams.',
    ],
  },
];

export const SKILLS: SkillItem[] = [
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JsIcon /> },
  { name: 'React.js', icon: <ReactIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Express.js', icon: <ExpressIcon /> },
  { name: 'MongoDB', icon: <MongoIcon /> },
  { name: 'Project Management', icon: <ProjectManagementIcon /> },
];

export const CERTIFICATIONS: CertificationItem[] = [
    {
        name: 'Project Management Ready',
        issuer: 'Project Management Institute (PMI)',
        icon: <PmiIcon/>
    }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Library Management System',
    description: 'OCR-enabled book tracking system with user roles and smart recommendations.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    imageUrl: 'https://th.bing.com/th/id/OIP.WkfLR5ljBkJhuSM1TTnhIAHaFS?w=263&h=188&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
  },
  {
    title: 'Weather App',
    description: 'A real-time weather app using public APIs with location-based data display.',
    tech: ['React.js', 'OpenWeather API'],
    imageUrl: 'https://th.bing.com/th/id/OIP.yDBqiO_eZ5gBKhzEQ8hV3gHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
  },
  {
    title: 'YouTube Video Automation Tool',
    description: 'Automates video uploads and schedules using Puppeteer + Node.js.',
    tech: ['Puppeteer', 'Node.js'],
    imageUrl: 'https://th.bing.com/th/id/OIP.X2OIcLJFMAqhfROH7UgOgwHaEK?w=314&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3',
  },
];