import React from 'react';
import { Radio, Space } from 'antd';
import * as Icons from 'lucide-react';
import { channels } from '../config/channels';
import { ChannelConfig } from '../types/channel';

interface PlatformSelectorProps {
  selectedPlatform: string;
  onPlatformChange: (platform: string) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatform,
  onPlatformChange,
}) => {
  const renderIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons];
    return Icon ? <Icon className="w-5 h-5 mr-2 text-blue-500" /> : null;
  };

  return (
    <div className="mb-8">
      <Radio.Group
        value={selectedPlatform}
        onChange={(e) => onPlatformChange(e.target.value)}
        className="w-full"
      >
        <Space direction="vertical" className="w-full">
          {channels.map((channel: ChannelConfig) => (
            <div
              key={channel.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedPlatform === channel.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              <Radio value={channel.id} className="w-full">
                <div className="flex items-center">
                  {renderIcon(channel.icon)}
                  <div className="flex flex-col">
                    <span className="font-medium">{channel.name}</span>
                    <span className="text-sm text-gray-500">{channel.setupStep}</span>
                  </div>
                </div>
              </Radio>
            </div>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default PlatformSelector;