import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Container } from '@/shared/ui';

import { Header } from './components/Header';

interface AuthProps {
	title?: string;
	subTitle?: ReactNode;
	href?: string;
	src: string;
	form: ReactNode;
}

export const AuthLayout: FC<AuthProps> = ({
	title = 'Connect your team\n with WorkFly',
	subTitle,
	href = '',
	src,
	form,
}) => {
	return (
		<>
			<Header href={href} />
			<main>
				<Container className="h-screen pt-20 flex px-8">
					<div className="h-full flex-1 flex-col-center-start">
						<h1 className="h1 mt-24 w-3/4">{title}</h1>
						<p className="subhead mt-12 text-left w-3/4">{subTitle}</p>
						<Image draggable={false} className="mt-14 " src={src} width={768} height={639} alt="" priority />
					</div>
					<div className="h-full flex-1 flex-col-center-start">{form}</div>
				</Container>
			</main>
		</>
	);
};
