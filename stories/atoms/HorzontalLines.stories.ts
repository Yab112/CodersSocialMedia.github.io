// Hr.stories.ts

import type { Meta, StoryFn } from '@storybook/vue3';
import Hr from '../../components/atoms/HorzontalLine.vue';

export default {
  title: 'atomic/Hr',   
  component: Hr,
  argTypes: {
    color: {
      control: { type: 'text' }, 
      description: 'The color of the border (Tailwind CSS classes)',
      defaultValue: 'gray-300',
    },
    thickness: {
      control: { type: 'select', options: ['1', '2', '4', '8'] }, 
      description: 'The thickness of the border',
      defaultValue: '2',
    },
    width: {
      control: { type: 'select', options: ['full', '1/2', '3/4', '1/3'] }, 
      description: 'The width of the line',
      defaultValue: 'full',
    },
    customClass: {
      control: { type: 'text' }, 
      description: 'Additional custom classes for styling',
      defaultValue: '',
    },
  },
} as Meta;

// Default Story
const Template: StoryFn = (args) => ({
  components: { Hr },
  setup() {
    return { args };
  },
  template: '<Hr v-bind="args" />', 
});

export const Default = Template.bind({});
Default.args = {
  color: 'gray-300',
  thickness: '2',
  width: 'full',
  customClass: '',
};
