// specialties/bdd.js
import AudienceSection from "@/app/components/sections/audienceSection/AudienceSection";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import FeatureGrid from "@/app/components/sections/featureGrid/FeatureGrid";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import Steps from "@/app/components/sections/steps/Steps";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import React from "react";
import { generateMeta } from "../../../../config/metadata";
// META -------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Body Dysmorphic Disorder (BDD) Therapy",
	description:
		"Therapy for Body Dysmorphic Disorder that addresses the shame and self-criticism behind distorted self-image, helping you build a more compassionate relationship with yourself.",
	path: "/specialties/bdd",
});

// CONFIG ------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Body Dysmorphic Disorder (BDD)",
	subheading:
		"BDD often involves harsh self-criticism and distorted self-image. Therapy helps you develop a more compassionate relationship with yourself.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Body Dysmorphic Disorder",
	paragraphs: [
		"Body Dysmorphic Disorder involves persistent preoccupation with perceived flaws or defects in physical appearance that are not observable or appear minor to others. This preoccupation causes significant distress and impairment in daily functioning, often leading to repetitive behaviors like mirror checking, excessive grooming, or seeking reassurance about appearance.",
		"What makes BDD particularly challenging is how the distorted perception feels completely real and urgent. The flaws you see or feel in your appearance can dominate your thoughts and drive compulsive behaviors aimed at hiding, checking, or correcting these perceived imperfections. This can lead to significant avoidance of social situations, work, or activities that might involve being seen by others.",
		"BDD often involves much more than concern about appearance. It typically reflects deeper struggles with shame, self-worth, and harsh internal criticism. The critical inner narratives that fuel BDD usually extend beyond physical appearance to encompass fundamental beliefs about being flawed, unacceptable, or not good enough in some essential way.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/bdd.webp",
		alt: "Beautiful abstract reflections on water surface with serene swirls and soft sunset colors.",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What BDD Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Persistent preoccupation with perceived flaws in your appearance",
		},
		{
			id: "e2",
			text: "Shame, avoidance, or distress around being seen by others",
		},
		{
			id: "e3",
			text: "Checking behaviors like mirror use, taking photos, or examining your appearance",
		},
		{
			id: "e4",
			text: "Difficulty accepting compliments or positive feedback about your appearance",
		},
		{
			id: "e5",
			text: "Comparing yourself to others and consistently finding yourself lacking",
		},
		{
			id: "e6",
			text: "Time-consuming grooming rituals or attempts to hide perceived flaws",
		},
		{
			id: "e7",
			text: "Avoiding social situations, work, or activities due to appearance concerns",
		},
		{
			id: "e8",
			text: "Feeling like everyone notices and judges your perceived imperfections",
		},
	],
	cta: null,
};

const therapyConfig = {
	id: "therapy",
	classNames: "blockTint",
	heading: "How Therapy Helps with BDD",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "t1",
			title: "Explore the critical inner narratives that distort self-image",
			description:
				"We examine the harsh, critical voice that drives BDD symptoms, understanding how these internal messages developed and what they are trying to protect you from.",
		},
		{
			id: "t2",
			title: "Practice compassion and embodied presence",
			description:
				"Rather than fighting your relationship with your body, we focus on developing a kinder, more accepting way of relating to your physical self through mindfulness and embodied awareness.",
		},
		{
			id: "t3",
			title: "Rebuild a relationship with yourself based on kindness",
			description:
				"BDD often involves treating yourself in ways you would never treat someone you care about. We explore what it would feel like to relate to yourself with the same compassion you might offer a good friend.",
		},
		{
			id: "t4",
			title: "Challenge distorted beliefs while building self-acceptance",
			description:
				"We gently examine the beliefs that fuel BDD while simultaneously working to develop genuine self-acceptance that does not depend on physical perfection.",
		},
	],
};

const stepsConfig = {
	id: "what-to-expect",
	classNames: "",
	heading: "What to Expect in BDD Therapy",
	subheading: null,
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Initial sessions focus on understanding your unique experience",
			description:
				"We explore how BDD shows up in your life, what triggers appearance-related distress, and what beliefs about yourself and your worth drive these concerns.",
		},
		{
			id: "step-2",
			title:
				"Treatment emphasizes creating safety and gently challenging distorted beliefs",
			description:
				"You will learn tools for managing appearance-related anxiety while also exploring the deeper beliefs and experiences that contribute to your distorted self-image. We work at a pace that feels manageable and supportive.",
		},
		{
			id: "step-3",
			title: "Sessions focus on developing embodied self-acceptance",
			description:
				"Rather than trying to convince you that your perceptions are wrong, we work on developing a more compassionate and grounded relationship with your body and appearance.",
		},
	],
};

const shameConfig = {
	id: "shame",
	classNames: "blockTint",
	heading: "A Note on Shame and Acceptance",
	paragraphs: [
		"Throughout this process, we maintain careful attention to the shame that often accompanies BDD, ensuring that therapy itself becomes a space where you can practice being seen and accepted without judgment.",
		"Recovery from BDD is not about achieving perfect body image or never having concerns about your appearance. It is about developing a fundamentally kinder way of relating to yourself that does not depend on physical perfection or external validation.",
	],
	list: null,
	cta: null,
	image: null,
};

const whyCalmConfig = {
	id: "why-calm",
	classNames: "",
	heading: "Why Choose CALM Therapy for BDD",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "w1",
			title: "Compassionate self-relating over appearance management",
			description:
				"We do not work on changing your appearance or convincing you that your perceptions are inaccurate. Instead, we focus on developing a fundamentally different, more compassionate relationship with yourself and your body.",
		},
		{
			id: "w2",
			title: "Mindfulness and embodied awareness",
			description:
				"We incorporate practices that help you connect with your body from the inside out, developing awareness of how your body feels rather than focusing primarily on how it looks.",
		},
		{
			id: "w3",
			title: "Attention to underlying shame and self-worth",
			description:
				"BDD often reflects deeper struggles with worth and acceptability. We address these core issues rather than just focusing on appearance-related behaviors, creating more comprehensive and lasting healing.",
		},
		{
			id: "w4",
			title: "Flexible private-pay model",
			description:
				"Our fee-for-service structure enables us to tailor treatment based on what you actually need, spending the time necessary for your unique situation and adjusting our methods as your relationship with yourself evolves.",
		},
	],
};

const ctaBannerConfig = {
	heading: "Ready to Explore a Kinder Relationship With Yourself?",
	subheading:
		"Reach out to schedule a consultation and explore how therapy might help you develop a more compassionate relationship with yourself.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		variant: "primary",
		external: true,
	},
	secondaryCta: null,
};
function BDD() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<AudienceSection audienceConfig={experiencesConfig} />
			<FeatureGrid featureGridConfig={therapyConfig} />
			<Steps stepsConfig={stepsConfig} />
			<TwoColumn twoColumnConfig={shameConfig} />
			<FeatureGrid featureGridConfig={whyCalmConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default BDD;
