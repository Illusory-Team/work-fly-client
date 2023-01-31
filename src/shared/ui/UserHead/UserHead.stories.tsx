import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AVATAR_URL } from '@/shared/constants';

import { UserHead } from './UserHead';

export default {
	title: 'UI/UserHead',
	component: UserHead,
} as ComponentMeta<typeof UserHead>;

const Template: ComponentStory<typeof UserHead> = args => <UserHead {...args} />;

export const Default = Template.bind({});
Default.args = {
	src: AVATAR_URL,
	title: 'I title',
	children: 'I text i text i text',
};
