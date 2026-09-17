import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/hero/Hero';
import { WhyBurnSection } from './components/causes/WhyBurnSection';
import { DecisionSimulator } from './components/causes/DecisionSimulator';
import { AirImpactSection } from './components/air/AirImpactSection';
import { SoilImpactSection } from './components/soil/SoilImpactSection';
import { AirVsSoilSplit } from './components/comparison/AirVsSoilSplit';
import { HumanImpactSection } from './components/comparison/HumanImpactSection';
import { CauseEffectMap } from './components/comparison/CauseEffectMap';
import { MidwayTransition } from './components/comparison/MidwayTransition';
import { AlternativesSection } from './components/solutions/AlternativesSection';
import { PathwayFlowDiagram } from './components/solutions/PathwayFlowDiagram';
import { StakeholderEcosystem } from './components/solutions/StakeholderEcosystem';
import { BuildYourSolution } from './components/solutions/BuildYourSolution';
import { MythVsReality } from './components/solutions/MythVsReality';
import { SmokeDispersionMap } from './components/atmospheric/SmokeDispersionMap';
import { StoryTimeline } from './components/perspective/StoryTimeline';
import { DataPerspective } from './components/perspective/DataPerspective';
import { StudentAction } from './components/perspective/StudentAction';
import { FinalCta } from './components/perspective/FinalCta';
import { SourcesSection } from './components/perspective/SourcesSection';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-[#08090A] text-white min-h-screen selection:bg-[#8FAF72]/30 selection:text-white antialiased">
      {/* Fixed Navigation Bar */}
      <Navbar />

      <main>
        {/* PART 1: Hero & Cursor Spotlight Reveal */}
        <Hero />

        {/* PART 2: Why it Happens & Root Causes */}
        <WhyBurnSection />

        {/* PART 2: The 10-Minute Decision Interactive Simulation */}
        <DecisionSimulator />

        {/* PART 2: Air Impact, Pollutant Breakdown & AQI Meter */}
        <AirImpactSection />

        {/* PART 2: Soil Impact & Subsurface Cross-Section Slider */}
        <SoilImpactSection />

        {/* PART 2: Air vs Soil Split-Screen Comparison */}
        <AirVsSoilSplit />

        {/* PART 2: Human Exposure & Public Health */}
        <HumanImpactSection />

        {/* PART 2: Interactive Cause -> Effect Systems Map */}
        <CauseEffectMap />

        {/* PART 2 -> PART 3 Bridge: "Can We Change the Cycle?" */}
        <MidwayTransition />

        {/* PART 3: Alternatives & 6 Residue Pathways */}
        <AlternativesSection />

        {/* PART 3: Interactive Flow: What Happens to the Residue */}
        <div className="bg-[#0D0F10] px-4 sm:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <PathwayFlowDiagram />
          </div>
        </div>

        {/* PART 3: Stakeholder Circular Ecosystem */}
        <StakeholderEcosystem />

        {/* PART 3: Build Your Solution Mini-Simulator */}
        <BuildYourSolution />

        {/* PART 3: Myth vs Reality Interactive Flip Cards */}
        <MythVsReality />

        {/* PART 3: Regional Atmospheric Dispersion Wind & Intensity Model */}
        <SmokeDispersionMap />

        {/* PART 3: The Complete Story Timeline */}
        <StoryTimeline />

        {/* PART 3: Empirical Perspective Data Panel */}
        <DataPerspective />

        {/* PART 3: What Can a Student Do? */}
        <StudentAction />

        {/* PART 3: Final Cinematic Dawn Renewal CTA */}
        <FinalCta />

        {/* PART 3: Academic EVS Sources & Literature */}
        <SourcesSection />
      </main>

      {/* Dark Academic Footer */}
      <Footer />
    </div>
  );
};

export default App;
