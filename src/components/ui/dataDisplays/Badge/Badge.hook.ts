import { useRef } from 'react';

export const useBadge = () => {
	const ref = useRef<HTMLElement>(null);

	const calcHorizontalCircular = (horizontal: string, vertical: string) => {
		if (ref.current) {
			const width = ref.current.offsetWidth;
			const diagram = Math.sqrt(2 * width);
			const diff = (diagram - width) / 2;
			const squareSide = diff / Math.sqrt(2) / 2;

			let x;
			let y;

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
		}
	};
};
