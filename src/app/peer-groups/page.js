import { generateMeta } from "../../../config/metadata";
import CardGrid from "../components/sections/cardGrid/CardGrid";
import PageHero from "../components/sections/pageHero/PageHero";

// META ----------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Peer Groups for Clinicians",
	description:
		"CALM Therapy offers small, no-cost peer consultation groups for clinicians. Learn about our current group and how to apply.",
	path: "/peer-groups",
});

// CONFIG ----------------------------------------------------------------------

const pageHeroConfig = {
	eyebrow: null,
	heading: "Peer Groups",
	subheading: "These groups are intended for clinicians only.",
	image: null,
	align: "left",
};

const cardGridConfig = {
	id: "groups",
	classNames: "blockTint",
	heading: "Why We Offer Peer Groups",
	subheading:
		"Our peer groups grew out of a simple observation: many consultation spaces leave certain clinicians feeling like the only ones in the room who share their perspective or experience. We created these small, collegial, no-cost groups so clinicians can bring their full selves, including their cultural context and identity, into conversations about clinical work.",
	cta: null,
	cards: [
		{
			id: "bipoc",
			title: "BIPOC Group",
			description:
				"A small, monthly virtual peer consultation group for BIPOC clinicians (clinicians of color) based on the East Coast who work with anxiety disorders, OCD, and complex trauma.",
			href: "/peer-groups/bipoc",
		},
	],
};

export default function PeerGroupsPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<CardGrid cardGridConfig={cardGridConfig} />
		</main>
	);
}
