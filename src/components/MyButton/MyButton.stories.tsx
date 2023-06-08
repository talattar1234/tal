import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MyButton from "./MyButton";

const meta: Meta<typeof MyButton> = {
  title: "Components/MyButton",
  component: MyButton,
  argTypes: {
    borderColor: { control: "color" },
  },
  tags: ["tag"],
};

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: "Primary 😃",
    borderColor: "initial",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary",
  },
};

export default meta;
