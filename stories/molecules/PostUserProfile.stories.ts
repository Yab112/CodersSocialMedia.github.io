import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../components/molecules/PostUserProfile.vue';

const meta: Meta<typeof Component> = {
  title: 'Molecules/PostUserProfile',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A profile card component with avatar, name, status, and status text. Clickable for interactivity.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'The icon displayed alongside the status text.',
    },
    source: {
      control: 'text',
      description: 'The source URL of the avatar image.',
    },
    name: {
      control: 'text',
      description: 'The name displayed in the profile card.',
    },
    status: {
      control: { type: 'radio' },
      options: ['online', 'offline', 'away'],
      description: 'The status of the user.',
    },
    statusText: {
      control: 'text',
      description: 'The status text (e.g., "12 mins ago").',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    icon: 'fas fa-circle',
    source: 'https://via.placeholder.com/50',
    name: 'John Doe',
    status: 'online',
    statusText: 'Active 10 mins ago',
  }
};

export const InteractiveProfile: Story = {
  args: {
    icon: 'fas fa-check-circle',
    source: 'https://via.placeholder.com/50',
    name: 'Jane Smith',
    status: 'away',
    statusText: 'Last seen 3 hours ago',
  },
};

export const NoImageFallback: Story = {
  args: {
    icon: 'fas fa-exclamation-circle',
    source: '',
    name: 'No Avatar User',
    status: 'offline',
    statusText: 'Inactive for a while',
  },
};
