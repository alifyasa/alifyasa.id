/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'satoshi': ['satoshi', 'sans-serif'], // Add this line
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
