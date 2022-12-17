const {pluginBorderGradients} = require("./tailwind-additional-plugins.cjs");
// import {pluginBorderGradients} from "./tailwind-additional-plugins.mjs";

const variables = {
	primary: "--p",
	"primary-focus": "--pf",
	"primary-content": "--pc",

	secondary: "--s",
	"secondary-focus": "--sf",
	"secondary-content": "--sc",

	accent: "--a",
	"accent-focus": "--af",
	"accent-content": "--ac",

	neutral: "--n",
	"neutral-focus": "--nf",
	"neutral-content": "--nc",

	"base-100": "--b1",
	"base-200": "--b2",
	"base-300": "--b3",
	"base-content": "--bc",

	info: "--in",
	"info-content": "--inc",

	success: "--su",
	"success-content": "--suc",

	warning: "--wa",
	"warning-content": "--wac",

	error: "--er",
	"error-content": "--erc",
};

const themes = {  "[data-theme=cyberpunk]": {
		"color-scheme": "light",
		fontFamily: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
		primary: "#ff7598",
		secondary: "#75d1f0",
		accent: "#c07eec",
		neutral: "#423f00",
		"neutral-content": "#ffee00",
		"base-100": "#ffee00",
		"--rounded-box": "0",
		"--rounded-btn": "0",
		"--rounded-badge": "0",
		"--tab-radius": "0",
	},
	"[data-theme=dark]": {
		"color-scheme": "dark",
		primary: "#661AE6",
		"primary-content": "#ffffff",
		secondary: "#D926AA",
		"secondary-content": "#ffffff",
		accent: "#1FB2A5",
		"accent-content": "#ffffff",
		neutral: "#191D24",
		"neutral-focus": "#111318",
		"neutral-content": "#A6ADBB",
		"base-100": "#2A303C",
		"base-200": "#242933",
		"base-300": "#20252E",
		"base-content": "#A6ADBB",
	},
	"[data-theme=dracula]": {
		"color-scheme": "dark",
		primary: "#ff79c6",
		secondary: "#bd93f9",
		accent: "#ffb86c",
		neutral: "#414558",
		"base-100": "#282a36",
		"base-content": "#f8f8f2",
		info: "#8be9fd",
		success: "#50fa7b",
		warning: "#f1fa8c",
		error: "#ff5555",
	},
	"[data-theme=synthwave]": {
		"color-scheme": "dark",
		primary: "#e779c1",
		secondary: "#58c7f3",
		accent: "#f3cc30",
		neutral: "#20134e",
		"neutral-content": "#f9f7fd",
		"base-100": "#2d1b69",
		"base-content": "#f9f7fd",
		info: "#53c0f3",
		"info-content": "#201047",
		success: "#71ead2",
		"success-content": "#201047",
		warning: "#f3cc30",
		"warning-content": "#201047",
		error: "#e24056",
		"error-content": "#f9f7fd",
	},

}

function withOpacityValue(variable, fallbackColor) {
	return ({ opacityValue }) => {
		let fallbackColorValue = "";
		if (fallbackColor) {
			fallbackColorValue = `, var(${fallbackColor})`;
		}
		if (opacityValue === undefined) {
			return `hsl(var(${variable}${fallbackColorValue}))`;
		}
		return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
	};
}

let colorObject = {
	transparent: "transparent",
	current: "currentColor",

	primary: withOpacityValue("--p"),
	"primary-focus": withOpacityValue("--pf", "--p"),
	"primary-content": withOpacityValue("--pc"),

	secondary: withOpacityValue("--s"),
	"secondary-focus": withOpacityValue("--sf", "--s"),
	"secondary-content": withOpacityValue("--sc"),

	accent: withOpacityValue("--a"),
	"accent-focus": withOpacityValue("--af", "--a"),
	"accent-content": withOpacityValue("--ac"),

	neutral: withOpacityValue("--n"),
	"neutral-focus": withOpacityValue("--nf", "--n"),
	"neutral-content": withOpacityValue("--nc"),

	"base-100": withOpacityValue("--b1"),
	"base-200": withOpacityValue("--b2", "--b1"),
	"base-300": withOpacityValue("--b3", "--b2"),
	"base-content": withOpacityValue("--bc"),

	info: withOpacityValue("--in"),
	"info-content": withOpacityValue("--inc", "--nc"),

	success: withOpacityValue("--su"),
	"success-content": withOpacityValue("--suc", "--nc"),

	warning: withOpacityValue("--wa"),
	"warning-content": withOpacityValue("--wac", "--nc"),

	error: withOpacityValue("--er"),
	"error-content": withOpacityValue("--erc", "--nc"),
};



module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		linearBorderGradients: theme => ({
			colors: theme('colors'),
		}),
	},
	daisyui: {
		mytheme: {
			...themes["[data-theme=synthwave]"],
	}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
		pluginBorderGradients()
	],
};
