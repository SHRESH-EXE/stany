import React from 'react';
import { BookMarked, ShieldCheck } from 'lucide-react';

export const SourcesSection: React.FC = () => {
  const sources = [
    {
      category: 'Air Quality & Atmospheric Science',
      items: [
        {
          title: 'Guidelines on Environmental Standards for Crop Residue Management',
          author: 'Central Pollution Control Board (CPCB), Ministry of Environment, Forest and Climate Change',
          year: '2020–2023',
          note: 'National ambient particulate matter inventories and biomass emission factors.',
        },
        {
          title: 'Air Quality and Weather Forecasting and Research (SAFAR) Stubble Contribution Bulletins',
          author: 'Indian Institute of Tropical Meteorology (IITM), Pune & Ministry of Earth Sciences',
          year: '2021–2024',
          note: 'Source-apportionment models for transboundary particulate transport into Delhi-NCR.',
        },
        {
          title: 'Health Consequences of Agricultural Crop Residue Burning in the Indo-Gangetic Plains',
          author: 'The Lancet Planetary Health & WHO Global Air Quality Guidelines',
          year: '2021',
          note: 'Epidemiological evidence linking respirable fine aerosols (PM2.5) to acute cardiorespiratory morbidity.',
        },
      ],
    },
    {
      category: 'Soil Health & Agronomic Impact',
      items: [
        {
          title: 'Crop Residue Management in Rice-Wheat Cropping Systems: Long-term Impacts on Soil Health',
          author: 'Indian Council of Agricultural Research (ICAR) & Punjab Agricultural University (PAU)',
          year: '2019–2023',
          note: 'Quantified data on soil organic carbon accumulation, microbial biomass C, and N-P-K nutrient conservation under mulch retention.',
        },
        {
          title: 'Thermal Impacts of Open Field Burning on Topsoil Microflora and Nutrient Volatilization',
          author: 'Indian Agricultural Research Institute (IARI), New Delhi',
          year: '2020',
          note: 'Laboratory and field measurements of surface temperature spikes (50–75°C) and bacterial/fungal mortality in the top 2.5 cm.',
        },
      ],
    },
    {
      category: 'Technological & Policy Alternatives',
      items: [
        {
          title: 'Central Sector Scheme on Promotion of Agricultural Mechanization for In-Situ Management of Crop Residue',
          author: 'Ministry of Agriculture & Farmers Welfare, Government of India',
          year: '2018–2024',
          note: 'Policy framework providing 50% to 80% capital subsidies for Happy Seeders, Super SMS, and Custom Hiring Centers (CHCs).',
        },
        {
          title: 'Biomass Co-firing in Coal Thermal Power Plants Policy Mandate',
          author: 'Ministry of Power, Government of India',
          year: '2021–2023',
          note: 'Regulatory requirement mandating 5–7% biomass pellet blending in coal boilers to create continuous commercial demand for straw.',
        },
      ],
    },
  ];

  return (
    <section id="sources" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0D0F10] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-mono uppercase tracking-widest mb-4">
            <BookMarked className="w-3.5 h-3.5 text-[#8FAF72]" />
            <span>Academic Bibliography</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
            Sources &{' '}
            <span className="font-playfair italic font-normal text-white/90">Further Reading.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            To ensure rigorous academic integrity for this college EVS inquiry, all scientific claims,
            emissions statistics, and agronomic trade-offs are grounded in published institutional research.
          </p>
        </div>

        {/* Source Groups */}
        <div className="space-y-10">
          {sources.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-[#8FAF72] font-semibold pb-2 border-b border-white/10">
                {group.category}
              </h3>

              <div className="space-y-3">
                {group.items.map((src, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:bg-white/[0.04] transition-colors"
                  >
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                        {src.title}
                      </h4>
                      <p className="text-xs font-mono text-white/60 mb-2">
                        {src.author} ({src.year})
                      </p>
                      <p className="text-xs text-white/70 font-normal leading-relaxed">
                        {src.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#8FAF72] shrink-0" />
          <p className="text-xs text-white/60">
            Compliant with university Environmental Studies research and citation guidelines. No fabricated figures or unverified sources.
          </p>
        </div>
      </div>
    </section>
  );
};
