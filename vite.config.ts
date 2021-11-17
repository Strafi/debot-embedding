import { defineConfig } from 'vite'
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: 'static',
	build: {
		outDir: 'lib',
		lib: {
			entry: path.resolve(__dirname, 'index.ts'),
			name: 'debot-web-embedding',
			fileName: (format) => `debot-web-embedding.${format}.js`
		},
	},
	plugins: [reactRefresh(), svgr()],
})
