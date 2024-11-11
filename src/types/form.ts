export interface PlatformConfig {
  title: string;
  setupStep: string;
  description: string;
  icon: 'Building2' | 'Briefcase';
}

export interface PlanOption {
  id: string;
  plan: string;
  price: number;
  description: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
}