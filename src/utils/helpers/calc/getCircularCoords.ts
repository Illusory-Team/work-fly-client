import { RefObject } from 'react';

export const getCircularCoords = (ref: RefObject<HTMLElement>, horizontal: string, vertical: string) => {
	const coords = { x: 0, y: 0 };

	if (ref.current) {
		const width = ref.current.offsetWidth;
		const diagram = Math.sqrt(2 * width);
		const diff = (diagram - width) / 2;
		const squareSide = diff / Math.sqrt(2) / 2;

		if (horizontal === 'left') coords.x = -squareSide;
		else coords.x = width + squareSide;

		if (vertical === 'bottom') coords.y = -squareSide;
		else coords.y = width + squareSide;

		return coords;
	}
	return coords;
};
