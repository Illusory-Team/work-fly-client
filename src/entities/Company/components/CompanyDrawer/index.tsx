import { FC, ReactNode } from 'react';

import { Drawer, Icon } from '@/shared/ui';

import styles from './CompanyHead.module.scss';

interface CompanyDrawerProps {
	companyHead: ReactNode;
	closeHandler: () => void;
}

export const CompanyDrawer: FC<CompanyDrawerProps> = ({ companyHead, closeHandler }) => {
	return (
		<Drawer anchor="right" onClose={closeHandler} open={true}>
			<div className={styles.header}>
				<div className={styles.first}>
					<Icon onClick={closeHandler} name="other_back" className={styles.close} />
				</div>
				<div className={styles.second}>
					{companyHead}
					<h4>ID: </h4>
				</div>
			</div>
		</Drawer>
	);
};
