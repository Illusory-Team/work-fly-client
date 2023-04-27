type LoggerParams = {
	type: 'warn' | 'error' | 'info';
	message: string;
};

export const logger = <T extends LoggerParams>({ type, message }: T) => {
	switch (type) {
		case 'error':
			console.error(message);
			break;
		case 'warn':
			console.warn(message);
			break;
		case 'info':
			if (typeof window !== 'undefined') {
				console.log(`%cInfo`, 'color: #fff; background-color: blue;padding: 2px', message);
			}
			break;
	}
};
