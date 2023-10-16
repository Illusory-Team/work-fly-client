import { Meta, StoryObj } from '@storybook/react';

import { AVATAR3_URL, AVATAR_URL } from '@/shared/lib/constants';

import { EntityHead } from './EntityHead';

const meta: Meta<typeof EntityHead> = {
	title: 'UI/EntityHead',
	component: EntityHead,
};

export default meta;

type Story = StoryObj<typeof EntityHead>;

export const Default: Story = {
	args: {
		title: 'Zhook',
		subTitle: 'Kavoonov',
		src: AVATAR_URL,
	},
};

export const Changeable: Story = {
	args: {
		src: AVATAR3_URL,
		title: 'Zhook',
		subTitle: 'Kavoonov',
		isChangeable: true,
	},
};
