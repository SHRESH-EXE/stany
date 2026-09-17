import React, { useState } from 'react';
import { Pollutant } from '../../types';
import { ChevronDown, ChevronUp, Wind } from 'lucide-react';

export const PollutantCards: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('pm25');

  const pollutants: Pollutant[] = [
    {
      id: 'pm25',
      name: 'Fine Particulate Matter',
      formula: 'PM2.5',
      sizeOrType: '≤ 2.5 micrometers',
      shortDesc: 'Microscopic inhalable combustion particles capable of penetrating deep into alveolar pulmonary capillaries.',
      fullDesc:
        'PM2.5 constitutes over 60–70% of total particulate emissions from smoldering straw. Due to their aerodynamic diameter smaller than 2.5 µm, these particles bypass upper respiratory cilia and travel directly into lung alveoli, entering the systemic bloodstream and triggering systemic inflammation.',
      healthImpact: 'Elevated risks of asthma exacerbation, bronchitis, stroke, and ischemic heart disease.',
      emissionFactor: 'approx. 6–10 kg / tonne of straw',
      level: 'Critical',
    },
    {
      id: 'pm10',
      name: 'Coarse Particulate Matter',
      formula: 'PM10',
      sizeOrType: '≤ 10 micrometers',
      shortDesc: 'Larger inhalable dust and soot particles affecting upper airways, eyes, and throat.',
      fullDesc:
        'PM10 particles include fly ash, unburned carbon fragments, and condensed aerosols. While partially filtered by the nose and throat, prolonged high concentrations severely irritate conjunctiva, cause throat stinging, and trigger chronic obstructive pulmonary disease (COPD) flares.',
      healthImpact: 'Severe mucosal irritation, coughing fits, throat constriction, reduced lung function.',
      emissionFactor: 'approx. 9–14 kg / tonne of straw',
      level: 'Very High',
    },
    {
      id: 'co',
      name: 'Carbon Monoxide',
      formula: 'CO',
      sizeOrType: 'Toxic Colorless Gas',
      shortDesc: 'Produced during incomplete low-oxygen smoldering combustion across windrowed residue.',
      fullDesc:
        'Open field stubble fires often lack adequate oxygen circulation, leading to incomplete combustion and heavy carbon monoxide output. CO binds to blood hemoglobin with an affinity 200× higher than oxygen, forming carboxyhemoglobin (COHb) and starving organs of oxygen.',
      healthImpact: 'Hypoxia, dizziness, headache, fatigue, exacerbation of coronary artery conditions.',
      emissionFactor: 'approx. 60–90 kg / tonne of straw',
      level: 'High',
    },
    {
      id: 'co2',
      name: 'Carbon Dioxide',
      formula: 'CO₂',
      sizeOrType: 'Greenhouse Gas',
      shortDesc: 'Direct biogenic greenhouse gas released when carbon-rich vegetative biomass is burned.',
      fullDesc:
        'Paddy straw contains roughly 40% carbon by dry weight. When burned openly, virtually all stored vegetative carbon is oxidized instantly into carbon dioxide rather than being incorporated as soil humus, compounding atmospheric radiative forcing.',
      healthImpact: 'Indirect climate heating, alters regional microclimate and heat stress.',
      emissionFactor: 'approx. 1,400–1,500 kg / tonne of straw',
      level: 'High',
    },
    {
      id: 'nox',
      name: 'Nitrogen Oxides',
      formula: 'NOₓ',
      sizeOrType: 'Reactive Gaseous Precursor',
      shortDesc: 'Precursor for secondary ozone creation and photochemical winter smog complexes.',
      fullDesc:
        'Released during thermal oxidation of nitrogenous plant compounds. In the presence of sunlight and volatile organic compounds (VOCs), NOx undergoes photochemical reactions producing ground-level tropospheric ozone and fine secondary nitrate aerosols.',
      healthImpact: 'Airway hyperresponsiveness, respiratory tract inflammation, lung tissue damage.',
      emissionFactor: 'approx. 2–3 kg / tonne of straw',
      level: 'High',
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D98B45] block mb-1">
            Chemical Fingerprint
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Key Atmospheric Pollutants
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-white/50 font-mono">
          <Wind className="w-4 h-4 text-[#D98B45]" />
          <span>Click any card to expand scientific mechanism</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pollutants.map((pollutant) => {
          const isExpanded = expandedId === pollutant.id;
          return (
            <div
              key={pollutant.id}
              onClick={() => setExpandedId(isExpanded ? '' : pollutant.id)}
              className={`rounded-2xl border transition-all duration-300 p-6 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-white/[0.08] border-[#D98B45] shadow-xl shadow-black/50 ring-1 ring-[#D98B45]/40 md:col-span-2 lg:col-span-1'
                  : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-mono font-extrabold text-white tracking-tight">
                    {pollutant.formula}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                      pollutant.level === 'Critical'
                        ? 'bg-red-500/20 text-red-300 border-red-500/40'
                        : 'bg-[#D98B45]/20 text-[#D98B45] border-[#D98B45]/40'
                    }`}
                  >
                    {pollutant.level}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-white/90 mb-1">{pollutant.name}</h4>
                <p className="text-[11px] font-mono text-white/50 mb-3">{pollutant.sizeOrType}</p>
                <p className="text-xs text-white/70 leading-relaxed font-normal">{pollutant.shortDesc}</p>
              </div>

              {/* Expandable Scientific Details */}
              {isExpanded && (
                <div className="mt-5 pt-4 border-t border-white/10 text-xs text-white/80 space-y-3 animate-fadeIn">
                  <p className="leading-relaxed font-normal">{pollutant.fullDesc}</p>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#D98B45] block">
                        Health Mechanism:
                      </span>
                      <p className="text-xs text-white/90 font-normal">{pollutant.healthImpact}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#8FAF72] block">
                        Mean Emission Rate:
                      </span>
                      <p className="text-xs font-mono text-white/90">{pollutant.emissionFactor}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Toggle Prompt */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 font-mono">
                <span>{isExpanded ? 'Collapse' : 'Scientific analysis'}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#D98B45]" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
