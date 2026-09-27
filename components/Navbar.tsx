'use client';

import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090D]/70 border-b border-white/10">
      <div className="container flex items-center justify-between h-20">
        {/* Logo and Brand */}
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Logo width={48} height={48} />
          <div className="hidden sm:block">
            <div className="text-xs uppercase tracking-wider text-[#A8B0BD] font-semibold">Tumwebaze</div>
            <div className="text-sm font-bold uppercase tracking-wider">Benson</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12 text-sm uppercase tracking-widest text-[#A8B0BD]">
          <a href="#about" className="hover:text-[#38BDF8] transition-colors">About</a>
          <a href="#expertise" className="hover:text-[#38BDF8] transition-colors">Expertise</a>
          <a href="#projects" className="hover:text-[#38BDF8] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#38BDF8] transition-colors">Skills</a>
          <a href="#services" className="hover:text-[#38BDF8] transition-colors">Services</a>
          <a href="#contact" className="hover:text-[#38BDF8] transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <a href="#contact" className="hidden lg:flex btn bg-gradient-to-r from-[#0052CC] to-[#38BDF8] text-white border-none">
          Let&apos;s Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-[#38BDF8] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-[#38BDF8] ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-[#38BDF8] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-[#0D1117] px-4 py-4 flex flex-col gap-4">
          <a href="#about" className="text-sm uppercase tracking-widest text-[#A8B0BD] hover:text-[#38BDF8]">About</a>
          <a href="#expertise" className="text-sm uppercase tracking-widest text-[#A8B0BD] hover:text-[#38BDF8]">Expertise</a>
          <a href="#projects" className="text-sm uppercase tracking-widest text-[#A8B0BD] hover:text-[#38BDF8]">Projects</a>
          <a href="#skills" className="text-sm uppercase tracking-widest text-[#A8B0BD] hover:text-[#38BDF8]">Skills</a>
          <a href="#services" className="text-sm uppercase tracking-widest text-[#A8B0BD] hover:text-[#38BDF8]">Services</a>
          <a href="#contact" className="text-sm uppercase tracking-widest text-[#A8B0BD] hover:text-[#38BDF8]">Contact</a>
          <a href="#contact" className="btn bg-gradient-to-r from-[#0052CC] to-[#38BDF8] text-white border-none mt-2">
            Let&apos;s Connect
          </a>
        </nav>
      )}
    </header>
  );
}
