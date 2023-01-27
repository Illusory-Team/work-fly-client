import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Switch } from './Switch';

export default {
	title: 'UI/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Primary = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
