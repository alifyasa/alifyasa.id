/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'!./src/pages/txt/**/*',
	],
	theme: {
		extend: {
			fontFamily: {
				'rubik': [
					'Rubik', 'Helvetica', 'ui-sans-serif', 
					'system-ui', 'sans-serif', "Apple Color Emoji", 
					"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
				],
			},			
			colors: {
				'background': '#ffffff',
				'text': '#2e2e2e',
				'primary': '#48b1ca',
				'secondary': '#8fd4e4',
				'primary': '#ec1e18',
				'secondary': '#82f595',
				'accent': '#007db3'
			},
		},
	},
	plugins: [],
}
