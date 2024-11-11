import { ChannelConfig } from '../types/channel';

export const channels: ChannelConfig[] = [
  {
    id: 'reed',
    name: 'Reed',
    setupStep: 'Channel set up (1/3)',
    title: 'Reed Configuration',
    description:
      'In a pay-per-post model, you buy ads upfront, paying a set fee for each job post. Each ad lets you promote one job. Please select the jobs you want to sponsor, as this will determine how many ads you need to purchase.',
    icon: 'Briefcase',
    type: 'plan',
    plans: [
      {
        id: 'basic',
        name: 'Basic',
        price: 99,
        description:
          'Perfect for small businesses. Includes 1 job posting per month.',
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 199,
        description:
          'Ideal for growing companies. Includes 5 job postings per month and featured listings.',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 399,
        description:
          'For large organizations. Unlimited job postings, featured listings, and priority support.',
      },
    ],
  },
  {
    id: 'indeed',
    name: 'Indeed',
    setupStep: 'Channel set up (3/3)',
    title: 'Indeed Configuration',
    description:
      'Set your budget for Indeed job postings. Indeed uses a pay-per-click model where you only pay when candidates click on your job listings.',
    icon: 'Building2',
    type: 'budget',
    budgetConfig: {
      min: 1,
      currency: '£',
      period: 'daily',
    },
  },
  {
    id: 'infojobs',
    name: 'InfoJobs',
    setupStep: 'Channel set up (1/1)',
    title: 'Infojobs Configuration',
    description: 'This is the infoJobs config',
    icon: 'Building2',
    type: 'budget',
    budgetConfig: {
      min: 1,
      currency: '£',
      period: 'monthly',
    },
  },
];
