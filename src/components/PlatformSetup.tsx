import React from 'react';
import { InputNumber, Button } from 'antd';
import { ChannelPlan } from '../types/channel';
import PlanCard from './PlanCard';
import { channels } from '../config/channels';

interface PlatformSetupProps {
  platform: string;
  onSubmit: (values: any) => void;
}

const PlatformSetup: React.FC<PlatformSetupProps> = ({
  platform,
  onSubmit,
}) => {
  const [selectedPlan, setSelectedPlan] = React.useState<string>('');
  const [budget, setBudget] = React.useState<number | null>(null);

  const channelConfig = channels.find((channel) => channel.id === platform);

  if (!channelConfig) return null;

  const handleSubmit = () => {
    if (channelConfig.type === 'plan' && selectedPlan) {
      onSubmit({ selectedPlan });
    } else if (channelConfig.type === 'budget' && budget) {
      onSubmit({ budget });
    }
  };

  const renderContent = () => {
    if (channelConfig.type === 'plan' && channelConfig.plans) {
      return (
        <div className="space-y-4 mb-6">
          {channelConfig.plans.map((plan: ChannelPlan) => (
            <PlanCard
              key={plan.id}
              plan={{
                id: plan.id,
                plan: plan.name,
                price: plan.price,
                description: plan.description,
              }}
              selected={selectedPlan === plan.id}
              onClick={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>
      );
    }

    if (channelConfig.type === 'budget' && channelConfig.budgetConfig) {
      const { min, currency, period } = channelConfig.budgetConfig;
      return (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {period.charAt(0).toUpperCase() + period.slice(1)} Budget
          </label>
          <InputNumber
            className="w-full"
            min={min}
            formatter={(value) =>
              `${currency} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value!.replace(/[£$]\s?|(,*)/g, '')}
            onChange={(value) => setBudget(value)}
          />
        </div>
      );
    }
  };

  const isSubmitDisabled =
    (channelConfig.type === 'plan' && !selectedPlan) ||
    (channelConfig.type === 'budget' && !budget);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <p className="text-sm text-blue-600 font-medium mb-2">
          {channelConfig.setupStep}
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {channelConfig.title}
        </h2>
        <p className="text-gray-600">{channelConfig.description}</p>
      </div>

      {renderContent()}

      <Button
        type="primary"
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
        className="w-full bg-blue-500 hover:bg-blue-600"
      >
        Continue
      </Button>
    </div>
  );
};

export default PlatformSetup;
