import { FC, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';

import styles from './DialogContent.module.scss';

type DialogContentProps = {
	Head: ReactNode;
};

export const DialogContent: FC<PropsWithChildren<DialogContentProps>> = ({ Head, children }) => {
	return (
		<aside className="overflow-hidden h-full">
			<div className={styles.header}>{Head}</div>
			<div className={styles.body}>
				<SimpleBar style={{ maxHeight: `calc(100vh - 270px)` }}>{children}</SimpleBar>
			</div>
		</aside>
	);
};
