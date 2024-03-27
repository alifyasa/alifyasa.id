/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'satoshi': [
					'Satoshi', 'Helvetica', 'ui-sans-serif', 
					'system-ui', 'sans-serif', "Apple Color Emoji", 
					"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
				],
			},			
			colors: {
				'deep-black': '#0D0D0D',
				'dark-gray': '#1F1F1F',
				'light-gray': '#FAFAFA',
				'eggshell': '#F0EAD6',
			},
		},
	},
	plugins: [],
}
