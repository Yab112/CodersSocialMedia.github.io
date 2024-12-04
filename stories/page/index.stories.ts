import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../pages/index.vue';

const meta: Meta<typeof Component> = {
  title: 'Pages/Index', 
  component: Component,
  parameters: {
    layout: 'fullscreen', 
    docs: {
      description: {
        component: 'This layout page includes a fixed left sidebar, a fixed header, a scrollable middle section, and a fixed right sidebar.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
