import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
	return (
		<div>
			<h1>404</h1>
			<p>Not found page</p>
			<Link to="/" />
		</div>
	);
};
