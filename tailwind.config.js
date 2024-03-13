/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montalt: ['Montserrat Alternates', 'sans-serif'],
                ojuju: ['Ojuju', 'sans-serif']
            }
        }
    },
    plugins: []
};
