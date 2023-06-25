import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Example/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		// backgroundColor: {
		// 	control: "color",
		// },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		variant: "default",
		children: "CLICK HERE",
		width: "full",
	},
};

export const Secondary: Story = {
	args: {
		variant: "destructive",
	},
};

export const Large: Story = {
	args: {
		variant: "outline",
	},
};

export const Small: Story = {
	args: {
		variant: "ghost",
	},
};
