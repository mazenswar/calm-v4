import { generateMeta } from "../../../config/metadata";
import LegalContent from "../components/sections/legalContent/LegalContent";

// META -------------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Privacy Policy",
	description:
		"CALM Therapy's privacy policy, including how we handle website data, analytics, and client information collected through our HIPAA-compliant booking platform.",
	path: "/privacy-policy",
	noIndex: true,
});
// CONFIG ------------------------------------------------------------------------------
const legalContentConfig = {
	id: "privacy-policy",
	heading: "Privacy Policy",
	lastUpdated: "June 4, 2026",
	intro:
		'CALM Therapy LLC (CALM Therapy, we, us, or our) respects your privacy. This Privacy Policy describes how we handle information collected through our website, <a href="https://calmtherapy.center" target="_blank" rel="noopener noreferrer" aria-label="CALM Therapy website (opens in a new tab)">calmtherapy.center</a>. We currently operate in 43 states through a combination of direct licensure and participation in PSYPACT, an interstate compact that allows licensed psychologists to practice telepsychology across state lines.',
	sections: [
		{
			id: "information-we-collect",
			heading: "Information We Collect",
			paragraphs: [
				"We do not collect personal information through this website. When you choose to schedule a consultation, you are directed to our Zencare booking page, where you may voluntarily provide your name, contact information, and other relevant details to request an appointment or consultation.",
			],
		},
		{
			id: "analytics-and-tracking",
			heading: "Analytics and Tracking",
			paragraphs: [
				"We use Google Analytics in a privacy-conscious way. We have configured our analytics setup to avoid tracking personal data and do not use advertising cookies or personalization features. Our configuration denies consent for ad_user_data, ad_personalization, and ad_storage by default, while allowing analytics_storage only. This ensures your browsing data is not used for targeted advertising. Google Analytics may collect basic usage data such as your browser type, device, pages visited, and time spent on pages.",
				'We also use Google Tag Manager to track a single interaction event, when a visitor clicks the booking button, for the purpose of understanding how many visitors proceed to schedule a consultation. No personal information is captured by this event. You can learn more about how Google handles this data <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" aria-label="Google Privacy Policy (opens in a new tab)">here</a>.',
			],
		},
		{
			id: "cookies",
			heading: "Cookies",
			paragraphs: [
				"We do not use cookies directly. However, Google Analytics may use cookies to provide analytics functionality. You can manage cookie settings in your browser.",
			],
		},
		{
			id: "data-sharing-and-security",
			heading: "Data Sharing and Security",
			paragraphs: [
				"We do not sell, rent, or share your personal information with third parties. Initial appointment requests are scheduled through Zencare. Once you become a client, your clinical records, billing, and ongoing care are managed through SimplePractice, a HIPAA-compliant electronic health record platform. Ongoing communication for scheduling adjustments may also occur via email or text, depending on client preferences. We use Google Workspace for email communications, which is covered under a signed Business Associate Agreement (BAA) in compliance with HIPAA requirements. No client data is stored directly on our website.",
			],
		},
		{
			id: "childrens-privacy",
			heading: "Children's Privacy",
			paragraphs: [
				"Our services and website are intended for adults and older adolescents (age 16 and up). We do not knowingly collect personal information from individuals under the age of 16.",
			],
		},
		{
			id: "changes-to-this-policy",
			heading: "Changes to This Policy",
			paragraphs: [
				"We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised last updated date.",
			],
		},
		{
			id: "contact-us",
			heading: "Contact Us",
			paragraphs: [
				'If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@calmtherapy.center" aria-label="Send email to info@calmtherapy.center">info@calmtherapy.center</a>.',
			],
		},
	],
};

export default function PrivacyPolicyPage() {
	return <LegalContent legalContentConfig={legalContentConfig} />;
}
