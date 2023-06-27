
const typography = require("@tailwindcss/typography");
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
		colors:{
			primary:colors.green[400]
		}	
		},
	},
	plugins: [typography()],
};
