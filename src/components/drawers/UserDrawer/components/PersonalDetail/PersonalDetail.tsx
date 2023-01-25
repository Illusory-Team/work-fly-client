import { Button } from '@/components/ui/buttons/Button';
import { SelectField } from '@/components/ui/inputs/SelectField';
import { TextArea } from '@/components/ui/inputs/TextArea';
import { TextField } from '@/components/ui/inputs/TextField';
import { FC } from 'react';
import styles from './PersonalDetail.module.scss';

export const PersonalDetail: FC = () => {
	return (
		<form>
			<div className={styles.container}>
				<TextField placeholder="+996771435642" label="Phone" className={styles.input} />
				<TextField placeholder="Kavoon@gmail.com..." label="E-mail" className={styles.input} />
				<SelectField placeholder="Choose..." label="Department" className={styles.input} />
				<SelectField placeholder="Choose..." label="Manager" className={styles.input} />
				<TextField placeholder="Choose date..." label="Birthday" className={styles.input} />
				<TextField placeholder="Text" label="Address" className={styles.input} />
			</div>
			<TextArea placeholder="Add more details to your profile" label="Descriptor" className="mt-14"></TextArea>
			<Button className={styles.button}>Save Changes</Button>
		</form>
	);
};
