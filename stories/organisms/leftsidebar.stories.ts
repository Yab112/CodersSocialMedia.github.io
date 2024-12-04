import type { Meta, StoryObj } from '@storybook/vue3';
import Sidebar from '../../components/organisms/LeftSidebar.vue';

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A sidebar component featuring navigation links, community sections, and settings.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    communityList: {
      control: { type: 'object' }, 
      description: 'List of communities displayed in the "My Communities" section.',
      defaultValue: [
        'Tech Enthusiasts',
        'Vue.js Developers',
        'Frontend Masters',
        'JavaScript Ninjas',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    communityList: [
      'Tech Enthusiasts',
      'Vue.js Developers',
      'Frontend Masters',
      'JavaScript Ninjas',
    ],
  },
};
