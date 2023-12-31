const typography = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: colors.blue[400],
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	darkMode: "class",
	plugins: [typography()],
};
