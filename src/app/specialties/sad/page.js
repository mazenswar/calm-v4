// /specialties/sad.js
import PageHero from "../../components/sections/pageHero/PageHero";
import TwoColumn from "../../components/sections/twoColumn/TwoColumn";
import AudienceSection from "../../components/sections/audienceSection/AudienceSection";
import FeatureGrid from "../../components/sections/featureGrid/FeatureGrid";
import Steps from "../../components/sections/steps/Steps";
import CTABanner from "../../components/sections/ctaBanner/CTABanner";
import { generateMeta } from "../../../../config/metadata";

// META -----------------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Social Anxiety Disorder (SAD) Therapy",
	description:
		"Therapy for social anxiety disorder that combines gradual exposure with deeper work on shame and self-worth, helping you reclaim your voice and authentic self.",
	path: "/specialties/sad",
});

// CONFIG ---------------------------------------------------------------------------------

const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Therapy for Social Anxiety Disorder (SAD)",
	subheading:
		"Social anxiety often hides a deeper fear of being judged or rejected. Therapy creates space to reclaim confidence and self-worth.",
	image: null,
	align: "left",
};

const introConfig = {
	id: "intro",
	classNames: "blockTint",
	heading: "Understanding Social Anxiety Disorder",
	paragraphs: [
		"Social Anxiety Disorder involves intense fear or anxiety in social situations where you might be scrutinized, judged, or evaluated by others. This goes beyond typical shyness or nervousness to create significant distress and interference with daily activities, relationships, and life goals.",
		"What makes social anxiety particularly challenging is how it can become self-perpetuating. The fear of judgment leads to avoidance or safety behaviors, which then reinforces the belief that social situations are dangerous. Over time, this can create increasing isolation and a shrinking world of activities and relationships.",
		"Social anxiety often masks deeper fears about being truly seen, accepted, or valued. Many people with social anxiety have developed elaborate strategies to hide perceived flaws or inadequacies, yet these protective behaviors often prevent the genuine connections they long for. The fear is usually not about the social situation itself but about what others might discover or think about who you really are.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/sad.webp",
		alt: "Raindrops on a window with blurred city lights create a vibrant bokeh effect at night.",
		width: 600,
		height: 750,
	},
	imagePosition: "right",
};

const experiencesConfig = {
	id: "experiences",
	heading: "What Social Anxiety Might Feel Like",
	body: null,
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Fear of being judged, criticized, or embarrassed in social situations",
		},
		{
			id: "e2",
			text: "Avoidance of gatherings, meetings, or situations where you might be noticed",
		},
		{
			id: "e3",
			text: "Self-consciousness that feels overwhelming and all-consuming",
		},
		{
			id: "e4",
			text: "Physical symptoms like blushing, sweating, or trembling around others",
		},
		{
			id: "e5",
			text: "Rehearsing conversations or worrying extensively before social events",
		},
		{
			id: "e6",
			text: "Feeling like everyone is watching and evaluating your every move",
		},
		{
			id: "e7",
			text: "Difficulty speaking up or expressing your thoughts and opinions",
		},
		{
			id: "e8",
			text: "Exhaustion from constantly monitoring how you come across to others",
		},
	],
	cta: null,
};

const therapyConfig = {
	id: "therapy",
	classNames: "blockTint",
	heading: "How Therapy Helps with Social Anxiety",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "t1",
			title: "Practice gradual exposure in supportive ways",
			description:
				"We help you slowly and safely expand your comfort zone in social situations, starting with less threatening scenarios and building confidence before moving to more challenging interactions. This exposure happens at your pace.",
		},
		{
			id: "t2",
			title: "Explore the beliefs that fuel shame and fear of rejection",
			description:
				"Social anxiety often stems from core beliefs about being flawed, inadequate, or fundamentally unacceptable. We examine these beliefs with curiosity and compassion, understanding how they developed while questioning whether they accurately reflect your worth.",
		},
		{
			id: "t3",
			title: "Rebuild confidence and trust in your ability to connect",
			description:
				"Many people with social anxiety have lost touch with their natural capacity for connection and authenticity. We work together to help you rediscover your voice, your opinions, and your ability to relate genuinely with others.",
		},
		{
			id: "t4",
			title: "Reclaim self-worth independent of others' approval",
			description:
				"Social anxiety often involves making your worth dependent on others' reactions. We explore what it would feel like to know your value independent of social performance, helping you develop internal sources of confidence and self-acceptance.",
		},
	],
};

const stepsConfig = {
	id: "what-to-expect",
	classNames: "",
	heading: "What to Expect in Social Anxiety Therapy",
	subheading: null,
	cta: false,
	steps: [
		{
			id: "step-1",
			title:
				"Initial sessions focus on understanding your specific social fears",
			description:
				"We explore which social situations trigger anxiety, what you imagine others are thinking or noticing, and what beliefs about yourself drive these concerns. This assessment helps us design exposures and interventions that address your particular presentation.",
		},
		{
			id: "step-2",
			title:
				"Treatment combines exposure practice with insight-oriented exploration",
			description:
				"You will gradually practice engaging in social situations while also exploring the deeper fears and beliefs that fuel your anxiety. This dual approach addresses both the behavioral patterns and the underlying wounds that maintain social anxiety.",
		},
		{
			id: "step-3",
			title:
				"Safe practice and reframing self-critical beliefs go hand in hand",
			description:
				"As you build confidence through supported exposure, we simultaneously work on developing a more compassionate and accurate view of yourself, including challenging harsh self-criticism and developing skills for self-acceptance.",
		},
		{
			id: "step-4",
			title: "The therapeutic relationship itself becomes part of the healing",
			description:
				"Throughout this process, the space between us becomes a safe place for practicing being seen and accepted, which can be profoundly healing for social anxiety.",
		},
	],
};

const whyCalmConfig = {
	id: "why-calm",
	classNames: "blockTint",
	heading: "Why Choose CALM Therapy for Social Anxiety",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "w1",
			title: "Exposure-based strategies with insight-oriented therapy",
			description:
				"We combine gradual, supported exposure to social situations with deeper exploration of the beliefs and experiences that created your social fears. This comprehensive approach creates lasting change rather than just symptom management.",
		},
		{
			id: "w2",
			title: "Reclaiming your voice and authentic self",
			description:
				"Rather than just helping you manage anxiety in social situations, we work toward helping you rediscover and express your authentic self, including developing confidence in your opinions, needs, and way of being in the world.",
		},
		{
			id: "w3",
			title: "Self-worth independent of social performance",
			description:
				"We do not just work on social skills but on developing genuine self-acceptance that does not depend on others' reactions. This foundation creates resilience that extends far beyond specific social situations.",
		},
		{
			id: "w4",
			title: "Flexible private-pay model",
			description:
				"Our fee-for-service structure enables us to tailor treatment based on what you actually need, design exposures that feel meaningful to your goals, and adjust our methods as your confidence grows.",
		},
	],
};

const ctaBannerConfig = {
	heading: "Ready to Reclaim Your Authentic Self?",
	subheading:
		"Recovery from social anxiety is not about becoming perfectly comfortable in all social situations. It is about reclaiming your voice, trusting in your worth, and developing the capacity to be authentically yourself even when you cannot control others' reactions. Reach out to schedule a consultation.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		variant: "primary",
		external: true,
	},
	secondaryCta: null,
};

export default function SocialAnxietyPage() {
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
