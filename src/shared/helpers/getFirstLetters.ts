export const getFirstLetters = (string: string) => {
	const str = string.trim();
	if (!str.length) return 'N';
	const arr = str.split(' ');
	if (arr.length === 1) return str[0];
	else {
		let result = '';
		for (let i = 0; i < arr.length; i++) {
			result += arr[i][0];
		}
		return result;
	}
};
