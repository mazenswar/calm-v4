import CredentialSummary from "../components/sections/credentialsSummary/CredentialsSummary";
import CTABanner from "../components/sections/ctaBanner/CTABanner";
import FeatureGrid from "../components/sections/featureGrid/FeatureGrid";
import PageHero from "../components/sections/pageHero/PageHero";
import TwoColumn from "../components/sections/twoColumn/TwoColumn";

const pageHeroConfig = {
	eyebrow: null,
	heading: "About CALM Therapy",
	subheading:
		"CALM Therapy blends evidence-based practices with Eastern wisdom to support meaningful, lasting change. We work with people navigating anxiety, OCD, trauma, and life transitions, grounded in authenticity, compassion, and integrity.",
	image: {
		src: "/images/about/calm.webp",
		alt: "",
		width: 600,
		height: 600,
	},
	align: "left",
};

const philosophyConfig = {
	id: "philosophy",
	classNames: "blockTint",
	heading: "Our Philosophy",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "ph1",
			title: "Integration in Practice",
			description:
				"We draw on ERP, ACT, internal family systems, and integrative CBT, woven together with Eastern frameworks for working with the mind and body as one system.",
		},
		{
			id: "ph2",
			title: "Depth and Breadth",
			description:
				"We pair practical, skills-based tools for daily life with deeper reflection on root causes, so relief and lasting change can happen together.",
		},
		{
			id: "ph3",
			title: "A Values-Driven Practice",
			description:
				"Authenticity, compassion, and integrity guide our work. Therapy here is about remembering who you are, not becoming someone new.",
		},
	],
};

// Part 1 of 3: human introduction, no credentials yet
const founderIntroConfig = {
	id: "meet-the-founder",
	classNames: "",
	heading: "Meet the Founder",
	paragraphs: [
		"Tanya Singh, PhD, is a Licensed Clinical Psychologist and the Director and Founder of CALM Therapy. She specializes in anxiety, OCD and related disorders, complex trauma, and life transitions, working from an integrative perspective that draws on both Western clinical training and Eastern frameworks for healing.",
		"Clients often describe feeling an authentic blend of perspectives in working with Tanya, an integration of East and West that does not favor one over the other. This presence often leaves clients feeling genuinely understood, sometimes for the first time.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/about/ts-park.webp",
		alt: "Tanya Singh, PhD, founder of CALM Therapy",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

// Part 2 of 3: dedicated credentials display, its own visual identity
const credentialSummaryConfig = {
	id: "credentials-summary",
	classNames: "blockTint",
	heading: "Training & Credentials",
	intro:
		"Tanya's training spans some of the country's leading academic and clinical institutions.",
	groups: [
		{
			id: "education",
			title: "Education",
			items: [
				"PhD, Clinical Psychology, Montclair State University",
				"MA, Clinical Psychology, Montclair State University",
				"MA, Psychology in Education, Teachers College, Columbia University",
			],
		},
		{
			id: "training",
			title: "Clinical Training",
			items: [
				"Doctoral Psychology Intern, Rutgers University Behavioral Health Care",
				"Advanced Practicum, Harvard University / Massachusetts General Hospital",
				"Additional training at SUNY Downstate and NYSPI",
			],
		},
		{
			id: "memberships",
			title: "Professional Memberships",
			items: [
				"New Jersey Psychological Association",
				"New York Psychological Association",
			],
		},
	],
	footer: {
		text: "For a complete academic record, including publications and conference presentations, visit Tanya's full credentials page.",
		cta: {
			text: "View Full Academic CV & Publications",
			href: "/people/tanya-singh",
			variant: "secondary",
		},
	},
};

// Part 3 of 3: personal closing, equal weight to the opening
const founderPersonalConfig = {
	id: "beyond-the-therapy-room",
	classNames: "",
	heading: "Beyond the Therapy Room",
	paragraphs: [
		"For Tanya, this work is a calling and a craft, not just a job, one she continues to refine through ongoing training and her own reflective practice. That same curiosity carries into the rest of her life. She spends time in nature, cooks, plays video games, writes, and spends time with the children in her life, all of which shape the person who shows up in the therapy room.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/about/tsn.webp",
		alt: "Tanya Singh, PhD, Licensed Clinical Psychologist",
		width: 600,
		height: 600,
	},
	imagePosition: "left",
};

const ctaBannerConfig = {
	heading: "Ready to Connect?",
	subheading:
		"If our approach resonates with you, we offer a free 15-minute consultation to see if we are the right fit for your journey.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};

export default function AboutPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<FeatureGrid featureGridConfig={philosophyConfig} />
			<TwoColumn twoColumnConfig={founderIntroConfig} />
			<CredentialSummary credentialSummaryConfig={credentialSummaryConfig} />
			<TwoColumn twoColumnConfig={founderPersonalConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
