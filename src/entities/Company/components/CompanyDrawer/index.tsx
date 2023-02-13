import { FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/hooks';
import { closePopup } from '@/shared/store';
import { companyDrawerSelector } from '@/shared/store/popupsController/popupsController.selector';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';

import styles from './CompanyHead.module.scss';

interface CompanyDrawerProps {
	companyHead: ReactNode;
}

export const CompanyDrawer: FC<CompanyDrawerProps> = ({ companyHead }) => {
	const isShow = useAppSelector(companyDrawerSelector);
	const dispatch = useDispatch();

	const closeHandler = () => {
		dispatch(closePopup('companyDrawer'));
	};

	return (
		<Drawer anchor="right" isShow={isShow} closeHandler={closeHandler}>
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
