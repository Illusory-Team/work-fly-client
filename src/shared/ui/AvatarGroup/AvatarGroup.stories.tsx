import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AVATAR_URL } from '@/shared/constants';

import { AvatarGroup } from './AvatarGroup';

const avatarData = ['/avatar.png', AVATAR_URL, '/avatar.png', AVATAR_URL, AVATAR_URL, '/avatar.png'];

export default {
	title: 'UI/AvatarGroup',
	component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = args => <AvatarGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
	data: avatarData,
};
