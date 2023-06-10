import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AVATAR3_URL, AVATAR_URL } from '@/shared/constants';

import { EntityHead } from './EntityHead';

export default {
	title: 'UI/EntityHead',
	component: EntityHead,
} as ComponentMeta<typeof EntityHead>;

const Template: ComponentStory<typeof EntityHead> = args => <EntityHead {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Zhook',
	subTitle: 'Kavoonov',
	src: AVATAR_URL,
};

export const Changeable = () => {
	return <EntityHead src={AVATAR3_URL} title="Zhook" subTitle="Kavoonov" isChangeable={true} />;
};
