export type PageRoute =
  | 'solutions'
  | 'accueil'
  | 'a-propos'
  | 'telecommunications'
  | 'genie-civil'
  | 'realisations'
  | 'engagements'
  | 'partenaires'
  | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'telecom' | 'fibre' | 'genie-civil' | 'vrd';
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  tagline: string;
  clientChallenge: string;
  bleyosolution: string;
  measurableResult: string;
  technicalSpecs: string[];
}

export interface QuoteFormData {
  full_name: string;
  company_name: string;
  phone: string;
  email: string;
  project_type: string;
  urgency: string;
  budget?: string;
  message: string;
}
