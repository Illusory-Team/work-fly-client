import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal: FC<PropsWithChildren> = ({ children }) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		containerRef.current = document.querySelector('#portal');

		setIsMounted(true);
	}, []);

	return isMounted && containerRef.current ? createPortal(<>{children}</>, containerRef.current) : null;
};
