import LegalContent from "../components/sections/legalContent/LegalContent";
import { generateMeta } from "../../../config/metadata";
// META --------------------------------------------------------------------
export const metadata = generateMeta({
	title: "Accessibility Statement",
	description:
		"Read CALM Therapy's commitment to web accessibility, including the measures we have taken to meet WCAG 2.1 Level AA standards and how to share accessibility feedback.",
	path: "/accessibility",
	noIndex: true,
});
// CONFIG -------------------------------------------------------------------
const legalContentConfig = {
	id: "accessibility",
	heading: "Accessibility Statement",
	lastUpdated: "June 17, 2026",
	sections: [
		{
			id: "commitment",
			heading: "Our Commitment",
			paragraphs: [
				"CALM Therapy is committed to ensuring this website is accessible to people with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and work continuously to improve the accessibility of our site.",
			],
		},
		{
			id: "measures",
			heading: "Measures We Have Taken",
			paragraphs: [
				"We have taken the following steps to support accessibility on this website:",
			],
			list: [
				"Structured content with proper heading hierarchy",
				"Descriptive alternative text for images",
				"Keyboard navigable interface throughout",
				"Sufficient color contrast across text and UI elements",
				"Accessible labels on all interactive elements",
				"Skip navigation link to bypass repeated content",
				"Responsive design that works across devices and screen sizes",
				"Respect for user motion preferences",
			],
			listStyle: "check",
		},
		{
			id: "limitations",
			heading: "Known Limitations",
			paragraphs: [
				"Some third-party components on this site, including our appointment booking system (SimplePractice), are provided by external vendors and may not fully meet the same accessibility standards. We have chosen SimplePractice as our booking platform because it is HIPAA-compliant and designed for healthcare providers. If you experience difficulty with the booking process, please contact us directly and we will assist you.",
			],
		},
		{
			id: "feedback",
			heading: "Feedback and Contact",
			paragraphs: [
				'We welcome feedback on the accessibility of this website. If you experience any barriers or have suggestions for improvement, please contact us at <a href="mailto:info@calmtherapy.center" aria-label="Send email to info@calmtherapy.center">info@calmtherapy.center</a>. We aim to respond to accessibility feedback within two business days.',
			],
		},
		{
			id: "standards",
			heading: "Standards",
			paragraphs: [
				'This website aims to conform to the <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer" aria-label="Web Content Accessibility Guidelines 2.1 (opens in a new tab)">Web Content Accessibility Guidelines (WCAG) 2.1</a> at Level AA. These guidelines explain how to make web content more accessible to people with disabilities.',
			],
		},
	],
};

export default function AccessibilityPage() {
	return <LegalContent legalContentConfig={legalContentConfig} />;
}
