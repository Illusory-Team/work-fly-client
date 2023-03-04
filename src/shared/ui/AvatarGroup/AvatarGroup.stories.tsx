import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AVATAR2_URL, AVATAR3_URL, AVATAR4_URL, AVATAR5_URL, AVATAR_URL } from '@/shared/constants';

import { AvatarGroup } from './AvatarGroup';
import { IAvatarGroupData } from './AvatarGroup.types';

const avatarData: IAvatarGroupData[] = [
	{ id: '1', firstName: 'Marlen', lastName: 'Karimov', src: AVATAR_URL },
	{ id: '2', firstName: 'Dima', lastName: 'Zhook', src: AVATAR2_URL },
	{ id: '3', firstName: 'Abobushka', lastName: 'Kavoon', src: AVATAR3_URL },
	{ id: '4', firstName: 'KOT', lastName: 'KOT9RA', src: AVATAR4_URL },
	{ id: '5', firstName: 'Ugur', lastName: 'Brain', src: AVATAR5_URL },
	{ id: '6', firstName: 'Marlen', lastName: 'Karimov', src: null },
	{ id: '7', firstName: 'Dima', lastName: 'Zhook', src: null },
	{ id: '8', firstName: 'Abobushka', lastName: 'Kavoon', src: null },
	{ id: '9', firstName: 'KOT', lastName: 'KOT9RA', src: null },
	{ id: '10', firstName: 'Ugur', lastName: 'Brain', src: null },
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

export const Title = () => {
	return <AvatarGroup data={avatarData} title="is title :)" />;
};

export const MaxView = () => {
	return (
		<>
			<h2>DEFAULT</h2>
			<AvatarGroup data={avatarData} />
			<h2>3</h2>
			<AvatarGroup maxView={3} data={avatarData} />
			<h2>4</h2>
			<AvatarGroup maxView={4} data={avatarData} />
			<p>and other</p>
		</>
	);
};

export const Size = () => {
	return (
		<>
			<h2>l</h2>
			<AvatarGroup size="l" data={avatarData} />
			<h2>m</h2>
			<AvatarGroup size="m" data={avatarData} />
			<h2>s</h2>
			<AvatarGroup size="s" data={avatarData} />
			<h2>xs</h2>
			<AvatarGroup size="xs" maxView={3} data={avatarData} />
			<h2>xxs</h2>
			<AvatarGroup size="xxs" maxView={4} data={avatarData} />
			<p>and other</p>
		</>
	);
};

export const Variant = () => {
	return (
		<>
			<h2>DEFAULT</h2>
			<AvatarGroup size="s" variant="circle" data={avatarData} />
			<h2>rounded</h2>
			<AvatarGroup size="s" variant="rounded" data={avatarData} />
			<h2>square</h2>
			<AvatarGroup size="s" variant="square" data={avatarData} />
		</>
	);
};
