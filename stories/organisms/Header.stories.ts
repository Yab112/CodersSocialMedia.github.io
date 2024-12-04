import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../components/organisms/Header.vue'; // Adjust the path accordingly

const meta: Meta<typeof Component> = {
  title: 'Organisms/NavbarWithDarkMode',
  component: Component,
  parameters: {
    layout: 'centered', 
    docs: {
      description: {
        component: 'A navbar component with dark/light mode toggle, profile section, and category selection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Use 'object' control type for arrays
    categoryItems: {
      control: 'object', // Changed from 'array' to 'object'
      description: 'List of category items for the selection dropdown.',
    },
    selectedItems: {
      control: 'object', // Changed from 'array' to 'object'
      description: 'The list of selected category items.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

// Default story with categoryItems and selectedItems
export const Default: Story = {
  args: {
    categoryItems: [
      { value: 'python', label: 'Python' },
      { value: 'javascript', label: 'JavaScript' },
      { value: 'java', label: 'Java' },
      { value: 'csharp', label: 'C#' },
    ],
    selectedItems: ['python'],
  },
};
