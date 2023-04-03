/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    corePlugins: {
        preflight: false,
    },
    important: "#__next",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#674188",
                "secondary": "#C3ACD0",
            },
        },
    },
    plugins: [],
};

