import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

const icon = (
	<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1.33333 7.00016C1.33333 6.63197 1.03486 6.3335 0.666667 6.3335C0.298477 6.3335 0 6.63197 0 7.00016V11.0002C0 12.1047 0.895431 13.0002 2 13.0002H10C11.1046 13.0002 12 12.1047 12 11.0002V7.00016C12 6.63197 11.7015 6.3335 11.3333 6.3335C10.9651 6.3335 10.6667 6.63197 10.6667 7.00016V11.0002C10.6667 11.3684 10.3682 11.6668 10 11.6668H2C1.63181 11.6668 1.33333 11.3684 1.33333 11.0002V7.00016Z"
			fill="white"
		/>
		<path
			d="M6.46999 0.527347C6.34946 0.407534 6.18338 0.333496 6 0.333496C5.90961 0.333496 5.82342 0.351486 5.74481 0.384082C5.66618 0.416615 5.59251 0.464841 5.5286 0.528758L2.86193 3.19543C2.60158 3.45577 2.60158 3.87788 2.86193 4.13823C3.12228 4.39858 3.54439 4.39858 3.80474 4.13823L5.33333 2.60964V8.3335C5.33333 8.70169 5.63181 9.00016 6 9.00016C6.36819 9.00016 6.66667 8.70169 6.66667 8.3335V2.60964L8.19526 4.13823C8.45561 4.39858 8.87772 4.39858 9.13807 4.13823C9.39842 3.87788 9.39842 3.45577 9.13807 3.19543L6.46999 0.527347Z"
			fill="white"
		/>
	</svg>
);

export default {
	title: 'UI/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Text',
	variant: 'default',
};

export const Outlined = Template.bind({});

Outlined.args = {
	children: 'Text',
	variant: 'outlined',
};

export const Square = Template.bind({});

Square.args = {
	children: 'Text',
	variant: 'square',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
	children: (
		<div className="flex items-center">
			<div className="mr-2">{icon}</div>
			<span>12312</span>
			<div className="ml-2">{icon}</div>
		</div>
	),
	variant: 'default',
};

export const OnlyIcon = Template.bind({});

OnlyIcon.args = {
	children: icon,
	variant: 'default',
};
