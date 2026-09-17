import React, { useState } from 'react';
import { Flame, Truck, Sprout, Clock, IndianRupee, Wind, Layers, AlertCircle } from 'lucide-react';
import { DecisionOption } from '../../types';

export const DecisionSimulator: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<'burn' | 'collect' | 'mulch'>('burn');

  const options: Record<'burn' | 'collect' | 'mulch', DecisionOption> = {
    burn: {
      id: 'burn',
      title: 'BURN IT',
      sub: 'Open combustion in the field',
      clearanceSpeed: 'Instant (2–4 hours)',
      machineryCost: '₹0 direct expenditure',
      smokeLevel: 'Extreme (High PM2.5 & CO)',
      soilOutcome: 'Severe surface heat loss & organic carbon loss',
      summary:
        'The field is immediately clean for sowing wheat. However, 100% of organic carbon is vaporized into smoke, surface microflora are decimated, and downwind communities suffer toxic air quality.',
    },
    collect: {
      id: 'collect',
      title: 'COLLECT IT (Ex-Situ)',
      sub: 'Bale and transport for off-field usage',
      clearanceSpeed: 'Moderate (2–4 days)',
      machineryCost: 'High (₹2,500–₹3,500/acre for balers/rakes)',
      smokeLevel: 'Zero open smoke',
      soilOutcome: 'Residue removed; neutral soil carbon gain',
      summary:
        'Baling cleans the soil without smoke, providing dense biomass bales for bioenergy plants, paper mills, or cattle feed. However, it requires expensive balers, diesel, and transport logistics.',
    },
    mulch: {
      id: 'mulch',
      title: 'MULCH IT (In-Situ)',
      sub: 'Retain or incorporate into the topsoil',
      clearanceSpeed: 'Direct sowing with Happy Seeder',
      machineryCost: 'Moderate (₹1,500–₹2,000/acre hiring fee)',
      smokeLevel: 'Zero open smoke',
      soilOutcome: 'High organic carbon & moisture preservation',
      summary:
        'Residue is sliced and laid evenly as a protective surface mulch while seeds are drilled directly beneath. Returns 30–40 kg Nitrogen/ha, retains moisture, suppresses weeds, and rebuilds soil health over time.',
    },
  };

  const current = options[selectedChoice];

  return (
    <section className="relative py-20 px-4 sm:px-8 bg-[#08090A] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D98B45] bg-[#D98B45]/10 px-3 py-1 rounded-full border border-[#D98B45]/20">
            Interactive Farmer Simulation
          </span>
          <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
            “You have <span className="font-playfair italic font-normal text-[#D98B45]">10 minutes</span> to decide.”
          </h3>
          <p className="mt-3 text-sm sm:text-base text-white/60">
            Harvest is complete. The combine has left heavy residue. Sowing window closes in days.
            Which pathway will you take?
          </p>
        </div>

        {/* 3 Choice Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Choice 1: Burn */}
          <button
            onClick={() => setSelectedChoice('burn')}
            className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedChoice === 'burn'
                ? 'bg-[#D98B45]/15 border-[#D98B45] shadow-lg shadow-[#D98B45]/20 scale-[1.02]'
                : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#D98B45]">OPTION A</span>
              <Flame className={`w-5 h-5 ${selectedChoice === 'burn' ? 'text-[#D98B45]' : 'text-white/40'}`} />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">BURN IT</h4>
            <p className="text-xs text-white/60">Clear with open combustion</p>
          </button>

          {/* Choice 2: Collect */}
          <button
            onClick={() => setSelectedChoice('collect')}
            className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedChoice === 'collect'
                ? 'bg-blue-500/15 border-blue-400 shadow-lg shadow-blue-500/20 scale-[1.02]'
                : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400">OPTION B</span>
              <Truck className={`w-5 h-5 ${selectedChoice === 'collect' ? 'text-blue-400' : 'text-white/40'}`} />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">COLLECT IT</h4>
            <p className="text-xs text-white/60">Ex-situ mechanical baling</p>
          </button>

          {/* Choice 3: Mulch */}
          <button
            onClick={() => setSelectedChoice('mulch')}
            className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedChoice === 'mulch'
                ? 'bg-[#8FAF72]/15 border-[#8FAF72] shadow-lg shadow-[#8FAF72]/20 scale-[1.02]'
                : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#8FAF72]">OPTION C</span>
              <Sprout className={`w-5 h-5 ${selectedChoice === 'mulch' ? 'text-[#8FAF72]' : 'text-white/40'}`} />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">MULCH IT</h4>
            <p className="text-xs text-white/60">In-situ residue retention</p>
          </button>
        </div>

        {/* Live Simulation Display Canvas & Metrics */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          {/* Animated visual representation banner */}
          <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-8 border border-white/10 bg-dark-900 flex items-center justify-center">
            {selectedChoice === 'burn' && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#D98B45]/40 via-red-900/30 to-black/80 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D98B45]/20 flex items-center justify-center mb-3 animate-pulse">
                  <Flame className="w-8 h-8 text-[#D98B45]" />
                </div>
                <h5 className="text-lg sm:text-xl font-bold text-white">Field Burning Activated</h5>
                <p className="text-xs sm:text-sm text-white/70 max-w-md mt-1">
                  Residue consumed by fire. Thick plume of black smoke and PM2.5 rising into the troposphere.
                </p>
              </div>
            )}

            {selectedChoice === 'collect' && (
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-slate-900/40 to-black/80 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                  <Truck className="w-8 h-8 text-blue-400" />
                </div>
                <h5 className="text-lg sm:text-xl font-bold text-white">Baling & Collection Fleet Deployed</h5>
                <p className="text-xs sm:text-sm text-white/70 max-w-md mt-1">
                  Straw compressed into rectangular bales for off-site thermal power plants and bio-refineries.
                </p>
              </div>
            )}

            {selectedChoice === 'mulch' && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#8FAF72]/30 via-emerald-950/30 to-black/80 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#8FAF72]/20 flex items-center justify-center mb-3">
                  <Sprout className="w-8 h-8 text-[#8FAF72]" />
                </div>
                <h5 className="text-lg sm:text-xl font-bold text-white">Happy Seeder Direct Mulch Sowing</h5>
                <p className="text-xs sm:text-sm text-white/70 max-w-md mt-1">
                  Residue spread as moisture blanket. Wheat sown simultaneously through the residue cover.
                </p>
              </div>
            )}
          </div>

          {/* Real-time Indicator Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Metric 1: Clearance Speed */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 text-white/50 text-xs mb-2">
                <Clock className="w-4 h-4 text-white/70" />
                <span>Clearance Speed</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {current.clearanceSpeed}
              </div>
            </div>

            {/* Metric 2: Financial Cost */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 text-white/50 text-xs mb-2">
                <IndianRupee className="w-4 h-4 text-[#D98B45]" />
                <span>Machinery / Cost</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {current.machineryCost}
              </div>
            </div>

            {/* Metric 3: Air Emissions */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 text-white/50 text-xs mb-2">
                <Wind className="w-4 h-4 text-red-400" />
                <span>Smoke & Emissions</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {current.smokeLevel}
              </div>
            </div>

            {/* Metric 4: Soil Health Impact */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 text-white/50 text-xs mb-2">
                <Layers className="w-4 h-4 text-[#8FAF72]" />
                <span>Soil Organic Matter</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {current.soilOutcome}
              </div>
            </div>
          </div>

          {/* Outcome Summary */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#8FAF72] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-white/50 block mb-1">
                EVS Ecological Trade-Off Analysis
              </span>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                {current.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
