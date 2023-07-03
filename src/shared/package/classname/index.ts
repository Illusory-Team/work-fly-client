interface IClassnameObjectProperty {
	[keyof: string]: boolean;
}

type ClassNameArgsType = (string | IClassnameObjectProperty | false | null | undefined)[];

export const classname = (
	...classes: (string | ClassNameArgsType | IClassnameObjectProperty | false | null | undefined)[]
) => {
	const result: string[] = [];
	classes.forEach(cl => {
		if (typeof cl === 'string') {
			result.push(cl);
		} else if (Array.isArray(cl) && cl.length) {
			const res = classname.apply(null, [...cl]);
			if (res) {
				result.push(res);
			}
		} else if (cl && typeof cl === 'object') {
			Object.entries(cl).forEach(en => {
				const [key, value] = en;
				if (value) {
					result.push(key);
				}
			});
		}
	});

	return result.join(' ');
};
