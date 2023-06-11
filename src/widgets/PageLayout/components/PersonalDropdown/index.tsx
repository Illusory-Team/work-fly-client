import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { clearUserState } from '@/entities/User/model/user.slice';

import { AuthService } from '@/features/Auth/services';

import { LOGIN_PATH } from '@/shared/config/paths';
import { IUser } from '@/shared/types';
import { EntityHead } from '@/shared/ui/data-display/EntityHead';
import { Switch } from '@/shared/ui/inputs/Switch';

import { LinkItem } from './LinkItem';
import styles from './PersonalDropdown.module.scss';

type PersonalDropdownProps = {
	user: IUser;
	isVisible: boolean;
};

export const PersonalDropdown = forwardRef<HTMLDivElement, PersonalDropdownProps>(({ isVisible, user }, ref) => {
	const [isVacation, setIsVacation] = useState<'on' | 'off'>('off');

	const router = useRouter();
	const dispatch = useDispatch();

	const toggleSwitch = () => {
		setIsVacation(prevState => (prevState === 'off' ? 'on' : 'off'));
	};

	// FIX ME - вынести в фичу юзера logout кнопку как ui
	const onLogout = async () => {
		await AuthService.logout();

		dispatch(clearUserState());
		await router.push(LOGIN_PATH);
	};

	return (
		<div
			className={cn(styles.dropdown, {
				[styles.visible]: isVisible,
			})}
			ref={ref}
		>
			<EntityHead
				defaultAvatar={`${user?.firstName} ${user?.lastName}`}
				title={`${user?.firstName} ${user?.lastName}`}
				subTitle={user?.position?.value}
				className="p-2 mb-1"
				classNameAvatar={styles.userAvatar}
				classNameText={styles.userTitle}
			/>

			<ul>
				<li className={cn(styles.linkItem, styles.userVacationItem)}>
					<div className={styles.userVacation}>
						<span>Vacation status</span>
						<div className={styles.switchWrap}>
							<span>{isVacation}</span>
							<Switch onChange={toggleSwitch} />
						</div>
					</div>
				</li>
				<LinkItem title="Profile" href="/?dialog=profile" />
				{!!user && user?.isOwner && <LinkItem title="Admin settings" href="/?dialog=company-manage" />}
				{!!user && user?.isOwner && <LinkItem title="Archive" href="/archive" />}
				<LinkItem title="Sign out" onClick={onLogout} className={styles.signOut} />
			</ul>
		</div>
	);
});

PersonalDropdown.displayName = 'PersonalDropdown';
