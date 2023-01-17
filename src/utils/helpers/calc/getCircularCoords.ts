import { RefObject } from 'react';

interface returnCoords {
	y: number;
	x: number;
}

export const getCircularCoords = (ref: RefObject<HTMLElement>, horizontal: string, vertical: string): returnCoords => {
	if (ref.current) {
		const width = ref.current.offsetWidth;
		const diagram = Math.sqrt(2 * width);
		const diff = (diagram - width) / 2;
		const squareSide = diff / Math.sqrt(2) / 2;

		let x: number;
		let y: number;

		switch (horizontal) {
			case 'left':
				x = -squareSide;
				break;
			default:
				x = width + squareSide;
		}

		switch (vertical) {
			case 'bottom':
				y = width + squareSide;
				break;
			default:
				y = -squareSide;
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
