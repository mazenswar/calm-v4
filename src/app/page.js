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
		"Virtual therapy for thoughtful adults navigating anxiety, OCD & intrusive thoughts, complex trauma, perfectionism, spiritual uncertainty, and burnout, available in 43 U.S. states and jurisdictions from our East Coast base.",
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
		"The work we aim to do is both grounded and expansive. Grounded in evidence-based psychology, rigorous training, and clear therapeutic structure. Expansive in drawing from holistic traditions, contemplative practices, and the lived wisdom clients bring with them.",
		"Tanya's approach blends practical tools with intuitive insight. Some sessions are structured, others leave space for what emerges. Therapy is not a space for quick fixes. It is a place for presence, curiosity, and lasting change that helps you return to what feels essential and true.",
	],
	list: [
		"Grounded in rigorous clinical training and evidence‑based tools",
		"Open to holistic and contemplative practices when appropriate",
		"Oriented toward presence and long‑term growth, not quick fixes",
	],
	cta: {
		text: "Learn more",
		href: "/about",
		variant: "secondary",
	},
	image: {
		src: "/images/brain-meditation.webp",
		alt: "Illustration of a brain with a meditation figure, representing the blend of psychology and contemplative practice",
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
