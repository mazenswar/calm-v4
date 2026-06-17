import PageHero from "@/app/components/sections/pageHero/PageHero";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";

const pageHeroConfig = {
	eyebrow: "Peer Groups",
	heading: "BIPOC Group",
	subheading:
		"A small, monthly virtual peer consultation group for BIPOC clinicians, based on the East Coast, who work with anxiety disorders, OCD, and complex trauma.",
	image: null,
	align: "left",
};

const detailsConfig = {
	id: "bipoc-details",
	classNames: "",
	heading: "Group Details",
	paragraphs: [
		"The group is a 75-minute collegial space, not supervision, focused on case consultation and thoughtful discussion of the clinical and cultural dimensions that can arise in this work. It is intended to support connection, learning, and the exchange of diverse perspectives among clinicians.",
		"This is a no-fee group with limited spots in order to maintain a space that allows for meaningful discussion.",
	],
	list: null,
	cta: {
		text: "Complete the Interest Form",
		href: "https://forms.gle/kGVUrDU9Zay2jeSp8",
		variant: "primary",
		external: true,
	},
	image: null,
};

export default function PeerBipocPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={detailsConfig} />
		</main>
	);
}
