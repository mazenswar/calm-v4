import { generateMeta } from "../../../config/metadata";
import PageHero from "../components/sections/pageHero/PageHero";
import Steps from "../components/sections/steps/Steps";
import OONSection from "./components/oonSection/OONSection";
// META -----------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Verifying Your Out-of-Network Insurance Benefits",
	description:
		"A step-by-step guide to calling your insurance company, understanding your allowed amount, and getting reimbursed for out-of-network therapy sessions.",
	path: "/verifying-your-insurance-benefits",
});
// CONFIG ----------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: null,
	heading: "Verifying Your Insurance Benefits",
	subheading:
		"Many clients are reimbursed for a meaningful portion of their session fee through out-of-network benefits, often up to 70 to 80%. How much you receive depends entirely on your specific plan, and the best way to find your number is a short call to your insurance company. This guide walks you through exactly what to ask and what to expect.",
	image: null,
	align: "left",
};

const oonConfig = {
	id: "oon",
	classNames: "blockTint",
	heading: "How Out-of-Network Reimbursement Works",
	intro:
		"Many PPO insurance plans include out-of-network mental health benefits, which can reimburse you for a portion of what you pay us. Insurance companies often quote a reimbursement percentage, but that percentage may be applied to their own internal rate rather than to what we charge, so your actual reimbursement can be lower than expected. Asking for the specific dollar amount, not just the percentage, gives you the clearest picture, and the questions below will help you get there.",
	warning: null,
	glossary: {
		heading: "A Few Terms You Will Hear",
		items: [
			{
				term: "Out-of-network benefits",
				definition:
					"A part of your insurance plan that reimburses you for seeing a provider who is not directly contracted with your insurance company, like us.",
			},
			{
				term: "Allowed amount",
				definition:
					"The dollar amount your insurance company decides a session is worth for reimbursement purposes. Many insurers calculate your reimbursement percentage from this number rather than from our session fee.",
			},
			{
				term: "CPT code",
				definition:
					"A billing code insurance companies use to identify the type of therapy session you received. You do not need to memorize these, just have them ready to mention during your call.",
			},
			{
				term: "Out-of-network deductible",
				definition:
					"A separate amount from your regular deductible that applies specifically to out-of-network care. Your plan may have one even if you have never used out-of-network benefits before.",
			},
			{
				term: "Superbill",
				definition:
					"A detailed receipt we provide after each session that includes everything your insurance company needs to process a reimbursement claim.",
			},
		],
	},
	checkBenefits: {
		heading: "Questions to Ask Your Insurance",
		intro:
			"Call the member services number on your insurance card. Most clients spend about 10 minutes on this call. Ask the questions below, and use the explanation under each one to understand what the answer means for you.",
		questions: [
			{
				question:
					"What are my out-of-network benefits for mental health services?",
				explanation:
					"This tells you whether you have this kind of coverage at all. If the answer is no, you can still use HSA or FSA funds, or reach out to us to discuss other options.",
			},
			{
				question:
					"What percentage do you cover for CPT code 90834 (45-minute therapy session), and what is your allowed amount in dollars for that code?",
				explanation:
					"Always ask for the specific dollar amount, not just the percentage. Some insurers calculate reimbursement from their own allowed amount rather than from our session fee, so knowing the dollar figure gives you the clearest picture of what to expect.",
			},
			{
				question:
					"What percentage do you cover for CPT code 90791 (75-minute intake session), and what is your allowed amount in dollars for that code?",
				explanation:
					"The intake session is billed separately from ongoing sessions and often has a different allowed amount. Ask about it specifically rather than assuming it matches the ongoing session rate.",
			},
			{
				question:
					"What is my out-of-network deductible, and how much have I met this year?",
				explanation:
					"This is the amount you need to pay out of pocket before reimbursement starts. It is often separate from your regular deductible. If you have already met it, reimbursement may begin right away.",
			},
			{
				question: "Is there a session limit for mental health services?",
				explanation:
					"This tells you if there is a yearly cap on how many sessions will be reimbursed, so there are no surprises later in the year.",
			},
			{
				question: "Is pre-authorization required before I start therapy?",
				explanation:
					"Some plans require approval before sessions are eligible for reimbursement. Asking this upfront avoids a claim being denied after the fact.",
			},
		],
		pdfHref: "/documents/insurance-questions-checklist.pdf",
	},
	reimbursementSteps: null,
};

const stepsConfig = {
	id: "reimbursement-steps",
	classNames: "",
	heading: "Once You Know Your Numbers, Here Is the Process",
	subheading: null,
	cta: false,
	steps: [
		{
			id: "step-1",
			title: "You pay for your session",
			description:
				"All payments are handled securely through our client portal. You will keep a credit, debit, or HSA/FSA card on file, which is charged after each session.",
		},
		{
			id: "step-2",
			title: "We provide a superbill",
			description:
				"After each session, we give you a detailed superbill with all the information your insurance requires to process a claim.",
		},
		{
			id: "step-3",
			title: "You submit for reimbursement",
			description:
				"Upload the superbill to your insurance website or mail it in. Most clients get reimbursed within 2 to 4 weeks.",
		},
		{
			id: "step-4",
			title: "Insurance sends you money back",
			description:
				"You receive a check or direct deposit for your covered amount.",
		},
	],
};

export default function VerifyingInsuranceBenefitsPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<OONSection oonConfig={oonConfig} />
			<Steps stepsConfig={stepsConfig} />
		</main>
	);
}
