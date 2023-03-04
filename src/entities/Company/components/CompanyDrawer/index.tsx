import { FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { closeDrawer } from '@/shared/store';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';

import styles from './CompanyHead.module.scss';

interface CompanyDrawerProps {
	companyHead: ReactNode;
}

export const CompanyDrawer: FC<CompanyDrawerProps> = ({ companyHead }) => {
	const dispatch = useDispatch();

	const closeHandler = () => {
		dispatch(closeDrawer());
	};

	return (
		<Drawer direction="right" closeHandler={closeHandler}>
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
