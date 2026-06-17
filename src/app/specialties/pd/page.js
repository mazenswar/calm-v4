// /specialties/pd.js
import PageHero from "../../components/sections/pageHero/PageHero";
import TwoColumn from "../../components/sections/twoColumn/TwoColumn";
import AudienceSection from "../../components/sections/audienceSection/AudienceSection";
import FeatureGrid from "../../components/sections/featureGrid/FeatureGrid";
import Steps from "../../components/sections/steps/Steps";
import CTABanner from "../../components/sections/ctaBanner/CTABanner";
import { generateMeta } from "../../../../config/metadata";
// META ----------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Panic Disorder Therapy",
	description:
		"Therapy for panic disorder that helps you change your relationship with panic sensations, build nervous system resilience, and reduce fear of future attacks.",
	path: "/specialties/pd",
});

// CONFIG ---------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Panic Disorder",
	subheading:
		"Panic attacks can feel overwhelming and unpredictable. Therapy offers tools to change how you respond to fear and physical sensations.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Panic Disorder",
	paragraphs: [
		"Panic Disorder is characterized by recurrent, unexpected panic attacks followed by persistent worry about having additional attacks or their consequences. A panic attack involves sudden onset of intense fear or discomfort that reaches peak intensity within minutes, often accompanied by physical symptoms that can feel life-threatening even when they are not.",
		"What makes panic disorder particularly distressing is how the fear of panic attacks can become as limiting as the attacks themselves. Many people begin avoiding places or situations where panic has occurred, leading to increasing restriction of daily activities. The unpredictable nature of panic attacks can create a constant sense of vulnerability and hypervigilance about bodily sensations.",
		"The cycle of panic often involves misinterpreting normal bodily sensations as dangerous, which triggers more intense physical responses, creating a feedback loop of escalating fear and symptoms. Breaking this cycle requires developing a fundamentally different relationship with the physiological sensations of panic.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/pd.webp",
		alt: "Capture of a powerful geyser eruption",
		width: 600,
		height: 750,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What Panic Disorder Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Sudden waves of intense fear, racing heart, or shortness of breath",
		},
		{
			id: "e2",
			text: "Fear of losing control, going crazy, or something terrible happening",
		},
		{
			id: "e3",
			text: "Avoiding places or situations where panic has happened before",
		},
		{
			id: "e4",
			text: "Constant monitoring of your body for signs of an impending attack",
		},
		{
			id: "e5",
			text: "Feeling like you cannot trust your own body or physical sensations",
		},
		{
			id: "e6",
			text: "Restrictions on daily activities due to fear of panic occurring",
		},
		{ id: "e7", text: "Shame or embarrassment about having panic attacks" },
		{
			id: "e8",
			text: "Exhaustion from being constantly on guard against panic",
		},
	],
	cta: null,
};

const therapyConfig = {
	id: "therapy",
	classNames: "blockTint",
	heading: "How Therapy Helps with Panic Disorder",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "t1",
			title: "Shift your relationship with panic sensations",
			description:
				"Rather than fighting or fearing the physical symptoms of panic, we help you develop a different way of relating to these sensations, seeing them as uncomfortable but not dangerous.",
		},
		{
			id: "t2",
			title: "Stay present when symptoms arise",
			description:
				"We work together to build your ability to remain grounded and connected to the present moment even when panic sensations are occurring, including breathing techniques and mindfulness approaches.",
		},
		{
			id: "t3",
			title: "Build long-term nervous system resilience",
			description:
				"Using techniques that support nervous system regulation, we help you develop skills for managing your physiological responses to stress and fear, creating a foundation of stability over time.",
		},
		{
			id: "t4",
			title: "Reduce reactivity through acceptance",
			description:
				"The more you fight panic sensations, the more intense they often become. We explore acceptance-based strategies that naturally reduce their intensity and duration.",
		},
	],
};

const stepsConfig = {
	id: "what-to-expect",
	classNames: "",
	heading: "What to Expect in Panic Disorder Therapy",
	subheading: null,
	cta: false,
	steps: [
		{
			id: "step-1",
			title:
				"Initial sessions focus on safety and understanding your panic patterns",
			description:
				"We explore what triggers your panic attacks, how they manifest in your body, and what meanings you have assigned to these sensations. This assessment helps us understand your unique experience and design appropriate interventions.",
		},
		{
			id: "step-2",
			title:
				"Early treatment emphasizes grounding and nervous system regulation",
			description:
				"You will learn practical skills for staying present during panic episodes and techniques for calming your nervous system. These tools provide immediate support while building capacity for deeper work.",
		},
		{
			id: "step-3",
			title:
				"As therapy progresses, you will build skills for meeting panic with steadiness",
			description:
				"We practice staying present with gradually increasing levels of physiological arousal, helping you develop confidence in your ability to handle panic sensations without being overwhelmed. This might include controlled exposure to panic-like sensations in a safe, supported environment.",
		},
		{
			id: "step-4",
			title:
				"Throughout the process, we attend carefully to your window of tolerance",
			description:
				"All practice happens at a pace that feels manageable and builds confidence rather than creating more fear.",
		},
	],
};

const whyCalmConfig = {
	id: "why-calm",
	classNames: "blockTint",
	heading: "Why Choose CALM Therapy for Panic Disorder",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "w1",
			title: "Changing your relationship to sensations, not eliminating them",
			description:
				"We do not work toward preventing all panic sensations but toward helping you relate to them differently. This approach creates genuine freedom because it does not depend on perfect control of your physiological responses.",
		},
		{
			id: "w2",
			title: "Acceptance and nervous system regulation together",
			description:
				"We combine mindfulness-based approaches with nervous system regulation strategies, helping you develop both the skills to stay present with difficult sensations and the capacity to support your body's natural calming responses.",
		},
		{
			id: "w3",
			title: "Building long-term resilience",
			description:
				"Rather than just managing panic attacks, we focus on developing overall resilience and capacity for handling stress and uncertainty, helping prevent future episodes while improving your overall quality of life.",
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
	heading: "Ready to Build Capacity for Whatever Arises?",
	subheading:
		"Recovery from panic disorder is not about never feeling anxious. It is about developing the capacity to stay present with whatever arises and trusting in your ability to handle intense sensations without being overwhelmed. Reach out to schedule a consultation.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};

export default function PanicDisorderPage() {
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
