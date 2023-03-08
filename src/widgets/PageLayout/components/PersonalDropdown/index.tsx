import cn from 'classnames';
import { FC, useState } from 'react';

import { useOutsideClick } from '@/shared/hooks';
import { IUser } from '@/shared/types';
import { EntityHead } from '@/shared/ui/EntityHead';
import { Switch } from '@/shared/ui/inputs/Switch';

import { LinkItem } from './LinkItem';
import styles from './PersonalDropdown.module.scss';

type PersonalDropdownProps = {
	closeHandler: () => void;
	user: IUser;
};

export const PersonalDropdown: FC<PersonalDropdownProps> = ({ closeHandler, user }) => {
	const [isVacation, setIsVacation] = useState<'on' | 'off'>('off');
	const { ref } = useOutsideClick<HTMLDivElement>(closeHandler);

	const toggleSwitch = () => {
		setIsVacation(prevState => (prevState === 'off' ? 'on' : 'off'));
	};

	return (
		<div className={styles.dropdown} ref={ref}>
			<EntityHead
				defaultAvatar={`${user.firstName} ${user.lastName}`}
				title={`${user.firstName} ${user.lastName}`}
				subTitle={user.position}
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
				{user.isOwner && <LinkItem title="Admin settings" href="/?dialog=company-manage" />}
				{user.isOwner && <LinkItem title="Archive" href="/archive" />}
				<LinkItem title="Sign out" href="/" className={styles.signOut} />
			</ul>
		</div>
	);
};
