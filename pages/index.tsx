import { useEffect } from 'react';

import { UserService } from '@/entities/User';

import { HomeView } from '@/views/home/Home';

const Home = () => {
	// тестовый запрос для проерки заголовков у запроса
	useEffect(() => {
		async function fetchData() {
			const response = await UserService.getUserProfile();
			console.log(response);
		}

		fetchData();
	});

	return (
		<>
			<HomeView />
		</>
	);
};

export default Home;
