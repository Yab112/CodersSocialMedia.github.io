import type { Meta, StoryObj } from "@storybook/vue3";
import Paragraph from "../../components/atoms/Text.vue";

const meta = {
  title: "Atomic/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "The text content of the paragraph",
    },
    class: {
      control: "text",
      description: "Custom CSS classes for the paragraph",
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    text: "This is a default paragraph.",
    class: "",
  },
};

export const Styled: Story = {
  args: {
    text: "This is a styled paragraph.",
    class: "text-blue-500 text-lg font-bold",
  },
};

export const CustomClass: Story = {
  args: {
    text: "This paragraph uses a custom class.",
    class: "my-4 p-4 bg-gray-100",
  },
};
