import EventGrid from "../components/sections/eventGrid/EventGrid";
import PageHero from "../components/sections/pageHero/PageHero";

const pageHeroConfig = {
	eyebrow: null,
	heading: "Events",
	subheading: "Community workshops and events hosted by CALM Therapy.",
	image: null,
	align: "left",
};

const eventGridConfig = {
	id: "events",
	classNames: "blockTint",
	events: [
		{
			id: "edison-library-2026",
			name: "Understanding Anxiety",
			status: "past",
			location: "Edison Public Library",
			date: "Friday, April 24, 2026",
			time: "2:00 PM EST",
			href: "/events/edison-library-2026",
			logo: {
				src: "/images/events/edison-public-library.png",
				alt: "Edison Public Library",
			},
		},
	],
};

export default function EventsPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<EventGrid eventGridConfig={eventGridConfig} />
		</main>
	);
}
