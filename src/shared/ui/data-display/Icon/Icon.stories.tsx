import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
	title: 'UI/Icon',
	component: Icon,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
	args: {
		name: 'folder_save',
	},
};
