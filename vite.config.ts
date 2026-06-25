import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	// carbon-icons-svelte ships uncompiled .svelte source; let vite-plugin-svelte
	// handle it instead of esbuild's dep optimizer (which has no .svelte loader).
	optimizeDeps: {
		exclude: ['carbon-icons-svelte']
	}
});
