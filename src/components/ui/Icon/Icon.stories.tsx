import { ComponentMeta, ComponentStory } from "@storybook/react";

import {Icon} from './Icon'

export default {
	title: 'UI/Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'folder_save',
  fill: 'red'
};
