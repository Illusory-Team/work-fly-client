import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '@/components/ui/Icon';

import { TextField } from './TextField';

export default {
	title: 'UI/TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Default = Template.bind({});

export const labelAndSubText = Template.bind({});
labelAndSubText.args = {
	className: 'mt-5',
	label: 'label',
	subText: 'subText',
};

export const Color = () => (
	<div className="w-full flex">
		<TextField className="mx-2" subText="primary" />
		<TextField className="mx-2" color="success" subText="success" />
		<TextField className="mx-2" color="danger" subText="danger" />
	</div>
);

export const IconTextField = Template.bind({});
IconTextField.args = {
	icon: <Icon name="action_image" />,
};
