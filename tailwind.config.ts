import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				circularLight:
					"repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f6f6f6 100px);",
			},
			fontFamily: {
				mont: ["var(--font-mont)"],
			},
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#B63E96",
				primaryDark: "#58E6D9",
			},
					},
	},
	plugins: [],
};
export default config;
