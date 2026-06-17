// /specialties/ocd.js
import PageHero from "../../components/sections/pageHero/PageHero";
import TwoColumn from "../../components/sections/twoColumn/TwoColumn";
import AudienceSection from "../../components/sections/audienceSection/AudienceSection";
import FeatureGrid from "../../components/sections/featureGrid/FeatureGrid";
import Steps from "../../components/sections/steps/Steps";
import CTABanner from "../../components/sections/ctaBanner/CTABanner";
import ResourceGrid from "../../components/sections/resourceGrid/ResourceGrid";
import { generateMeta } from "../../../../config/metadata";
// META ---------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Trauma-Informed OCD Therapy",
	description:
		"Evidence-based, trauma-informed OCD treatment combining ERP, I-CBT, and ACT with nervous system awareness and careful pacing for sustainable change.",
	path: "/specialties/ocd",
});
// CONFIG -------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Trauma-Informed Treatment for OCD",
	subheading:
		"Evidence-based OCD therapy that integrates nervous system awareness, pacing, and readiness for change.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Obsessive-Compulsive Disorder",
	paragraphs: [
		"At CALM Therapy, we offer specialized therapy for OCD that integrates gold-standard approaches such as Exposure and Response Prevention (ERP), Inference-based Cognitive Behavioral Therapy (I-CBT), and Acceptance and Commitment Therapy (ACT) within a trauma-informed framework. Treatment is tailored to the individual, recognizing that readiness, timing, and nervous system regulation play a critical role in sustainable change.",
		"Obsessive-Compulsive Disorder creates patterns of intrusive thoughts (obsessions) followed by repetitive behaviors or mental rituals (compulsions) aimed at reducing distress. The cycle remains consistent: doubt arises, anxiety builds, and compulsions provide temporary relief only for the cycle to begin again.",
		"What makes OCD particularly challenging is how it hijacks your natural problem-solving abilities, turning them against you through endless what-if questions that feel impossible to resolve. Many people describe feeling like they are living in a prison of their own making, knowing their fears do not make logical sense yet feeling unable to break free from compulsive responses.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/ocd.webp",
		alt: "Close-up of eroded sandstone in a desert showing unique textures and warm tones.",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What OCD Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Intrusive thoughts that feel hard to ignore or dismiss",
		},
		{
			id: "e2",
			text: "Compulsions or rituals meant to relieve doubt or prevent harm",
		},
		{
			id: "e3",
			text: "Feeling stuck in endless cycles of reassurance-seeking",
		},
		{
			id: "e4",
			text: "Uncertainty that feels unbearable, leading to checking or researching behaviors",
		},
		{
			id: "e5",
			text: "Mental exhaustion from constantly battling your own thoughts",
		},
		{
			id: "e6",
			text: "Shame about behaviors that feel irrational but necessary",
		},
		{
			id: "e7",
			text: "Avoidance of triggers that might spark obsessive thoughts",
		},
	],
	cta: null,
};

const traumaConfig = {
	id: "trauma",
	classNames: "blockTint",
	heading: "OCD and Trauma: Understanding the Connection",
	paragraphs: [
		"Trauma does not cause OCD. However, trauma, chronic stress, medical experiences, or long-term emotional overwhelm can influence how OCD develops or intensifies.",
		"For some individuals, experiences of unpredictability or unsafety increase sensitivity to uncertainty. Obsessions and compulsions may function as attempts to regain control, prevent harm, or manage distress. While these strategies may have once been protective, they can become rigid and self-reinforcing over time.",
		"A trauma-informed understanding of OCD views symptoms as learned adaptations rather than personal failures, and treatment focuses on expanding tolerance for uncertainty and discomfort without relying on compulsive behaviors.",
	],
	list: null,
	cta: null,
	image: null,
};

const traumaInformedConfig = {
	id: "trauma-informed",
	classNames: "",
	heading: "What Is Trauma-Informed OCD Treatment?",
	paragraphs: [
		"Trauma-informed OCD treatment recognizes that exposure-based work is most effective when the nervous system has enough capacity to learn from it.",
		"Exposure and Response Prevention (ERP) remains a core treatment for OCD. However, when a person is operating in a constant state of survival, moving too quickly into exposure can increase overwhelm rather than reduce symptoms.",
		"The goal is not to avoid ERP, but to introduce it at the right time and in a way that supports long-term recovery.",
	],
	list: [
		"Assessing readiness for ERP",
		"Pacing treatment appropriately",
		"Reducing shame around symptoms",
		"Supporting nervous system regulation alongside behavioral change",
		"Meeting clients where they are rather than forcing progress",
	],
	cta: null,
	image: null,
};

const treatmentConfig = {
	id: "treatment",
	classNames: "blockTint",
	heading: "How Trauma-Informed OCD Therapy Helps",
	subheading:
		"Treatment at CALM may include a combination of the following approaches.",
	variant: "accent",
	cta: null,
	features: [
		{
			id: "t1",
			title: "Exposure and Response Prevention (ERP)",
			description:
				"ERP is introduced thoughtfully and collaboratively. In some cases, treatment begins with response prevention and brief periods of non-intervention before formal exposure exercises are added.",
		},
		{
			id: "t2",
			title: "Inference-Based CBT (I-CBT)",
			description:
				"I-CBT focuses on how doubt is generated rather than challenging the content of thoughts directly. This approach can be especially helpful for OCD driven by imagined possibilities, reasoning loops, or chronic self-doubt.",
		},
		{
			id: "t3",
			title: "Acceptance and Commitment Therapy (ACT)",
			description:
				"ACT supports learning to relate differently to intrusive thoughts and sensations, reduce struggle with internal experiences, and move toward values-based action even in the presence of anxiety.",
		},
		{
			id: "t4",
			title: "Somatic and Nervous System Awareness",
			description:
				"Clients learn to notice bodily sensations, urges, and emotional shifts without immediately trying to fix or eliminate them. This helps restore flexibility, reduce hypervigilance, and increase tolerance for uncertainty.",
		},
	],
};

const stepsConfig = {
	id: "what-to-expect",
	classNames: "",
	heading: "What to Expect in OCD Therapy",
	subheading:
		"Throughout treatment, the process is collaborative, transparent, and responsive to your needs.",
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Early sessions",
			description:
				"Treatment begins with a careful assessment of symptoms, history, and current stressors. Early work often focuses on identifying compulsions, slowing patterns of urgency, and practicing brief moments of non-intervention.",
		},
		{
			id: "step-2",
			title: "Ongoing treatment",
			description:
				"As capacity increases, therapy may include structured ERP, cognitive work, and values-based practice. Exposure exercises are individualized and paced to support learning rather than overwhelm.",
		},
		{
			id: "step-3",
			title: "Later sessions",
			description:
				"Later stages of therapy focus on generalization, relapse prevention, and strengthening confidence in handling uncertainty without returning to compulsive behaviors.",
		},
	],
};

const whyCalmConfig = {
	id: "why-calm",
	classNames: "blockTint",
	heading: "Why Choose CALM Therapy for OCD Treatment",
	subheading:
		"This approach is especially helpful for individuals who feel that previous treatment moved too fast, focused only on symptoms, or overlooked the role of stress and trauma.",
	variant: "accent",
	cta: null,
	features: [
		{
			id: "w1",
			title: "Evidence-based and trauma-informed",
			description:
				"We combine the strongest evidence-based treatments for OCD with a framework that recognizes how stress, trauma, and nervous system capacity shape the course of treatment.",
		},
		{
			id: "w2",
			title: "Individually tailored, not protocol-driven",
			description:
				"Treatment is built around your specific presentation, history, and readiness rather than a fixed sequence of steps that assumes everyone with OCD is in the same place.",
		},
		{
			id: "w3",
			title: "Attuned to nervous system capacity and pacing",
			description:
				"We assess where you are before introducing exposure work, ensuring that the pace of treatment supports learning and recovery rather than adding to overwhelm.",
		},
		{
			id: "w4",
			title: "Designed for complex or long-standing OCD",
			description:
				"Our approach is especially well-suited for people with chronic OCD, co-occurring trauma or anxiety, or a history of treatment that did not fully address the underlying patterns.",
		},
	],
};

const resourcesConfig = {
	id: "resources",
	classNames: "",
	heading: "Additional OCD Resources",
	subheading:
		"These resources are for educational purposes and are not substitutes for professional treatment.",
	resources: [
		{
			id: "r1",
			title: "International OCD Foundation (IOCDF)",
			href: "https://iocdf.org/",
			description:
				"The largest organization dedicated to helping those affected by OCD and related disorders.",
			source: "iocdf.org",
		},
		{
			id: "r2",
			title: "National Institute of Mental Health (NIMH) - OCD",
			href: "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd",
			description:
				"Government resource with research-based information about OCD.",
			source: "nimh.nih.gov",
		},
		{
			id: "r3",
			title:
				"Living with Intrusive Thoughts: Why Control Does Not Work and What Actually Helps",
			href: "https://www.calmtherapy.center/blog/living-with-intrusive-thoughts-why-control-doesn-t-work-and-what-actually-helps",
			description:
				"CALM Therapy blog exploring why fighting intrusive thoughts backfires and offering alternative approaches.",
			source: "calmtherapy.center",
		},
		{
			id: "r4",
			title: "NOCD Free OCD Worksheets",
			href: "https://www.treatmyocd.com/what-is-ocd/info/ocd-stats-and-science/5-free-worksheets-for-people-struggling-with-ocd-developed-by-experts",
			description:
				"Expert-developed worksheets for self-reflection and support.",
			source: "treatmyocd.com",
		},
	],
};

const ctaBannerConfig = {
	heading: "A More Sustainable Path Forward",
	subheading:
		"If you are living with OCD, especially alongside trauma, chronic stress, or medical experiences, a trauma-informed approach may offer a more sustainable path forward. Reach out to learn more about whether this approach is right for you.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		variant: "primary",
		external: true,
	},
	secondaryCta: null,
};

export default function OCDPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<AudienceSection audienceConfig={experiencesConfig} />
			<TwoColumn twoColumnConfig={traumaConfig} />
			<TwoColumn twoColumnConfig={traumaInformedConfig} />
			<FeatureGrid featureGridConfig={treatmentConfig} />
			<Steps stepsConfig={stepsConfig} />
			<FeatureGrid featureGridConfig={whyCalmConfig} />
			<ResourceGrid resourceGridConfig={resourcesConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
