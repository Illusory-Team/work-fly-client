import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SelectField } from './SelectField';

export default {
	title: 'UI/SelectField',
	component: SelectField,
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = args => <SelectField {...args} />;

export const Default = Template.bind({});
