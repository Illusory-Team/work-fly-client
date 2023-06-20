export const getFirstLetters = (string: string) =>
	string
		.trim()
		.split(' ')
		.reduce((acc, word) => acc + word[0], '');
