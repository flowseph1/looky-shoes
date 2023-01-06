const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                neon: ['neon', 'sans-serif'],
                neon2: ['neon2', 'sans-serif'],
            },
            colors: {
                background: colors.zinc[900],
            },
            fontSize: {
                xs: ['0.7rem', '0'],
                sm: '0.9rem',
            },
            spacing: {
                'navigation-height': '54px',
            },
            boxShadow: {
                contour: 'inset 0px 1px 1px rgba(255, 255, 255, 0.1)',
                'contour-shadow':
                    'inset 2px 1px 2px rgba(255, 255, 255, 0.1) 0 10px 15px -3px rgb(79 70 229 / 0.5), 0 4px 6px -4px rgb(79 70 229 / 0.5)',
            },
            backgroundImage: {
                'primary-gradient': 'radial-gradient(circle, rgb(8, 6, 36) 0%, rgba(23,14,25,0) 100%)',
                'page-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,.3),transparent)',
            },
        },
        keyframes: {
            rotateGradient: {
                '0%': { filter: 'hue-rotate(0deg)' },
                '100%': { filter: 'hue-rotate(50deg)' },
            },
            flicker1: {
                '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
                    textShadow:
                        '0 0 4px #4700d8, 0 0 11px #4700d8, 0 0 19px #4700d8, 0 0 40px #4700d8, 0 0 80px #4700d8, 0 0 90px #4700d8, 0 0 100px #4700d8, 0 0 150px #4700d8;',
                },

                '20%, 55%': { textShadow: 'none' },
            },
        },
        animation: {
            rotateGradient: 'rotateGradient 5s linear infinite',
            flicker1: 'flicker1 10s infinite',
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
