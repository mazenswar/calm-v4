// config/site.js

const site = {
	// =========================
	// EDIT THIS PER PROJECT
	// =========================
	name: "CALM",
	tagline: "Modern Psychology, Timeless Wisdom",
	description:
		"CALM Therapy offers virtual, integrative therapy for anxiety, OCD, complex trauma, and related conditions. We work with intelligent, high-functioning adults seeking depth beyond symptom management, serving 43 states and jurisdictions from our East Coast practice.",
	url: "https://calmtherapy.center",
	locale: "en_US",
	// Theme
	theme: "calm", // "warm" | "clean" | "bold" | "earth" | "minimal"
	// Analytics
	analytics: {
		ga4: null, // or null to disable
		gtm: "GTM-TTJTRRL2", // "GTM-XXXXXXX" or null GTM-TTJTRRL2
	},
	// Contact
	email: "info@calmtherapy.center",
	phone: null, // e.g. "+17321234567"
	address: {
		street: "801 Route 1 PMB 1026",
		city: "Edison",
		state: "NJ",
		zip: "08817",
		country: "US",
	},

	// Branding
	logo: {
		src: "/logo/logo-hr.webp", // place in /public
		width: 200,
		height: 60,
		alt: "CALM Therapy Logo",
	},

	// OG image defaults
	og: {
		width: 1200,
		height: 630,
		// Brand colors used in dynamic OG image
		background: "#fff7f3",
		accent: "#7f5a83", // brand-1
		text: "#4d4d4d",
	},

	// Social
	social: {
		twitter: null, // "@handle"
		instagram: "calmtherapy.center", // "handle"
		linkedin: "calm-therapy-center", // "handle"
	},

	// Business type for JSON-LD
	// See: https://schema.org/LocalBusiness subtypes
	// Common: "LocalBusiness" | "MedicalBusiness" | "ProfessionalService"
	businessType: "MedicalBusiness",

	// Operating hours for JSON-LD (optional)
	// hours: [
	// 	{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "09:00", close: "17:00" },
	// ],
	hours: null,

	// Price range for JSON-LD (optional)
	// "$" | "$$" | "$$$" | "$$$$"
	priceRange: "$$",
};

export default site;
