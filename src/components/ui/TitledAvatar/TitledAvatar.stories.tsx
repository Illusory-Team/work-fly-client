import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TitledAvatar } from './TitledAvatar';

export default {
	title: 'UI/TitledAvatar',
	component: TitledAvatar,
} as ComponentMeta<typeof TitledAvatar>;

const Template: ComponentStory<typeof TitledAvatar> = args => <TitledAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'I title',
	children: 'I text i text i text',
};
