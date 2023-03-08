import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import SimpleBar from 'simplebar-react';

import { CompanyDrawer } from '@/entities/Company';

import { EntityHead } from '@/shared/ui/EntityHead';

import { Header, Notifications, Sidebar, UserProfile } from '@/widgets/PageLayout/components';

import styles from './PageLayout.module.scss';

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const [isShowNotifications, setIsShowNotifications] = useState<boolean>(false);

	const closeNotificationsDrawer = () => setIsShowNotifications(false);
	const openNotificationsDrawer = () => setIsShowNotifications(true);

	const closeCompanyManage = () => router.back();

	return (
		<>
			<main className={styles.pageLayout}>
				<Sidebar />
				<Header notificationHandler={openNotificationsDrawer} />
				<SimpleBar style={{ maxHeight: 'calc(100vh - 68px)' }}>
					<div className={styles.pageContent}>
						<div className={styles.pageContainer}>{children}</div>
					</div>
				</SimpleBar>
			</main>
			{router.query.dialog === 'profile' && <UserProfile />}
			{router.query.dialog === 'company-manage' && (
				<CompanyDrawer
					closeHandler={closeCompanyManage}
					companyHead={<EntityHead isChangeable={true} title="dsadsa" defaultAvatar="No Name" subTitle="dsadsad" />}
				/>
			)}
			{isShowNotifications && <Notifications closeHandler={closeNotificationsDrawer} />}
		</>
	);
};
