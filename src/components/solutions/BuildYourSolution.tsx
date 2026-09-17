import React, { useState } from 'react';
import { Sliders, AlertTriangle } from 'lucide-react';

export const BuildYourSolution: React.FC = () => {
  const [machinery, setMachinery] = useState<'none' | 'shared' | 'owned'>('shared');
  const [destination, setDestination] = useState<'soil' | 'compost' | 'biomass' | 'material'>('soil');
  const [timeWindow, setTimeWindow] = useState<'limited' | 'moderate' | 'flexible'>('moderate');

  // Compute systemic scores
  // Burning dependency:
  // If machinery == 'none' and timeWindow == 'limited' -> HIGH
  // If machinery == 'shared' and timeWindow == 'limited' -> MEDIUM
  // If machinery == 'shared' or 'owned' and timeWindow in ['moderate', 'flexible'] -> LOW
  let burningDependency: 'LOW' | 'MEDIUM' | 'HIGH' = 'LOW';
  if (machinery === 'none' && timeWindow === 'limited') {
    burningDependency = 'HIGH';
  } else if (machinery === 'none' || timeWindow === 'limited') {
    burningDependency = 'MEDIUM';
  }

  // Potential Soil Return
  let soilReturn: 'LOW' | 'MEDIUM' | 'HIGH' = 'HIGH';
  if (destination === 'biomass' || destination === 'material') {
    soilReturn = 'LOW';
  } else if (destination === 'compost') {
    soilReturn = 'HIGH';
  } else {
    soilReturn = 'HIGH';
  }

  // Infrastructure Requirement
  let infrastructureReq: 'LOW' | 'MEDIUM' | 'HIGH' = 'MEDIUM';
  if (destination === 'biomass' || destination === 'material') {
    infrastructureReq = 'HIGH';
  } else if (machinery === 'none' && destination === 'compost') {
    infrastructureReq = 'LOW';
  }

  // Cost Pressure on Farm
  let costPressure: 'LOW' | 'MEDIUM' | 'HIGH' = 'MEDIUM';
  if (machinery === 'owned') {
    costPressure = 'HIGH';
  } else if (machinery === 'shared' && destination === 'soil') {
    costPressure = 'LOW';
  } else if (machinery === 'none') {
    costPressure = 'LOW';
  }

  const getBadge = (val: 'LOW' | 'MEDIUM' | 'HIGH', type: 'good' | 'bad') => {
    if (type === 'bad') {
      // For burning dependency or cost pressure, LOW is good, HIGH is bad
      if (val === 'LOW') return 'text-[#8FAF72] bg-[#8FAF72]/15 border-[#8FAF72]/30';
      if (val === 'MEDIUM') return 'text-amber-300 bg-amber-300/15 border-amber-300/30';
      return 'text-red-400 bg-red-500/20 border-red-500/30';
    } else {
      // For soil return, HIGH is good, LOW is bad
      if (val === 'HIGH') return 'text-[#8FAF72] bg-[#8FAF72]/15 border-[#8FAF72]/30';
      if (val === 'MEDIUM') return 'text-amber-300 bg-amber-300/15 border-amber-300/30';
      return 'text-white/60 bg-white/10 border-white/15';
    }
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0D0F10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D98B45]/10 border border-[#D98B45]/20 text-[#D98B45] text-xs font-mono uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Agri-Economics Sandbox</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Design a{' '}
            <span className="font-playfair italic font-normal text-[#8FAF72]">residue-management system.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Step into the role of an agricultural systems planner. Configure the machinery access,
            biomass destination, and sowing timeline for a representative 10-hectare farm to calculate
            its viability and ecological footprint.
          </p>
        </div>

        {/* Sandbox Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8">
            {/* Baseline Context Pill */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-white/60">Fictional Farm: <strong className="text-white">10 Hectares</strong></span>
              <span className="text-white/60">Straw Volume: <strong className="text-white">~70 Tonnes</strong></span>
              <span className="text-white/60">System: <strong className="text-white">Rice-Wheat Basin</strong></span>
            </div>

            {/* Variable 1: Machinery Access */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-[#8FAF72] block mb-3 font-semibold">
                1. Machinery Access Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'none', label: 'No Machinery', sub: 'Traditional manual/no implements' },
                  { id: 'shared', label: 'Custom Hiring (CHC)', sub: 'Shared subsidized rental' },
                  { id: 'owned', label: 'Individually Owned', sub: 'High capital investment' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMachinery(m.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      machinery === m.id
                        ? 'bg-[#8FAF72]/15 border-[#8FAF72] ring-1 ring-[#8FAF72]/50 text-white'
                        : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{m.label}</div>
                    <div className="text-[11px] text-white/50">{m.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Variable 2: Destination */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-[#D98B45] block mb-3 font-semibold">
                2. Residue Destination Pathway
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'soil', label: 'Soil Mulch', sub: 'Happy Seeder retention' },
                  { id: 'compost', label: 'Bio-Compost', sub: 'Microbial spray' },
                  { id: 'biomass', label: 'Power / Pellets', sub: 'Thermal co-firing' },
                  { id: 'material', label: 'Eco-Packaging', sub: 'Industrial fiber' },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDestination(d.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      destination === d.id
                        ? 'bg-[#D98B45]/15 border-[#D98B45] ring-1 ring-[#D98B45]/50 text-white'
                        : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{d.label}</div>
                    <div className="text-[11px] text-white/50">{d.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Variable 3: Time Available */}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-amber-300 block mb-3 font-semibold">
                3. Inter-Crop Sowing Window
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'limited', label: '10 Days (Very Limited)', sub: 'High risk of yield loss' },
                  { id: 'moderate', label: '20 Days (Moderate)', sub: 'Typical seasonal buffer' },
                  { id: 'flexible', label: '30+ Days (Flexible)', sub: 'Short-duration paddy crop' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTimeWindow(t.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      timeWindow === t.id
                        ? 'bg-amber-300/15 border-amber-300 ring-1 ring-amber-300/50 text-white'
                        : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{t.label}</div>
                    <div className="text-[11px] text-white/50">{t.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Scorecard Column */}
          <div className="lg:col-span-5 bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                  Simulation Engine Output
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">YOUR SYSTEM METRICS</h3>
              </div>
              <span className="text-xs font-mono text-[#8FAF72] bg-[#8FAF72]/15 px-3 py-1 rounded-full border border-[#8FAF72]/30">
                Live Calculated
              </span>
            </div>

            {/* 4 Quantitative Computed Indicators */}
            <div className="space-y-4 mb-8">
              {/* Metric 1: Burning Dependency */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white/90 block">Burning Dependency Risk</span>
                  <span className="text-[11px] text-white/50">Likelihood of reverting to fire under pressure</span>
                </div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${getBadge(burningDependency, 'bad')}`}>
                  {burningDependency}
                </span>
              </div>

              {/* Metric 2: Potential Soil Return */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white/90 block">Potential Soil Organic Return</span>
                  <span className="text-[11px] text-white/50">Recycling of N-P-K and biological carbon</span>
                </div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${getBadge(soilReturn, 'good')}`}>
                  {soilReturn}
                </span>
              </div>

              {/* Metric 3: Infrastructure Requirement */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white/90 block">Infrastructure Requirement</span>
                  <span className="text-[11px] text-white/50">Need for external logistics & baler fleets</span>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full border text-white/80 bg-white/10 border-white/20">
                  {infrastructureReq}
                </span>
              </div>

              {/* Metric 4: Cost Pressure */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white/90 block">Farm Financial Pressure</span>
                  <span className="text-[11px] text-white/50">Capital outlay & operational diesel burn</span>
                </div>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${getBadge(costPressure, 'bad')}`}>
                  {costPressure}
                </span>
              </div>
            </div>

            {/* Diagnostic Evaluation Commentary */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
              <span className="text-[10px] uppercase font-mono text-[#8FAF72] block mb-1">
                Diagnostic Assessment:
              </span>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                {burningDependency === 'HIGH'
                  ? 'High risk: Without machinery support in a 10-day window, time pressure forces open burning. Interventions must expand CHC access immediately.'
                  : burningDependency === 'MEDIUM'
                  ? 'Moderate risk: Viable under favorable weather, but any machinery breakdown or rain delay could push farmers toward open burning.'
                  : 'Robust sustainable configuration: Residue is safely managed without atmospheric smoke. Crop planting proceeds within optimal agronomic timelines.'}
              </p>
            </div>

            {/* Prominent Educational Disclaimer */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#D98B45] shrink-0" />
              <p className="text-[11px] font-mono text-white/50">
                “Educational simulation. Results are illustrative and are not agricultural advice.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
