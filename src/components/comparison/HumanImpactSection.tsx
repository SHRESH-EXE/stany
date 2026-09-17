import React, { useState } from 'react';
import { User, Home, Building, HeartPulse, ShieldCheck } from 'lucide-react';

export const HumanImpactSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number>(0);

  const groups = [
    {
      title: 'FARMERS & AGRI-WORKERS',
      icon: User,
      scope: 'Ground Zero Exposure',
      distance: '0 – 5 km from combustion',
      tag: 'Acute Near-Source Inhalation',
      description:
        'Farmers and field laborers experience direct, highly concentrated inhalation of fresh combustion fumes, volatile organic aerosols, and hot ash particles while igniting and supervising field fires.',
      healthContext:
        'Immediate symptoms include acute eye stinging, conjunctival irritation, coughing paroxysms, and temporary reduction in peak expiratory flow. Chronic exposure over multiple seasons elevates the risk of chronic bronchitis and allergic rhinitis.',
      evidence: 'High occupational exposure during harvesting and post-harvest clearing.',
    },
    {
      title: 'RURAL VILLAGES & SCHOOLS',
      icon: Home,
      scope: 'Local Community Exposure',
      distance: '5 – 40 km downwind',
      tag: 'Persistent Nighttime Inversion Smog',
      description:
        'Rural hamlets and village clusters lack air-conditioned or filtered indoor spaces. As evening temperatures drop, thermal inversions trap smoke at ground level, engulfing homes and primary schools in persistent smoldering smog for consecutive days.',
      healthContext:
        'Children and elderly rural residents show marked increases in outpatient pediatric asthma consultations, persistent nocturnal coughing, and elevated blood pressure spikes during peak burning weeks.',
      evidence: 'Absence of indoor filtration infrastructure leads to high 24-hour residential exposure.',
    },
    {
      title: 'REGIONAL MEGACITIES',
      icon: Building,
      scope: 'Macro-Urban Basin Impact',
      distance: '100 – 400+ km downwind',
      tag: 'Photochemical Smog & Synoptic Trapping',
      description:
        'Northwesterly synoptic winds transport regional smoke plumes across hundreds of kilometers into dense metropolitan basins (such as Delhi-NCR and the Indo-Gangetic Plains), where stubble smoke combines with vehicular and industrial emissions.',
      healthContext:
        'Episodes of severe AQI (exceeding 400–500) trigger city-wide respiratory emergencies, school closures, increased cardiovascular hospitalizations, and aggravated symptoms for patients with pre-existing coronary or pulmonary conditions.',
      evidence: 'Source-apportionment studies attribute 25% to over 40% of peak autumn PM2.5 in Delhi to agricultural burning.',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0D0F10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span>Public Health & Vulnerability</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            The smoke{' '}
            <span className="font-playfair italic font-normal text-white/90">reaches people.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Particulate air pollution is not confined by property fences or administrative borders.
            From the field worker lighting the straw to children attending schools hundreds of kilometers
            downwind, the physiological toll is shared.
          </p>

          <div className="mt-6 inline-block text-xs sm:text-sm font-semibold tracking-wide text-[#8FAF72] bg-[#8FAF72]/10 px-4 py-2 rounded-full border border-[#8FAF72]/30">
            “The impact is not limited by the field boundary.”
          </div>
        </div>

        {/* 3 Interactive Environment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            const isSelected = selectedGroup === idx;
            return (
              <div
                key={group.title}
                onClick={() => setSelectedGroup(idx)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/10 border-[#D98B45] shadow-2xl shadow-black/60 scale-[1.02]'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                      {group.distance}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                    {group.title}
                  </h3>
                  <span className="text-xs font-mono text-[#D98B45] block mb-4">{group.tag}</span>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-6">
                    {group.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] uppercase font-mono text-red-400 font-semibold flex items-center gap-1 mb-1">
                      <HeartPulse className="w-3.5 h-3.5" /> Documented Health Vulnerability
                    </span>
                    <p className="text-xs text-white/80 font-normal leading-relaxed">
                      {group.healthContext}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Public Health Disclaimer Note */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#8FAF72] shrink-0 mt-0.5" />
          <p className="text-xs text-white/60 leading-relaxed">
            <strong className="text-white/80">Academic Health Note:</strong> Epidemiological literature (WHO, Lancet Planetary Health) establishes clear associations between elevated fine particulate matter (PM2.5) exposure and exacerbation of respiratory illnesses, asthma episodes, and cardiovascular complications, particularly among pediatric and geriatric populations.
          </p>
        </div>
      </div>
    </section>
  );
};
