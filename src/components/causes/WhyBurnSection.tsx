import React, { useState } from 'react';
import { Clock, DollarSign, Zap, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

export const WhyBurnSection: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<number>(0);

  const drivers = [
    {
      number: '01',
      title: 'Time Pressure',
      icon: Clock,
      short: 'Narrow 10–20 day window between rice harvest and wheat sowing.',
      long: 'In intensive crop rotations like Rice-Wheat systems, the window between harvesting paddy (late October) and sowing wheat (mid-November) is barely 10 to 20 days. Any delay in wheat sowing reduces wheat grain yield by an estimated 1–1.5% per day of delay due to terminal heat stress in spring.',
      agriImpact: 'Yield penalty for late wheat planting',
      metric: '10–20 Days',
    },
    {
      number: '02',
      title: 'High Direct Cost',
      icon: DollarSign,
      short: 'Mechanized clearing and baling demands significant diesel, labor, and equipment rental.',
      long: 'Manual removal of 6 to 8 tonnes of straw per hectare requires intensive manual labor or heavy diesel machinery (balers, rakes). For small and marginal farmers with limited cash flow, spending ₹2,000–₹4,000 per acre on residue clearing can erase their razor-thin seasonal profit margins.',
      agriImpact: 'Economic constraint for marginal landholders',
      metric: '₹2,500–₹4,000 / acre',
    },
    {
      number: '03',
      title: 'Operational Convenience',
      icon: Zap,
      short: 'Fire eliminates stubble in hours, leaving clean ground for standard seed drills.',
      long: 'Combine harvesters leave loose straw and 10–12 inch anchored stalks that choke conventional seed drills. Fire eliminates this physical obstruction within hours at near-zero direct monetary outlay, creating a clean seedbed ready for immediate tillage.',
      agriImpact: 'Rapid seedbed preparation',
      metric: '< 4 Hours',
    },
    {
      number: '04',
      title: 'Lack of Local Infrastructure',
      icon: AlertTriangle,
      short: 'Unequal access to specialized machinery and biomass supply chain networks.',
      long: 'Advanced in-situ machinery (Happy Seeders, Smart Seeders, Super SMS) and ex-situ biomass collection networks require massive capital and logistics. In many agricultural belts, Custom Hiring Centers (CHCs) suffer from equipment shortages during the concentrated 2-week peak rush.',
      agriImpact: 'Regional supply chain bottlenecks',
      metric: 'High Peak Demand',
    },
  ];

  return (
    <section id="problem" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0D0F10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D98B45]/10 border border-[#D98B45]/20 text-[#D98B45] text-xs font-mono uppercase tracking-widest mb-4">
            <span>Root Causes & Agricultural Economics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Why burn something that{' '}
            <span className="font-playfair italic font-normal text-[#8FAF72]">came from the soil?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            After harvest, farmers are left with massive quantities of stalks, straw, and crop residue.
            Burning clears fields quickly before the next crop, but this convenience comes with severe
            environmental and soil health costs.
          </p>

          <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#8FAF72] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              <strong className="text-white/90">EVS Perspective:</strong> Agricultural residue burning is not driven by negligence or lack of environmental concern. It is the direct consequence of rigid seasonal crop calendars, high machinery capital costs, and systemic logistical constraints.
            </p>
          </div>
        </div>

        {/* 4 Interactive Driver Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Interactive list */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {drivers.map((driver, index) => {
              const Icon = driver.icon;
              const isSelected = selectedDriver === index;
              return (
                <button
                  key={driver.number}
                  onClick={() => setSelectedDriver(index)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-[#8FAF72] shadow-xl shadow-black/40 scale-[1.01]'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#8FAF72] text-[#08090A]' : 'bg-white/10 text-white/60'
                      }`}>
                        {driver.number}
                      </span>
                      <h3 className="font-semibold text-base sm:text-lg text-white tracking-tight">
                        {driver.title}
                      </h3>
                    </div>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#8FAF72]' : 'text-white/40'}`} />
                  </div>
                  <p className="text-xs sm:text-sm text-white/65 line-clamp-2 leading-relaxed pl-9">
                    {driver.short}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep-Dive Panel */}
          <div className="lg:col-span-7 bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8FAF72]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#8FAF72]">
                  {drivers[selectedDriver].number}
                </span>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block">Factor Breakdown</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {drivers[selectedDriver].title}
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block">Operational Metric</span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-[#D98B45] bg-[#D98B45]/10 px-2.5 py-1 rounded-full border border-[#D98B45]/20 inline-block mt-0.5">
                  {drivers[selectedDriver].metric}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8">
              {drivers[selectedDriver].long}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-white/50 block mb-1">Key Constraint</span>
                <p className="text-xs font-medium text-white/90 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8FAF72] shrink-0" />
                  {drivers[selectedDriver].agriImpact}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-white/50 block mb-1">Systemic Reality</span>
                <p className="text-xs font-medium text-white/90">
                  Residue management requires coordinated harvest schedules & affordable machinery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
