import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';
import { Avatar } from '../Avatar';

export default {
	title: 'UI/Badge',
	component: Badge,
} as ComponentMeta<typeof Badge>;

const avatarUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUrYY_pL0fWdiISZv591U9acw7_Imk1o4GA&usqp=CAU';

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: <Avatar src={avatarUrl} size="l" />,
};

export const BadgeContentAndMaxValue = () => (
	<>
		<Badge className="m-6">
			<Avatar src={avatarUrl} />
		</Badge>
		<Badge className="m-6" badgeContent={4}>
			<Avatar src={avatarUrl} />
		</Badge>
		<Badge className="m-6" badgeContent={10}>
			<Avatar src={avatarUrl} />
		</Badge>
		<Badge className="m-6" badgeContent={100} maxValue={99}>
			<Avatar src={avatarUrl} />
		</Badge>
	</>
);

export const Color = () => (
	<>
		<h2>Primary</h2>
		<Badge className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
		<h2>Success</h2>
		<Badge className="m-6" color="success">
			<Avatar src={avatarUrl} />
		</Badge>
		<h2>Danger</h2>
		<Badge className="m-6" color="danger">
			<Avatar src={avatarUrl} />
		</Badge>
	</>
);

export const Invisible = () => (
	<>
		<h2>Default visible</h2>
		<Badge className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
		<h2>Invisible true</h2>
		<Badge className="m-6" invisible={true} color="success">
			<Avatar src={avatarUrl} />
		</Badge>
	</>
);

export const Variant = () => (
	<>
		<h2>Default Content</h2>
		<Badge className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
		<h2>Dot</h2>
		<Badge variant="dot" overlap="circular" className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
	</>
);

export const Overlap = () => (
	<>
		<h2>Default overlap square</h2>
		<Badge className="m-6" color="primary">
			<div className="w-28 h-28 bg-orange-600 rounded-full"></div>
		</Badge>
		<h2>Overlap circular</h2>
		<Badge overlap="circular" className="m-6" color="primary">
			<div className="w-28 h-28 bg-orange-600 rounded-full"></div>
		</Badge>
		<Badge variant="dot" horizontal="left" overlap="circular" className="m-6" color="primary">
			<div className="w-28 h-28 bg-orange-600 rounded-full"></div>
		</Badge>
		<Badge vertical="bottom" overlap="circular" className="m-6" color="primary">
			<div className="w-28 h-28 bg-orange-600 rounded-full"></div>
		</Badge>
		<Badge variant="dot" horizontal="left" vertical="bottom" overlap="circular" className="m-6" color="primary">
			<div className="w-28 h-28 bg-orange-600 rounded-full"></div>
		</Badge>
		<p>Works only for a flat circle</p>
	</>
);

export const BadgePosition = () => (
	<>
		<h2>Default top right</h2>
		<Badge className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
		<h2>top left</h2>
		<Badge horizontal="left" className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
		<h2>bottom right</h2>
		<Badge vertical="bottom" className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
		<h2>bottom left</h2>
		<Badge vertical="bottom" horizontal="left" className="m-6" color="primary">
			<Avatar src={avatarUrl} />
		</Badge>
	</>
);
