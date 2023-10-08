import { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';

export const combineProviders = (...components: FC<PropsWithChildren>[]): FC<PropsWithChildren> => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }: ComponentProps<FC<PropsWithChildren>>): ReactElement => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>,
	);
};
