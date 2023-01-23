import { useToggle } from '@/hooks/util/useToggle';
import { ComponentMeta } from '@storybook/react';
import { Button } from '@/components/ui/buttons/Button';

import { Drawer } from './Drawer';

export default {
	title: 'UI/Drawer',
	component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Default = () => {
	const { state, toggleHandler } = useToggle(false, 350);

	return (
		<>
			<Drawer show={state} toggleHandler={toggleHandler}>
				Content from Drawer
			</Drawer>
			<Button className="m-8" onClick={toggleHandler}>
				Open
			</Button>
		</>
	);
};

export const Anchor = () => {
	const { state: left, toggleHandler: leftToggle } = useToggle(false, 350);
	const { state: right, toggleHandler: rightToggle } = useToggle(false, 350);
	const { state: top, toggleHandler: topToggle } = useToggle(false, 350);
	const { state: bottom, toggleHandler: bottomToggle } = useToggle(false, 350);

	return (
		<>
			<Drawer show={left} toggleHandler={leftToggle}>
				Content from Drawer
			</Drawer>
			<Drawer anchor="right" show={right} toggleHandler={rightToggle}>
				Content from Drawer
			</Drawer>
			<Drawer anchor="top" show={top} toggleHandler={topToggle}>
				Content from Drawer
			</Drawer>
			<Drawer anchor="bottom" show={bottom} toggleHandler={bottomToggle}>
				Content from Drawer
			</Drawer>
			<Button className="m-8" onClick={leftToggle}>
				Left
			</Button>
			<Button className="m-8" onClick={rightToggle}>
				Right
			</Button>
			<Button className="m-8" onClick={topToggle}>
				Top
			</Button>
			<Button className="m-8" onClick={bottomToggle}>
				Bottom
			</Button>
		</>
	);
};

export const Size = () => {
	const { state: left, toggleHandler: leftToggle } = useToggle(false, 350);
	const { state: right, toggleHandler: rightToggle } = useToggle(false, 350);

	return (
		<>
			<Drawer show={left} toggleHandler={leftToggle}>
				Content from Drawer
			</Drawer>
			<Drawer show={right} toggleHandler={rightToggle}>
				Content from Drawer
			</Drawer>
			<Button className="m-8" onClick={leftToggle}>
				Size L
			</Button>
			<Button size="m" className="m-8" onClick={rightToggle}>
				Size M
			</Button>
		</>
	);
};
