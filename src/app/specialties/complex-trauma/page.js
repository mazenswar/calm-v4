import AudienceSection from "@/app/components/sections/audienceSection/AudienceSection";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import FeatureGrid from "@/app/components/sections/featureGrid/FeatureGrid";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import SplitList from "@/app/components/sections/splitList/SplitList";
import Steps from "@/app/components/sections/steps/Steps";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import React from "react";
import { generateMeta } from "../../../../config/metadata";
// META --------------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Complex Trauma Therapy",
	description:
		"Therapy for complex trauma that pairs grounding skills with deeper work to rebuild safety, clarity, and self-compassion. Virtual sessions for adults nationwide.",
	path: "/specialties/complex-trauma",
});

// CONFIG -------------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Complex Trauma",
	subheading:
		"Helping adults address the lasting impact of earlier relational wounds.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Complex Trauma",
	paragraphs: [
		"Complex trauma often develops during childhood or in long-term relationships where escape or protection felt impossible. It is less about a single traumatic event and more about repeated experiences of neglect, emotional harm, or violation of trust that shape the nervous system and sense of self over time.",
		"What makes complex trauma distinct is not just what happened, but what it taught you about yourself and the world. When the people or environments that were supposed to be safe were instead unpredictable, harmful, or absent, the nervous system learned to adapt. Those adaptations made sense then. They kept you functioning. But they often persist long after the original circumstances have changed, showing up as anxiety, hypervigilance, relational difficulty, or a quiet but persistent sense that something is wrong with you at the core.",
		"Many people who carry complex trauma do not recognize it as trauma at all. They may have been told that what happened was not that bad, or that others had it worse. They may have spent years managing symptoms without ever understanding where those symptoms came from.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/flower-seedling.webp",
		alt: "Close-up of a fresh seedling growing from rich brown soil, symbolizing new beginnings.",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What This Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Memories or feelings that surface as if they are happening now, or sudden emotional responses that seem out of proportion to the moment",
		},
		{
			id: "e2",
			text: "A persistent sense that something is fundamentally wrong with you",
		},
		{
			id: "e3",
			text: "Chronic anxiety or hypervigilance, always scanning for what might go wrong",
		},
		{
			id: "e4",
			text: "A history of emotional neglect, boundary violations, or feeling unseen or unheard by caregivers or partners",
		},
		{
			id: "e5",
			text: "Perfectionism or the need to stay in control to feel safe",
		},
		{
			id: "e6",
			text: "Inner conflict or harsh self-criticism that keeps you feeling tense even when life looks outwardly successful",
		},
		{
			id: "e7",
			text: "Difficulty relaxing into your body or trusting closeness with others",
		},
	],
	cta: null,
};
const approachConfig = {
	id: "approach",
	classNames: "blockTint",
	heading: "A Personalized Approach to Healing",
	subheading:
		"We tailor therapy to each person's needs rather than follow a fixed sequence. Our work begins with what you bring and grows at a pace that feels safe.",
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Meeting You Where You Are",
			description:
				"We tailor therapy to each person's needs rather than follow a fixed sequence. Our work begins with what you bring into the room and grows at a pace that feels safe.",
		},
		{
			id: "step-2",
			title: "Building a Foundation of Stability",
			description:
				"Early sessions often focus on developing tools for managing anxiety and everyday stress. We introduce grounding skills, nervous-system regulation, and mindfulness practices that can be applied right away.",
		},
		{
			id: "step-3",
			title: "Exploring Deeper Patterns",
			description:
				"Once a sense of steadiness is in place, we gradually turn toward the roots of distress. Clients often learn new language for inner parts or protective responses and practice staying regulated as they explore these experiences.",
		},
		{
			id: "step-4",
			title: "Integrating Modalities Thoughtfully",
			description:
				"We draw on somatic awareness, nervous-system regulation, mindfulness, and parts-informed work to address patterns that interfere with growth. When appropriate, we may also integrate Ketamine-Assisted Psychotherapy (KAP) as an adjunct to support insight and healing.",
		},
		{
			id: "step-5",
			title: "Working Across Levels of Experience",
			description:
				"Our approach weaves together cognitive, behavioral, emotional, and somatic processes. Throughout, we emphasize practicing self-regulation and cultivating self-compassion so that changes made in therapy translate into daily life.",
		},
	],
};
const whyCalmConfig = {
	id: "why-calm",
	classNames: "",
	heading: "Why Choose CALM Therapy for Complex Trauma",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "wc1",
			title: "Trauma-informed and body-aware",
			description:
				"Our approach recognizes that unresolved stress often lives in both mind and body. We integrate somatic awareness, nervous-system regulation, mindfulness, and parts-informed exploration.",
		},
		{
			id: "wc2",
			title: "Integration of modalities",
			description:
				"Somatic awareness, nervous-system regulation, mindfulness, and parts-informed exploration are thoughtfully combined. We may include KAP when appropriate to support insight and healing.",
		},
		{
			id: "wc3",
			title: "Inner safety and self-trust",
			description:
				"We emphasize building the inner safety, self-trust, and resources that make deeper work possible and sustainable.",
		},
		{
			id: "wc4",
			title: "Flexible private-pay model",
			description:
				"Our private-pay model allows treatment flexibility so sessions can be tailored to your needs rather than limited by insurance requirements.",
		},
		{
			id: "wc5",
			title: "Respect for pace and readiness",
			description:
				"We respect each person's pace and readiness, attending to both present-day coping and the deeper roots of anxiety.",
		},
	],
};

const splitListConfig = {
	id: "fit",
	classNames: "blockTint",
	heading: "Who This Approach Is Best Suited For",
	subheading: null,
	columns: [
		{
			id: "col-positive",
			title: "A Good Fit",
			variant: "positive",
			items: [
				"Adults who are generally emotionally stable and functioning in daily life",
				"Those who notice that anxiety, self-criticism, or relational strain may be rooted in earlier experiences",
				"People who want to go beyond symptom management to understand and transform deeper patterns",
			],
			note: null,
			noteLink: null,
		},
		{
			id: "col-neutral",
			title: "Outside Our Current Scope",
			variant: "neutral",
			items: [
				"Individuals in active suicidal crisis",
				"Anyone experiencing untreated psychosis or significant uncontrolled dissociation",
				"Clients who require the level of structure and monitoring available in inpatient or intensive programs",
			],
			note: "If you are in crisis, please reach out to the 988 Suicide and Crisis Lifeline by calling or texting",
			noteLink: {
				text: "988",
				href: "tel:988",
			},
		},
	],
};

const ctaBannerConfig = {
	heading: "Healing From Complex Trauma Is Possible",
	// classNames: "blockTint",
	subheading:
		"Change begins with the safety of a consistent, collaborative relationship. If you feel ready to address the patterns that keep you anxious or self-critical, reach out to explore whether this work feels like a good fit.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};
function ComplexTrauma() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<AudienceSection audienceConfig={experiencesConfig} />
			<Steps stepsConfig={approachConfig} />
			<FeatureGrid featureGridConfig={whyCalmConfig} />
			<SplitList splitListConfig={splitListConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default ComplexTrauma;
