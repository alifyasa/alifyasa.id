/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export const content = [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
];
// https://tailwindcss.nuxtjs.org/tailwind/config#safelisting-classes
export const safelist = [
    'safelisted',
    {
        pattern: /(bg|text|border|from)-(gray5|gray12|gray89)/,
    },
]
export const theme = {
    extend: {
        fontFamily: {
            'sans': ['Satoshi', 'Helvetica', 'Roboto', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
        },
        colors: {
            'gray5': '#0D0D0D',
            'gray12': '#1F1F1F',
            'gray89': '#E3E3E3',
        }
    },
    
};
export const plugins = [];