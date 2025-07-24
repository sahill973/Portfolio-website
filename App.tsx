import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import { NAV_LINKS, EXPERIENCE, SKILLS, PROJECTS, CERTIFICATIONS } from './constants';
import type { ExperienceItem, ProjectItem, SkillItem, CertificationItem, NavLink } from './types';

// --- HELPER HOOK for Intersection Observer --- //
const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const [node, setNode] = useState<HTMLElement | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);

    const ref = useCallback((node: HTMLElement | null) => {
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setEntry(entry);
            }
        }, options);

        if (node) {
            observer.current.observe(node);
        }
        setNode(node);
    }, [options]);

    return [ref, entry] as const;
};

// --- UI COMPONENTS --- //

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">SC.</a>
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors font-medium">{link.name}</a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800">
                    {NAV_LINKS.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-2 px-6 text-slate-300 hover:bg-sky-500 hover:text-white transition-colors">{link.name}</a>
                    ))}
                </div>
            )}
        </header>
    );
};

const Section: React.FC<{ id: string; title: string; children: ReactNode }> = ({ id, title, children }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = !!entry;

    return (
        <section id={id} ref={ref} className={`container mx-auto px-6 py-16 md:py-24 ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative inline-block left-1/2 -translate-x-1/2">
                {title}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-sky-500 rounded-full"></span>
            </h2>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};


// --- PORTFOLIO SECTIONS --- //

const Hero: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden" id="home">
        <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_95%)]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1e40af33,transparent)]"></div>
        <div className="container mx-auto px-6 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left md:w-1/2 animate-fadeInUp">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Sahil Chauhan
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold text-sky-400 mt-2">
                        Full Stack Developer & Student Ambassador
                    </p>
                    <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
                        Turning ideas into scalable web applications.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start">
                        <a href="#contact" className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/20 transform hover:scale-105">
                            Let's Connect
                        </a>
                    </div>
                </div>
                <div className="md:w-1/3 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <div className="absolute inset-0 bg-sky-500 rounded-full blur-2xl opacity-40"></div>
                        <img src="https://th.bing.com/th/id/OIP.ddGV1BR2zluM8kg-6bosswHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" alt="Sahil Chauhan" className="relative object-cover w-full h-full rounded-full border-4 border-slate-700 shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const About: React.FC = () => (
    <Section id="about" title="About Me">
        <p className="text-center max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-400">
            I’m a B.Tech CSE student at K.R. Mangalam University with a passion for building scalable web applications and integrating AI into everyday life. My current focus is on real-world project-based learning and agile product development.
        </p>
        <div className="text-center mt-6 text-slate-500">
            📍 Gurgaon / Delhi NCR / Mumbai
        </div>
    </Section>
);

const Experience: React.FC = () => (
    <Section id="experience" title="Work Experience">
        <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-700"></div>
            {EXPERIENCE.map((item, index) => (
                <div key={index} className="relative mb-12 flex items-start">
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-1.5 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-900"></div>
                     <div className="md:hidden absolute left-4 -translate-x-1/2 mt-1.5 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-900"></div>
                    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                        {index % 2 === 0 ? <ExperienceCard item={item} /> : <div className="hidden md:block h-1"></div>}
                    </div>
                    <div className="hidden md:block w-1/2 pl-8">
                        {index % 2 !== 0 ? <ExperienceCard item={item} /> : <div className="h-1"></div>}
                    </div>
                    <div className="md:hidden w-full ml-10">
                        <ExperienceCard item={item} />
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-sky-500 transition-colors duration-300">
        <h3 className="text-xl font-bold text-white">{item.role}</h3>
        <p className="text-sky-400 font-semibold mt-1">{item.company}</p>
        <p className="text-sm text-slate-500 mt-1 mb-3">{item.duration}</p>
        <ul className="space-y-2 text-slate-400 list-disc list-inside text-left">
            {item.description.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
    </div>
);

const Skills: React.FC = () => (
    <Section id="skills" title="Skills & Tools">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {SKILLS.map((skill) => (
                <div key={skill.name} className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 flex items-center space-x-3 text-white font-medium hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-sky-400">{skill.icon}</span>
                    <span>{skill.name}</span>
                </div>
            ))}
        </div>
    </Section>
);

const Certifications: React.FC = () => (
    <Section id="certifications" title="Certifications">
        <div className="max-w-xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 flex items-center space-x-6 shadow-lg hover:shadow-sky-500/10 transition-shadow duration-300">
                    <div className="text-sky-400">{cert.icon}</div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                        <p className="text-slate-400 mt-1">{cert.issuer}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Projects: React.FC = () => (
    <Section id="projects" title="My Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
                <div key={project.title} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 group transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-500/50 transform hover:-translate-y-2">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => <span key={t} className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Languages: React.FC = () => (
    <div className="max-w-md mx-auto mt-16">
        <h4 className="text-center text-xl font-bold text-white mb-4">Languages</h4>
        <div className="bg-slate-800 p-4 rounded-lg space-y-3">
             <div className="flex justify-between items-center">
                 <span className="text-slate-300">🇬🇧 English</span>
                 <span className="text-sky-400 font-semibold">Fluent</span>
             </div>
             <div className="w-full bg-slate-700 h-px"></div>
             <div className="flex justify-between items-center">
                 <span className="text-slate-300">🇮🇳 Hindi</span>
                 <span className="text-sky-400 font-semibold">Native</span>
             </div>
        </div>
    </div>
);

const Contact: React.FC = () => (
    <Section id="contact" title="Get In Touch">
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-400 mb-8">I'm currently open to new opportunities and collaborations. Feel free to reach out!</p>
            <form className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
                    <input type="email" placeholder="Your Email" defaultValue="sahilchauhan70320@gmail.com" className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
                </div>
                <textarea placeholder="Your Message" rows={5} className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"></textarea>
                <button type="submit" className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-md hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/20 transform hover:scale-105">
                    Send Message
                </button>
            </form>
            <Languages />
        </div>
    </Section>
);

const Footer: React.FC = () => (
    <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-8 text-center text-slate-400">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://www.linkedin.com/in/sahil-chauhan-6863562b6" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://github.com/sahill973" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Sahil Chauhan. All rights reserved.</p>
            <p className="text-sm mt-4 text-slate-500">Ready for deployment or further customization!</p>
        </div>
    </footer>
);

// --- MAIN APP COMPONENT --- //
const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default App;