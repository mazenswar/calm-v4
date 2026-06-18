// config/design.js

export const palettes = [
	{
		id: "calm",
		label: "calm",
		description: "CALM Brand",
		group: "light",
		swatches: ["#7f5a83", "#4c2f6f;", "#fff7f3"],
	},
];

export const fontPairings = [
	{
		id: "clinical",
		label: "Clinical",
		description: "Precise & professional",
		heading: "--font-bold-heading",
		body: "--font-bold-body",
	},
];

// These are the styles — each one is a complete visual personality.
// shape and spacing are applied automatically when a style is selected.
// The client just sees the label and description.
export const siteStyles = [
	{
		id: "split-contained",
		label: "Soft & Personal",
		description: "Circular portrait, warm and approachable",
		shape: "round",
		spacing: "airy",
	},
];
