import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import styles from './PageLayout.module.scss';
import { Header, Notifications, Sidebar, UserProfile } from './components';

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const [isShowNotifications, setIsShowNotifications] = useState<boolean>(false);

	const closeNotificationsDrawer = () => setIsShowNotifications(false);

	return (
		<>
			<main className={styles.pageLayout}>
				<Sidebar />
				<Header />
				<SimpleBar style={{ maxHeight: 'calc(100vh - 68px)' }}>
					<div className={styles.pageContent}>
						<div className={styles.pageContainer}>{children}</div>
					</div>
					<Link href="/?dialog=profile">click</Link>
					<button onClick={() => setIsShowNotifications(true)}>notifications</button>
				</SimpleBar>
			</main>
			{router.query.dialog === 'profile' && <UserProfile />}
			{isShowNotifications && <Notifications closeHandler={closeNotificationsDrawer} />}
		</>
	);
};
