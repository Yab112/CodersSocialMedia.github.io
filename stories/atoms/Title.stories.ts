import type { Meta, StoryObj } from "@storybook/vue3";
import H1Component from "../../components/atoms/Title.vue"; // H1Component remains

const meta: Meta<typeof H1Component> = {
  title: "Atomic/H1Component",
  component: H1Component,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The **H1Component** is a simple and customizable heading component that allows you to easily display a title with custom styles and classes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The text content of the heading.",
      defaultValue: "Hello World",
    },
    customStyles: {
      control: "object",
      description: "Custom inline styles for additional styling.",
      defaultValue: {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof H1Component>;

// Default story
export const Default: Story = {
  args: {
    title: "Default Title",
    customStyles: {},
  },
};

// Story with custom inline styles
export const CustomStyles: Story = {
  args: {
    title: "Heading with Custom Styles",
    customStyles: { color: "green", fontSize: "32px" },
  },
};

// Fully customized story
export const FullCustom: Story = {
  args: {
    title: "Fully Customized Heading",
    customStyles: { color: "purple", fontSize: "40px", textAlign: "center" },
  },
};
