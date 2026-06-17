import CardGrid from "../components/sections/cardGrid/CardGrid";
import PageHero from "../components/sections/pageHero/PageHero";

const pageHeroConfig = {
	eyebrow: null,
	heading: "Specialties",
	subheading:
		"We work with people navigating anxiety, OCD, complex trauma, and other deeply personal challenges. Explore our areas of focus below.",
	image: null,
	align: "left",
};

const cardGridConfig = {
	id: "specialties",
	classNames: "blockTint",
	heading: null,
	subheading: null,
	cta: null,
	cards: [
		{
			id: "anxiety-ocd",
			title: "Anxiety, OCD & Related Conditions",
			description:
				"Evidence-based therapy for anxiety, OCD, and related conditions, with approaches like ERP, i-CBT, and ACT.",
			href: "/specialties/anxiety-ocd-related-conditions",
		},
		{
			id: "gifted-adults",
			title: "Gifted Adults",
			description:
				"Support for the intensity, depth, and complexity that often come with being a highly capable, perceptive adult.",
			href: "/specialties/gifted-adults",
		},
		{
			id: "complex-trauma",
			title: "Complex Trauma",
			description:
				"When the past feels present, old fear or shame can shape today. We pair grounding skills with deeper work to rebuild safety, clarity, and self-compassion.",
			href: "/specialties/complex-trauma",
		},
		{
			id: "treatment-resistant",
			title: "Treatment-Resistant Conditions",
			description:
				"When previous treatment has not helped enough, we look deeper and try a different path forward.",
			href: "/specialties/treatment-resistant-conditions",
		},
		{
			id: "spiritual-transformative",
			title: "Spiritual & Transformative Experiences",
			description:
				"Support for integrating profound or disorienting experiences without pathologizing what is meaningful to you.",
			href: "/specialties/spiritual-transformative-experiences",
		},
		{
			id: "kap",
			title: "Ketamine-Assisted Psychotherapy (KAP)",
			description:
				"A guided process combining ketamine sessions with therapy to support healing, growth, and relief from emotional stuckness.",
			href: "/kap",
		},
	],
};

export default function SpecialtiesPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<CardGrid cardGridConfig={cardGridConfig} />
		</main>
	);
}
