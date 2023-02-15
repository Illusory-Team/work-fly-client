import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AVATAR2_URL, AVATAR3_URL, AVATAR4_URL, AVATAR5_URL, AVATAR_URL } from '@/shared/constants';

import { AvatarGroup } from './AvatarGroup';

const avatarData = [
	AVATAR_URL,
	AVATAR2_URL,
	AVATAR3_URL,
	AVATAR4_URL,
	AVATAR5_URL,
	AVATAR_URL,
	AVATAR2_URL,
	AVATAR3_URL,
	AVATAR4_URL,
	AVATAR5_URL,
];

export default {
	title: 'UI/AvatarGroup',
	component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = args => <AvatarGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
	data: avatarData,
};
