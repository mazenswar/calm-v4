import AudienceSection from "@/app/components/sections/audienceSection/AudienceSection";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import FeatureGrid from "@/app/components/sections/featureGrid/FeatureGrid";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import React from "react";
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Gifted Adults",
	subheading: "When you've always felt different but never quite known why.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "More Than Exceptional Intelligence",
	paragraphs: [
		"Most people think of giftedness as being exceptionally smart, the kid who skipped grades or won academic competitions. But giftedness is much broader than that, and for many adults, it goes unrecognized for most of their lives.",
		"Giftedness is a form of neurodivergence. It means your nervous system processes the world with greater intensity, depth, and sensitivity than most. It is not just about cognitive ability. It can show up as emotional depth that feels overwhelming to others, a relentless need to understand things at a fundamental level, an inner life that is extraordinarily rich and sometimes exhausting, or a sensitivity to beauty, injustice, or human suffering that others seem not to feel as acutely.",
		"Many gifted adults spent their childhoods being told they were too much, too sensitive, too intense, or too serious. Some were high achievers who still felt like something was missing. Many spent years feeling like something was fundamentally wrong with them, suppressing their curiosity, their quirks, their intensity, and their intelligence without ever understanding why they experienced the world so differently.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/refraction.webp",
		alt: "Close-up of a water droplet showcasing vibrant rainbow refraction.",
		width: 600,
		height: 750,
	},
	imagePosition: "right",
};
const domainsConfig = {
	id: "domains",
	classNames: "",
	heading: "Giftedness Can Look Like Many Things",
	subheading:
		"It can show up across different domains, sometimes one, sometimes several at once.",
	variant: "accent",
	cta: null,
	features: [
		{
			id: "f1",
			title: "Intellectual",
			description:
				"A mind that moves quickly, makes unusual connections, and needs depth and complexity to feel engaged.",
		},
		{
			id: "f2",
			title: "Emotional",
			description:
				"Feeling everything more intensely than others seem to, deep empathy, and difficulty in environments that feel misattuned.",
		},
		{
			id: "f3",
			title: "Creative",
			description:
				"An orientation toward expression, originality, and making meaning through art, ideas, or imagination.",
		},
		{
			id: "f4",
			title: "Existential",
			description:
				"Preoccupation with questions of meaning, mortality, justice, and the nature of reality, often from a young age.",
		},
		{
			id: "f5",
			title: "Sensory",
			description:
				"Heightened sensitivity to sound, light, texture, or physical environment.",
		},
		{
			id: "f6",
			title: "Spiritual",
			description:
				"A deep attunement to dimensions of experience that go beyond the material and a sense of connection to something larger.",
		},
	],
};
const unrecognizedConfig = {
	id: "unrecognized",
	classNames: "blockTint",
	heading: "When Giftedness Goes Unrecognized",
	paragraphs: [
		"For many gifted adults, the challenge is not giftedness itself. The challenge is spending years without a framework for understanding it.",
		"Without that understanding, it is easy to assume that your intensity is a problem, that your sensitivity is a weakness, or that your desire for depth means you are asking for too much. Many people spend years trying to adapt to environments, relationships, or careers that look successful from the outside but leave them feeling chronically understimulated, disconnected, or exhausted.",
		"Giftedness can also coexist with ADHD, complex trauma, anxiety, and other forms of neurodivergence, sometimes masking them and sometimes being masked by them. This is often referred to as twice-exceptionality, and it can make both the giftedness and the accompanying challenges harder to identify and understand.",
	],
	list: null,
	cta: {
		text: "Learn about Complex Trauma",
		href: "/specialties/complex-trauma",
		variant: "secondary",
	},
	image: null,
};
const relateConfig = {
	id: "relate",
	heading: "You Might Relate to This If...",
	body: null,
	variant: "typographic",
	items: [
		{
			id: "r1",
			text: "You have always felt different but struggled to explain exactly how or why",
		},
		{
			id: "r2",
			text: "You were told you were smart but never felt like that captured something essential about you",
		},
		{
			id: "r3",
			text: "You feel things more deeply than most people around you seem to",
		},
		{
			id: "r4",
			text: "You need depth, meaning, and stimulation in your work and relationships to feel okay",
		},
		{
			id: "r5",
			text: "You have a lifelong need to understand things at a deeper level",
		},
		{
			id: "r6",
			text: "You feel out of sync with the people or environments around you",
		},
		{
			id: "r7",
			text: "You have been described as too much, too sensitive, or too intense",
		},
		{
			id: "r8",
			text: "You have spent much of your life searching for depth, meaning, or understanding",
		},
		{
			id: "r9",
			text: "You often feel unseen, even when others recognize your abilities",
		},
		{
			id: "r10",
			text: "You suspect there is more going on than anxiety or depression alone",
		},
		{
			id: "r11",
			text: "You discovered later in life that you might be neurodivergent and are still making sense of what that means",
		},
	],
	cta: null,
};
const approachConfig = {
	id: "approach",
	classNames: "blockTint",
	heading: "How This Work Approaches Giftedness",
	paragraphs: [
		"Recognizing giftedness is not about applying a flattering label. It is about finally having an accurate map of your own experience.",
		"When giftedness is understood and taken seriously in therapy, it changes what we look for, how we make sense of your history, and what kind of support actually helps. The goal is not to fix what is different about you, but to help you build a life and relationships where those differences are understood, respected, and supported, so that you can thrive rather than simply manage.",
	],
	list: null,
	cta: null,
	image: null,
};
const ctaBannerConfig = {
	heading: "That Recognition Is Worth Exploring",
	subheading:
		"If any of this feels familiar, even if you are not sure giftedness is the right word for it, reach out to schedule a consultation.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};
function GiftedAdults() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<FeatureGrid featureGridConfig={domainsConfig} />
			<TwoColumn twoColumnConfig={unrecognizedConfig} />
			<AudienceSection audienceConfig={relateConfig} />
			<TwoColumn twoColumnConfig={approachConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default GiftedAdults;
