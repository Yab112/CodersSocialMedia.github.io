import type { Meta, StoryObj } from '@storybook/vue3';
import TagWithIcon from '~/components/molecules/TagWithIcon.vue';

const meta: Meta<typeof TagWithIcon> = {
  title: 'Molecules/TagWithIcon',
  component: TagWithIcon,
  tags: ['autodocs'],
  argTypes: {
    tags: {
      control: 'object',
      description: 'Array of tags with icons and labels',
      table: {
        type: { summary: 'Array of objects containing icon and label' },
        defaultValue: { summary: '[ { icon: ["fas", "home"], label: "Home" }, { icon: ["fas", "user"], label: "Profile" } ]' },
        category: 'Content'
      }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the tag',
      defaultValue: 'medium',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'medium' }
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'Visual style variant of the tag',
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'primary' }
      }
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the tag has rounded corners',
      table: {
        category: 'Appearance',
        defaultValue: { summary: false }
      }
    },
    outlined: {
      control: 'boolean',
      description: 'Whether the tag has an outline style',
      table: {
        category: 'Appearance',
        defaultValue: { summary: false }
      }
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the tag is clickable',
      table: {
        category: 'Interaction',
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled',
      table: {
        category: 'State',
        defaultValue: { summary: false }
      }
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the label',
      table: {
        category: 'Layout',
        defaultValue: { summary: 'left' }
      }
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Custom background color of the tag',
      table: {
        category: 'Style',
        defaultValue: { summary: 'none' }
      }
    },
    textColor: {
      control: { type: 'color' },
      description: 'Custom text color of the tag',
      table: {
        category: 'Style',
        defaultValue: { summary: 'none' }
      }
    },
    borderWidth: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Width of the tag border',
      table: {
        category: 'Style',
        defaultValue: { summary: 1 }
      }
    },
    padding: {
      control: { type: 'range', min: 0, max: 20, step: 2 },
      description: 'Padding inside the tag',
      table: {
        category: 'Layout',
        defaultValue: { summary: 8 }
      }
    },
    iconSize: {
      control: { type: 'range', min: 8, max: 32, step: 2 },
      description: 'Size of the icon',
      table: {
        category: 'Style',
        defaultValue: { summary: 16 }
      }
    },
    animation: {
      control: { type: 'select' },
      options: ['none', 'pulse', 'bounce', 'shake'],
      description: 'Animation effect on hover',
      table: {
        category: 'Animation',
        defaultValue: { summary: 'none' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A component that renders tags with icons and labels, dynamically generated from an array of objects.'
      },
      story: {
        inline: true
      },
      source: {
        type: 'code'
      },
      controls: {
        sort: 'requiredFirst'
      }
    },
    backgrounds: {
      default: 'light'
    },
    viewport: {
      defaultViewport: 'responsive'
    },
    actions: {
      handles: ['click', 'hover']
    }
  },
};

export default meta;

type Story = StoryObj<typeof TagWithIcon>;

export const Default: Story = {
  args: {
    tags: [
      { icon: ['fas', 'home'], label: 'Home' },
      { icon: ['fas', 'user'], label: 'Profile' },
      { icon: ['fas', 'settings'], label: 'Settings' },
    ],

    size: 'medium',
    variant: 'primary',
    rounded: true,
    outlined: false,
    iconPosition: 'left',
    textColor: "#aa2727"
  },
};

export const CustomTags: Story = {
  args: {
    tags: [{
      "icon": ["fas", "Home"],
      "label": "home"
    }, {
      "icon": ["fas", "apple-alt"],
      "label": "Fruit"
    }, {
      "icon": ["fas", "music"],
      "label": "Music"
    }],
    size: 'large',
    variant: 'success',
    rounded: true,
    outlined: true,
    iconPosition: 'left'
  },
};