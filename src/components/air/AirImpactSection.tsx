import React, { useState } from 'react';
import { PollutantCards } from './PollutantCards';
import { AirQualityMeter } from './AirQualityMeter';
import { Flame, Wind, Building2, Cloud, CheckCircle2 } from 'lucide-react';

export const AirImpactSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const atmosphericSteps = [
    {
      title: 'Crop Residue',
      subtitle: 'Post-Harvest Biomass',
      icon: Wind,
      desc: '6 to 8 tonnes per hectare of fibrous cellulose and silica-rich straw left standing or windrowed across agricultural fields.',
      highlight: 'Biogenic carbon store',
    },
    {
      title: 'Open Combustion',
      subtitle: 'Smoldering Fires',
      icon: Flame,
      desc: 'Low-temperature smoldering fires generate rapid thermal updrafts, converting solid biomass into unburned carbon, VOCs, and ash aerosols.',
      highlight: 'Combustion efficiency: < 80%',
    },
    {
      title: 'Smoke Plume',
      subtitle: 'Particulate & Gases',
      icon: Cloud,
      desc: 'Dense aerosol plumes containing PM2.5, PM10, CO, and NOx rise into the planetary boundary layer, creating regional brown haze.',
      highlight: 'Concentrated atmospheric loading',
    },
    {
      title: 'Atmospheric Drift',
      subtitle: 'Synoptic Wind Currents',
      icon: Wind,
      desc: 'Post-monsoon northwesterly winds and calm autumn thermal inversions trap pollutants in the Indo-Gangetic basin, preventing vertical dispersion.',
      highlight: 'Boundary layer < 500m',
    },
    {
      title: 'Nearby Communities',
      subtitle: 'Downwind Populations',
      icon: Building2,
      desc: 'Aerosols spread hundreds of kilometers to villages, rural schools, and major metropolitan capitals, exposing millions to toxic smog.',
      highlight: 'Regional transboundary impact',
    },
  ];

  return (
    <section id="impact" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08090A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span>Atmospheric Dispersion</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Smoke does not stay{' '}
            <span className="font-playfair italic font-normal text-[#D98B45]">in the field.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            When residue burns, the boundaries of the farm vanish. Driven by synoptic wind patterns
            and seasonal temperature inversions, fine particles drift hundreds of kilometers across
            cities, rural settlements, and schools.
          </p>
        </div>

        {/* Interactive Atmospheric Pathway Chain */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 mb-12">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              Atmospheric Transport Mechanism
            </span>
            <span className="text-xs font-mono text-[#8FAF72]">
              Click any node to trace the pathway
            </span>
          </div>

          {/* Stepper Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {atmosphericSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/10 border-[#D98B45] shadow-lg shadow-black/50'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/40">0{idx + 1}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#D98B45]' : 'text-white/40'}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white tracking-tight leading-snug">
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-mono text-white/50">{step.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Context Box */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D98B45] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-white mb-0.5">
                  Phase 0{activeStep + 1}: {atmosphericSteps[activeStep].title}
                </h5>
                <p className="text-xs sm:text-sm text-white/70 font-normal">
                  {atmosphericSteps[activeStep].desc}
                </p>
              </div>
            </div>

            <div className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-right">
              <span className="text-[9px] uppercase font-mono text-white/40 block">Key Factor</span>
              <span className="text-xs font-mono font-semibold text-[#8FAF72]">
                {atmosphericSteps[activeStep].highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Pollutants Section */}
        <PollutantCards />

        {/* Air Quality Meter */}
        <AirQualityMeter />
      </div>
    </section>
  );
};
