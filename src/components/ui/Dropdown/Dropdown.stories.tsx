import { useToggle } from '@/hooks/util/useToggle';
import { ComponentMeta } from '@storybook/react';
import { Button } from '../buttons/Button';

import { Dropdown } from './Dropdown';

export default {
	title: 'UI/Dropdown',
	component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const DropDown = () => {
	const { state, toggleHandler } = useToggle(false, 350);

	return (
		<Dropdown show={state} closeHandler={toggleHandler} mainComponent={<Button>CLICK</Button>}>
			DropDown open))
		</Dropdown>
	);
};
