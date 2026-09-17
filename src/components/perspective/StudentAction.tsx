import React from 'react';
import { BookOpen, Share2, ShoppingBag, Lightbulb, Search, GraduationCap } from 'lucide-react';

export const StudentAction: React.FC = () => {
  const actions = [
    {
      id: 'learn',
      title: 'LEARN',
      icon: BookOpen,
      tag: 'Scientific Literacy',
      action: 'Understand why residue burning happens.',
      desc: 'Study the inter-crop agronomic calendar, machinery economics, and biological soil processes. True environmental insight starts with understanding constraints rather than moralizing.',
    },
    {
      id: 'share',
      title: 'SHARE',
      icon: Share2,
      tag: 'Public Discourse',
      action: 'Spread accurate information rather than blaming farmers.',
      desc: 'Counter sensationalized social media headlines by educating peers that farmers face strict seasonal time limits and high baling costs without adequate regional infrastructure.',
    },
    {
      id: 'support',
      title: 'SUPPORT',
      icon: ShoppingBag,
      tag: 'Market Demand',
      action: 'Support sustainable agriculture & circular materials.',
      desc: 'Advocate for institutional procurement of crop-straw bio-packaging, tableware, and paper. Consumer demand transforms agricultural waste into a monetizable commodity.',
    },
    {
      id: 'innovate',
      title: 'INNOVATE',
      icon: Lightbulb,
      tag: 'Engineering & Tech',
      action: 'Build solutions for logistics, monitoring, and reuse.',
      desc: 'Develop mobile machinery aggregation platforms, IoT straw-moisture sensors, satellite fire-alert systems, and energy-dense pelletization designs.',
    },
    {
      id: 'research',
      title: 'RESEARCH',
      icon: Search,
      tag: 'Academic Inquiry',
      action: 'Explore local environmental problems and viable alternatives.',
      desc: 'Conduct field interviews, analyze ambient air particulate datasets, and model regional biomass supply chains for your university coursework and thesis.',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF72]/10 border border-[#8FAF72]/20 text-[#8FAF72] text-xs font-mono uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student & Citizen Agency</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Change does not begin{' '}
            <span className="font-playfair italic font-normal text-[#8FAF72]">with the field alone.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            As students and future professionals, our role is not passive observation. We have the agency
            to bridge agricultural science, engineering, and civic understanding.
          </p>
        </div>

        {/* 5 Sequential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {actions.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={act.id}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-[#8FAF72]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5 text-[#8FAF72]" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40">0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-1">{act.title}</h3>
                  <span className="text-[11px] font-mono text-[#D98B45] block mb-3">{act.tag}</span>

                  <p className="text-xs font-semibold text-white/90 mb-2 leading-snug">{act.action}</p>
                  <p className="text-xs text-white/60 leading-relaxed font-normal">{act.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
