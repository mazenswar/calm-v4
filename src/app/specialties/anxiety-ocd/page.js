import PageHero from "@/app/components/sections/pageHero/PageHero";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import CardGrid from "@/app/components/sections/cardGrid/CardGrid";
import { generateMeta } from "../../../../config/metadata";
// META ---------------------------------------------------------------

export const metadata = generateMeta({
	title: "Anxiety & OCD Therapy",
	description:
		"Evidence-based therapy for anxiety, OCD, and related conditions using ERP, i-CBT, and ACT. Virtual sessions for adults across 43 states and jurisdictions.",
	path: "/specialties/anxiety-ocd",
});
// CONFIG -------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Anxiety, OCD and Related Conditions",
	subheading:
		"Anxiety is one of the most common reasons people seek therapy, and also one of the most misunderstood.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "A Different Relationship With Anxiety",
	paragraphs: [
		"Anxiety is not simply worry or nervousness. For many people, it shows up as an exhausting relationship with uncertainty, a mind that will not quiet down, or a body that stays on alert even when nothing is wrong. It can look like perfectionism, avoidance, rituals, or a relentless need for reassurance. It can make ordinary life feel harder than it should.",
		"While anxiety can feel overwhelming, it is not random. It develops for reasons, follows recognizable patterns, and can change. At CALM, treatment is evidence-based and adapted to the whole person, including the nervous system, personal history, and the specific ways anxiety has taken shape in your life. The goal is not just symptom relief, but a fundamentally different relationship with uncertainty and with yourself.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/anxiety-ocd/trees-from-below.webp",
		alt: "A mesmerizing view upwards through tall bare trees into a cloudy sky.",
		width: 600,
		height: 600,
	},
};

const cardGridConfig = {
	id: "conditions",
	heading: "Conditions We Work With",
	subheading:
		"Explore the conditions below to learn more about what you are experiencing and how we work with it.",
	cta: null,
	cards: [
		{
			href: "/specialties/gad",
			title: "Generalized Anxiety Disorder (GAD)",
			description:
				"Persistent worry that jumps from topic to topic, rarely resting. Therapy helps you understand what drives it and build a steadier relationship with uncertainty.",
			cta: "Learn more",
		},
		{
			href: "/specialties/pd",
			title: "Panic Disorder",
			description:
				"When the body sounds a false alarm, the fear of fear itself can become its own trap. We work to break that cycle and rebuild trust in your nervous system.",
			cta: "Learn more",
		},
		{
			href: "/specialties/sad",
			title: "Social Anxiety Disorder (SAD)",
			description:
				"More than shyness, a deep fear of judgment that shapes how you show up, hold back, or disappear in relationships and social situations.",
			cta: "Learn more",
		},
		{
			href: "/specialties/ocd",
			title: "Obsessive Compulsive Disorder (OCD)",
			description:
				"Intrusive thoughts that feel unbearable, and rituals that offer only temporary relief. Evidence-based treatment can interrupt that cycle without relying on willpower alone.",
			cta: "Learn more",
		},
		{
			href: "/specialties/bdd",
			title: "Body Dysmorphic Disorder (BDD)",
			description:
				"When a perceived flaw commands your attention and quietly organizes your life around it. Therapy helps loosen that grip and rebuild a more grounded sense of self.",
			cta: "Learn more",
		},
		{
			href: "/specialties/perfectionism",
			title: "Perfectionism",
			description:
				"Not a personality trait to be proud of, often a fear response in disguise. We explore what perfectionism is protecting and what becomes possible when it loosens.",
			cta: "Learn more",
		},
		{
			href: "/specialties/self-worth",
			title: "Self-esteem & Self-worth",
			description:
				"A quiet but persistent sense of not being enough, often carried for years. Therapy works at the level of belief, not just behavior, to shift how you see yourself.",
			cta: "Learn more",
		},
	],
};

export default function AnxietyOcd() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<CardGrid cardGridConfig={cardGridConfig} />
		</main>
	);
}
