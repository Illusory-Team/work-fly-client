import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '@/components/ui/Icon';

import { Avatar } from './Avatar';

const avatarURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUrYY_pL0fWdiISZv591U9acw7_Imk1o4GA&usqp=CAU';

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
