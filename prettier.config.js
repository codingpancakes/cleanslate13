/** @type {import("prettier").Config} */
const config = {
	arrowParens: "always",
	printWidth: 80,
	singleQuote: false,
	jsxSingleQuote: false,
	semi: true,
	trailingComma: "all",
	useTabs: true,
	tabWidth: 2,
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
