import React from 'react';
import { SoilCrossSectionSlider } from './SoilCrossSectionSlider';
import { Layers, ThermometerSnowflake, RefreshCw } from 'lucide-react';

export const SoilImpactSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0D0F10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8FAF72]/10 border border-[#8FAF72]/20 text-[#8FAF72] text-xs font-mono uppercase tracking-widest mb-4">
            <span>Pedological & Biological Health</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Below the smoke,{' '}
            <span className="font-playfair italic font-normal text-[#8FAF72]">another story is happening.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            While air pollution captures immediate headlines, the quiet depletion occurs right underfoot.
            Crop residue is the primary biological food source for the living soil matrix. Burning it
            converts prospective humus into immediate thermal loss.
          </p>
        </div>

        {/* 3 Key Soil Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#8FAF72]/10 flex items-center justify-center text-[#8FAF72] mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Organic Carbon Reservoir</h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
              Soil Organic Matter (SOM) acts as the biological glue for soil aggregates. Repeated burning denies fields 3–4 tonnes of organic carbon per hectare per season.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
              <ThermometerSnowflake className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Moisture & Temperature Buffer</h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
              Surface residue acts as an insulating blanket, reducing evaporative loss by up to 30% and protecting emerging winter wheat seedlings against early heat spikes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#D98B45]/10 flex items-center justify-center text-[#D98B45] mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Nutrient Cycling Efficiency</h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
              Burning volatilizes roughly 90% of nitrogen and sulfur into smoke, forcing farmers to buy synthetic chemical fertilizers to restore base fertility.
            </p>
          </div>
        </div>

        {/* Interactive Soil Cross-Section Slider */}
        <SoilCrossSectionSlider />
      </div>
    </section>
  );
};
