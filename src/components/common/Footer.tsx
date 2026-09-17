import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08090A] border-t border-white/10 py-16 px-4 sm:px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Mission Statement */}
        <div className="max-w-md">
          <div className="flex items-center gap-2.5 mb-3">
            {/* 26x26 Geometric Logo */}
            <div className="w-[26px] h-[26px]">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 23V8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 18C16.5 16.5 19.5 17 20 15C20.5 13 18 10 13 12" stroke="#8FAF72" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M13 14C9.5 12.5 6.5 13 6 11C5.5 9 8 6 13 8" stroke="#8FAF72" strokeWidth="1.75" strokeLinecap="round" />
                <path d="M13 8C13 4.5 16 3 17.5 2.5C19 2 20.5 3 20 5C19.5 7 16.5 7 16 8.5" stroke="#D98B45" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.2 1.5" />
                <circle cx="13" cy="23" r="1.5" fill="#8FAF72" />
              </svg>
            </div>
            <span className="font-semibold text-white tracking-tight text-lg">
              After<span className="text-[#8FAF72]">Harvest</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
            An Environmental Studies project exploring crop-residue burning, air pollution,
            soil quality, and sustainable alternatives.
          </p>

          <div className="mt-3">
            <span className="text-[11px] font-mono text-[#8FAF72] bg-[#8FAF72]/10 px-2.5 py-1 rounded-full border border-[#8FAF72]/20 inline-block">
              Built as an educational project
            </span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-white/70">
          <button onClick={() => scrollTo('problem')} className="hover:text-white transition-colors cursor-pointer">
            Problem
          </button>
          <button onClick={() => scrollTo('impact')} className="hover:text-white transition-colors cursor-pointer">
            Impact
          </button>
          <button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors cursor-pointer">
            Solutions
          </button>
          <button onClick={() => scrollTo('sources')} className="hover:text-white transition-colors cursor-pointer">
            Sources
          </button>
          <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors cursor-pointer">
            Back to Top ↑
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4">
        <span>© 2026 AfterHarvest | College EVS Academic Project</span>
        <span>Designed with dark cinematic aesthetics & scientific integrity</span>
      </div>
    </footer>
  );
};
