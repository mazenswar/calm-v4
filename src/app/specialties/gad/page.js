// specialties/gad.js
import AudienceSection from "@/app/components/sections/audienceSection/AudienceSection";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import FeatureGrid from "@/app/components/sections/featureGrid/FeatureGrid";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import Steps from "@/app/components/sections/steps/Steps";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import React from "react";
import { generateMeta } from "../../../../config/metadata";
// META -----------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Generalized Anxiety Disorder (GAD) Therapy",
	description:
		"Therapy for Generalized Anxiety Disorder that addresses constant worry and hypervigilance, helping you rebuild trust in your ability to handle uncertainty.",
	path: "/specialties/gad",
});

// CONFIG ----------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Generalized Anxiety Disorder (GAD)",
	subheading:
		"When worry feels constant and overwhelming, therapy can help untangle the patterns and reconnect you with steadiness.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Generalized Anxiety Disorder",
	paragraphs: [
		"Generalized Anxiety Disorder is characterized by persistent, excessive worry about various aspects of daily life that feels difficult to control. Unlike anxiety that arises in response to specific situations, GAD involves ongoing concern about work, health, family, finances, or future events that often feels disproportionate to actual circumstances.",
		"What makes GAD particularly exhausting is how worry can feel like mental noise that never stops. Your mind may jump from one concern to another, creating scenarios that feel urgent but rarely have clear solutions. This constant mental activity can leave you feeling physically tense, emotionally drained, and disconnected from present-moment experience.",
		"Many people with GAD describe feeling like they are always on, unable to relax or trust that things will be okay. The worry often feels protective, as if staying vigilant can prevent bad things from happening, yet this hypervigilance rarely brings the security it promises.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/gad.webp",
		alt: "grey cloudy sky",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What GAD Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Persistent worry that feels hard to control or turn off",
		},
		{
			id: "e2",
			text: "Restlessness, tension, or difficulty relaxing your body",
		},
		{
			id: "e3",
			text: "Feeling like your mind never stops racing from one concern to another",
		},
		{
			id: "e4",
			text: "Physical symptoms like muscle tension, headaches, or digestive issues",
		},
		{
			id: "e5",
			text: "Fatigue from the constant mental activity and vigilance",
		},
		{
			id: "e6",
			text: "Difficulty concentrating because worry interrupts your focus",
		},
		{ id: "e7", text: "Irritability or feeling on edge much of the time" },
		{ id: "e8", text: "Sleep problems from an overactive mind" },
	],
	cta: null,
};

const therapyConfig = {
	id: "therapy",
	classNames: "blockTint",
	heading: "How Therapy Helps with GAD",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "t1",
			title: "Explore the underlying patterns that fuel ongoing anxiety",
			description:
				"We help you understand how worry functions in your life, what triggers it, and what beliefs or experiences might be driving the need for constant vigilance.",
		},
		{
			id: "t2",
			title: "Reduce reactivity and calm the nervous system",
			description:
				"Using mindfulness-based approaches and somatic awareness, we help you develop tools for interrupting the worry cycle and returning to present-moment groundedness.",
		},
		{
			id: "t3",
			title: "Rebuild trust in your ability to handle uncertainty",
			description:
				"GAD often involves a fundamental lack of trust in your capacity to cope with uncertainty or challenges. We work to strengthen your confidence in your own resilience.",
		},
		{
			id: "t4",
			title: "Address the mental patterns that maintain anxiety",
			description:
				"Through approaches like CBT and IFS, we explore the thoughts, beliefs, and internal dynamics that keep anxiety alive, including catastrophic thinking and protective parts that believe worry keeps you safe.",
		},
	],
};

const stepsConfig = {
	id: "what-to-expect",
	classNames: "",
	heading: "What to Expect in GAD Therapy",
	subheading: null,
	cta: false,
	steps: [
		{
			id: "step-1",
			title:
				"Initial sessions focus on understanding your unique anxiety patterns",
			description:
				"We explore what triggers your worry, how anxiety shows up in your body and mind, and what approaches you have tried before. This assessment helps us design a treatment plan that addresses your specific presentation of GAD.",
		},
		{
			id: "step-2",
			title: "Early treatment emphasizes building tools for calm and presence",
			description:
				"You will learn practical skills for managing anxiety in the moment, including grounding techniques, breathing practices, and ways to interrupt worry spirals. These tools provide a foundation for deeper exploration.",
		},
		{
			id: "step-3",
			title: "Over time, we explore deeper roots of anxiety",
			description:
				"As you develop more capacity for self-regulation, we examine what drives your need for constant vigilance and practice trusting your ability to handle whatever life brings. This deeper work helps create lasting change rather than just symptom management.",
		},
		{
			id: "step-4",
			title: "Throughout the process, relief and healing work together",
			description:
				"We maintain attention to both immediate relief and long-term healing, ensuring you have practical tools while addressing the underlying patterns that maintain anxiety.",
		},
	],
};

const whyCalmConfig = {
	id: "why-calm",
	classNames: "blockTint",
	heading: "Why Choose CALM Therapy for GAD",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "w1",
			title: "Integrative approach that builds inner steadiness",
			description:
				"We draw from mindfulness-based approaches, CBT, IFS, and somatic awareness to address anxiety from multiple angles, helping you develop genuine steadiness rather than just coping strategies.",
		},
		{
			id: "w2",
			title: "Focus on underlying patterns, not just symptoms",
			description:
				"While we provide tools for immediate relief, our primary focus is understanding and shifting the deeper patterns that maintain anxiety, including beliefs about safety, control, and your capacity to handle life.",
		},
		{
			id: "w3",
			title: "Reconnecting with grounded presence",
			description:
				"GAD often involves disconnection from your body and present-moment experience. We help you develop skills for staying grounded in your physical experience rather than being pulled into future worries.",
		},
		{
			id: "w4",
			title: "Flexible private-pay model",
			description:
				"Our fee-for-service structure enables us to tailor treatment based on what you actually need, spending the time necessary for your unique situation and adjusting our methods as your needs change.",
		},
	],
};

const ctaBannerConfig = {
	heading: "Ready to Reconnect With Steadiness?",
	subheading:
		"Recovery from GAD is not about eliminating all worry but about developing a different relationship with uncertainty and your own capacity to handle whatever life brings. Reach out to schedule a consultation.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		variant: "primary",
		external: true,
	},
	secondaryCta: null,
};
function GAD() {
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

export default GAD;
