import KapTimeline from "./components/KapTimeline";
import KapPricingTable from "./components/KapPricingTable";
import TwoColumn from "../components/sections/twoColumn/TwoColumn";
import AudienceSection from "../components/sections/audienceSection/AudienceSection";
import CTABanner from "../components/sections/ctaBanner/CTABanner";
import PageHero from "../components/sections/pageHero/PageHero";
import ChipNav from "../components/ui/chipNav/ChipNav";
import FeatureGrid from "../components/sections/featureGrid/FeatureGrid";
import ResourceGrid from "../components/sections/resourceGrid/ResourceGrid";
import { generateMeta } from "../../../config/metadata";
// META -------------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Ketamine-Assisted Psychotherapy (KAP)",
	description:
		"Ketamine-assisted psychotherapy combines guided ketamine sessions with therapy to support healing and relief from treatment-resistant depression, anxiety, and emotional stuckness.",
	path: "/kap",
});
// CONFIG -----------------------------------------------------------------------------

/* =========================
   CHIP NAV
   ========================= */

const chipNavConfig = {
	label: "On this page",
	chips: [
		{ id: "kap-intro", label: "Overview" },
		{ id: "kap-eligibility", label: "Is KAP Right for You?" },
		{ id: "kap-effects", label: "Effects of Ketamine" },
		{ id: "kap-timeline", label: "Our Process" },
		{ id: "kap-pricing", label: "Investment" },
		{ id: "kap-safety", label: "Safety & Ethics" },
		{ id: "kap-resources", label: "Resources" },
	],
};

/* =========================
   PAGE HERO
   ========================= */

const pageHeroConfig = {
	eyebrow: "Specialties",
	heading: "Ketamine-Assisted Psychotherapy (KAP)",
	subheading: "A grounded and integrative path toward healing.",
	image: null,
	align: "left",
};

/* =========================
   INTRO (TWO COLUMN)
   ========================= */

const introConfig = {
	id: "kap-intro",
	classNames: "",
	heading: "KAP as Part of a Larger Journey",
	paragraphs: [
		"Ketamine-Assisted Psychotherapy (KAP) can be a powerful catalyst for emotional healing, especially when approached with intention and support. At CALM, we see KAP as one part of a larger journey, a practice that deepens and complements the work you are already doing to understand yourself and heal.",
		"We strongly recommend a consistent baseline of care before, during, and after the KAP journey. KAP can be done on its own, but it is most effective when embedded in a larger healing framework.",
		"Ketamine's effects can include enhanced emotional openness, reduced reactivity, and temporary relief from symptoms of anxiety, depression, and obsessive thought patterns. In a therapeutic setting, this creates space for new perspectives, deeper insight, and meaningful breakthroughs.",
	],
	list: null,
	cta: null,
	image: {
		src: "/images/waves.webp",
		alt: "",
		width: 600,
		height: 600,
	},
};

/* =========================
   ELIGIBILITY
   ========================= */

const eligibilityConfig = {
	id: "kap-eligibility",
	classNames: "blockTint",
	heading: "Is KAP Right for You?",
	body: "Ketamine-Assisted Psychotherapy may offer a meaningful path forward if you feel stuck or have not found relief through traditional treatments. It is most useful for individuals who are:",
	variant: "card",
	items: [
		{
			id: "e1",
			text: "Addressing anxiety, OCD, or depression that has not responded to other treatments",
		},
		{
			id: "e2",
			text: "Feeling stuck in long-standing emotional patterns",
		},
		{
			id: "e3",
			text: "Open to exploring altered states as a pathway to deeper self-awareness",
		},
	],
	cta: null,
};

/* =========================
   EFFECTS OF KETAMINE
   ========================= */

const effectsConfig = {
	id: "kap-effects",
	classNames: "",
	heading: "Effects of Ketamine",
	subheading:
		"In a therapeutic setting, ketamine creates conditions that support deeper emotional work.",
	variant: "accent",
	cta: null,
	features: [
		{
			id: "ef1",
			title: "Emotional Openness",
			description:
				"More access to feeling states and insight that may be difficult to reach in ordinary consciousness.",
		},
		{
			id: "ef2",
			title: "Reduced Reactivity",
			description:
				"Temporary relief from looping thought patterns, defensive responses, and entrenched emotional habits.",
		},
		{
			id: "ef3",
			title: "New Perspectives",
			description:
				"Space for different viewpoints, fresh meaning-making, and breakthroughs that carry forward into integration.",
		},
	],
};

/* =========================
   SAFETY & ETHICS
   ========================= */

const safetyConfig = {
	id: "kap-safety",
	classNames: "blockTint",
	heading: "Safety and Ethical Considerations",
	subheading:
		"Your safety, dignity, and informed choice guide every stage of care.",
	variant: "accent",
	cta: null,
	features: [
		{
			id: "s1",
			title: "Medical Oversight",
			description:
				"A licensed prescriber at Journey Clinical reviews your health history and current medications to confirm that ketamine is appropriate and safe. Dose selection and any adjustments are handled by the prescriber.",
		},
		{
			id: "s2",
			title: "Consent and Boundaries",
			description:
				"Informed consent is ongoing and you can ask questions or pause care at any time. Your therapist is present throughout dosing and a trusted support person is present at home during sessions.",
		},
		{
			id: "s3",
			title: "Professional Ethics",
			description:
				"We follow licensed professional ethics standards and state regulations for psychotherapy. We maintain clear therapeutic roles and boundaries, with confidentiality and informed consent at the core.",
		},
	],
};
/* =========================
   RESOURCE GRID
   ========================= */
const resourceGridConfig = {
	id: "kap-resources",
	classNames: "",
	heading: "Further Reading & Resources",
	subheading:
		"If you want to learn more about KAP methods, safety, and outcomes, these resources are a good place to start.",
	disclaimer: null,
	resources: [
		{
			id: "r1",
			title: "Journey Clinical: KAP for Patients",
			href: "https://www.journeyclinical.com/patients",
			description:
				"Overview of the medical evaluation and prescribing model for ketamine lozenges, written for clients.",
			source: "journeyclinical.com",
		},
		{
			id: "r2",
			title: "Journey Clinical: KAP Guide",
			href: "https://www.journeyclinical.com/resources",
			description:
				"Plain-language basics of preparation, dosing, and integration within a collaborative care model.",
			source: "journeyclinical.com",
		},
		{
			id: "r3",
			title: "Paradigms of Ketamine Treatment (PDF)",
			href: "https://maps.org/research-archive/mdma/MDMA-Ketamine_Paradigms_RaquelBennett.pdf",
			description:
				"A reference overview of clinical approaches to ketamine treatment and how they differ in practice.",
			source: "maps.org",
		},
		{
			id: "r4",
			title: "KAP Outcomes in Three Large Practices",
			href: "https://pubmed.ncbi.nlm.nih.gov/30360952/",
			description:
				"Peer-reviewed outcomes from psychotherapy with ketamine across community settings.",
			source: "pubmed.ncbi.nlm.nih.gov",
		},
	],
};

// In JSX
<ResourceGrid resourceGridConfig={resourceGridConfig} />;
/* =========================
   CTA BANNER
   ========================= */

const ctaBannerConfig = {
	heading: "Ready to Learn More?",
	classNames: "blockTint",
	subheading:
		"If you are curious whether KAP might be a good fit, reach out to schedule a consultation. We will answer your questions and help you understand whether this approach makes sense for where you are.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		variant: "primary",
		external: true,
	},
	secondaryCta: null,
};

/* =========================
   PAGE
   ========================= */

export default function KapPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<ChipNav chipNavConfig={chipNavConfig} />
			<TwoColumn twoColumnConfig={introConfig} />
			<AudienceSection audienceConfig={eligibilityConfig} />
			<FeatureGrid featureGridConfig={effectsConfig} />
			<KapTimeline />
			<KapPricingTable />
			<FeatureGrid featureGridConfig={safetyConfig} />
			<ResourceGrid resourceGridConfig={resourceGridConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
