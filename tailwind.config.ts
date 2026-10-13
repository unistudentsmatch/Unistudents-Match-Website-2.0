import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				unistudblue: "#0d6efd",
				unistudwhite: "#fff",
				unistuddark: "#000",
				unistudgrey: "#f8f8f8",
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["winter"],
	},
};
export default config;
