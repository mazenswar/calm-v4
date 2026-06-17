import PageHero from "../../components/sections/pageHero/PageHero";
import TwoColumn from "../../components/sections/twoColumn/TwoColumn";
import AudienceSection from "../../components/sections/audienceSection/AudienceSection";
import FeatureGrid from "../../components/sections/featureGrid/FeatureGrid";
import Steps from "../../components/sections/steps/Steps";
import CTABanner from "../../components/sections/ctaBanner/CTABanner";
import { generateMeta } from "../../../../config/metadata";
// META ------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Perfectionism Therapy",
	description:
		"Therapy for perfectionism that addresses the underlying fear and self-criticism driving it, not just the behavior. Virtual sessions for high-functioning adults.",
	path: "/specialties/perfectionism",
});

// CONFIG ----------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Perfectionism",
	subheading:
		"Perfectionism can feel protective yet imprisoning. Therapy creates space to practice enoughness from the inside out.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Perfectionism",
	paragraphs: [
		"Perfectionism involves setting unrealistically high standards for yourself and experiencing significant distress when these standards are not met. While often viewed as a positive trait, perfectionism typically stems from deeper fears about being flawed, rejected, or not good enough. It becomes a way of trying to earn safety, love, or acceptance through flawless performance.",
		"What makes perfectionism particularly challenging is how it can feel both protective and imprisoning. The drive for perfection often develops as a way to avoid criticism, rejection, or failure, yet it creates a prison where your worth depends entirely on external achievement and control. This leaves you constantly vulnerable to feelings of inadequacy whenever reality falls short of impossible standards.",
		"Perfectionism typically involves parts of yourself that believe your safety or worth depend on performance, achievement, or maintaining control over outcomes. These protective parts often developed early in life as strategies for navigating environments where acceptance felt conditional on being perfect or good enough. Understanding perfectionism this way opens possibilities for healing that go beyond simply lowering standards.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/perfectionism.webp",
		alt: "cracked porcelain gold repair macro",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What Perfectionism Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Feeling that worth depends on achievement, performance, or being in control",
		},
		{ id: "e2", text: "Relentless self-criticism or fear of making mistakes" },
		{
			id: "e3",
			text: "Difficulty feeling satisfied or at peace, even with success",
		},
		{
			id: "e4",
			text: "Procrastination or avoidance when you cannot guarantee perfect outcomes",
		},
		{
			id: "e5",
			text: "Exhaustion from constantly striving and never feeling like you have done enough",
		},
		{
			id: "e6",
			text: "Fear of disappointing others or being seen as inadequate",
		},
		{
			id: "e7",
			text: "All-or-nothing thinking where anything less than perfect feels like failure",
		},
		{
			id: "e8",
			text: "Difficulty delegating or asking for help because others might not do it right",
		},
	],
	cta: null,
};

const therapyConfig = {
	id: "therapy",
	classNames: "blockTint",
	heading: "How Therapy Helps with Perfectionism",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "t1",
			title: "Explore the protective parts that drive perfectionism",
			description:
				"We examine the parts of yourself that believe perfection is necessary for safety, love, or acceptance, understanding how these patterns developed and what they are trying to protect you from.",
		},
		{
			id: "t2",
			title: "Practice gentler self-relating and new definitions of worth",
			description:
				"Rather than trying to eliminate high standards, we focus on developing a kinder relationship with yourself that does not depend on perfect performance.",
		},
		{
			id: "t3",
			title: "Create space for rest, joy, and imperfection",
			description:
				"Perfectionism often leaves little room for ease, playfulness, or the natural messiness of being human. We practice allowing imperfection and finding satisfaction in good enough.",
		},
		{
			id: "t4",
			title: "Develop tolerance for uncertainty and vulnerability",
			description:
				"Perfectionism often serves as a way to avoid the vulnerability of not knowing or not being in control. We gently practice tolerating uncertainty and the discomfort of not having everything figured out.",
		},
	],
};

const stepsConfig = {
	id: "what-to-expect",
	classNames: "",
	heading: "What to Expect in Perfectionism Therapy",
	subheading:
		"Throughout this process, we maintain attention to the protective functions of perfectionism, ensuring that you develop internal resources for safety and worth before loosening perfectionistic patterns.",
	cta: false,
	steps: [
		{
			id: "step-1",
			title:
				"Initial sessions focus on understanding your unique perfectionist patterns",
			description:
				"We explore how perfectionism shows up in your life, what triggers the need for perfection, and what fears or beliefs drive these patterns. This assessment helps us understand the specific protective functions perfectionism serves for you.",
		},
		{
			id: "step-2",
			title:
				"Treatment involves both insight and practice to help loosen rigid patterns",
			description:
				"You will gain understanding about how perfectionism developed while also practicing new ways of relating to mistakes, imperfection, and your own efforts, including experiments in good enough and exercises in self-compassion.",
		},
		{
			id: "step-3",
			title:
				"Sessions explore both individual patterns and relational dynamics",
			description:
				"We examine how perfectionism affects your relationships with others and practice new ways of being in connection that do not depend on perfect performance, including exploring boundaries and asking for help.",
		},
	],
};

const whyCalmConfig = {
	id: "why-calm",
	classNames: "blockTint",
	heading: "Why Choose CALM Therapy for Perfectionism Work",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "w1",
			title: "Internal worth over external performance standards",
			description:
				"We do not work on setting realistic goals or managing perfectionist behaviors. Instead, we focus on developing an internal sense of worth and safety that does not depend on perfect achievement or control over outcomes.",
		},
		{
			id: "w2",
			title: "Parts work and self-compassion practices",
			description:
				"We explore the different parts of yourself that drive perfectionism, understanding their protective intentions while developing more self-compassionate ways of relating to your efforts and mistakes.",
		},
		{
			id: "w3",
			title: "Practicing enoughness from the inside out",
			description:
				"Rather than trying to convince you intellectually that you are enough, we create experiential opportunities to feel and embody a sense of enoughness that comes from within rather than external validation.",
		},
		{
			id: "w4",
			title: "Flexible private-pay model",
			description:
				"Our fee-for-service structure enables us to tailor treatment based on what you actually need, exploring the deeper roots of perfectionist patterns and adjusting our methods as you grow.",
		},
	],
};

const ctaBannerConfig = {
	heading: "Ready to Practice Enoughness From the Inside Out?",
	subheading:
		"Recovery from perfectionism is not about lowering your standards or becoming careless about quality. It is about developing internal sources of worth and safety that do not depend on perfect performance. Reach out to schedule a consultation.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	secondaryCta: null,
};

export default function PerfectionismPage() {
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
