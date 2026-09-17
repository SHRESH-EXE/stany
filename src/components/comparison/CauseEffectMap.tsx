import React, { useState } from 'react';
import { ArrowRight, CornerDownRight, Info, GitBranch } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  category: 'origin' | 'air' | 'soil';
  short: string;
  details: string;
  nextIds: string[];
}

export const CauseEffectMap: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('burning');

  const nodes: Record<string, NodeData> = {
    harvest: {
      id: 'harvest',
      label: 'HARVEST',
      category: 'origin',
      short: 'Paddy crop harvested with high-throughput combine harvesters.',
      details: 'Large automated combine harvesters reap grain rapidly while leaving 10–14 inch anchored stubble and loose straw scattered across the field.',
      nextIds: ['residue'],
    },
    residue: {
      id: 'residue',
      label: 'RESIDUE',
      category: 'origin',
      short: '6 to 8 tonnes of fibrous, silica-rich crop straw per hectare.',
      details: 'Straw is physically voluminous and resistant to rapid biological decomposition without active microbial or mechanical shredding.',
      nextIds: ['burning'],
    },
    burning: {
      id: 'burning',
      label: 'BURNING',
      category: 'origin',
      short: 'In-field open flame ignition to clear land rapidly before wheat sowing.',
      details: 'Driven by narrow seasonal sowing windows (10–20 days) and high costs of manual or mechanical removal. The pivotal divergence point.',
      nextIds: ['smoke', 'loss_residue'],
    },
    // Atmospheric branch
    smoke: {
      id: 'smoke',
      label: 'SMOKE EMISSIONS',
      category: 'air',
      short: 'Combustion aerosols containing PM2.5, PM10, CO, and NOx.',
      details: 'Thermal updrafts loft smoke plumes into the planetary boundary layer during calm post-monsoon autumn weather conditions.',
      nextIds: ['air_pollution'],
    },
    air_pollution: {
      id: 'air_pollution',
      label: 'AIR POLLUTION',
      category: 'air',
      short: 'Regional smog episodes and hazardous particulate spikes across the basin.',
      details: 'Temperature inversions trap dense aerosol layers close to the surface, driving Air Quality Index (AQI) values above 400–500+.',
      nextIds: ['exposure'],
    },
    exposure: {
      id: 'exposure',
      label: 'HUMAN EXPOSURE',
      category: 'air',
      short: 'Public health crisis across rural hamlets and downwind metropolitan cities.',
      details: 'Severe respiratory distress, chronic bronchitis flare-ups, cardiovascular stress, and pediatric vulnerability across millions of inhabitants.',
      nextIds: [],
    },
    // Soil branch
    loss_residue: {
      id: 'loss_residue',
      label: 'LOSS OF RESIDUE',
      category: 'soil',
      short: 'Thermal oxidation destroys prospective organic mulch cover.',
      details: '100% of organic carbon in the burned straw is vaporized rather than returned as food for soil microbes and earthworms.',
      nextIds: ['soil_nutrients'],
    },
    soil_nutrients: {
      id: 'soil_nutrients',
      label: 'SOIL NUTRIENTS IMPACT',
      category: 'soil',
      short: 'Complete volatilization of nitrogen & sulfur, desiccation of surface biology.',
      details: 'Direct heat from smoldering straw spikes surface soil temperatures, diminishing active bacterial and fungal populations in the top 2.5 cm.',
      nextIds: ['soil_quality'],
    },
    soil_quality: {
      id: 'soil_quality',
      label: 'SOIL QUALITY CONCERNS',
      category: 'soil',
      short: 'Gradual organic matter depletion and reliance on synthetic chemical fertilizers.',
      details: 'Repeated long-term burning deteriorates soil structure, reduces water infiltration, and leads to escalating fertilizer dependency.',
      nextIds: [],
    },
  };

  const selectedNode = nodes[selectedNodeId];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF72]/10 border border-[#8FAF72]/20 text-[#8FAF72] text-xs font-mono uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Systems Causality Map</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            The Interactive{' '}
            <span className="font-playfair italic font-normal text-[#D98B45]">Cause → Effect Chain.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Follow the ecological domino effect. Click any milestone along the branching network to
            inspect how an in-field decision reverberates into regional atmospheric and soil consequences.
          </p>
        </div>

        {/* Interactive Diagram Container */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 mb-10 relative overflow-hidden">
          {/* Main Trunk: Harvest -> Residue -> Burning */}
          <div className="mb-8 pb-8 border-b border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-4">
              Origin Phase (Agricultural Field)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['harvest', 'residue', 'burning'].map((id, idx) => {
                const node = nodes[id];
                const isSelected = selectedNodeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedNodeId(id)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-[#D98B45] shadow-lg shadow-black/50 ring-1 ring-[#D98B45]/40 scale-[1.02]'
                        : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-white/50">0{idx + 1}</span>
                      {idx < 2 && <ArrowRight className="w-4 h-4 text-white/30 hidden sm:inline-block" />}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{node.label}</h4>
                    <p className="text-xs text-white/60 line-clamp-2">{node.short}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Branching Bifurcation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Branch 1: Atmospheric Pathway */}
            <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-300 text-xs font-mono uppercase tracking-wider mb-4">
                <CornerDownRight className="w-4 h-4" />
                <span>Atmospheric Pathway (Upward)</span>
              </div>
              <div className="space-y-3">
                {['smoke', 'air_pollution', 'exposure'].map((id) => {
                  const node = nodes[id];
                  const isSelected = selectedNodeId === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setSelectedNodeId(id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white/15 border-red-400 shadow-md ring-1 ring-red-400'
                          : 'bg-black/40 border-white/10 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{node.label}</span>
                        <span className="text-[10px] font-mono text-red-300">ATMOSPHERE</span>
                      </div>
                      <p className="text-xs text-white/65">{node.short}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Branch 2: Soil Depletion Pathway */}
            <div className="p-6 rounded-2xl bg-[#8FAF72]/10 border border-[#8FAF72]/20">
              <div className="flex items-center gap-2 text-[#8FAF72] text-xs font-mono uppercase tracking-wider mb-4">
                <CornerDownRight className="w-4 h-4" />
                <span>Pedological Pathway (Downward)</span>
              </div>
              <div className="space-y-3">
                {['loss_residue', 'soil_nutrients', 'soil_quality'].map((id) => {
                  const node = nodes[id];
                  const isSelected = selectedNodeId === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setSelectedNodeId(id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white/15 border-[#8FAF72] shadow-md ring-1 ring-[#8FAF72]'
                          : 'bg-black/40 border-white/10 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{node.label}</span>
                        <span className="text-[10px] font-mono text-[#8FAF72]">SOIL SYSTEM</span>
                      </div>
                      <p className="text-xs text-white/65">{node.short}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Node Detail Drawer */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                <Info className="w-5 h-5 text-[#D98B45]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-white/50 block">Selected Stage Details</span>
                <h4 className="text-lg font-bold text-white tracking-tight">{selectedNode.label}</h4>
                <p className="text-xs sm:text-sm text-white/80 font-normal mt-1 max-w-3xl leading-relaxed">
                  {selectedNode.details}
                </p>
              </div>
            </div>

            {selectedNode.nextIds.length > 0 && (
              <div className="shrink-0 pt-2 sm:pt-0">
                <span className="text-[10px] uppercase font-mono text-white/40 block mb-1">Next Cascade</span>
                <div className="flex gap-2">
                  {selectedNode.nextIds.map((nextId) => (
                    <button
                      key={nextId}
                      onClick={() => setSelectedNodeId(nextId)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white/90 border border-white/15 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{nodes[nextId].label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
