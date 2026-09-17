import React, { useState } from 'react';
import { MythItem } from '../../types';
import { HelpCircle, CheckCircle2, RotateCcw } from 'lucide-react';

export const MythVsReality: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const myths: MythItem[] = [
    {
      id: 'm1',
      myth: '“Burning is the only practical way to clear fields.”',
      reality:
        '“Burning can be quick, but alternative residue-management approaches exist. Their feasibility depends on cost, time, machinery and local infrastructure.”',
      context:
        'Technological innovations such as the Happy Seeder and Super SMS allow direct sowing through heavy straw without preliminary field clearance.',
    },
    {
      id: 'm2',
      myth: '“All crop residue should be removed from the field.”',
      reality:
        '“Residue can sometimes be retained or incorporated into soil, depending on the crop and farming system.”',
      context:
        'In-situ retention returns crucial macro-nutrients (N-P-K) and builds soil organic carbon, buffering crops against drought and extreme heat.',
    },
    {
      id: 'm3',
      myth: '“Crop residue burning only affects farmers.”',
      reality:
        '“Smoke can travel beyond the field and contribute to wider air-pollution exposure.”',
      context:
        'Synoptic autumn winds transport fine particulate plumes over 300+ km, exposing millions of urban citizens and rural schoolchildren to hazardous AQI levels.',
    },
    {
      id: 'm4',
      myth: '“Every residue-management method works everywhere.”',
      reality:
        '“Appropriate methods depend on crop, soil, climate, machinery, economics and local conditions.”',
      context:
        'No silver bullet exists: In-situ retention works best in irrigated plains with heavy tractors, while baling suits regions near industrial biomass off-takers.',
    },
  ];

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF72]/10 border border-[#8FAF72]/20 text-[#8FAF72] text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Critical Thinking & Evidence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Separating{' '}
            <span className="font-playfair italic font-normal text-white/90">Myth from Reality.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Public debate often reduces agricultural burning to simple slogans or finger-pointing.
            Click each card to reveal the scientific and agronomic realities.
          </p>
        </div>

        {/* 4 Interactive Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myths.map((item) => {
            const isFlipped = !!flippedCards[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                className="group h-80 rounded-3xl [perspective:1000px] cursor-pointer"
              >
                <div
                  className={`relative w-full h-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Front: Myth */}
                  <div className="absolute inset-0 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 [backface-visibility:hidden] flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                          COMMON MYTH
                        </span>
                        <RotateCcw className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-sans font-bold text-white leading-snug tracking-tight mb-4">
                        {item.myth}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                      <span>Click card to reveal evidence</span>
                      <span className="text-[#8FAF72]">Flip ↻</span>
                    </div>
                  </div>

                  {/* Back: Reality */}
                  <div className="absolute inset-0 rounded-3xl p-8 bg-[#0D0F10] border border-[#8FAF72]/50 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between shadow-2xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8FAF72] font-bold bg-[#8FAF72]/15 px-3 py-1 rounded-full border border-[#8FAF72]/30 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          SCIENTIFIC REALITY
                        </span>
                        <RotateCcw className="w-4 h-4 text-[#8FAF72]" />
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-white leading-relaxed mb-4">
                        {item.reality}
                      </p>

                      <p className="text-xs text-white/70 leading-relaxed font-normal">
                        {item.context}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-right text-xs font-mono text-[#8FAF72]">
                      <span>Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
