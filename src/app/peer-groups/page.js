import CardGrid from "../components/sections/cardGrid/CardGrid";
import PageHero from "../components/sections/pageHero/PageHero";

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
	heading: "Groups",
	subheading: null,
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
