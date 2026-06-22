import CardGrid from "./components/sections/cardGrid/CardGrid";
import Hero from "./components/sections/hero/Hero";
import TwoColumn from "./components/sections/twoColumn/TwoColumn";
import { generateMeta } from "../../config/metadata";
// Meta ------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Virtual Therapy for Anxiety, OCD & Complex Trauma",
	description:
		"CALM Therapy provides virtual, integrative therapy for anxiety, OCD, complex trauma, and treatment-resistant conditions. We work with thoughtful, high-functioning adults seeking depth beyond symptom management, across 43 states and jurisdictions.",
	path: "/",
});

// CONFIG -----------------------------------------------------------------------
const heroConfig = {
	eyebrow: null,
	heading: "Modern Psychology, Timeless Wisdom",
	subheading:
		"Virtual therapy for adults navigating anxiety, OCD, complex trauma, and spiritual experiences while seeking a deeper understanding of themselves.",
	locationTag: "East Coast–based. Available across 43 U.S. states.",
	cta: {
		text: "Schedule a Consult",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		variant: "primary",
		external: true,
	},
	ctaSecondary: null,
	images: {
		portrait: {
			src: "/images/ts-home-hero.webp",
			alt: "Tanya Singh, PhD, smiling in a professional setting",
		},
		background: null,
		landscape: null,
	},
	caption: {
		name: "Tanya Singh, PhD",
		title: "Founder & Licensed Clinical Psychologist",
	},
};

const specialtiesConfig = {
	heading: "What We Can Help With",
	subheading:
		"We're here to offer care and perspective as you navigate your journey.",
	// cta: {
	// 	text: "See all specialties",
	// 	href: "/specialties",
	// 	variant: "secondary",
	// },
	classNames: "blockTint",
	cards: [
		{
			title: "Anxiety, OCD & Related Conditions",
			description:
				"Evidence-based therapy for anxiety, OCD, and related conditions, with approaches like ERP, i-CBT, and ACT.",
			href: "/specialties/anxiety-ocd",
			cta: "Learn more",
		},
		{
			title: "Gifted Adults",
			description:
				"Support for the intensity, depth, and complexity that often come with being a highly capable, perceptive adult.",
			href: "/specialties/gifted-adults",
			cta: "Learn more",
		},
		{
			title: "Complex Trauma",
			description:
				"When the past feels present, old fear or shame can shape today. We pair grounding skills with deeper work to rebuild safety, clarity, and self-compassion.",
			href: "/specialties/complex-trauma",
			cta: "Learn more",
		},
		{
			title: "Treatment-Resistant Conditions",
			description:
				"When previous treatment has not helped enough, we look deeper and try a different path forward.",
			href: "/specialties/treatment-resistant",
			cta: "Learn more",
		},
		{
			title: "Spiritual & Transformative Experiences",
			description:
				"Support for integrating profound or disorienting experiences without pathologizing what is meaningful to you.",
			href: "/specialties/spiritual-transformative-experiences",
			cta: "Learn more",
		},
		{
			title: "Ketamine-Assisted Psychotherapy (KAP)",
			description:
				"A guided process combining ketamine sessions with therapy to support healing, growth, and relief from emotional stuckness.",
			href: "/kap",
			cta: "Learn more",
		},
	],
};

// our approach

const twoColumnConfig = {
	heading: "Our Approach to Therapy",
	paragraphs: [
		"The work we aim to do is both grounded and responsive. Grounded in evidence-based psychology, rigorous clinical training, and a deep respect for the complexity of being human. Responsive in how that science is applied, drawing on principles that support creativity, intuition, and attunement to who is actually in the room.",
		"We believe that symptoms and patterns often make sense given what someone has lived, and that some ways of being are not problems to be solved but parts of who you are that the world has not made enough room for. We also believe that beneath many of our habits, defenses, and survival strategies lies a deeper wisdom about what we need, value, and long for. Therapy can help bring that wisdom into clearer focus. It begins with understanding, creating space to explore what your experiences, emotions, and patterns may be communicating.",
		"Much of the work happens through a relationship that is real and meaningful, helping you understand patterns that may be operating outside of your awareness so you can reconnect with yourself and move through life with more ease.",
	],
	list: [
		"Grounded in rigorous clinical training and evidence‑based tools",
		"Applied with creativity, intuition, and sensitivity to what each person actually needs",
		"Built on a relationship that is real and meaningful",
	],
	cta: {
		text: "Learn more",
		href: "/about",
		variant: "secondary",
	},
	image: {
		src: "/images/brain-meditation.webp",
		alt: "Illustration of a brain person in a meditation pose",
		width: 400,
		height: 400,
	},
	imagePosition: "right",
};

export default function Home() {
	return (
		<main id="main-content">
			<Hero heroConfig={heroConfig} />
			<CardGrid cardGridConfig={specialtiesConfig} />
			<TwoColumn twoColumnConfig={twoColumnConfig} />
		</main>
	);
}
