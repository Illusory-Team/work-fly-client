import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextWithCryptic } from './TextWithCryptic';

export default {
	title: 'UI/TextWithCryptic',
	component: TextWithCryptic,
} as ComponentMeta<typeof TextWithCryptic>;

const Template: ComponentStory<typeof TextWithCryptic> = args => <TextWithCryptic {...args} />;

export const Default = Template.bind({});
