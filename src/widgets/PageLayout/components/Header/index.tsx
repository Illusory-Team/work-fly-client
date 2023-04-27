import { FC, useState } from 'react';

import { userSelector } from '@/entities/User';

import { useAppSelector, useOutsideClick } from '@/shared/hooks';
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

	const toggleDropDownVisible = () => {
		setIsVisibleDropdown(!isVisibleDropdown);
	};

	const { ref } = useOutsideClick<HTMLDivElement>(closeDropDown);

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
								onClick={toggleDropDownVisible}
								size="s"
								defaultAvatar={`${user ? user.firstName : ''}`}
								className={styles.headerAvatar}
							/>
							{!!user && <PersonalDropdown isVisible={isVisibleDropdown} ref={ref} user={user} />}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
