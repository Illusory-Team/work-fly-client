import { FC, useState } from 'react';

import { userSelector } from '@/entities/User';

import { useAppSelector } from '@/shared/hooks';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import { PersonalDropdown } from '../PersonalDropdown';

import styles from './Header.module.scss';

type HeaderProps = {
	notificationHandler: () => void;
};

export const Header: FC<HeaderProps> = ({ notificationHandler }) => {
	const { user } = useAppSelector(userSelector);
	const [isVisibleDropdown, setIsVisibleDropdown] = useState<boolean>(false);

	const closeDropDown = () => {
		setIsVisibleDropdown(false);
	};

	const openDropDown = () => {
		setIsVisibleDropdown(true);
	};

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div>search</div>
					<div className={styles.rightMenu}>
						<div className={styles.personalNav}>
							<div className={styles.notificationButtonWrapper}>
								<Button size="s" variant="outlined" className={styles.notificationButton} onClick={notificationHandler}>
									<Icon name="other_notify" width={15} height={16} />
								</Button>
							</div>
							<Avatar
								onClick={openDropDown}
								size="s"
								defaultAvatar={`${user.firstName}`}
								className={styles.headerAvatar}
							/>
							{isVisibleDropdown && <PersonalDropdown user={user} closeHandler={closeDropDown} />}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
