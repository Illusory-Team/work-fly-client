import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TheDescribedText } from './index';

export default {
	title: 'UI/TheDescribedText',
	component: TheDescribedText,
} as ComponentMeta<typeof TheDescribedText>;

const Template: ComponentStory<typeof TheDescribedText> = args => <TheDescribedText {...args} />;

export const Default = Template.bind({});
