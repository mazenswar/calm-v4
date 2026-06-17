import PageHero from "../../components/sections/pageHero/PageHero";
import TwoColumn from "../../components/sections/twoColumn/TwoColumn";
import AudienceSection from "../../components/sections/audienceSection/AudienceSection";
import FeatureGrid from "../../components/sections/featureGrid/FeatureGrid";
import Steps from "../../components/sections/steps/Steps";
import CTABanner from "../../components/sections/ctaBanner/CTABanner";
import { generateMeta } from "../../../../config/metadata";

// META ------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Self-Esteem & Self-Worth Therapy",
	description:
		"Therapy to address the roots of low self-worth, separating who you are from the inherited beliefs that have shaped how you see yourself.",
	path: "/specialties/self-worth",
});

// CONFIG -----------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Self-Esteem & Self-Worth",
	subheading:
		"Self-esteem work is not about self-improvement. It is about remembering your worth, independent of performance or appearance.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Self-Esteem & Self-Worth",
	paragraphs: [
		"Self-esteem and self-worth challenges often run deeper than simple confidence issues. They typically stem from early messages about what makes you valuable, lovable, or acceptable. These beliefs become so fundamental to how you see yourself that they feel like unchangeable truths rather than learned patterns.",
		"Many people struggle with worth that feels entirely dependent on external factors like achievements, appearance, or others' approval. This creates an exhausting cycle of constantly trying to prove your value through performance, people-pleasing, or perfectionism, yet never feeling truly secure in your sense of self.",
		"What makes this particularly difficult is that our culture often reinforces the idea that worth must be earned or demonstrated. True self-worth, however, is not about becoming better or different. It is about reconnecting with an inherent sense of value that exists independent of what you do, how you look, or what others think of you.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/self-worth.webp",
		alt: "A single pearl resting inside an open oyster shell, its luster already complete before being seen",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What Low Self-Esteem Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{ id: "e1", text: "Chronic self-doubt or feelings of not being enough" },
		{
			id: "e2",
			text: "Dependence on external validation for any sense of worth",
		},
		{ id: "e3", text: "Difficulty holding boundaries or voicing needs" },
		{ id: "e4", text: "Constant comparison to others and coming up short" },
		{ id: "e5", text: "Feeling like an imposter, even when successful" },
		{
			id: "e6",
			text: "Harsh inner critic that overshadows any positive feedback",
		},
		{ id: "e7", text: "Fear of disappointing others or being rejected" },
		{ id: "e8", text: "Exhaustion from constantly trying to prove your value" },
	],
	cta: null,
};

const therapyConfig = {
	id: "therapy",
	classNames: "blockTint",
	heading: "How Therapy Helps with Self-Esteem & Self-Worth",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "t1",
			title: "Reconnect with an internal sense of worth",
			description:
				"We help you identify and strengthen the part of yourself that knows your value is not conditional, practicing holding onto that sense even when external circumstances challenge it.",
		},
		{
			id: "t2",
			title: "Explore beliefs shaped by family, culture, or past experiences",
			description:
				"We examine inherited beliefs about what made you acceptable or lovable with curiosity and compassion, understanding how they developed while questioning whether they still serve you.",
		},
		{
			id: "t3",
			title: "Develop confidence that does not depend on external approval",
			description:
				"Rather than building self-esteem through achievements or positive thinking, we focus on cultivating a grounded sense of self that remains stable regardless of external feedback.",
		},
		{
			id: "t4",
			title: "Practice new ways of relating to yourself",
			description:
				"We explore how you speak to yourself, what you need to feel secure, and how to provide yourself with the acceptance you may be seeking from others.",
		},
	],
};

const stepsConfig = {
	id: "what-to-expect",
	classNames: "",
	heading: "What to Expect in Self-Esteem Therapy",
	subheading:
		"Throughout this process, the therapeutic relationship itself becomes a space for practicing being known and accepted without having to perform or earn approval.",
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Initial sessions focus on understanding your unique patterns",
			description:
				"We explore how low self-worth shows up in your life, what triggers feelings of inadequacy, and what messages you have internalized about your value. This helps us understand the specific beliefs and patterns that need attention.",
		},
		{
			id: "step-2",
			title: "Treatment emphasizes both insight and practice",
			description:
				"You will gain understanding about how your sense of worth developed while also practicing new ways of relating to yourself in real time, including self-compassion exercises, boundary practice, or experiments in trusting your own judgment.",
		},
		{
			id: "step-3",
			title: "Integration involves applying new self-relating to daily life",
			description:
				"As you develop a more stable sense of worth, we work on how this translates to relationships, work, and decision-making. The goal is for this internal shift to create real changes in how you move through the world.",
		},
	],
};

const whyCalmConfig = {
	id: "why-calm",
	classNames: "blockTint",
	heading: "Why Choose CALM Therapy for Self-Esteem Work",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "w1",
			title: "Inherent worth rather than earned value",
			description:
				"We do not work toward making you better so you can feel worthy. Instead, we help you remember and reconnect with worth that was always there, independent of your achievements, appearance, or others' approval.",
		},
		{
			id: "w2",
			title: "Insight and embodied practice together",
			description:
				"Self-worth is not just an intellectual concept but something that needs to be felt and experienced. We incorporate mindfulness, somatic awareness, and relational practices that help you embody a new sense of self.",
		},
		{
			id: "w3",
			title: "Attention to cultural and family patterns",
			description:
				"We explore how messages from family, culture, and society have shaped your understanding of worth, helping you distinguish between inherited beliefs and your own authentic sense of value.",
		},
		{
			id: "w4",
			title: "Flexible private-pay model",
			description:
				"Our fee-for-service structure enables us to tailor treatment based on what you actually need, using the most effective approaches for self-worth work and adjusting our methods as your needs change.",
		},
	],
};

const ctaBannerConfig = {
	heading: "This Is Remembrance, Not Improvement",
	subheading:
		"Self-worth work is about uncovering and strengthening what was always true about your inherent value, rather than trying to become worthy through achievement or change. Reach out to schedule a consultation.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};

export default function SelfEsteemPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<AudienceSection audienceConfig={experiencesConfig} />
			<FeatureGrid featureGridConfig={therapyConfig} />
			<Steps stepsConfig={stepsConfig} />
			<FeatureGrid featureGridConfig={whyCalmConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
