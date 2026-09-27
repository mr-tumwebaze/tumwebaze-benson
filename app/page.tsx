'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Ecosystem from '@/components/Ecosystem';
import Expertise from '@/components/Expertise';
import Education from '@/components/Education';
import Facilitation from '@/components/Facilitation';
import WebDevelopment from '@/components/WebDevelopment';
import DataSystems from '@/components/DataSystems';
import BulkSMS from '@/components/BulkSMS';
import SystemsAdmin from '@/components/SystemsAdmin';
import ComputerApplications from '@/components/ComputerApplications';
import GraphicDesign from '@/components/GraphicDesign';
import Media from '@/components/Media';
import Geography from '@/components/Geography';
import Reporting from '@/components/Reporting';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Development from '@/components/Development';
import Values from '@/components/Values';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        gsap.registerPlugin();
      });
    }
  }, []);

  return (
    <main className="bg-background text-text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Ecosystem />
      <Expertise />
      <Education />
      <Facilitation />
      <WebDevelopment />
      <DataSystems />
      <BulkSMS />
      <SystemsAdmin />
      <ComputerApplications />
      <GraphicDesign />
      <Media />
      <Geography />
      <Reporting />
      <Projects />
      <Experience />
      <Skills />
      <Development />
      <Values />
      <Services />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
