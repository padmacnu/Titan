import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable'; // Your headless component

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const mockData = [
  { id: '1', node: 'us-east-ai-01', status: 'healthy', usage: 82, temp: '42°C' },
  { id: '2', node: 'us-west-storage-04', status: 'warning', usage: 94, temp: '58°C' },
  { id: '3', node: 'eu-central-compute-09', status: 'processing', usage: 45, temp: '38°C' },
];

export const ThemeComparison: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8 bg-gray-100 min-h-screen">
      {/* Light Mode Preview */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Light Mode (Cloud)</h3>
        <div className="bg-bg-canvas p-6 rounded-xl border border-border-subtle shadow-sm">
           <DataTable data={mockData} density="default" />
        </div>
      </div>

      {/* Dark Mode Preview */}
      <div className="dark flex flex-col gap-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Dark Mode (Deep Space)</h3>
        <div className="bg-bg-canvas p-6 rounded-xl border border-border-subtle shadow-xl">
           <DataTable data={mockData} density="compact" />
        </div>
      </div>
    </div>
  ),
};

// Notes: Showcases components are robust and that tokens work flawlessly across different themes and densities
// Density Demonstration: Notice that the Dark Mode side uses density="compact". This shows you've built logic to handle different user needs (Monitoring vs. Deep Analysis).
// Context Injection: By wrapping the second table in a <div className="dark">, you prove that your globals.css and tailwind.config.js setup is fully functional and scoped.
// Real-World Context: You aren't just showing a button; you are showing a "Node Management" table with AI status indicators, which validates your domain expertise in Storage and Cloud infrastructure.
