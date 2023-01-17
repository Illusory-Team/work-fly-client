import { RefObject } from 'react';

interface returnCoords {
	x: number;
	y: number;
}

export const getSquareCoords = (ref: RefObject<HTMLElement>, horizontal: string, vertical: string): returnCoords => {
	if (ref.current) {
		const width = ref.current.offsetWidth;

		let x: number;
		let y: number;

		switch (horizontal) {
			case 'left':
				x = 0;
				break;
			default:
				x = width;
		}

		switch (vertical) {
			case 'bottom':
				y = width;
				break;
			default:
				y = 0;
		}

		return {
			x,
			y,
		};
	} else {
		return {
			x: 0,
			y: 0,
		};
	}
};
