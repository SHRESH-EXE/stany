import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MidwayTransition: React.FC = () => {
  const scrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-black px-6 sm:px-12 py-28 text-center overflow-hidden border-t border-white/10">
      {/* Subtle radial ambient backdrop glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#8FAF72]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/50 mb-6 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#8FAF72]" />
          <span>Knowing the problem is not enough</span>
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-playfair italic text-white font-normal tracking-tight leading-tight mb-8">
          “Can we change the cycle?”
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl mb-10">
          The fields cannot be abandoned, and farmers cannot be penalized for structural bottlenecks.
          Sustainable solutions require replacing open fire with viable economic and ecological pathways.
        </p>

        <button
          onClick={scrollToSolutions}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#8FAF72] hover:bg-[#A8C98B] text-[#08090A] font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl shadow-[#8FAF72]/20 hover:scale-105 cursor-pointer"
        >
          <span>Explore the alternatives</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
