import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: any) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		base: '/',
		publicDir: 'public',

		plugins: [
			react(),
			// {
			// 	name: 'index.html',
			// 	configureServer(server) {
			// 		server.middlewares.use((req, res, next) => {
			// 			if (req.url === '/') {
			// 				req.url = './public/index.html';
			// 			}
			// 			next();
			// 		});
			// 	},
			// },
			visualizer({
				template: 'treemap',
				filename: 'analyse.html',
				open: true,
				gzipSize: true,
				brotliSize: true,
			}),
		],
		resolve: {
			alias: {
				'@/': path.resolve(__dirname, './src'),
				'@/app': path.resolve(__dirname, './src/application'),
				'@/pages': path.resolve(__dirname, './src/pages'),
				'@/widgets': path.resolve(__dirname, './src/widgets'),
				'@/features': path.resolve(__dirname, './src/features'),
				'@/entities': path.resolve(__dirname, './src/entities'),
				'@/shared': path.resolve(__dirname, './src/shared'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/shared/lib/styles/_mixins.scss";`,
				},
			},
		},
		server: {
			proxy: {
				'/api': {
					target: process.env.VITE_API_URL,
					secure: false,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ''),
				},
			},
		},
	});
};
