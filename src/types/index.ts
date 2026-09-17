export interface Pollutant {
  id: string;
  name: string;
  formula: string;
  sizeOrType: string;
  shortDesc: string;
  fullDesc: string;
  healthImpact: string;
  emissionFactor: string;
  level: 'High' | 'Very High' | 'Critical';
}

export interface ResiduePathway {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  soilImpact: string;
  economicPotential: string;
  steps: string[];
  pros: string[];
  limitations: string[];
}

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  actions: string[];
  icon: string;
}

export interface MythItem {
  id: string;
  myth: string;
  reality: string;
  context: string;
}

export interface VerifiedDataPoint {
  metric: string;
  value: string;
  unit: string;
  source: string;
  year: string;
  region: string;
  context: string;
}

export interface DecisionOption {
  id: 'burn' | 'collect' | 'mulch';
  title: string;
  sub: string;
  clearanceSpeed: string;
  machineryCost: string;
  smokeLevel: string;
  soilOutcome: string;
  summary: string;
}
