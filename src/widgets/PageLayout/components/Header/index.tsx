import { FC, useState } from 'react';

import { useUserStore } from '@/entities/User/model/userStore';

import { useOutsideClick } from '@/shared/package/react-hooks';
import { Avatar, Button, Icon } from '@/shared/ui';

import { PersonalDropdown } from '../PersonalDropdown';

import styles from './Header.module.scss';

type HeaderProps = {
	notificationHandler: () => void;
};

export const Header: FC<HeaderProps> = ({ notificationHandler }) => {
	const user = useUserStore(state => state.user);
	const [isVisibleDropdown, setIsVisibleDropdown] = useState<boolean>(false);

	const closeDropDown = () => {
		setIsVisibleDropdown(false);
	};

	const toggleDropDownVisible = () => {
		setIsVisibleDropdown(!isVisibleDropdown);
	};

	const ref = useOutsideClick<HTMLDivElement>(closeDropDown);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div>search</div>
					<div className={styles.rightMenu}>
						<div className={styles.personalNav}>
							<div className={styles.notificationButtonWrapper}>
								<Button
									size="small"
									variant="outlined"
									className={styles.notificationButton}
									onClick={notificationHandler}
								>
									<Icon name="other_notify" width={15} height={16} />
								</Button>
							</div>
							{!!user && (
								<Avatar
									onClick={toggleDropDownVisible}
									size="small"
									alt={user.fullName}
									className={styles.headerAvatar}
								/>
							)}
							{!!user && <PersonalDropdown isVisible={isVisibleDropdown} ref={ref} user={user} />}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
