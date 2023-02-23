import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AVATAR_URL as avatarURL } from '@/shared/constants';
import { Icon } from '@/shared/ui/Icon';

import { Avatar } from './Avatar';

export default {
	title: 'UI/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	src: avatarURL,
};

export const Variant = () => (
	<>
		<h2>Circle</h2>
		<Avatar src={avatarURL} />
		<h2>Rounded</h2>
		<Avatar src={avatarURL} variant="rounded" />
		<h2>Square</h2>
		<Avatar src={avatarURL} variant="square" />
	</>
);

export const Size = () => (
	<>
		<h2>Size L</h2>
		<Avatar src={avatarURL} size="l" />
		<h2>Size M</h2>
		<Avatar src={avatarURL} />
		<h2>Size S</h2>
		<Avatar src={avatarURL} size="s" />
		<h2>Size XS</h2>
		<Avatar src={avatarURL} size="xs" />
	</>
);

export const notSrcAvatar = () => (
	<>
		<Avatar className="mt-3">M</Avatar>
		<Avatar className="mt-3" style={{ background: 'red' }}>
			L
		</Avatar>
		<Avatar className="mt-3" style={{ background: 'lime' }}>
			L
		</Avatar>
	</>
);

export const IconAvatar = () => (
	<>
		<Avatar className="mt-3">
			<Icon name="folder_settings" />
		</Avatar>
		<Avatar className="mt-3">
			<Icon name="action_delete" />
		</Avatar>
		<Avatar className="mt-3">
			<Icon name="other_favorite" />
		</Avatar>
	</>
);

export const DefaultAvatar = () => (
	<>
		<Avatar className="mt-3" src={null} defaultAvatar="Marlen Karimov" />
		<Avatar className="mt-3" src={null} defaultAvatar="Dima" />
		<Avatar className="mt-3" src={null} defaultAvatar="Alexander Pushkin" />
		<p className="mt-3">
			Accepts a string and puts the very first letters between the words. Also takes color depending on the first letter
			of the string
		</p>
	</>
);
