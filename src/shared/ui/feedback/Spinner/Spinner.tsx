import { CircularProgress } from '@mui/material';

import styles from './Spinner.module.scss';

export const Spinner = () => {
	return (
		<div className={styles.spinner}>
			<CircularProgress />
		</div>
	);
};
