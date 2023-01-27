import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from '@/shared/ui/Icon';

import { Checkbox } from './Checkbox';

export default {
	title: 'UI/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Size = () => (
	<>
		<h2>Size L</h2>
		<Checkbox checkboxSize="l" />
		<h2>Size M</h2>
		<Checkbox checkboxSize="m" />
	</>
);

export const Color = () => (
	<>
		<h2>Color Primary</h2>
		<Checkbox color="primary" />
		<h2>Color Success</h2>
		<Checkbox color="success" />
		<h2>Color Danger</h2>
		<Checkbox color="danger" />
	</>
);

export const Label_and_labelPlacement = () => (
	<div className="w-full flex-center-between">
		<Checkbox className="m-6" label="right" labelPlacement="right" />
		<Checkbox className="m-6" label="top" labelPlacement="top" />
		<Checkbox className="m-6" label="left" labelPlacement="left" />
		<Checkbox className="m-6" label="bottom" labelPlacement="bottom" />
	</div>
);

export const IconCheckbox = () => (
	<>
		<Checkbox
			notCheckedIcon={<Icon name="action_image" />}
			checkedIcon={<Icon name="action_photo" />}
			color="success"
		/>
		<Checkbox
			notCheckedIcon={<Icon name="folder_book-open" />}
			checkedIcon={<Icon name="folder_book-mark" />}
			color="primary"
		/>
		<Checkbox notCheckedIcon={<Icon name="other_error" />} checkedIcon={<Icon name="other_company" />} color="danger" />
	</>
);
