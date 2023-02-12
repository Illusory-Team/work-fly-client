declare module '*.svg' {
	import * as React from 'react';

	export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

	const src: string;
	export default src;
}

declare module '*.png' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

// eslint-disable-next-line @typescript-eslint/ban-types
declare type PropsWithChildren<T = {}> = import('react').PropsWithChildren<T>;