import type { Meta, StoryObj } from '@storybook/vue3';
import NavigationLink from '../../components/molecules/NavigationLink.vue';

const meta: Meta<typeof NavigationLink> = {
  title: 'Molecules/NavigationLink',
  component: NavigationLink,
  argTypes: {
    text: { control: 'text' },
    to: { control: 'text' },
    icon: {
      control: 'object',
      description: 'Font Awesome icon array in format ["prefix", "iconName"]',
      table: {
        type: { summary: 'Array' },
        defaultValue: { summary: '["fas", "icon"]' }
      }
    }
  },
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Navigation link component with icon and text',
    docs: {
      description: {
        component: 'A navigation link component that displays an icon and text, used for site navigation.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof NavigationLink>;

export const Default: Story = {
  args: {
    icon: ['fas', 'home'],
    text: "Books",
  },
};