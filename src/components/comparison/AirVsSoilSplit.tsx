import React, { useState } from 'react';
import { Wind, Layers, ArrowUp, ArrowDown } from 'lucide-react';

export const AirVsSoilSplit: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'air' | 'soil' | null>(null);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D98B45] bg-[#D98B45]/10 px-3.5 py-1.5 rounded-full border border-[#D98B45]/20">
            Dual Environmental Pathways
          </span>
          <h3 className="mt-4 text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
            One single action.{' '}
            <span className="font-playfair italic font-normal text-white/90">Two catastrophic sinks.</span>
          </h3>
          <p className="mt-3 text-sm sm:text-base text-white/60">
            The instant a match touches dry crop residue, energy and matter diverge into two distinct ecological cycles.
          </p>
        </div>

        {/* Split Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
          {/* Left Side: The Air */}
          <div
            onMouseEnter={() => setHoveredSide('air')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative p-8 sm:p-12 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden ${
              hoveredSide === 'soil' ? 'opacity-40' : 'opacity-100'
            } bg-gradient-to-b from-[#181A1D] to-[#0D0F10]`}
          >
            {/* Ambient smoke animations */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute -bottom-10 left-10 w-40 h-40 bg-[#D98B45]/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-floatSmoke" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D98B45]/15 border border-[#D98B45]/30 text-[#D98B45] text-xs font-mono mb-4">
                <Wind className="w-3.5 h-3.5" />
                <span>Atmospheric Dispersion</span>
              </div>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                THE AIR
              </h4>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-md">
                Burning releases vast plumes of respirable particulate matter (PM2.5, PM10) and toxic trace gases directly into the atmosphere, creating hazardous regional smog.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block">Vector Direction</span>
                <span className="text-xs font-mono font-bold text-[#D98B45] flex items-center gap-1">
                  <ArrowUp className="w-3.5 h-3.5" /> Upward into Atmosphere
                </span>
              </div>
              <span className="text-xs font-mono text-white/50">Immediate regional crisis</span>
            </div>
          </div>

          {/* Right Side: The Soil */}
          <div
            onMouseEnter={() => setHoveredSide('soil')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative p-8 sm:p-12 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden border-t md:border-t-0 md:border-l border-white/15 ${
              hoveredSide === 'air' ? 'opacity-40' : 'opacity-100'
            } bg-gradient-to-b from-[#14120E] to-[#0A0907]`}
          >
            {/* Ambient soil animations */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute bottom-10 right-10 w-44 h-44 bg-[#8FAF72]/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF72]/15 border border-[#8FAF72]/30 text-[#8FAF72] text-xs font-mono mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Subsurface Depletion</span>
              </div>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                THE SOIL
              </h4>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-md">
                Residue that could replenish organic matter, sustain fungal networks, and insulate soil moisture is instead permanently removed through high-temperature combustion.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block">Vector Direction</span>
                <span className="text-xs font-mono font-bold text-[#8FAF72] flex items-center gap-1">
                  <ArrowDown className="w-3.5 h-3.5" /> Downward Depletion
                </span>
              </div>
              <span className="text-xs font-mono text-white/50">Long-term agricultural loss</span>
            </div>
          </div>

          {/* Center Circular Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex flex-col items-center justify-center w-36 h-36 rounded-full bg-black/80 backdrop-blur-xl border border-white/25 text-center p-3 shadow-2xl">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#8FAF72] font-semibold">
              ONE ACTION
            </span>
            <div className="w-6 h-[1px] bg-white/20 my-1" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#D98B45] font-semibold">
              TWO PATHWAYS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
