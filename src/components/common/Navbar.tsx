import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'problem' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['problem', 'impact', 'solutions', 'explore'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'problem', label: 'The Problem' },
    { id: 'impact', label: 'The Impact' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'explore', label: 'Explore' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4 ${
          isScrolled
            ? 'bg-[#08090A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
            aria-label="AfterHarvest Home"
          >
            {/* Custom 26x26 Geometric Crop-Stem + Smoke Curve Mark */}
            <div className="w-[26px] h-[26px] flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Crop stem */}
                <path d="M13 23V8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                {/* Lower leaf */}
                <path d="M13 18C16.5 16.5 19.5 17 20 15C20.5 13 18 10 13 12" stroke="#8FAF72" strokeWidth="1.75" strokeLinecap="round" />
                {/* Upper leaf */}
                <path d="M13 14C9.5 12.5 6.5 13 6 11C5.5 9 8 6 13 8" stroke="#8FAF72" strokeWidth="1.75" strokeLinecap="round" />
                {/* Smoke drift */}
                <path d="M13 8C13 4.5 16 3 17.5 2.5C19 2 20.5 3 20 5C19.5 7 16.5 7 16 8.5" stroke="#D98B45" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.2 1.5" />
                <circle cx="13" cy="23" r="1.5" fill="#8FAF72" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white tracking-tight text-base sm:text-lg leading-tight group-hover:text-white/90 transition-colors">
                After<span className="text-[#8FAF72]">Harvest</span>
              </span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">EVS Academic Project</span>
            </div>
          </button>

          {/* Desktop Center Navigation Glass Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.07] backdrop-blur-md border border-white/15 px-2 py-1.5 rounded-full shadow-lg shadow-black/20">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/20 shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#8FAF72] rounded-full mb-0.5" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo('impact')}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-white/10 hover:bg-[#8FAF72]/20 hover:text-white border border-white/20 hover:border-[#8FAF72]/50 transition-all duration-200 cursor-pointer"
            >
              <span>Understand the Impact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8FAF72]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white/80 hover:text-white bg-white/10 border border-white/15 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090A]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8 pt-20 pb-12 animate-fadeIn">
          <div className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-2xl font-medium tracking-tight py-2 transition-colors ${
                  currentSection === item.id ? 'text-[#8FAF72]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => scrollTo('impact')}
                className="w-full py-3.5 rounded-full bg-[#8FAF72] text-[#08090A] font-semibold text-sm hover:bg-[#A8C98B] transition-colors"
              >
                Understand the Impact
              </button>
              <button
                onClick={() => scrollTo('alternatives')}
                className="w-full py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-colors"
              >
                Explore Alternatives
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
