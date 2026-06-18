// config/fonts.js
import { DM_Sans, DM_Serif_Display } from "next/font/google";

export const boldBody = DM_Sans({
	subsets: ["latin"],
	variable: "--font-bold-body",
	display: "swap",
});

export const boldHeading = DM_Serif_Display({
	subsets: ["latin"],
	variable: "--font-bold-heading",
	display: "swap",
	weight: ["400"],
});
