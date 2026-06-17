import { generateMeta } from "../../../config/metadata";
import FAQ from "../components/sections/faq/FAQ";
// META ------------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "FAQ | Therapy, Fees & Getting Started",
	description:
		"Answers to common questions about starting therapy with CALM Therapy, including fees, insurance reimbursement, scheduling, and what to expect from virtual sessions.",
	path: "/faq",
});
// CONFIG -----------------------------------------------------------------------------
const faqConfig = {
	id: "faq",
	heading: "Questions People Often Ask",
	subheading:
		"Clear, concise answers about our approach, availability, fees, and ketamine-assisted psychotherapy. If you don't see your question here, email us at",
	contact: {
		text: "info@calmtherapy.center",
		href: "mailto:info@calmtherapy.center",
	},
	searchable: true,
	showToc: true,
	groups: [
		{
			id: "therapy",
			title: "Therapy & Fit",
			items: [
				{
					id: "therapy-approach",
					q: "What kind of therapy do you offer?",
					a: "<p>We take an integrative approach rooted in evidence-based practices like cognitive behavioral therapy (CBT), mindfulness, and insight-oriented work. Depending on your needs, sessions may focus on building skills, exploring deeper patterns, or developing more compassionate awareness. This is not just about coping, it is about meaningful, sustainable change.</p>",
					tags: ["approach", "integrative", "evidence-based"],
				},
				{
					id: "therapy-virtual",
					q: "Do you offer virtual sessions?",
					a: "<p>Yes. All therapy sessions are offered online via secure video conferencing. Many clients find virtual therapy just as effective and more accessible, especially when it fits seamlessly into their day.</p>",
					tags: ["virtual", "logistics"],
				},
				{
					id: "therapy-population",
					q: "Do you work with couples, families, or teens?",
					a: "<p>We work with adults and older adolescents (age 16+). We do not currently offer couples or family therapy.</p>",
					tags: ["population"],
				},
				{
					id: "therapy-duration",
					q: "How long will I need to be in therapy?",
					a: "<p>Therapy is not one-size-fits-all. Some clients seek short-term support for a specific issue, while others stay longer for deeper work. We will regularly revisit your goals together to ensure therapy continues to serve your needs.</p>",
					tags: ["duration", "goals"],
				},
				{
					id: "therapy-scheduling",
					q: "How do I schedule a session?",
					a: "<p>You can request a free 15-minute consultation using the scheduling buttons throughout the site. Scheduling is handled through our secure SimplePractice portal, where you can choose a time and complete a HIPAA-compliant intake form.</p>",
					tags: ["schedule", "intake"],
				},
				{
					id: "therapy-cancellation",
					q: "What if I need to cancel or reschedule a session?",
					a: "<p>Please provide at least 24 hours notice to cancel or reschedule a session. Sessions canceled with less than 24 hours notice may be charged the full session fee.</p>",
					tags: ["policy", "cancellation"],
				},
				{
					id: "therapy-fit",
					q: "How will I know if you are the right therapist for me?",
					a: "<p>That is what the free consultation is for. It is a chance for us to connect, discuss what you are looking for, and see if it feels like a good fit. If it does not, we will gladly offer a referral to someone who might be a better match.</p>",
					tags: ["fit", "consultation"],
				},
			],
		},
		{
			id: "insurance",
			title: "Fees & Insurance",
			items: [
				{
					id: "fees-insurance-why-oons",
					q: "Why don't you accept insurance?",
					a: '<p>Working outside of insurance networks lets us offer care that does not require a billable diagnosis, keeps your treatment details fully confidential, and allows flexibility in pace and approach rather than what a claims process permits. Many clients use out-of-network benefits through their insurance plan, and we provide a detailed superbill after each session to support that. For more information, visit the <a href="/fees-and-insurance">Fees & Insurance page</a>.</p>',
					tags: ["insurance", "out-of-network"],
				},
				{
					id: "fees-pricing",
					q: "How much do sessions cost?",
					a: '<p>An initial intake session (75 minutes) is $420. Ongoing individual sessions (45 minutes) are $250. These rates apply regardless of insurance and never depend on what your plan ultimately reimburses. You can find more detail on the <a href="/fees-and-insurance">Fees & Insurance page</a>.</p>',
					tags: ["pricing"],
				},
				{
					id: "fees-why-expensive",
					q: "Why is therapy so expensive?",
					a: "<p>Therapy is an investment in your mental health and well-being. It involves specialized training, ongoing education, and dedicated time before, during, and after sessions to provide quality care. We offer a limited number of reduced-fee slots and can help connect you with other options if needed.</p>",
					tags: ["pricing", "access"],
				},
				{
					id: "fees-verify-coverage",
					q: "How do I verify my coverage?",
					a: '<p>Call your insurance provider and ask about your out-of-network mental health benefits, including the allowed amount in dollars, not just a percentage, since many insurers calculate reimbursement from their own internal rate rather than from our session fee. Our <a href="/verifying-your-insurance-benefits">insurance benefits guide</a> walks through exactly what to ask and includes a downloadable checklist.</p>',
					tags: ["verify", "insurance"],
				},
				{
					id: "fees-reimbursement",
					q: "How does reimbursement work after each session?",
					a: '<p>After each session, we provide a detailed superbill that you submit to your insurance company for reimbursement. The amount you receive back depends on your specific plan, and the only reliable way to know your number in advance is to ask your insurer directly. Our <a href="/verifying-your-insurance-benefits">insurance benefits guide</a> explains the full process step by step.</p>',
					tags: ["reimbursement", "insurance"],
				},
			],
		},
		{
			id: "kap",
			title: "Ketamine-Assisted Psychotherapy (KAP)",
			items: [
				{
					id: "kap-appropriate",
					q: "Is Ketamine-Assisted Psychotherapy (KAP) right for everyone?",
					a: "<p>No, KAP is not appropriate for everyone. Like any therapeutic modality, it is effective when used in the right context with careful consideration. KAP may be a helpful tool for those with treatment-resistant symptoms and who are open to exploring their inner experience in an altered state. This is assessed together during intake and preparation. It is not a one-size-fits-all solution.</p>",
					tags: ["kap", "suitability"],
				},
				{
					id: "kap-fix-me",
					q: "Will ketamine fix me?",
					a: "<p>No single tool or treatment can fix a person, because you are not broken to begin with. Healing is not linear and does not come from a single experience or insight. Ketamine, when used safely and integrated in therapy, can support new perspectives, but it is not a cure-all. What matters most is how you work with the experience.</p>",
					tags: ["kap", "expectations"],
				},
				{
					id: "kap-why-offer",
					q: "Why do you offer KAP if you already use other therapies?",
					a: "<p>People are complex, and no single approach works for everyone all the time. KAP is one tool among many that we draw from to meet individual needs. While we use therapies like CBT, IFS, and mindfulness, sometimes accessing insight or memory in a different state of consciousness can be helpful. Our goal is to respond to what is needed, integrating across modalities as appropriate.</p>",
					tags: ["kap", "integrative"],
				},
			],
		},
		{
			id: "service-area",
			title: "Service Area & Access",
			items: [
				{
					id: "service-where",
					q: "Where do you offer therapy?",
					a: '<p>CALM is licensed to provide therapy across 43 U.S. states and jurisdictions, including New York, New Jersey, and Pennsylvania. Our practice is East Coast based and all sessions are offered online via secure video conferencing. See our <a href="/where-we-serve">Where We Serve page</a> to check your state.</p>',
					tags: ["service-area", "psypact", "virtual", "access"],
				},
			],
		},
	],
};

export default function FaqPage() {
	return (
		<main id="main-content">
			<FAQ faqConfig={faqConfig} />
		</main>
	);
}
