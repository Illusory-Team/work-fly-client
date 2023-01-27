export const getEmailMaxLength = (value: number) => {
	return {
		value: value,
		message: `email cannot have more than ${value} characters`,
	};
};

export const getPasswordMinLength = (value: number) => {
	return {
		value: value,
		message: `The password must have at least ${value} characters`,
	};
};
