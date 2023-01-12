import Image from 'next/image';
import { FC } from 'react';

export const MobileAuthCarousel: FC = () => {
	// const settings = {
	// 	dots: true,
	// 	arrows: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 10000,
	// 	infinite: true,
	// 	customPaging: (i: number) => (
	// 		<div className="custom-dots">
	// 			{i}
	// 			<div className="custom-dots-circle"></div>
	// 		</div>
	// 	),
	// };

	return (
		// <Slider {...settings}>
		<>
			<div className="">
				<Image className="m-0-a" src="/auth-illustration-1.png" width={278} height={278} alt="" priority />
				<h1 className="w-3/4 m-0-a text-xl text-center">Connect team and achieve goals together</h1>
				<p className="w-4/5 mx-auto text-center mt-3">
					Collaborate with team. Organize and automate a routine with task templates.
				</p>
			</div>
			<div className="">
				<Image className="m-0-a" src="/auth-illustration-2.png" width={278} height={278} alt="" priority />
				<h1 className="w-3/4 m-0-a text-xl text-center font-medium">Get smart reminders anywhere</h1>
				<p className="w-4/5 mx-auto text-center mt-3">
					You will never forget to do something important with smart notifications.
				</p>
			</div>
			<div className="">
				<Image className="m-0-a" src="/auth-illustration-3.png" width={278} height={278} alt="" priority />
				<h1 className="w-3/4 m-0-a text-xl text-center">Stay connected with team wherever you are</h1>
				<p className="w-4/5 mx-auto text-center mt-3">
					More tools: you can use both the mobile application and the web version
				</p>
			</div>
		</>
		// </Slider>
	);
};
