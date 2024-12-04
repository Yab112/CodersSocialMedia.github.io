import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../components/molecules/SuggestionCourseCard.vue'; // Adjust the path accordingly

const meta: Meta<typeof Component> = {
  title: 'molecule/ClickableCard', // Adjust this title based on your component's location
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A clickable card component that displays a text and emits a click event when clicked.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text displayed inside the clickable card.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    text: 'Click me!',
  },
};
