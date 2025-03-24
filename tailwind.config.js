/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                breviaPurple: "#7F5AF0", // Adjust this based on Brevia's brand purple
            },
            fontFamily: {
                sans: ["'Poppins'", "sans-serif"],
            },
            minHeight: {
                '200vh': '200vh',
                '300vh': '300vh',
            },
        },
    },
    plugins: [],
};