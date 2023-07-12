// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require('@sentry/nextjs');

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
		prependData: `@import "@/shared/lib/styles/_mixins.scss";`,
	},

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/:path*',
			},
		];
	},
};

module.exports = nextConfig;

// Injected content via Sentry wizard below

module.exports = withSentryConfig(
	module.exports,
	{
		// For all available options, see:
		// https://github.com/getsentry/sentry-webpack-plugin#options

		// Suppresses source map uploading logs during build
		silent: true,

		org: 'illusory-team',
		project: 'work-fly-nextjs',
	},
	{
		// For all available options, see:
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

		// Upload a larger set of source maps for prettier stack traces (increases build time)
		widenClientFileUpload: true,

		// Transpiles SDK to be compatible with IE11 (increases bundle size)
		transpileClientSDK: true,

		// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
		tunnelRoute: '/monitoring',

		// Hides source maps from generated client bundles
		hideSourceMaps: true,

		// Automatically tree-shake Sentry logger statements to reduce bundle size
		disableLogger: true,
	},
);
