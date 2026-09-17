import React, { useState } from 'react';
import { ResiduePathway } from '../../types';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const AlternativesSection: React.FC = () => {
  const [selectedPathway, setSelectedPathway] = useState<string>('mulch');

  const pathways: Record<string, ResiduePathway> = {
    mulch: {
      id: 'mulch',
      number: '01',
      title: 'MULCHING & IN-SITU RETENTION',
      tagline: 'Preserving Organic Carbon On-Field',
      description:
        'Residue remains on or directly near the soil surface. Specialized tractor-mounted implements like the Happy Seeder or Super SMS cut, lift, and spread straw evenly while drilling wheat seeds into the unplowed ground underneath.',
      soilImpact: 'Reincorporates ~35 kg N, 10 kg P, 150 kg K per hectare over seasonal decay.',
      economicPotential: 'Eliminates 2–3 field tillage passes; saves ₹1,500/acre in diesel and land preparation.',
      steps: ['Combine Harvester with Super SMS', 'Happy Seeder Direct Drilling', 'Surface Mulch Blanket Formation', 'Gradual Biological Humification'],
      pros: ['Retains soil moisture', 'Suppresses weed germination', 'Rebuilds microbial diversity'],
      limitations: ['Requires higher horsepower tractors (≥ 50 HP)', 'Initial purchase cost high without subsidies'],
    },
    compost: {
      id: 'compost',
      number: '02',
      title: 'MICROBIAL COMPOSTING',
      tagline: 'Accelerated Biological Decomposition',
      description:
        'Fungal consortium sprays (e.g., PUSA Bio-decomposer) containing cellulolytic enzymes are sprayed onto chopped straw. Combined with shallow rotavation and light irrigation, decomposition is accelerated from months to 20–25 days.',
      soilImpact: 'Enriches soil microflora and converts recalcitrant cellulose into active humus.',
      economicPotential: 'Very low operational cost (capsules cost ₹20–₹50 per packet).',
      steps: ['Residue Chopping & Spreading', 'PUSA Fungal Consortium Spray', 'Light Disc Harrowing', '20–25 Day Decomposition'],
      pros: ['Extremely low material cost', 'Zero smoke', 'Enhances micronutrient availability'],
      limitations: ['Requires adequate soil moisture & temperature', 'May delay sowing if decomposition is slow'],
    },
    bioenergy: {
      id: 'bioenergy',
      number: '03',
      title: 'BIOENERGY & PELLETS',
      tagline: 'Thermal Power Co-firing & Bio-CNG',
      description:
        'Straw is baled, collected, and transported to processing hubs where it is pelletized or torrefied. The Ministry of Power mandates 5–7% biomass co-firing in coal-fired thermal power plants, creating continuous industrial demand.',
      soilImpact: 'Neutral (residue is removed off-field; no organic return, but zero smoke).',
      economicPotential: 'Biomass aggregators purchase bales at ₹1,500–₹2,000 per metric tonne.',
      steps: ['Mechanical Baling & Raking', 'Transport to Pelletization Mill', 'Densification into High-Calorie Pellets', 'Co-firing in Thermal Boilers / 2G Ethanol'],
      pros: ['Displaces fossil coal combustion', 'Creates off-farm rural employment', 'Scalable commercial market'],
      limitations: ['Huge logistics footprint and baler machinery bottleneck during harvest weeks'],
    },
    biochar: {
      id: 'biochar',
      number: '04',
      title: 'BIOCHAR PRODUCTION',
      tagline: 'Pyrolytic Carbon Sequestration',
      description:
        'Controlled thermal pyrolysis (350–600°C in an oxygen-depleted kiln) converts loose straw into porous, highly recalcitrant elemental biochar. This carbon structure remains locked in agricultural soil for centuries.',
      soilImpact: 'Dramatically improves cation exchange capacity (CEC), aeration, and water-holding capacity.',
      economicPotential: 'Eligible for high-integrity voluntary carbon removal credits.',
      steps: ['Straw Baling & Drying', 'Low-Oxygen Pyrolysis Reactor', 'Quenching & Nutrient Inoculation', 'Soil Incorporation'],
      pros: ['Carbon negative sequestration', 'Perpetual soil conditioning', 'Reduces fertilizer leaching'],
      limitations: ['Requires capital investment in clean modular pyrolysis kilns'],
    },
    feed: {
      id: 'feed',
      number: '05',
      title: 'TREATED ANIMAL FEED',
      tagline: 'Enriched Fodder for Livestock',
      description:
        'While untreated paddy straw contains high silica and lignin (reducing digestibility), treating straw with urea, molasses, or microbial inoculants softens fibers and elevates crude protein content from 3% to 7–9%, creating viable livestock fodder.',
      soilImpact: 'Indirectly returned to fields later as enriched farmyard manure (FYM).',
      economicPotential: 'Supplements animal feed shortages in dairy-intensive agricultural regions.',
      steps: ['Baling & Chaffing', '4% Urea Ammoniation Treatment', 'Anaerobic Ensiling for 21 Days', 'Ration Formulation for Cattle'],
      pros: ['Alleviates fodder scarcity', 'Zero air pollution', 'Supports rural dairy economy'],
      limitations: ['Requires strict adherence to urea treatment protocols to prevent livestock toxicity'],
    },
    industry: {
      id: 'industry',
      number: '06',
      title: 'SUSTAINABLE MATERIALS',
      tagline: 'Molded Packaging, Paper & Eco-Boards',
      description:
        'Straw fibers are pulped and thermo-compressed into biodegradable food packaging trays, acoustic insulation panels, corrugated cardboard, and composite building panels, displacing single-use plastics and timber.',
      soilImpact: 'Neutral off-field conversion.',
      economicPotential: 'High-value consumer goods market; provides lucrative industrial supply agreements.',
      steps: ['Fiber Extraction & Washing', 'Enzymatic or Mechanical Refining', 'Thermoforming / Compression Molding', 'Eco-Packaging & Particle Board Output'],
      pros: ['Replaces single-use plastics and timber', 'High value-addition multiplier', 'Circular bio-economy'],
      limitations: ['Requires regional pulping factories and industrial capital investment'],
    },
  };

  const current = pathways[selectedPathway];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0D0F10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF72]/10 border border-[#8FAF72]/20 text-[#8FAF72] text-xs font-mono uppercase tracking-widest mb-4">
            <span>Circularity & Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            The residue is{' '}
            <span className="font-playfair italic font-normal text-[#8FAF72]">not waste.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            It can become soil organic carbon, renewable thermal fuel, biological compost, enriched cattle feed,
            or eco-packaging. The optimal pathway depends on the crop variety, local machinery availability,
            and regional processing infrastructure.
          </p>
        </div>

        {/* 6 Interactive Pathways Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {Object.values(pathways).map((p) => {
            const isSelected = selectedPathway === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPathway(p.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#8FAF72]/15 border-[#8FAF72] shadow-xl shadow-black/50 ring-1 ring-[#8FAF72]/50 scale-[1.03]'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                }`}
              >
                <div>
                  <span className={`text-[11px] font-mono font-bold block mb-1 ${isSelected ? 'text-[#8FAF72]' : 'text-white/40'}`}>
                    PATHWAY {p.number}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {p.title.split('&')[0]}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-white/50 mt-3 block">
                  {isSelected ? 'Viewing' : 'Explore'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pathway Detailed Showcase */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8FAF72] block mb-1">
                Pathway {current.number} Focus
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-sm font-mono text-[#D98B45] mt-1">{current.tagline}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white/60 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                In-Situ / Ex-Situ Alternative
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8 max-w-4xl">
            {current.description}
          </p>

          {/* Sequential Process Steps Flow */}
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-3">
              Implementation Process Chain:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {current.steps.map((step, idx) => (
                <div
                  key={step}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#8FAF72]/20 text-[#8FAF72] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-white/90 font-medium leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros & Limitations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div className="p-4 rounded-xl bg-[#8FAF72]/5 border border-[#8FAF72]/20">
              <span className="text-xs font-mono uppercase text-[#8FAF72] font-semibold block mb-2">
                Ecological & Practical Benefits
              </span>
              <ul className="space-y-1.5">
                {current.pros.map((p) => (
                  <li key={p} className="text-xs text-white/80 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8FAF72] shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#D98B45]/5 border border-[#D98B45]/20">
              <span className="text-xs font-mono uppercase text-[#D98B45] font-semibold block mb-2">
                Current Bottlenecks & Constraints
              </span>
              <ul className="space-y-1.5">
                {current.limitations.map((l) => (
                  <li key={l} className="text-xs text-white/80 flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-[#D98B45] shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Agronomic Disclaimer Banner */}
          <div className="mt-8 p-3.5 rounded-xl bg-black/30 border border-white/10 text-center">
            <span className="text-[11px] font-mono text-white/50">
              “Not every residue is suitable for every pathway. Local conditions, crop variety, economics, and processing requirements matter.”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
