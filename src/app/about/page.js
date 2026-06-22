import CredentialSummary from "../components/sections/credentialsSummary/CredentialsSummary";
import CTABanner from "../components/sections/ctaBanner/CTABanner";
import FeatureGrid from "../components/sections/featureGrid/FeatureGrid";
import PageHero from "../components/sections/pageHero/PageHero";
import TwoColumn from "../components/sections/twoColumn/TwoColumn";
import { generateMeta } from "../../../config/metadata";
import FounderIntro from "../components/sections/founderIntro/FounderIntro";

// META --------------------------------------------------------------------------
export const metadata = generateMeta({
	title: "About Tanya Singh, PhD | Founder & Clinical Psychologist",
	description:
		"Meet Tanya Singh, PhD, founder and licensed clinical psychologist at CALM Therapy. Learn about her clinical training, approach to integrative therapy, and the philosophy behind our practice.",
	path: "/about",
});

// CONFIG ---------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: null,
	heading: "About CALM Therapy",
	subheading:
		"CALM Therapy is grounded in evidence-based psychology and a deep respect for the wisdom already present in each person. We believe that symptoms, emotions, and patterns often make sense in the context of what someone has lived through, and that lasting change begins with understanding.\n\nWe specialize in working with adults navigating anxiety and OCD, complex trauma, treatment-resistant conditions, giftedness, and spiritual or transformative experiences. Our goal is not simply to reduce symptoms, but to help people make sense of their experience, reconnect with themselves, and move through life with greater clarity, freedom, and self-trust.",
	image: {
		src: "/images/about/calm.webp",
		alt: "",
		width: 600,
		height: 600,
	},
	align: "left",
};

const philosophyConfig = {
	id: "philosophy",
	classNames: "blockTint",
	heading: "Our Philosophy",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "ph1",
			title: "Understanding Before Judgment",
			description:
				"People’s symptoms, emotions, and patterns often make sense in the context of what they have lived through",
		},
		{
			id: "ph2",
			title: "Wisdom Beneath the Symptoms",
			description:
				"Beneath habits, defenses, and survival strategies is often a deeper wisdom about what we need, value, and long for",
		},
		{
			id: "ph3",
			title: "Science in Service of Understanding",
			description:
				"Evidence-based psychology gives us tools and frameworks, but therapy is not a formula. Science guides the work while remaining responsive to the uniqueness of each person",
		},
		{
			id: "ph4",
			title: "Real Change Happens in Relationship",
			description:
				"Therapy is not something that is done to you. It is a collaborative process that unfolds through understanding, trust, and genuine connection",
		},
		{
			id: "ph5",
			title: "Moving Toward Wholeness",
			description:
				"The goal is not perfection. The goal is to help you become more connected to yourself and able to move through life with greater clarity, freedom, and self-trust",
		},
	],
};

// approach

// Part 1 of 3: human introduction, no credentials yet
const approachConfig = {
	id: "our-approach",
	classNames: "",
	heading: "Our Approach",
	paragraphs: [
		"These principles take shape through a range of evidence-based methods. Because every person is different, no single therapeutic approach is right for everyone. The work is guided by a framework that focuses on understanding the deeper patterns, emotional learnings, and adaptations that shape how we think, feel, and respond to the world. The goal is not simply symptom management, but helping create the conditions for meaningful and lasting change.",
		"Depending on the person and the goals of therapy, the work may draw from a variety of evidence-based approaches, including:",
	],
	list: [
		"Acceptance and Commitment Therapy (ACT)",
		"Cognitive Behavioral Therapy (CBT)",
		"Coherence-informed approaches",
		"Dialectical Behavior Therapy (DBT) skills",
		"Exposure and Response Prevention (ERP)",
		"Inference-Based CBT (I-CBT)",
		"Internal Family Systems (IFS)-informed work",
		"Ketamine-Assisted Psychotherapy (KAP), when appropriate",
		"Metacognitive and mindfulness-based approaches",
		"Somatic and embodiment-based strategies",
	],
	cta: null,
	// image: {
	// 	src: "/images/about/ts-park.webp",
	// 	alt: "Tanya Singh, PhD, founder of CALM Therapy",
	// 	width: 600,
	// 	height: 600,
	// },
	// imagePosition: "right",
};

// Part 1 of 3: human introduction, no credentials yet
const founderIntroConfig = {
	id: "meet-the-founder",
	classNames: "blockTint",
	heading: "Meet the Founder",
	paragraphs: [
		"Hi, I’m Dr. Tanya Singh.",

		"Psychology has been my path for over fifteen years, beginning with my undergraduate studies and continuing through my master’s and doctoral training in clinical psychology. For a long time, I assumed my future would be in research. I spent several years studying topics such as suicide prevention and treatment-seeking behavior, published in those areas, and expected that path would define my career. But clinical work kept pulling at me. Over time, I realized that while I still love research and the pursuit of knowledge, sitting with people in their complexity was where I felt most alive and most myself.",

		"I have long been drawn to questions about what makes us who we are: what shapes us, how we make meaning of our experiences, how we adapt to hardship, and what allows us to grow. My curiosity about understanding both others and myself is innate and is also deeply shaped by my experiences. For example, immigrating to the United States at eighteen required me to navigate the tension between collectivistic and individualistic ways of understanding the world while building a life in a new culture at a very impressionable age. Like many formative experiences, it left me with as many questions as answers.",

		"As I worked to better understand and accept myself, I came to realize that many of the qualities I had long felt I needed to contain or suppress to navigate different environments and make myself more palatable to others were an important part of who I am. This included my highly analytical nature, creativity, intuition, emotional depth, less conventional interests, and enduring fascination with life’s bigger questions, all of which continue to shape how I think, relate, and practice as a clinician.",

		"This profession allows me to bring together parts of myself that once felt separate, including the analytical and creative, the scientific and the deeply human. It is one of the few places where those parts can work together in service of something meaningful. At the same time, meaningful clinical work asks something of the clinician as well. It requires humility, self-reflection, and a willingness to keep growing.",

		"This work changes me. It asks me to keep listening to my own voice, to continue developing self-trust, and to remain open to learning from the people who sit across from me. It continually deepens my appreciation for the complexity, resilience, and richness of the human experience. I feel genuinely honored to do this work, and I do not take that lightly.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/about/ts-park.webp",
		alt: "Tanya Singh, PhD, founder of CALM Therapy",
		width: 600,
		height: 600,
	},
	imagePosition: "right",
};

// Part 2 of 3: dedicated credentials display, its own visual identity
const credentialSummaryConfig = {
	heading: "Training & Credentials",
	intro:
		"Dr. Singh's training spans leading academic, research, and clinical institutions, with a career devoted to understanding human suffering and helping people create meaningful change.",
	groups: [
		{
			id: "doctoral",
			title: "Doctoral Training",
			body: "PhD in Clinical Psychology from Montclair State University, including an APA-accredited clinical internship at Rutgers University Behavioral Health Care and an advanced practicum at Harvard University and Massachusetts General Hospital.",
		},
		{
			id: "research",
			title: "Research Foundations",
			body: "Years immersed in suicide prevention research at Columbia University and the New York State Psychiatric Institute, work that shaped how she thinks about risk, resilience, and the complexity of human suffering long before entering independent clinical practice.",
		},
		{
			id: "specialization",
			title: "Clinical Specialization",
			body: "Postdoctoral training at the CBT Center for Anxiety & OCD, where Dr. Singh received advanced training in evidence-based treatment for anxiety disorders, OCD, and related conditions. Her training has since expanded to incorporate trauma-informed, somatic, parts-based, metacognitive, and coherence-informed approaches, allowing treatment to be tailored to the unique needs of each individual.",
		},
	],
	footer: {
		text: "For a more detailed overview of Dr. Singh's education, clinical training, and publications, visit her full credentials page or review her CV.",
		cta: {
			text: "View full credentials",
			href: "/people/tanya-singh",
			variant: "secondary",
		},
	},
};

// Part 3 of 3: personal closing, equal weight to the opening
const founderPersonalConfig = {
	id: "beyond-the-therapy-room",
	classNames: "blockTint",
	heading: "Beyond the Therapy Room",
	paragraphs: [
		"This work is a calling and a craft for me, not just a profession, and one I continue to refine through ongoing learning, reflection, and experience. That same curiosity carries into the rest of my life.",
		"I love spending time in nature and find that walking is often where I do my best thinking. I cook intuitively, rarely following a recipe exactly, and enjoy experimenting with whatever ingredients I have on hand. I am endlessly fascinated by both science and spirituality, and spend my free time reading, listening, and learning about everything from psychology and quantum physics to Taoism, Buddhism, Hinduism, and the larger questions of what it means to be human.",
		"Some of my favorite moments are spent being immersed in video games with my partner, exploring new places and foods together, or making slime with my stepdaughter, a surprisingly serious craft that we have refined over the years.",
		"These interests continue to shape who I am, both inside and outside the therapy room.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/about/tsn.webp",
		alt: "Tanya Singh, PhD, Licensed Clinical Psychologist",
		width: 600,
		height: 600,
	},
	imagePosition: "left",
};

const ctaBannerConfig = {
	heading: "Ready to Connect?",
	subheading:
		"If our approach resonates with you, we offer a free 15-minute consultation to see if we are the right fit for your journey.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		variant: "primary",
		external: true,
	},
	secondaryCta: null,
};

export default function AboutPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<FeatureGrid featureGridConfig={philosophyConfig} />
			<TwoColumn twoColumnConfig={approachConfig} />
			{/* <TwoColumn twoColumnConfig={founderIntroConfig} /> */}
			<FounderIntro founderIntroConfig={founderIntroConfig} />
			<CredentialSummary credentialSummaryConfig={credentialSummaryConfig} />
			<TwoColumn twoColumnConfig={founderPersonalConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
