import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PlanOption } from '../types/form';

interface PlanCardProps {
  plan: PlanOption;
  selected: boolean;
  onClick: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-gray-900">{plan.plan}</h3>
            {selected && (
              <CheckCircle className="w-5 h-5 text-blue-500 ml-2" />
            )}
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            £{plan.price}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;