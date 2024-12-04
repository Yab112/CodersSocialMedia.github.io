import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../components/molecules/CodePost.vue'; // Adjust the path accordingly

const meta: Meta<typeof Component> = {
  title: 'Molecules/CodePost', // Title should match the component folder structure
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible component displaying a code snippet with tags and reactions (like, comment, share).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: 'The code displayed in the component.',
      defaultValue: 'const example = "Code Example";', // Default code example
    },
    tags: {
      control: 'array',
      description: 'Array of tags to display with icons.',
      defaultValue: [
        { icon: ['fas', 'hashtag'], label: 'Python' },
        { icon: ['fas', 'hashtag'], label: 'VueJS' },
        { icon: ['fas', 'hashtag'], label: 'JavaScript' },
      ],
    },
    reaction: {
      control: 'array',
      description: 'Array of reaction icons with counts.',
      defaultValue: [
        { icon: ['fas', 'thumbs-up'], label: '12' },
        { icon: ['fas', 'comment'], label: '2' },
        { icon: ['fas', 'share'], label: '3' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

// Default Story showcasing all props with default values
export const Default: Story = {
  args: {
    code: 'const example = "Code Example";', // Default code to be shown
    tags: [
      { icon: ['fas', 'hashtag'], label: 'Python' },
      { icon: ['fas', 'hashtag'], label: 'VueJS' },
      { icon: ['fas', 'hashtag'], label: 'JavaScript' },
    ],
    reaction: [
      { icon: ['fas', 'thumbs-up'], label: '12' },
      { icon: ['fas', 'comment'], label: '2' },
      { icon: ['fas', 'share'], label: '3' },
    ],
  },
};

// Custom Story showcasing custom values for tags and reactions
export const CustomTagsAndReactions: Story = {
  args: {
    code: 'const customCode = "Custom Code Example";', // Custom code to show
    tags: [
      { icon: ['fas', 'hashtag'], label: 'React' },
      { icon: ['fas', 'hashtag'], label: 'TypeScript' },
    ],
    reaction: [
      { icon: ['fas', 'thumbs-up'], label: '25' },
      { icon: ['fas', 'comment'], label: '10' },
      { icon: ['fas', 'share'], label: '5' },
    ],
  },
};
