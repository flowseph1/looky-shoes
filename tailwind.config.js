/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                neon: ['neon', 'sans-serif'],
                neon2: ['neon2', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
