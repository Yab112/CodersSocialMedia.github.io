import type { Meta, StoryObj } from '@storybook/vue3';
import Component from '../../components/organisms/middleSide.vue'; // Adjust the path accordingly

const meta: Meta<typeof Component> = {
  title: 'Organisms/middleSide',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component showcasing the CreatePost functionality with code snippets in a PostArea.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    codeString: {
      control: 'text',
      description: 'The code snippet to display in the PostArea.',
    },
    icon: {
      control: 'object',
      description: 'The FontAwesome icon configuration for the CreatePost component.',
    },
    text: {
      control: 'text',
      description: 'Text displayed next to the icon in the CreatePost component.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    codeString: `import pandas as pd
import matplotlib.pyplot as plt

# Sample data
data = {
  'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  'Sales': [1200, 1500, 1300, 1800, 2100]
}

# Create DataFrame
df = pd.DataFrame(data)

# Create line plot
plt.figure(figsize=(10, 6))
plt.plot(df['Month'], df['Sales'], marker='o')
plt.title('Monthly Sales Data')
plt.xlabel('Month')
plt.ylabel('Sales ($)')
plt.grid(True)
plt.show()`,
    icon: ['fas', 'plus-square'],
    text: 'Create Your Post',
  },
};
