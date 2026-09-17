import React, { useState } from 'react';
import { Info, Droplets, Bug, AlertCircle } from 'lucide-react';

export const SoilCrossSectionSlider: React.FC = () => {
  // Slider value: 0 (Fresh Residue / Healthy Soil) to 100 (Repeated Burning Degradation)
  const [sliderVal, setSliderVal] = useState<number>(0);

  // Computed metrics based on slider
  const burnProgress = sliderVal / 100;

  // Visual parameters
  const organicCarbonPct = (0.85 - burnProgress * 0.45).toFixed(2); // Drops from 0.85% to 0.40%
  const moistureRetention = Math.round(75 - burnProgress * 50); // Drops from 75% to 25%
  const microbialActivity = Math.round(90 - burnProgress * 65); // Drops from 90% to 25%
  const soilCoverPct = Math.round(100 - burnProgress * 95); // Drops from 100% to 5%

  return (
    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
      {/* Header and Disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8FAF72] block mb-1">
            Subsurface Ecological Simulation
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Interactive Soil Cross-Section
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/50 text-[11px] font-mono max-w-md">
          <Info className="w-3.5 h-3.5 text-[#8FAF72] shrink-0" />
          <span>Illustration of possible effects; actual response varies with soil type and management.</span>
        </div>
      </div>

      {/* Cross-Section Graphic Canvas */}
      <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/15 mb-8 flex flex-col">
        {/* Layer 1: Crop Residue (Surface Horizon O) */}
        <div
          className="relative h-1/4 transition-colors duration-500 flex items-center justify-between px-6 border-b border-white/10"
          style={{
            backgroundColor: burnProgress > 0.5 ? '#1a1410' : '#2b2318',
          }}
        >
          <div className="relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8FAF72] font-semibold block">
              Layer 01: Surface Horizon
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white">
              {burnProgress < 0.3
                ? 'Protective Crop Residue Mulch'
                : burnProgress < 0.7
                ? 'Partially Charred Straw & Fly Ash'
                : 'Bare Scorched Earth & Ash Crust'}
            </h4>
            <span className="text-xs text-white/60">
              {burnProgress < 0.5
                ? 'Insulates soil, breaks raindrop impact, moderates soil temperature'
                : 'Vulnerable to surface crusting, moisture evaporation, and wind erosion'}
            </span>
          </div>

          {/* Graphical straw vs charred remnants */}
          <div className="hidden sm:flex items-center gap-2">
            {burnProgress < 0.5 ? (
              <span className="text-xs font-mono text-[#8FAF72] bg-[#8FAF72]/15 px-2.5 py-1 rounded-full border border-[#8FAF72]/30">
                Residue Cover: {soilCoverPct}%
              </span>
            ) : (
              <span className="text-xs font-mono text-[#D98B45] bg-[#D98B45]/15 px-2.5 py-1 rounded-full border border-[#D98B45]/30">
                Residue Lost: {100 - soilCoverPct}%
              </span>
            )}
          </div>
        </div>

        {/* Layer 2: Topsoil (Horizon A) */}
        <div
          className="relative h-1/2 transition-colors duration-500 p-6 flex flex-col justify-between border-b border-white/10"
          style={{
            backgroundColor:
              burnProgress < 0.5
                ? `rgb(${Math.round(40 + burnProgress * 30)}, ${Math.round(30 + burnProgress * 20)}, ${Math.round(20 + burnProgress * 15)})`
                : `rgb(${Math.round(65 + burnProgress * 20)}, ${Math.round(50 + burnProgress * 10)}, ${Math.round(40 + burnProgress * 10)})`,
          }}
        >
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D98B45] font-semibold block">
                Layer 02: Biological Topsoil (0–15 cm)
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Rhizosphere & Microbial Habitat
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-white/70 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
                <Bug className="w-3.5 h-3.5 text-[#8FAF72]" />
                <span>Microflora: {microbialActivity}%</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-white/70 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
                <Droplets className="w-3.5 h-3.5 text-blue-400" />
                <span>Moisture: {moistureRetention}%</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal leading-relaxed">
              {burnProgress < 0.4
                ? 'Abundant fungal hyphae, active earthworms, and nitrogen-fixing bacteria decomposing organic polymers into stable humus.'
                : burnProgress < 0.7
                ? 'Repeated surface heat spikes (surface temperatures can exceed 50–70°C) reduce active microflora in the top 2.5 cm layer.'
                : 'Depleted organic matter. High reliance on synthetic chemical fertilizers to compensate for lost biological cycling.'}
            </p>
          </div>
        </div>

        {/* Layer 3: Subsoil (Horizon B) */}
        <div
          className="relative h-1/4 bg-[#1e1b18] p-6 flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-semibold block">
              Layer 03: Subsoil Mineral Base (&gt;15 cm)
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-white/90">
              Mineral Matrix & Deep Capillary Water Table
            </h4>
            <span className="text-[11px] text-white/50">
              Dependent on topsoil infiltration capacity to recharge aquifers.
            </span>
          </div>

          <span className="text-[11px] font-mono text-white/40 hidden sm:inline-block">
            Clay-Loam Substratum
          </span>
        </div>
      </div>

      {/* Interactive Range Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-white/70">
            Current Scenario:
          </span>
          <span className="text-xs font-mono font-bold text-white">
            {burnProgress === 0
              ? 'BEFORE BURNING (Optimal Residue Retention)'
              : burnProgress < 0.5
              ? 'Moderate / Occasional Burning'
              : 'AFTER REPEATED BURNING'}
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          onChange={(e) => setSliderVal(parseInt(e.target.value, 10))}
          className="w-full cursor-pointer"
          aria-label="Soil State Slider"
        />

        <div className="flex justify-between text-xs font-mono text-white/50 mt-2">
          <button
            onClick={() => setSliderVal(0)}
            className={`cursor-pointer hover:text-white ${sliderVal === 0 ? 'text-[#8FAF72] font-bold' : ''}`}
          >
            ← BEFORE BURNING
          </button>
          <button
            onClick={() => setSliderVal(100)}
            className={`cursor-pointer hover:text-white ${sliderVal === 100 ? 'text-[#D98B45] font-bold' : ''}`}
          >
            AFTER REPEATED BURNING →
          </button>
        </div>
      </div>

      {/* Dynamic Quantitative Diagnostic Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
        <div className="p-4 rounded-xl bg-black/40 border border-white/10">
          <span className="text-[10px] uppercase font-mono text-white/40 block mb-1">
            Soil Organic Carbon
          </span>
          <div className="text-lg sm:text-xl font-mono font-bold text-white">
            {organicCarbonPct}%
          </div>
          <span className="text-[10px] font-mono text-white/50">Baseline target: &gt; 0.75%</span>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10">
          <span className="text-[10px] uppercase font-mono text-white/40 block mb-1">
            Moisture Retention
          </span>
          <div className="text-lg sm:text-xl font-mono font-bold text-blue-300">
            {moistureRetention}%
          </div>
          <span className="text-[10px] font-mono text-white/50">Capillary holding power</span>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10">
          <span className="text-[10px] uppercase font-mono text-white/40 block mb-1">
            Microbial Population
          </span>
          <div className="text-lg sm:text-xl font-mono font-bold text-[#8FAF72]">
            {microbialActivity}%
          </div>
          <span className="text-[10px] font-mono text-white/50">Biological activity index</span>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10">
          <span className="text-[10px] uppercase font-mono text-white/40 block mb-1">
            Surface Protection
          </span>
          <div className="text-lg sm:text-xl font-mono font-bold text-[#D98B45]">
            {soilCoverPct}%
          </div>
          <span className="text-[10px] font-mono text-white/50">Mulch blanket coverage</span>
        </div>
      </div>

      {/* Scientific Qualification Quote */}
      <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#8FAF72] shrink-0 mt-0.5" />
        <p className="text-xs text-white/70 leading-relaxed font-normal">
          <strong className="text-white">Agronomic Context:</strong> "Repeated residue burning can contribute to declining soil quality when combined with other unsustainable practices. When straw is retained, it returns ~5.5 kg nitrogen, 2.3 kg phosphorus, and 25 kg potassium per tonne of straw."
        </p>
      </div>
    </div>
  );
};
