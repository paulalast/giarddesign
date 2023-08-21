/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.js"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			grey: "#F5F0EC",
			beige: "#DCC1AB",
			black: "#111111",
			green: "#1B5B31",
			white: "#ffffff",
		},
		fontFamily: {
			fontA: ["Montserrat", "sans-serif"],
			fontB: ["Inter", "sans-serif"],
		},
		extend: {
			textShadow: {
				custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			},
			keyframes: {
				"card-anima": {},
			},
			animation: {
				"card-anima": "card-anima 0.5s ease-in-out",
			},
		},
	},
	plugins: [],
}
