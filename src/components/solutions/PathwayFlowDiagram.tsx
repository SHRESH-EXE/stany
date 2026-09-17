import React, { useState } from 'react';
import { Sprout, Flame, Layers, Box, Beef, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PathwayFlowDiagram: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<'soil' | 'energy' | 'material' | 'compost' | 'animal'>('soil');

  const flows = {
    soil: {
      title: 'RETURN TO SOIL',
      icon: Sprout,
      color: 'text-[#8FAF72]',
      borderColor: 'border-[#8FAF72]',
      bgActive: 'bg-[#8FAF72]/15',
      nodes: [
        { label: 'Crop Residue', detail: 'Harvested straw in the field' },
        { label: 'Surface Mulch', detail: 'Shredded by Super SMS & Happy Seeder' },
        { label: 'Organic Material', detail: 'Biochemical humification & carbon input' },
        { label: 'Living Soil System', detail: 'Enriched soil structure, moisture, & microbes' },
      ],
      conclusion: 'Rebuilds natural biological fertility and prevents 100% of open smoke emissions.',
    },
    energy: {
      title: 'USE FOR ENERGY',
      icon: Flame,
      color: 'text-[#D98B45]',
      borderColor: 'border-[#D98B45]',
      bgActive: 'bg-[#D98B45]/15',
      nodes: [
        { label: 'Crop Residue', detail: 'Anchored stubble & loose straw' },
        { label: 'Mechanical Baling', detail: 'Compressed into high-density bales' },
        { label: 'Pelletization / Torrefaction', detail: 'Processed into standardized biofuel pellets' },
        { label: 'Clean Power / Bio-CNG', detail: 'Co-fired in power plants or fermented into biogas' },
      ],
      conclusion: 'Substitutes fossil coal in thermal utilities and provides supplemental farm revenue.',
    },
    material: {
      title: 'PROCESS INTO MATERIAL',
      icon: Box,
      color: 'text-amber-300',
      borderColor: 'border-amber-300',
      bgActive: 'bg-amber-300/15',
      nodes: [
        { label: 'Crop Residue', detail: 'Agricultural straw biomass' },
        { label: 'Industrial Collection', detail: 'Hauled to bio-composite manufacturing' },
        { label: 'Fiber Pulping', detail: 'Thermo-mechanical or enzymatic digestion' },
        { label: 'Eco-Products', detail: 'Biodegradable packaging, tableware, & boards' },
      ],
      conclusion: 'Replaces single-use plastics and wood timber with 100% compostable bio-products.',
    },
    compost: {
      title: 'COMPOST',
      icon: Layers,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400',
      bgActive: 'bg-emerald-400/15',
      nodes: [
        { label: 'Crop Residue', detail: 'Stubble left after harvest' },
        { label: 'Bio-Decomposer Spray', detail: 'PUSA fungal consortium applied to straw' },
        { label: 'Shallow Rotavation', detail: 'Residue incorporated into top 5 cm' },
        { label: 'Nutrient-Rich Humus', detail: '20-day accelerated in-situ compost' },
      ],
      conclusion: 'Low-cost biological decomposition that enriches beneficial soil fungi and bacteria.',
    },
    animal: {
      title: 'ANIMAL USE',
      icon: Beef,
      color: 'text-blue-400',
      borderColor: 'border-blue-400',
      bgActive: 'bg-blue-400/15',
      nodes: [
        { label: 'Crop Residue', detail: 'Paddy straw chaffed' },
        { label: 'Urea / Molasses Treatment', detail: '4% urea ammoniation treatment' },
        { label: 'Ensiling Fermentation', detail: 'Digestibility elevated from 40% to 55%' },
        { label: 'Nutritious Cattle Fodder', detail: 'Fed to dairy cattle; manure returned to soil' },
      ],
      conclusion: 'Bridges regional dry-season fodder deficits and closes the livestock-crop nutrient loop.',
    },
  };

  const current = flows[selectedFlow];

  return (
    <div className="mt-16 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8FAF72] block mb-1">
            Systems Dynamics
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Interactive Flow: What Happens to the Residue?
          </h3>
        </div>
        <span className="text-xs font-mono text-white/50">
          Select a utilization destination
        </span>
      </div>

      {/* Selectable Destination Flow Buttons */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {Object.entries(flows).map(([key, item]) => {
          const isSelected = selectedFlow === key;
          const Icon = item.icon;
          return (
            <button
              key={key}
              onClick={() => setSelectedFlow(key as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? `${item.bgActive} ${item.borderColor} ${item.color} shadow-lg shadow-black/40 scale-105`
                  : 'bg-white/[0.02] border-white/10 text-white/70 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Animated Flow Chain Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative">
        {current.nodes.map((node, idx) => (
          <div
            key={node.label}
            className="p-5 rounded-2xl bg-black/50 border border-white/10 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-white/40">STAGE 0{idx + 1}</span>
                {idx < 3 && (
                  <ArrowRight className={`w-4 h-4 ${current.color} hidden lg:block -mr-2`} />
                )}
              </div>
              <h4 className="text-base font-bold text-white mb-1.5 leading-snug">{node.label}</h4>
              <p className="text-xs text-white/60 font-normal leading-relaxed">{node.detail}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#8FAF72]">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified Pathway</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-white/80 font-normal">
          <strong className="text-white">Systemic Outcome:</strong> {current.conclusion}
        </p>
        <span className="shrink-0 text-[10px] font-mono uppercase text-[#8FAF72] bg-[#8FAF72]/10 px-2.5 py-1 rounded-full border border-[#8FAF72]/30">
          Sustainable Circular Loop
        </span>
      </div>
    </div>
  );
};
