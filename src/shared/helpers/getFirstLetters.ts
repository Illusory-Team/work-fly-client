export const getFirstLetters = (string: string) => {
	const str = string.trim().split(' ');
	if (!str.length) return 'N';
	else {
		let result = '';
		for (let i = 0; i < str.length; i++) {
			result += str[i][0];
		}
		return result;
	}
};
