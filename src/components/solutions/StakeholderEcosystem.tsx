import React, { useState } from 'react';
import { Users, Cpu, Landmark, Microscope, Factory, HeartHandshake, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Stakeholder } from '../../types';

export const StakeholderEcosystem: React.FC = () => {
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('farmers');

  const stakeholders: Record<string, Stakeholder> = {
    farmers: {
      id: 'farmers',
      name: 'FARMERS & GROWERS',
      role: 'On-Field Stewards & Decision Makers',
      icon: 'Users',
      actions: [
        'Adopt in-situ residue retention implements (Happy Seeder, Smart Seeder, Super SMS)',
        'Form cooperative machinery-sharing clusters to split capital and diesel costs',
        'Incorporate or retain straw where agronomically suitable for soil carbon',
        'Connect with local biomass aggregators for baling and ex-situ pickup',
      ],
    },
    machinery: {
      id: 'machinery',
      name: 'MACHINERY & CHCs',
      role: 'Custom Hiring Centers & Fleet Operators',
      icon: 'Cpu',
      actions: [
        'Provide affordable hourly rentals for high-horsepower tractors and balers during peak harvest',
        'Implement transparent mobile dispatch apps so smallholders can book machinery reliably',
        'Ensure 24/7 on-ground mechanic and spare parts support during the critical 15-day window',
        'Standardize baling dimensions to optimize downstream transport logistics',
      ],
    },
    government: {
      id: 'government',
      name: 'GOVERNMENT & POLICY',
      role: 'Incentives, Infrastructure & Governance',
      icon: 'Landmark',
      actions: [
        'Direct 50% to 80% capital subsidies for CRM (Crop Residue Management) machinery',
        'Mandate 5–7% biomass pellet co-firing across all state and national coal thermal plants',
        'Provide operational incentives (₹1,000–₹1,500/acre) directly into farmer bank accounts for zero-burn verification',
        'Strengthen agricultural extension officer training and on-field demonstrations',
      ],
    },
    research: {
      id: 'research',
      name: 'AGRICULTURAL RESEARCH',
      role: 'ICAR, State Agri Universities & Agronomists',
      icon: 'Microscope',
      actions: [
        'Breed shorter-duration paddy varieties (e.g., PR-126) to expand the inter-crop sowing window from 15 to 30 days',
        'Engineer fast-acting cold-tolerant microbial decomposers for late autumn application',
        'Long-term trials on soil organic carbon accumulation and weed suppression under mulch',
        'Develop lightweight low-cost seeding attachments for smaller 35 HP tractors',
      ],
    },
    industry: {
      id: 'industry',
      name: 'BIO-INDUSTRY & ENERGY',
      role: 'Off-Takers, Biorefineries & Material Makers',
      icon: 'Factory',
      actions: [
        'Establish long-term biomass off-take purchase agreements with guaranteed minimum support prices',
        'Build regional pelletization, torrefaction, and 2G Bio-Ethanol conversion plants',
        'Scale biodegradable packaging, tableware, and particleboard manufacturing from straw fiber',
        'Invest in rural storage depots to protect collected straw bales from rain and mold',
      ],
    },
    communities: {
      id: 'communities',
      name: 'RURAL COMMUNITIES',
      role: 'Village Panchayats & Local Co-ops',
      icon: 'HeartHandshake',
      actions: [
        'Organize village-level stubble-free recognition and collective social incentives',
        'Promote community composting pits for local vegetable and fodder gardens',
        'Establish machinery booking desks at Village Cooperative Societies',
        'Spread awareness on child and elder respiratory vulnerability to reduce peer pressure to burn',
      ],
    },
    consumers: {
      id: 'consumers',
      name: 'URBAN CITIZENS & CONSUMERS',
      role: 'Market Demand & Civic Engagement',
      icon: 'ShoppingBag',
      actions: [
        'Purchase produce certified from regenerative, zero-burn verified farming cooperatives',
        'Support brands utilizing biodegradable agricultural residue packaging over plastics',
        'Advocate for equitable clean air policies that subsidize agricultural solutions rather than criminalizing farmers',
        'Engage in citizen science air monitoring and environmental education in schools',
      ],
    },
  };

  const current = stakeholders[selectedStakeholder];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Microscope': return <Microscope className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      default: return <ShoppingBag className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF72]/10 border border-[#8FAF72]/20 text-[#8FAF72] text-xs font-mono uppercase tracking-widest mb-4">
            <span>Multi-Stakeholder Framework</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            The solution is{' '}
            <span className="font-playfair italic font-normal text-[#8FAF72]">a connected system.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            No single stakeholder can solve crop residue burning in isolation. Sustainable change
            happens when technology, governance, markets, and communities align around a shared goal.
          </p>
        </div>

        {/* Stakeholder Ecosystem Grid & Interactive Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Circular Nodes List */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
              Select Stakeholder Role
            </span>
            {Object.values(stakeholders).map((st) => {
              const isSelected = selectedStakeholder === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => setSelectedStakeholder(st.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/10 border-[#8FAF72] shadow-xl shadow-black/40 scale-[1.01]'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#8FAF72] text-[#08090A]' : 'bg-white/10 text-white/70'}`}>
                      {getIcon(st.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white">{st.name}</h4>
                      <span className="text-[11px] font-mono text-white/50">{st.role}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-mono ${isSelected ? 'text-[#8FAF72]' : 'text-white/30'}`}>
                    {isSelected ? 'Active' : 'Details'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Stakeholder Deep-Dive Card */}
          <div className="lg:col-span-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Center Zero-Burn System Badge */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8FAF72] block mb-1">
                  Ecosystem Contributor
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {current.name}
                </h3>
                <span className="text-xs font-mono text-white/60">{current.role}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/15 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8FAF72] block font-bold">
                  GOAL
                </span>
                <span className="text-xs font-mono text-white font-semibold">100% ZERO BURN</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
                Actionable Responsibilities & Interventions:
              </span>
              {current.actions.map((act, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#8FAF72] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">{act}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] font-mono uppercase text-[#D98B45] block mb-1">
                EVS Systems Rule:
              </span>
              <p className="text-xs text-white/70 font-normal">
                No policy succeeds without economic viability for farmers. No market succeeds without reliable supply chains. All nodes must synchronize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
