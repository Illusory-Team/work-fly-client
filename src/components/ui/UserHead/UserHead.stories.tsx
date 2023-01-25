import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserHead } from './UserHead';

export default {
	title: 'UI/UserHead',
	component: UserHead,
} as ComponentMeta<typeof UserHead>;

const Template: ComponentStory<typeof UserHead> = args => <UserHead {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'I title',
	children: 'I text i text i text',
};
