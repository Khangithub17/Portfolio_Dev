'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with ssr disabled
const AboutSection = dynamic(() => import("./about"), { ssr: false });
const ContactSection = dynamic(() => import("./contact"), { ssr: false });
const Education = dynamic(() => import("./education"), { ssr: false });
const Experience = dynamic(() => import("./experience"), { ssr: false });
const HeroSection = dynamic(() => import("./hero-section"), { ssr: false });
const Projects = dynamic(() => import("./projects"), { ssr: false });
const Skills = dynamic(() => import("./skills"), { ssr: false });

export default function HomeContent() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
} 