import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../components/molecules/PostArea.vue'; // Adjust the path accordingly

const meta: Meta<typeof Component> = {
  title: 'Molecules/PostWithContent',  // Title should reflect the component structure
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A post component combining user profile, text, tags, code snippet, and reactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: 'The code displayed in the component.',
      defaultValue: 'const example = "Code Example";',  // Default code example
    }
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

// Default Story showcasing all props with default values
export const Default: Story = {
  args: {
    code: 'const example = "Code Example";',
  },
};

// Custom Story showcasing custom values for code, tags, and reactions
export const CustomContent: Story = {
  args: {
    code: 'const customCode = "Custom Code Example";',  // Custom code to show
  },
};
