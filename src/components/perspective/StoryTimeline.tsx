import React from 'react';

export const StoryTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'THE HARVEST',
      desc: 'High-yield combine harvesters clear the paddy crop in autumn, leaving millions of tonnes of anchored stubble and loose straw.',
      tag: 'Field Origin',
    },
    {
      num: '02',
      title: 'THE RESIDUE DILEMMA',
      desc: '6 to 8 tonnes of straw per hectare must be cleared within 10 to 20 days before wheat sowing begins.',
      tag: 'Time Pressure',
    },
    {
      num: '03',
      title: 'THE DECISION POINT',
      desc: 'Faced with tight seasonal deadlines and high manual clearing costs, burning appears as the fastest zero-cash option.',
      tag: 'Socio-Economic Choice',
    },
    {
      num: '04',
      title: 'OPEN COMBUSTION',
      desc: 'Fields ignite across hundreds of kilometers, vaporizing biological carbon into towering plumes of smoke.',
      tag: 'Thermal Transformation',
    },
    {
      num: '05',
      title: 'AIR POLLUTION SPIKE',
      desc: 'PM2.5, carbon monoxide, and volatile aerosols saturate the Indo-Gangetic airshed, trapped under thermal inversions.',
      tag: 'Atmospheric Crisis',
    },
    {
      num: '06',
      title: 'SOIL QUALITY DECLINE',
      desc: 'Beneath the flames, organic carbon is lost, surface soil desiccates, and beneficial microflora are depleted.',
      tag: 'Subsurface Degradation',
    },
    {
      num: '07',
      title: 'HUMAN EXPOSURE',
      desc: 'From farm workers to city children 300 km away, millions suffer acute respiratory and cardiovascular stress.',
      tag: 'Public Health Toll',
    },
    {
      num: '08',
      title: 'SUSTAINABLE ALTERNATIVES',
      desc: 'In-situ retention (Happy Seeder), microbial composting, biochar, and bioenergy off-take demonstrate residue is a resource.',
      tag: 'Circularity',
    },
    {
      num: '09',
      title: 'SYSTEM TRANSFORMATION',
      desc: 'Policy, machinery rental centers, farmer incentives, and clean markets synchronize to end the cycle permanently.',
      tag: 'The Solution',
    },
  ];

  return (
    <section id="explore" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090A] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8FAF72] bg-[#8FAF72]/10 px-3.5 py-1.5 rounded-full border border-[#8FAF72]/20">
            The Complete Narrative Arc
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
            From field to atmosphere,{' '}
            <span className="font-playfair italic font-normal text-white/90">and back to renewal.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60">
            A chronological timeline summarizing the entire ecological and societal cycle.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/15 space-y-12 ml-4 sm:ml-8">
          {steps.map((step) => (
            <div key={step.num} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#08090A] border-2 border-white/30 group-hover:border-[#8FAF72] flex items-center justify-center transition-colors">
                <span className="text-[10px] font-mono font-bold text-white/60 group-hover:text-[#8FAF72]">
                  {step.num}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 group-hover:bg-white/[0.05] group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D98B45] font-semibold">
                    {step.tag}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">Step {step.num}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
