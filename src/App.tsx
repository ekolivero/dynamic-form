import { useState } from 'react';
import { ConfigProvider, message } from 'antd';
import PlatformSelector from './components/PlatformSelector';
import PlatformSetup from './components/PlatformSetup';
import { channels } from './config/channels';
import { FileText } from 'lucide-react';

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    channels[0].id
  );

  const handleSubmit = (values: any) => {
    const channel = channels.find((c) => c.id === selectedPlatform);
    console.log('Form values:', { platform: selectedPlatform, ...values });
    message.success(`${channel?.name} configuration saved!`);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3b82f6',
          borderRadius: 8,
        },
      }}
    >
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-8 h-8 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">
              Job Platform Setup
            </h1>
          </div>

          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onPlatformChange={setSelectedPlatform}
          />

          <PlatformSetup platform={selectedPlatform} onSubmit={handleSubmit} />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
