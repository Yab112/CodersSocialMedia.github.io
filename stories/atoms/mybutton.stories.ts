import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../../components/atoms/Button.vue";

const meta: Meta<typeof Button> = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
          The **Button** component is a flexible, reusable button designed for easy integration throughout your application. 
          It provides various states, such as **default**, **disabled**, and **loading**, allowing for versatile button behavior.

          ### Props:
          - **text**: The text displayed inside the button. (required)
          - **type**: The HTML button type (e.g., 'button', 'submit'). Defaults to "button".
          - **customClass**: Custom CSS classes for additional styling.
          - **icon**: Optional icon to be displayed next to the text inside the button.
          - **disabled**: A boolean to disable the button (prevents clicks and visually dims the button).
          - **loading**: A boolean that, when true, shows a loading spinner inside the button.

          ### Usage:
          The **Button** component can be used in various forms. By setting the **disabled** or **loading** prop, you can easily change the button's appearance and behavior.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text displayed inside the button.",
      defaultValue: "Click Me",
    },
    type: {
      control: "text",
      description: "The button's type attribute (e.g., 'button', 'submit').",
      defaultValue: "button",
    },
    customClass: {
      control: "text",
      description: "Custom CSS classes for additional styling.",
      defaultValue: "",
    },
    icon: {
      control: "text",
      description: "Icon to be displayed in the button (optional).",
      defaultValue: "",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button when true.",
      defaultValue: false,
    },
    loading: {
      control: "boolean",
      description: "Displays a loading spinner when true.",
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Click Me",
    type: "button",
    customClass: "",
    icon: "",
    disabled: false,
    loading: false,
  },
};

export const WithIcon: Story = {
  args: {
    text: "Button with Icon",
    type: "button",
    customClass: "",
    icon: "[fas,fa-home]", 
    disabled: false,
    loading: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Button",
    type: "button",
    customClass: "",
    icon: "",
    disabled: true,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    text: "Loading Button",
    type: "button",
    customClass: "",
    icon: "",
    disabled: false,
    loading: true,
  },
};
