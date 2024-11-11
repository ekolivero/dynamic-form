import React from 'react';
import { Form, Input, Radio, InputNumber, Button } from 'antd';
import { JobPostingConfig, FormField } from '../types/form';

const { TextArea } = Input;

interface DynamicFormProps {
  config: JobPostingConfig;
  platform: string;
  onSubmit: (values: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  config,
  platform,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
        return <Input placeholder={field.placeholder} type={field.type} />;
      case 'textarea':
        return <TextArea placeholder={field.placeholder} rows={4} />;
      case 'number':
        return (
          <InputNumber
            placeholder={field.placeholder}
            style={{ width: '100%' }}
            formatter={(value) =>
              `£ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value!.replace(/£\s?|(,*)/g, '')}
          />
        );
      case 'radio':
        if ('options' in field) {
          return (
            <Radio.Group className="w-full">
              <div className="space-y-4">
                {field.options.map((option) => (
                  <div key={option.value} className="w-full">
                    <Radio value={option.value}>{option.label}</Radio>
                  </div>
                ))}
              </div>
            </Radio.Group>
          );
        }
        return null;
      default:
        return <Input placeholder={field.placeholder} />;
    }
  };

  const getVisibleFields = () => {
    return config.fields.filter(
      (field) => !field.platformSpecific || field.platformSpecific === platform
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {platform.charAt(0).toUpperCase() + platform.slice(1)} {config.title}
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        className="space-y-4"
      >
        {getVisibleFields().map((field) => (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={field.rules}
          >
            {renderField(field)}
          </Form.Item>
        ))}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            {config.submitText} on{' '}
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DynamicForm;
