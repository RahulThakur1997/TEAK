export type SectorType = 'all' | 'hospitality' | 'commercial' | 'medical' | 'retail' | 'trades';

export interface SectorItem {
  id: string;
  category: 'hospitality' | 'commercial' | 'medical' | 'retail' | 'trades';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics: string;
  capabilities: string[];
  keyHighlights: string[];
  sampleProject: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  location: string;
  sqm: number;
  duration: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
  keyFeatures: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  projectType: string;
  avatarText: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
}

export interface QualificationFormData {
  sector: string;
  scaleSqm: string;
  scaleSqmNumeric: number;
  timeline: string;
  budgetRange: string;
  notes: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectAddress: string;
  preferredDirector: 'james' | 'matthew' | 'either';
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  location: string;
  sqm: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  details: string;
}
