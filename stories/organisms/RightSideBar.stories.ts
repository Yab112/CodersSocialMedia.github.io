import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../components/organisms/rightSide.vue'; // Adjust the path accordingly

const meta: Meta<typeof Component> = {
  title: 'organisms/RightSide', // Adjust this title based on your component's location
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component displaying two scrollable containers: Suggestions and Course Suggestions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    suggestions: {
      control: {type: 'object'},
      description: 'Array of suggestions displayed in the Suggestions section.',
    },
    courseSuggestions: {
      control: {type: 'object'},
      description: 'Array of course suggestions displayed in the SuggestionsCourse section.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    suggestions: [
      'Suggestion 1',
      'Suggestion 2',
      'Suggestion 3',
      'Suggestion 4',
      'Suggestion 5',
      'Suggestion 6',
    ],
    courseSuggestions: [
      'Course 1',
      'Course 2',
      'Course 3',
      'Course 4',
      'Course 5',
      'Course 6',
    ],
  },
};
