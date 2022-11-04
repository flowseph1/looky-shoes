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
        keyframes: {
            rotateGradient: {
                '0%': { filter: 'hue-rotate(0deg)' },
                '100%': { filter: 'hue-rotate(360deg)' },
            },
            flicker1: {
                '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
                    textShadow:
                        '0 0 4px #4700d8, 0 0 11px #4700d8, 0 0 19px #4700d8, 0 0 40px #4700d8, 0 0 80px #4700d8, 0 0 90px #4700d8, 0 0 100px #4700d8, 0 0 150px #4700d8;',
                },

                '20%, 55%': { textShadow: 'none' },
            },

            flicker2: {
                '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
                    textShadow:
                        '0 0 4px #4d77ff, 0 0 11px #4d77ff, 0 0 19px #4d77ff, 0 0 40px #4d77ff, 0 0 80px #4d77ff, 0 0 90px #4d77ff, 0 0 100px #4d77ff, 0 0 150px #4d77ff;',
                },

                '20%, 55%': { textShadow: 'none' },
            },
        },
        animation: {
            rotateGradient: 'rotateGradient 2s linear infinite',
            flicker1: 'flicker1 10s infinite',
            flicker2: 'flicker2 12s infinite',
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
