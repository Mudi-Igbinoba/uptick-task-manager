/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montalt: ['Montserrat Alternates', 'sans-serif'],
                ojuju: ['Ojuju', 'sans-serif']
            }
        },
        screens: {
            mini: '992px',
            ...defaultTheme.screens
        }
    },
    plugins: []
};
