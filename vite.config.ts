import { defineConfig } from 'vite'
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr';
import typescript from '@rollup/plugin-typescript'

const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: 'static',
	build: {
		outDir: 'lib',
		lib: {
			entry: resolvePath('index.ts'),
			name: 'debot-web-embedding',
			fileName: (format) => `debot-web-embedding.${format}.js`
		},
		rollupOptions: {
			plugins: [
				typescript({
					target: 'ESNext',
					rootDir: resolvePath('./src'),
					declaration: true,
					declarationDir: resolvePath('./lib'),
					exclude: resolvePath('./node_modules/**'),
					allowSyntheticDefaultImports: true,
				})
			],
		},
	},
	plugins: [reactRefresh(), svgr()],
})
