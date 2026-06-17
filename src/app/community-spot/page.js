import { generateMeta } from "../../../config/metadata";
import FeatureGrid from "../components/sections/featureGrid/FeatureGrid";
import PageHero from "../components/sections/pageHero/PageHero";
import Steps from "../components/sections/steps/Steps";
import TwoColumn from "../components/sections/twoColumn/TwoColumn";
import CommunitySpotCTA from "./components/communitySpotCTA/CommunitySpotCTA";
import CommunitySpotStatus from "./components/communitySpotStatus/CommunitySpotStatus";

// META -----------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Community Spot | Reduced-Fee Therapy",
	description:
		"CALM Therapy's Community Spot offers reduced-fee therapy for those who could not otherwise access our care. Learn how the program works and how to apply.",
	path: "/community-spot",
});

// VARS ------------------------------------------------------------------------
const IS_SPOT_OPEN = false;
const FORM_URL = "https://forms.gle/E6svnu3LKUuJ9LgA6";
// CONFIG -----------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: null,
	heading: "Community Spot",
	subheading:
		"We believe everyone deserves access to quality mental health care, regardless of financial circumstances. Our Community Spot is a reduced fee therapy placement we reserve for someone who is experiencing financial hardship and would otherwise be unable to access support.",
	image: {
		src: "/images/community-img.jpg",
		alt: "",
		width: 600,
		height: 600,
	},
	align: "left",
};

const communitySpotStatusConfig = {
	isOpen: IS_SPOT_OPEN,
	formUrl: FORM_URL,
	classNames: "blockTint",
};

const offeringConfig = {
	id: "offering",
	classNames: "",
	heading: "What's Included",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "o1",
			title: "14 Sessions with Dr. Tanya Singh",
			description:
				"Work directly with a PhD-level licensed clinical psychologist, the same provider seeing all CALM clients.",
		},
		{
			id: "o2",
			title: "Weekly, 45-Minute Sessions",
			description:
				"Sessions are typically scheduled weekly to maintain consistency and momentum throughout the program.",
		},
		{
			id: "o3",
			title: "A Focused, Goal-Oriented Structure",
			description:
				"The first 12 sessions focus on your goals, the final two help you build a plan for what comes next.",
		},
		{
			id: "o4",
			title: "Reduced Rate of $50 per Session",
			description:
				"A significantly reduced rate from our regular $250 session fee, made possible by limited availability.",
		},
	],
};

const fitConfig = {
	id: "fit",
	classNames: "blockTint",
	heading: "Is This Right for You?",
	paragraphs: [
		"This spot is for individuals who are experiencing financial hardship and cannot currently afford therapy. It is designed as short-term, focused work, not ongoing open-ended treatment. You should come with something specific you would like to work on, and we will support you in making meaningful progress over our time together.",
		"This spot is best suited for individuals whose goals align with our areas of focus. We especially welcome women seeking this support.",
	],
	list: null,
	cta: {
		text: "See Our Areas of Focus",
		href: "/specialties",
		variant: "secondary",
	},
	image: null,
};

const processConfig = {
	id: "process",
	classNames: "",
	heading: "How It Works",
	subheading:
		"We approach this process with care and without judgment. You will not need to prove your circumstances, just share what feels comfortable.",
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "Apply",
			description:
				"Fill out a short form telling us a bit about yourself and your current circumstances.",
		},
		{
			id: "step-2",
			title: "Brief Consultation",
			description:
				"If it seems like a potential fit, we will schedule a 15-minute call to connect and learn more.",
		},
		{
			id: "step-3",
			title: "Begin",
			description:
				"If we are the right match, we will schedule your first session and get started.",
		},
	],
};

const expectationsConfig = {
	id: "expectations",
	classNames: "blockTint",
	heading: "A Few Things to Know",
	paragraphs: [
		"You will receive the same quality of care and the same commitment we bring to every client. We ask that you commit to the process and respect our 24-hour cancellation policy so we can serve you fully.",
		"Toward the end of our time together, we will work with you on next steps, whether that is connecting you with other resources, building tools for self-support, or helping you find a path to continued care.",
	],
	list: null,
	cta: null,
	image: null,
};

const communitySpotCtaConfig = {
	isOpen: IS_SPOT_OPEN,
	formUrl: FORM_URL,
	classNames: "",
};

export default function CommunitySpotPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<CommunitySpotStatus
				communitySpotStatusConfig={communitySpotStatusConfig}
			/>
			<FeatureGrid featureGridConfig={offeringConfig} />
			<TwoColumn twoColumnConfig={fitConfig} />
			<Steps stepsConfig={processConfig} />
			<TwoColumn twoColumnConfig={expectationsConfig} />
			<CommunitySpotCTA communitySpotCtaConfig={communitySpotCtaConfig} />
		</main>
	);
}
