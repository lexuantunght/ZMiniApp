import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default () => {
	return defineConfig({
		root: './src',
		base: '',
		plugins: [reactRefresh(), tsconfigPaths(), svgr()],
	});
};
