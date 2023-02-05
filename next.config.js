/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	poweredByHeader: false,
	env: {
		API_URL: process.env.API_URL,
		FAKE_API_URL: process.env.FAKE_API_URL,
	},

	images: {
		domains: [],
	},
};

module.exports = nextConfig;
