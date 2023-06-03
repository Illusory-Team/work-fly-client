/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	poweredByHeader: false,
	env: {
		API_URL: process.env.API_URL,
		FAKE_API_URL: process.env.FAKE_API_URL,
	},
	experimental: {
		serverActions: true,
	},
	images: {
		domains: [],
	},
	sassOptions: {
		includePaths: ['./src'],
		prependData: `@import "@/shared/styles/_mixins.scss";`,
	},

	async rewrites() {
		return [
			{
				source: '/api/v2/:path*',
				destination: 'http://localhost:5000/:path*',
			},
		];
	},
};

module.exports = nextConfig;
