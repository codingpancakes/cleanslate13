/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	content: [
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			"2xs": ["0.75rem", { lineHeight: "1.25rem" }],
			xs: ["0.8125rem", { lineHeight: "1.5rem" }],
			sm: ["0.875rem", { lineHeight: "1.5rem" }],
			base: ["1rem", { lineHeight: "1.75rem" }],
			lg: ["1.125rem", { lineHeight: "1.75rem" }],
			xl: ["1.25rem", { lineHeight: "1.75rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
			"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
			"5xl": ["3rem", { lineHeight: "1" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},
		extend: {
			colors: {
				primary: {
					1: "var(--colors-primary1)",
					2: "var(--colors-primary2)",
					3: "var(--colors-primary3)",
					4: "var(--colors-primary4)",
					5: "var(--colors-primary5)",
					6: "var(--colors-primary6)",
					7: "var(--colors-primary7)",
					8: "var(--colors-primary8)",
				},
				secondary: {
					1: "var(--colors-secondary1)",
					2: "var(--colors-secondary2)",
					3: "var(--colors-secondary3)",
					4: "var(--colors-secondary4)",
					5: "var(--colors-secondary5)",
					6: "var(--colors-secondary6)",
					7: "var(--colors-secondary7)",
					8: "var(--colors-secondary8)",
				},
				scale: {
					1: "var(--colors-scale1)",
					2: "var(--colors-scale2)",
					3: "var(--colors-scale3)",
					4: "var(--colors-scale4)",
					5: "var(--colors-scale5)",
					6: "var(--colors-scale6)",
					7: "var(--colors-scale7)",
					8: "var(--colors-scale8)",
					A1: "var(--colors-scaleA1)",
					A2: "var(--colors-scaleA2)",
					A3: "var(--colors-scaleA3)",
					A4: "var(--colors-scaleA4)",
					A5: "var(--colors-scaleA5)",
					A6: "var(--colors-scaleA6)",
					A7: "var(--colors-scaleA7)",
					A8: "var(--colors-scaleA8)",
				},
			},
		},
	},
	plugins: [],
};
