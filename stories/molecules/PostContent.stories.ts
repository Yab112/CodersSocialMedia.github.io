import type { Meta, StoryObj } from '@storybook/vue3';
import ComponentWithIconAndText from '../../components/molecules/CreatePost.vue';

const meta: Meta<typeof ComponentWithIconAndText> = {
  title: 'Molecules/PostContent',
  component: ComponentWithIconAndText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible component that combines text and an icon with customizable styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed in the component.',
      defaultValue: 'Sample Text',
    },
    icon: {
      control: 'text',
      description: 'The icon displayed in the component.',
      defaultValue: 'fas fa-star', // Default icon
    },
  },
};

export default meta;

type Story = StoryObj<typeof ComponentWithIconAndText>;

// Default story for CreatePost component
export const Default: Story = {
  args: {
    text: 'Sample Text', // Default text
    icon: 'fas fa-star', // Default icon
  },
};

// Additional story with custom text and icon
export const WithCustomText: Story = {
  args: {
    text: 'Custom Text Example',
    icon: 'fas fa-heart', // Custom icon
  },
};

// Another story to showcase different combinations
export const WithDifferentIcon: Story = {
  args: {
    text: 'Different Icon Example',
    icon: 'fas fa-check-circle', // Different icon
  },
};
