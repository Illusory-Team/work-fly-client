import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


import { ViewNotificationDrawer } from '@/widgets/PageLayout/components';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { UserProfile } from './components/UserProfile';

import styles from './PageLayout.module.scss';

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const [isShowNotifications, setIsShowNotifications] = useState<boolean>(false);

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
				{router.query.dialog === 'profile' && <UserProfile />}
				{isShowNotifications && <ViewNotificationDrawer />}
			</main>
		</>
	);
};
