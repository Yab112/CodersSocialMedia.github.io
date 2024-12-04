import type { Meta, StoryObj } from '@storybook/vue3';
import CommunityList from '../../components/molecules/Community.vue';

const meta: Meta<typeof CommunityList> = {
  title: 'Molecules/CommunityList',
  component: CommunityList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A scrollable list of community links with a title and a "See all" link at the bottom.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the community list.',
    },
    communities: {
      description: 'An array of community names to display.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CommunityList>;

export const Default: Story = {
  args: {
    title: 'My Communities',
    communities: ['Community 1', 'Community 2', 'Community 3'],
  },
};
