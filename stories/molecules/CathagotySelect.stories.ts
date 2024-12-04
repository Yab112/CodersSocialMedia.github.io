import Select from "../../components/molecules/CathagotySelect.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Select> = {
  title: "Molecules/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The **Select** component allows users to choose an option from a dropdown menu. It supports dynamic items, dark mode, and custom styles. You can pass a list of items and control the selected option.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "array",
      description: "Array of items to populate the dropdown menu.",
      defaultValue: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ],
    },
    selectedCategory: {
      control: "text",
      description: "The currently selected category.",
      defaultValue: "1",
    },
    darkMode: {
      control: "boolean",
      description: "Enables dark mode styling for the select dropdown.",
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    items: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    selectedCategory: "1", // Ensure it corresponds with the value of items
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    items: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    selectedCategory: "1", // Ensure this is correct
    darkMode: true,
  },
};
