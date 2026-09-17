import React from 'react';
import { RotateCcw, BookOpen, Sparkles } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToScience = () => {
    const el = document.getElementById('problem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden select-none"
      style={{ minHeight: '100dvh' }}
    >
      {/* Background: Sunrise Renewal Dawn Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/renewal_dawn.jpg')`,
        }}
        role="img"
        aria-label="Regenerated agricultural field at sunrise with fresh green crops"
      >
        {/* Soft dark vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Center Cinematic Card */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 text-center py-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#8FAF72] text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>THE NEXT HARVEST</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-playfair italic font-normal text-white tracking-tight leading-tight mb-8 drop-shadow-2xl">
          “Can begin differently.”
        </h2>

        <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal mb-10 max-w-2xl mx-auto drop-shadow">
          Crop residue is not just something to remove. It is a biological resource, a soil input,
          an economic opportunity — and a decision that affects every breath we take.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer shadow-xl hover:scale-105"
          >
            <RotateCcw className="w-4 h-4 text-[#8FAF72]" />
            <span>Explore the journey again</span>
          </button>

          <button
            onClick={scrollToScience}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#8FAF72] hover:bg-[#A8C98B] text-[#08090A] font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer shadow-xl shadow-[#8FAF72]/20 hover:scale-105"
          >
            <BookOpen className="w-4 h-4 text-[#08090A]" />
            <span>Learn the science</span>
          </button>
        </div>
      </div>
    </section>
  );
};
