import React, { useState } from 'react';
import { CloudFog, ShieldAlert, EyeOff, AlertTriangle } from 'lucide-react';

export const AirQualityMeter: React.FC = () => {
  // Slider state: 0 (No burning), 1 (Low), 2 (Moderate), 3 (Heavy burning)
  const [intensity, setIntensity] = useState<number>(2);

  const stages = [
    {
      label: 'No burning',
      aqiValue: '45–60',
      category: 'Good / Moderate',
      categoryColor: 'text-[#8FAF72]',
      bgColor: 'bg-[#8FAF72]/20',
      borderColor: 'border-[#8FAF72]/40',
      hazeOpacity: 0.05,
      particleCount: 15,
      visibility: '> 8.0 km',
      healthAdvisory: 'Air quality is acceptable; minimal health risk for general population.',
    },
    {
      label: 'Low burning',
      aqiValue: '120–180',
      category: 'Moderate to Unhealthy for Sensitive Groups',
      categoryColor: 'text-amber-300',
      bgColor: 'bg-amber-300/20',
      borderColor: 'border-amber-300/40',
      hazeOpacity: 0.25,
      particleCount: 45,
      visibility: '3.5–5.0 km',
      healthAdvisory: 'Children, elderly, and individuals with asthma may experience slight airway irritation.',
    },
    {
      label: 'Moderate burning',
      aqiValue: '280–350',
      category: 'Poor to Very Poor',
      categoryColor: 'text-[#D98B45]',
      bgColor: 'bg-[#D98B45]/20',
      borderColor: 'border-[#D98B45]/40',
      hazeOpacity: 0.55,
      particleCount: 90,
      visibility: '1.2–2.0 km',
      healthAdvisory: 'Noticeable throat irritation, burning sensation in eyes, reduced outdoor athletic capacity.',
    },
    {
      label: 'Heavy burning',
      aqiValue: '450–700+',
      category: 'Severe to Hazardous',
      categoryColor: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/40',
      hazeOpacity: 0.85,
      particleCount: 180,
      visibility: '< 400 m',
      healthAdvisory: 'Emergency health conditions. High vulnerability for acute asthma attacks, cardiac strain, and stroke.',
    },
  ];

  const current = stages[intensity];

  return (
    <div className="mt-16 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
      {/* Header & Disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D98B45] block mb-1">
            Simulated Atmospheric Response
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Interactive Air Quality & Haze Meter
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/50 text-[11px] font-mono">
          <AlertTriangle className="w-3.5 h-3.5 text-[#D98B45]" />
          <span>Illustrative simulation — not real-time AQI data</span>
        </div>
      </div>

      {/* Visual Simulated Atmosphere Chamber */}
      <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 mb-8 bg-[#0D0F10] flex items-center justify-center">
        {/* Background cityscape silhouette */}
        <div
          className="absolute inset-0 bg-cover bg-bottom opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage: `radial-gradient(ellipse at bottom, rgba(30,35,40,0.8), #08090A)`,
          }}
        />

        {/* Dynamic Smoke Haze Layer */}
        <div
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{
            backgroundColor: intensity === 3 ? 'rgba(180, 100, 40, 0.45)' : 'rgba(100, 105, 115, 0.35)',
            opacity: current.hazeOpacity,
            backdropFilter: `blur(${intensity * 3}px)`,
          }}
        />

        {/* Floating animated smoke particle points */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: Math.min(current.particleCount, 60) }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/40 animate-smoke-particle"
              style={{
                width: `${(i % 4) + 2}px`,
                height: `${(i % 4) + 2}px`,
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
                animationDelay: `${(i % 10) * 0.4}s`,
                animationDuration: `${3 + (i % 5)}s`,
                opacity: 0.15 + (intensity * 0.18),
              }}
            />
          ))}
        </div>

        {/* Dynamic Center Reading HUD */}
        <div className="relative z-10 text-center px-4 bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/15 max-w-sm">
          <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block mb-1">
            Simulated Particulate Index
          </span>
          <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-tight mb-1">
            AQI {current.aqiValue}
          </div>
          <span
            className={`text-xs sm:text-sm font-semibold px-3 py-0.5 rounded-full inline-block border ${current.categoryColor} ${current.bgColor} ${current.borderColor}`}
          >
            {current.category}
          </span>
        </div>
      </div>

      {/* Interactive Range Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="burning-slider" className="text-xs font-mono uppercase tracking-widest text-white/70">
            Regional Burning Intensity: <span className="text-white font-bold">{current.label}</span>
          </label>
          <span className="text-xs font-mono text-white/40">Step {intensity + 1} of 4</span>
        </div>

        <input
          id="burning-slider"
          type="range"
          min="0"
          max="3"
          step="1"
          value={intensity}
          onChange={(e) => setIntensity(parseInt(e.target.value, 10))}
          className="w-full cursor-pointer"
          aria-label="Burning Intensity Slider"
        />

        {/* Step Ticks */}
        <div className="flex justify-between text-[11px] font-mono text-white/50 mt-2 px-1">
          {stages.map((stg, idx) => (
            <button
              key={stg.label}
              onClick={() => setIntensity(idx)}
              className={`cursor-pointer hover:text-white transition-colors ${
                intensity === idx ? 'text-[#8FAF72] font-semibold' : ''
              }`}
            >
              {stg.label}
            </button>
          ))}
        </div>
      </div>

      {/* Atmospheric & Health Diagnostics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
        <div className="p-4 rounded-xl bg-black/40 border border-white/10">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-1">
            <EyeOff className="w-4 h-4 text-white/70" />
            <span>Atmospheric Visibility</span>
          </div>
          <div className="text-base font-bold font-mono text-white">{current.visibility}</div>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-1">
            <CloudFog className="w-4 h-4 text-[#D98B45]" />
            <span>Relative Smoke Opacity</span>
          </div>
          <div className="text-base font-bold font-mono text-white">
            {Math.round(current.hazeOpacity * 100)}% Optical Attenuation
          </div>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10">
          <div className="flex items-center gap-2 text-white/50 text-xs mb-1">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Health Advisory</span>
          </div>
          <p className="text-xs text-white/80 leading-relaxed font-normal">{current.healthAdvisory}</p>
        </div>
      </div>
    </div>
  );
};
