const path = require('path');

module.exports = {
	features: {
		previewMdx2: true,
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
    'storybook-addon-next-router',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
          postcssOptions: {
            plugins: [require.resolve('tailwindcss')],
          },
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config) => {
		// add SCSS support for CSS Modules
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader?modules&importLoaders', 'postcss-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		config.resolve.alias = {
			...config.resolve?.alias,
			'@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
		};

		return config;
	},
};
