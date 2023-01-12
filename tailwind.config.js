const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '250ms',
			},
		},
	},
	plugins: [
		plugin(({ addUtilities, addComponents }) => {
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.flex-col-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				},
				'.flex-col-center-start': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					flexDirection: 'column',
				},
				'.flex-col-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'column',
				},
				'.m-0-a': {
					margin: '0 auto',
				},
				'.display-b': {
					display: 'block',
				},
				'.w-container': {
					maxWidth: '1920px',
					width: '100%',
				},
				'.rounded-4xl': {
					borderRadius: '28px',
				},
				'.h1': {
					fontSize: '40px',
					fontWeight: 600,
					lineHeight: '52px',
				},
				'.h2': {
					fontSize: '32px',
					fontWeight: 500,
					lineHeight: '40px',
				},
				'.h3': {
					fontSize: '28px',
					fontWeight: 600,
					lineHeight: '40px',
				},
				'.h4': {
					fontSize: '24px',
					fontWeight: 600,
					lineHeight: '28px',
				},
				'.h5': {
					fontSize: '14px',
					fontWeight: 600,
					lineHeight: '24px',
				},
				'.headline': {
					fontSize: '17px',
					fontWeight: 500,
					lineHeight: '24px',
				},
				'.subhead': {
					fontSize: '17px',
					fontWeight: 400,
					lineHeight: '20px',
				},
				'.p': {
					fontSize: '16px',
					fontWeight: 400,
					lineHeight: '24px',
				},
				'.caption-14-rg': {
					fontSize: '14px',
					fontWeight: 400,
					lineHeight: '20px',
				},
				'.caption-14-md': {
					fontSize: '14px',
					fontWeight: 500,
					lineHeight: '20px',
				},
				'.caption-13-rg': {
					fontSize: '14px',
					fontWeight: 400,
					lineHeight: '18px',
				},
				'.caption-13-md': {
					fontSize: '14px',
					fontWeight: 500,
					lineHeight: '18px',
				},
			}),
				addComponents({});
		}),
	],
};
