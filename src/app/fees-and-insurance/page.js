import PageHero from "../components/sections/pageHero/PageHero";
import FeatureGrid from "../components/sections/featureGrid/FeatureGrid";
import TwoColumn from "../components/sections/twoColumn/TwoColumn";
import CTABanner from "../components/sections/ctaBanner/CTABanner";
import RateCards from "../components/sections/rateCards/RateCards";
import { generateMeta } from "../../../config/metadata";

// META ---------------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Fees & Insurance | Private-Pay Therapy",
	description:
		"Learn about session fees, our private-pay model, and how out-of-network insurance reimbursement works at CALM Therapy. Transparent pricing with no hidden costs.",
	path: "/fees-and-insurance",
});
// CONFIG -------------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: null,
	heading: "Therapy is an Investment",
	subheading:
		"Therapy is an investment in your growth, relationships, and wellbeing. At CALM Therapy, we integrate evidence-based practices with a holistic perspective to support meaningful change.",
	image: {
		src: "/images/rai.webp",
		alt: "waves hitting shore",
		width: 600,
		height: 600,
	},
	align: "left",
};

const privatePayConfig = {
	id: "private-pay",
	classNames: "blockTint",
	heading: "Why Private Pay?",
	subheading: null,
	variant: "accent",
	cta: null,
	features: [
		{
			id: "pp1",
			title: "No Diagnosis Required",
			description:
				"Insurance requires a billable diagnosis to justify treatment, which means the system is built around treating disorders. Private pay allows us to support growth, self-understanding, and deeper work without needing to frame your experience as a pathology.",
		},
		{
			id: "pp2",
			title: "Full Confidentiality",
			description:
				"When insurance is billed, your diagnosis and treatment details become part of a claims record that insurance companies, and in some cases employers, can access. Private pay keeps your therapy entirely between you and your therapist.",
		},
		{
			id: "pp3",
			title: "Flexibility in Pace and Approach",
			description:
				"Insurers often set limits on session length, frequency, and total sessions allowed based on what they consider medically necessary. Private pay lets treatment move at the pace that actually fits you, using the approach that fits the work, not what a claims process permits.",
		},
	],
};

const rateCardsConfig = {
	id: "rates",
	classNames: "",
	heading: "Our Session Rates",
	// intro:
	// 	"This is what you pay us directly, regardless of your insurance situation, and it never depends on what your insurance ultimately reimburses.",
	rates: [
		{
			id: "ongoing",
			label: "Ongoing Sessions, 45 min",
			price: "250",
			note: null,
		},
		{
			id: "intake",
			label: "Initial Intake, 75 min",
			price: "420",
			note: null,
		},
	],
	footnote: null,
};
const reimbursementConfig = {
	id: "reimbursement",
	classNames: "blockTint",
	heading: "What About Insurance Reimbursement?",
	paragraphs: [
		"Many PPO plans include out-of-network mental health benefits, which can reimburse you for a portion of what you pay us. The amount varies by plan and is genuinely difficult to predict in advance, because insurers calculate reimbursement using their own internal allowed amount rather than the rate we charge.",
		"As an example, if our rate is $250 and your insurer's allowed amount for that session is $175, a quoted 70% reimbursement applies to the $175, not the $250, meaning you would receive about $122.50 back rather than $175. This is a common source of confusion, and the only reliable way to know your specific number is to ask your insurer directly.",
		"We have put together a detailed guide to help you ask the right questions and understand exactly what to expect.",
	],
	list: null,
	cta: {
		text: "Read the Insurance Benefits Guide",
		href: "/verifying-your-insurance-benefits",
		variant: "secondary",
	},
	image: null,
};

const ctaBannerConfig = {
	heading: "Ready to Take the Next Step?",
	subheading:
		"If you are interested in working together, we offer a free 15-minute consultation to connect and see if our approach feels right for you.",
	variant: "brand",
	cta: {
		text: "Schedule a Consultation",
		href: "/contact",
		variant: "primary",
	},
	// secondaryCta: {
	// 	text: "Verify Your Insurance Benefits",
	// 	href: "/verifying-your-insurance-benefits",
	// 	variant: "ghost",
	// },
};

export default function FeesAndInsurancePage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<FeatureGrid featureGridConfig={privatePayConfig} />
			<RateCards rateCardsConfig={rateCardsConfig} />
			<TwoColumn twoColumnConfig={reimbursementConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
