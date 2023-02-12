import Head from 'next/head';
import { useDispatch } from 'react-redux';

import { CompanyDrawer } from '@/entities/Company/components/CompanyDrawer';
import { useProfile } from '@/entities/User';

import { openPopup } from '@/shared/store/popupsController';
import { Button } from '@/shared/ui/Button';
import { EntityHead } from '@/shared/ui/EntityHead';

import { ViewNotificationDrawer } from '@/widgets/DashboardLayout';
import { UserProfile } from '@/widgets/DashboardLayout/components/UserProfile';

const Home = () => {
	const { openOwnProfileHandler, openProfileHandler } = useProfile();
	const dispatch = useDispatch();

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/public/favicon.ico" />
			</Head>
			<main>
				<UserProfile />
				<CompanyDrawer companyHead={<EntityHead isChangeable={true} title="dsadsa" subTitle="dsadsad" />} />
				<Button onClick={openOwnProfileHandler}>CLICK</Button>
				<Button onClick={() => openProfileHandler(1)}>USER 1</Button>
				<Button onClick={() => openProfileHandler(2)}>USER 2</Button>
				<Button onClick={() => openProfileHandler(3)}>USER 3</Button>
				<Button onClick={() => dispatch(openPopup('viewNotificationDrawer'))}>Notification</Button>
				<Button onClick={() => dispatch(openPopup('companyDrawer'))}>Company</Button>
				<ViewNotificationDrawer />
			</main>
		</>
	);
};

export default Home;