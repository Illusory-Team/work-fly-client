export const REGULAR_EMAIL =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const EMAIL_PATTERN_MESSAGE = 'Please enter a valid email';
export const REGULAR_PASSWORD = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;
export const PASSWORD_PATTERN_MESSAGE = 'The password must contain numbers and symbols';
export const FIELD_REQUIRED = 'The field should not be empty';
export const EMAIL_MAX_LENGTH = (value: number) => {
	return {
		value: value,
		message: `email cannot have more than ${value} characters`,
	};
};
export const PASSWORD_MIN_LENGTH = (value: number) => {
	return {
		value: value,
		message: `The password must have at least ${value} characters`,
	};
};
