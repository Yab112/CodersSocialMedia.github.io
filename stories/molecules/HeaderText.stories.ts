import type { Meta, StoryObj } from '@storybook/vue3';
import HeaderText from '../../components/molecules/Headertext.vue';

const meta: Meta<typeof HeaderText> = {
  title: 'Molecules/HeaderText', // Title should match the component folder structure
  component: HeaderText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **HeaderText** component renders an icon next to text. It allows customization through props like `icon`, `text`, and `class` for various styles such as text size, colors, gradients, and more.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'object',
      description: 'Font Awesome icon array in format ["prefix", "iconName"]',
      defaultValue: ['fas', 'code'], // Default icon for the example
    },
    text: {
      control: 'text',
      description: 'The text content displayed next to the icon.',
      defaultValue: 'Share Code', // Default text
    },
    class: {
      control: 'text',
      description: 'Custom CSS classes for additional styling.',
      defaultValue:
        'my-auto cursor-pointer text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#4E4E4E]', // Default gradient background
    }
  },
};

export default meta;

type Story = StoryObj<typeof HeaderText>;

// Default story
export const Default: Story = {
  args: {
    icon: ['fas', 'code'], // Example FontAwesome icon
    text: 'Share Code', // Example text
    class: 'my-auto cursor-pointer text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#4E4E4E]', // Gradient with custom styles
   
  },
};
