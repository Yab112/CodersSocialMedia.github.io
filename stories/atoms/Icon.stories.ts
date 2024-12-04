import type { Meta, StoryObj } from '@storybook/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Icon from '../../components/atoms/Icons.vue';

const meta: Meta<typeof Icon> = {
  title: 'Atomic/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          The **Icon** component allows you to display FontAwesome icons with optional custom styling and conditional rendering.

          ### Props:
          - **icon**: The name of the icon (required). You can pass an icon as a string or an array.
          - **class**: Additional CSS classes for styling the icon.
          - **customStyles**: Inline styles for custom styling of the icon.
          - **condition**: A boolean that controls whether the icon is rendered or not.
          
          ### Usage:
          You can use the **Icon** component to render FontAwesome icons, conditionally based on the **condition** prop, and customize the appearance using the **class** and **customStyles** props.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'The name of the icon to display (e.g., "coffee", "check-circle").',
      defaultValue: 'coffee', // default icon for display
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes to style the icon.',
      defaultValue: '',
    },
    customStyles: {
      control: 'object',
      description: 'Inline styles for custom styling.',
      defaultValue: {},
    },
    condition: {
      control: 'boolean',
      description: 'Condition to render the icon.',
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

// Default Icon Story
export const Default: Story = {
  args: {
    icon: 'coffee', // Use a default FontAwesome icon
    class: 'text-blue-500',
    customStyles: { fontSize: '24px' },
    condition: true,
  },
};

// Conditional Icon Story (Icon is not rendered)
export const Hidden: Story = {
  args: {
    icon: 'check-circle',
    class: 'text-red-500',
    customStyles: { fontSize: '24px' },
    condition: false, // This will not render the icon
  },
};

// Icon with Custom Styling
export const Styled: Story = {
  args: {
    icon: 'check-circle',
    class: 'text-green-500',
    customStyles: { fontSize: '30px', margin: '10px' },
    condition: true,
  },
};
