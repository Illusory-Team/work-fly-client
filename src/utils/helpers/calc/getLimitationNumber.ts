export const getLimitationNumber = (num: number, maxNum: number) => {
	if (num > maxNum) return `${maxNum}+`;
	else return num;
};
