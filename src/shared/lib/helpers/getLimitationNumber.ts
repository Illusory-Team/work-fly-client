export const getLimitationNumber = (num: number, maxNum: number, char = '+') => {
	if (num > maxNum) return `${maxNum}${char}`;
	else return num;
};
