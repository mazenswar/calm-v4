import AudienceSection from "@/app/components/sections/audienceSection/AudienceSection";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import React from "react";
import { generateMeta } from "../../../../config/metadata";

// META ---------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Treatment-Resistant Conditions",
	description:
		"When previous treatment has not helped enough, we look deeper and try a different path forward. Therapy for treatment-resistant anxiety, OCD, and depression.",
	path: "/specialties/treatment-resistant",
});
// CONFIG --------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Treatment-Resistant Conditions",
	subheading: "When You've Tried It All and Still Feel Stuck",
	// image: {
	// 	src: "/images/flower-crack-1.webp",
	// 	width: 400,
	// 	height: 400,
	// 	alt: "flower growing through concrete crack",
	// },
	image: null,
	align: "left",
};
// two column Intro
const introConfig = {
	id: "intro",
	heading: "You've Done the Work. Something Still Feels Missing.",
	classNames: "blockTint",
	paragraphs: [
		"Many people come to therapy feeling discouraged. They have tried multiple therapists, read the books, learned the skills, taken medication, practiced mindfulness, and worked hard to understand themselves, yet still find themselves struggling with the same patterns. They may have experienced some relief, but the relief often does not last. Over time, it can begin to feel like nothing will ever fully change.",
		"When this happens, it does not necessarily mean that treatment has failed or that something is wrong with you. Often, it means there is more of the story that needs to be understood.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/flower-crack-1.webp",
		width: 400,
		height: 400,
		alt: "flower growing through concrete crack",
	},
};
// audience
const signsConfig = {
	id: "signs",
	heading: "What This Might Look Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "s1",
			text: "Anxiety or depression that has been present for most of your life, not just a difficult season",
		},
		{
			id: "s2",
			text: "A history of therapy that helped somewhat but never fully resolved what you came in for",
		},
		{
			id: "s3",
			text: "Feeling like you understand your patterns intellectually but cannot seem to shift them",
		},
		{
			id: "s4",
			text: "Partial responses to medication, with symptoms that persist or return",
		},
		{
			id: "s5",
			text: "A sense that previous treatment focused on symptoms without addressing the deeper roots",
		},
		{ id: "s6", text: "Exhaustion from years of managing rather than healing" },
	],
	cta: null,
};
// two column - how we approach
const approachConfig = {
	id: "approach",
	heading: "How We Approach This Work",
	classNames: "blockTint",
	paragraphs: [
		"When someone has not found lasting relief, the question worth asking is not what is wrong with you, but what has not yet been understood about your experience.",
		"This work begins with taking a wider view. That means looking not only at symptoms, but at the relationships, environments, life experiences, cultural influences, and circumstances that have shaped how you learned to cope. For some people, this includes experiences of immigration, marginalization, discrimination, or chronic stress that were never fully considered as part of treatment.",
		"Many people arrive here after years of trying to get rid of symptoms without fully understanding the role those symptoms have played. Anxiety, depression, avoidance, perfectionism, or emotional numbing often develop for reasons. They may no longer be serving you, but they usually make sense in the context of your experience. Understanding that context can create new possibilities for change.",
		"Treatment is integrative and individualized, drawing from IFS-informed, somatic, cognitive, and metacognitive approaches, adapted to what you specifically need rather than what a protocol prescribes.",
	],
	list: null,
	cta: null,
	image: null,
};
// two column - kap
const kapConfig = {
	id: "kap",
	heading: "Ketamine-Assisted Psychotherapy",
	paragraphs: [
		"For some individuals, Ketamine-Assisted Psychotherapy (KAP) may also be a helpful part of treatment. KAP can create opportunities to access experiences, perspectives, and emotional states that may be difficult to reach through talking alone.",
		"When appropriate, it can serve as a powerful complement to ongoing therapy and support deeper therapeutic work.",
	],
	list: null,
	cta: {
		text: "Learn more about KAP",
		href: "/kap",
		variant: "secondary",
	},
	image: {
		src: "/images/sunshine-through-water.webp",
		width: 400,
		height: 400,
		alt: "illustration of brain person entering doorway that is projecting light",
	},
};

// audience section - who this is a good fit for
const fitConfig = {
	id: "fit",
	heading: "Who This Is a Good Fit For",
	classNames: "blockTint",
	body: null,
	variant: "split",
	items: [
		{
			id: "f1",
			text: "Adults with chronic or recurring anxiety or depression who have not found lasting relief",
		},
		{
			id: "f2",
			text: "Those who have engaged seriously with therapy before and are ready to go deeper",
		},
		{
			id: "f3",
			text: "People whose cultural, systemic, or generational context has not been meaningfully explored as part of treatment",
		},
		{
			id: "f4",
			text: "Anyone who suspects there is something important that previous treatment may have missed",
		},
	],
	cta: null,
};
// cta
const ctaBannerConfig = {
	heading: "If You've Worked Hard and Still Feel Stuck",
	subheading:
		"That is worth taking seriously. Reach out for a consultation to explore whether this approach might offer something different.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};
function TreatmentResistant() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<AudienceSection audienceConfig={signsConfig} />
			<TwoColumn twoColumnConfig={approachConfig} />
			<TwoColumn twoColumnConfig={kapConfig} />
			<AudienceSection audienceConfig={fitConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}

export default TreatmentResistant;
