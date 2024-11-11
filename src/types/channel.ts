export interface ChannelPlan {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ChannelConfig {
  id: string;
  name: string;
  setupStep: string;
  title: string;
  description: string;
  icon: 'Building2' | 'Briefcase' | 'Building' | 'Users';
  type: 'budget' | 'plan';
  plans?: ChannelPlan[];
  budgetConfig?: {
    min: number;
    max?: number;
    currency: string;
    period: 'daily' | 'monthly' | 'yearly';
  };
}