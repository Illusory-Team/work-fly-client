import { ComponentMeta, ComponentStory } from '@storybook/react';

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
};

export const Changeable = () => {
	return <EntityHead title="Zhook" subTitle="Kavoonov" isChangeable={true} />;
};
