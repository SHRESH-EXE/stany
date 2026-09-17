import React, { useState } from 'react';
import { Wind, Flame, Compass, AlertTriangle, Building, Home, Trees, Tractor } from 'lucide-react';

export const SmokeDispersionMap: React.FC = () => {
  // Wind direction: -1 (Westward/Northwestward), 0 (Calm/Stationary), 1 (Eastward/Southeastward)
  const [windDirection, setWindDirection] = useState<number>(1);
  // Burning intensity: 1 (Low), 2 (Moderate), 3 (Severe)
  const [burningIntensity, setBurningIntensity] = useState<number>(2);

  const zones = [
    { id: 'field', name: 'RURAL FIELDS', icon: Tractor, distance: '0 km', baseline: 'Source of Combustion' },
    { id: 'village', name: 'AGRI VILLAGE', icon: Home, distance: '15 km', baseline: 'Primary School & Hamlets' },
    { id: 'town', name: 'MARKET TOWN', icon: Trees, distance: '60 km', baseline: 'Commercial Center' },
    { id: 'city', name: 'METROPOLITAN BASIN', icon: Building, distance: '220 km', baseline: 'Dense Urban Capital' },
  ];

  // Calculate affected exposure index per zone
  const getExposureLevel = (zoneIndex: number) => {
    // If wind is blowing rightward (1): Field -> Village -> Town -> City
    if (windDirection === 1) {
      if (zoneIndex === 0) return burningIntensity === 1 ? 'High' : 'Severe';
      if (zoneIndex === 1) return burningIntensity === 1 ? 'Moderate' : 'Severe';
      if (zoneIndex === 2) return burningIntensity === 1 ? 'Low' : burningIntensity === 2 ? 'Moderate' : 'Severe';
      if (zoneIndex === 3) return burningIntensity === 1 ? 'Low' : burningIntensity === 2 ? 'Moderate' : 'Severe';
    } else if (windDirection === -1) {
      // Wind blowing leftward: Local retention near fields and backward
      if (zoneIndex === 0) return 'Severe';
      if (zoneIndex === 1) return burningIntensity === 3 ? 'Moderate' : 'Low';
      return 'Low';
    } else {
      // Calm wind: dense local stagnation around fields and village
      if (zoneIndex === 0) return 'Hazardous Stagnation';
      if (zoneIndex === 1) return 'High';
      return 'Low';
    }
    return 'Moderate';
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0D0F10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Atmospheric Drift</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Interactive Air Pollution{' '}
            <span className="font-playfair italic font-normal text-[#D98B45]">Dispersion Model.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Air does not recognize administrative borders. Adjust the synoptic wind vectors and farm burning
            activity to observe how smoke plumes travel along the regional topographical corridor.
          </p>
        </div>

        {/* Interactive Model Canvas & Dashboard */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-white/10">
            {/* Control 1: Wind Vector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[#8FAF72] flex items-center gap-2 font-semibold">
                  <Wind className="w-4 h-4" />
                  <span>Synoptic Wind Trajectory</span>
                </label>
                <span className="text-xs font-mono text-white font-bold">
                  {windDirection === 1 ? 'Northwest to Southeast (Downwind to City)' : windDirection === -1 ? 'Easterly / Reverse Drift' : 'Calm / Atmospheric Stagnation'}
                </span>
              </div>

              <input
                type="range"
                min="-1"
                max="1"
                step="1"
                value={windDirection}
                onChange={(e) => setWindDirection(parseInt(e.target.value, 10))}
                className="w-full cursor-pointer"
                aria-label="Wind Direction"
              />

              <div className="flex justify-between text-[11px] font-mono text-white/40 mt-1">
                <span>← Westerly Reverse</span>
                <span>Calm Stagnation</span>
                <span>NW to SE (Towards Megacity) →</span>
              </div>
            </div>

            {/* Control 2: Burning Intensity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[#D98B45] flex items-center gap-2 font-semibold">
                  <Flame className="w-4 h-4" />
                  <span>Regional Burning Intensity</span>
                </label>
                <span className="text-xs font-mono text-white font-bold">
                  {burningIntensity === 1 ? 'Low (Sporadic Fires)' : burningIntensity === 2 ? 'Moderate (Harvest Peak)' : 'Extreme (Widespread Burning)'}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={burningIntensity}
                onChange={(e) => setBurningIntensity(parseInt(e.target.value, 10))}
                className="w-full cursor-pointer"
                aria-label="Burning Intensity"
              />

              <div className="flex justify-between text-[11px] font-mono text-white/40 mt-1">
                <span>Level 1: Scattered</span>
                <span>Level 2: Peak Season</span>
                <span>Level 3: Synchronized Peak</span>
              </div>
            </div>
          </div>

          {/* Abstract Landscape Map Visualization */}
          <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-black/60 border border-white/10 p-6 flex items-center justify-between mb-8 overflow-hidden">
            {/* Animated Dynamic Plume Simulation */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700"
              style={{
                background:
                  windDirection === 1
                    ? `linear-gradient(90deg, rgba(217,139,69,${0.25 * burningIntensity}) 0%, rgba(200,80,40,${0.2 * burningIntensity}) 40%, rgba(120,60,30,${0.15 * burningIntensity}) 80%, rgba(50,50,50,0.4) 100%)`
                    : windDirection === -1
                    ? `linear-gradient(270deg, rgba(217,139,69,${0.25 * burningIntensity}) 0%, rgba(100,50,30,${0.15 * burningIntensity}) 60%, transparent 100%)`
                    : `radial-gradient(circle at 20% 50%, rgba(217,139,69,${0.4 * burningIntensity}) 0%, transparent 60%)`,
                filter: `blur(${burningIntensity * 4}px)`,
              }}
            />

            {/* Connecting Baseline Vector */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-white/20 via-white/10 to-white/5 pointer-events-none" />

            {/* 4 Geographic Milestones */}
            <div className="relative z-10 w-full grid grid-cols-4 gap-2">
              {zones.map((z, idx) => {
                const Icon = z.icon;
                const exposure = getExposureLevel(idx);
                return (
                  <div key={z.id} className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 shadow-xl transition-transform duration-300 ${
                      exposure.includes('Severe') || exposure.includes('Hazardous')
                        ? 'border-red-500 text-red-400 ring-2 ring-red-500/30 animate-pulse'
                        : exposure === 'High'
                        ? 'border-[#D98B45] text-[#D98B45]'
                        : 'text-white/70'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-white tracking-tight mb-0.5">
                      {z.name}
                    </h4>
                    <span className="text-[10px] font-mono text-white/50 block mb-2">{z.distance}</span>

                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                        exposure.includes('Severe') || exposure.includes('Hazardous')
                          ? 'bg-red-500/20 text-red-300 border-red-500/40'
                          : exposure === 'High'
                          ? 'bg-[#D98B45]/20 text-[#D98B45] border-[#D98B45]/40'
                          : 'bg-white/10 text-white/70 border-white/20'
                      }`}
                    >
                      {exposure}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Model Status Commentary */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="text-white/80">
              <strong className="text-white">Meteorological Condition:</strong>{' '}
              {windDirection === 1
                ? 'Northwesterly airflow rapidly transports fine smoke aerosols downstream into the metropolitan airshed within 18–36 hours.'
                : windDirection === -1
                ? 'Stagnant localized winds keep smoke trapped directly above agricultural villages and rural primary schools.'
                : 'Zero surface wind creates severe vertical thermal inversion trapping smoke at eye level for days.'}
            </div>

            <div className="shrink-0 flex items-center gap-1.5 text-white/50 text-[11px] font-mono">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D98B45]" />
              <span>Illustrative visualization — not a real-time atmospheric model</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
