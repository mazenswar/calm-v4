import AudienceSection from "@/app/components/sections/audienceSection/AudienceSection";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import React from "react";
import { generateMeta } from "../../../../config/metadata";
// META ---------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Therapy for Spiritual & Transformative Experiences",
	description:
		"Support for integrating profound, disorienting, or spiritually significant experiences without pathologizing what is meaningful to you.",
	path: "/specialties/spiritual-transformative-experiences",
});

// CONFIG -------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Spiritual & Transformative Experiences",
	subheading: "You're not crazy, and you're not alone.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	heading: "Experiences That Change Everything",
	classNames: "blockTint",
	paragraphs: [
		"Sometimes people go through experiences that fundamentally change how they understand themselves, the world, or reality itself. These experiences can be profound, beautiful, confusing, frightening, or all of those things at once. They may leave you feeling deeply connected, deeply unsettled, or unsure how to make sense of what happened.",
		"These experiences happen across cultures, spiritual traditions, and stages of life, and are more common than many people realize.",
		"For many people, the most difficult part is not the experience itself. It is feeling like there is nowhere to bring it. You may worry that others will dismiss what happened, misunderstand it, or assume something is wrong with you. At the same time, the experience may have felt undeniably real and meaningful, even if it cannot be fully explained in words.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/soft-light-forest.webp",
		alt: "Soft light filtering through a misty forest",
		width: 600,
		height: 750,
	},
	imagePosition: "right",
};

const signsConfig = {
	id: "signs",
	heading: "What This Might Look Like",
	body: null,
	variant: "card",
	items: [
		{ id: "s1", text: "Spiritual awakenings" },
		{ id: "s2", text: "Near-death experiences (NDEs)" },
		{ id: "s3", text: "Mystical or transcendent experiences" },
		{ id: "s4", text: "Experiences of profound interconnectedness or unity" },
		{ id: "s5", text: "Sudden shifts in identity, purpose, or worldview" },
		{
			id: "s6",
			text: "Existential crises or questions about meaning and reality",
		},
		{
			id: "s7",
			text: "Unusual experiences that feel difficult to discuss with others",
		},
		{
			id: "s8",
			text: "Trying to make sense of an experience that changed how you see yourself or the world",
		},
	],
	cta: null,
};

const approachConfig = {
	id: "approach",
	heading: "How We Approach This Work",
	classNames: "blockTint",
	paragraphs: [
		"Our goal is to create space for the experience to be explored thoughtfully, on its own terms, without rushing toward conclusions.",
		"These experiences often exist at the edge of language. They can be difficult to describe and even more difficult to integrate into everyday life. It is common to feel caught between worlds, no longer fully identifying with old ways of understanding yourself while not yet knowing what comes next.",
		"Together, we create space to explore what happened, what it means to you, and how it is affecting your life. We approach these experiences with both curiosity and grounding, recognizing that profound experiences can be understood through spiritual, religious, cultural, existential, psychological, or personal frameworks.",
	],
	list: [
		"Not every experience can be fully explained or understood",
		"The task is integration, not explanation",
		"We help you build a relationship with the experience that feels coherent, meaningful, and supportive of your growth",
	],
	cta: {
		text: "When Reality Expands: Read Tanya's Essay",
		href: "https://calmtherapy.center/blog/when-reality-expands-spiritual-experiences-and-the-work-of-integration",
		variant: "secondary",
		external: true,
	},
	image: null,
};

const fitConfig = {
	id: "fit",
	heading: "Who This Is a Good Fit For",
	body: null,
	variant: "split",
	items: [
		{
			id: "f1",
			text: "Individuals who have had a spiritual, mystical, or transformative experience they are struggling to understand",
		},
		{
			id: "f2",
			text: "People navigating a spiritual awakening or significant shift in worldview",
		},
		{
			id: "f3",
			text: "Those exploring questions of meaning, purpose, identity, or consciousness",
		},
		{
			id: "f4",
			text: "Individuals integrating a near-death experience or other profound life event",
		},
		{
			id: "f5",
			text: "Anyone looking for a space to explore experiences that feel difficult to discuss elsewhere",
		},
	],
	cta: null,
};

const ctaBannerConfig = {
	heading: "You Do Not Have to Navigate This Alone",
	classNames: "blockTint",
	subheading:
		"Spiritual and transformative experiences can be deeply meaningful, but they can also be disorienting. If you are looking for a thoughtful and grounded space to explore what has happened, reach out to schedule a consultation.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};

function SpiritualTransformative() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<AudienceSection audienceConfig={signsConfig} />
			<TwoColumn twoColumnConfig={approachConfig} />
			<AudienceSection audienceConfig={fitConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default SpiritualTransformative;
