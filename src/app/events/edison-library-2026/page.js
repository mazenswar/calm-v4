import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import EventHeader from "../components/eventHeader/EventHeader";
import EventMap from "../components/eventMap/EventMap";

const eventHeaderConfig = {
	status: "past",
	title: "Understanding Anxiety",
	subtitle: "A free community workshop",
	dateText: "Friday, April 24, 2026 · 2:00 to 3:00 PM EST",
	location: {
		name: "Edison Public Library",
		mapHref: "https://maps.app.goo.gl/92ZBHycdUsGFeKTw7",
	},
	libraryListingHref: "https://edisonpubliclibrary.libnet.info/event/15807724",
	calendarHref:
		"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Understanding+Anxiety+and+How+It+Works&dates=20260424T140000/20260424T150000&details=A+free+community+workshop+presented+by+CALM+Therapy.+More+details:+https://www.calmtherapy.center/events/edison-library-2026+https://edisonpubliclibrary.libnet.info/event/15807724&location=1907+Oak+Tree+Road+Suite+102+Edison+NJ+08820",
	footerNote:
		"This event is free and open to the public. No registration required. Open to adults 18 and up.",
	partnerLogo: {
		src: "/images/events/edison-public-library.png",
		alt: "Edison Public Library",
		href: "https://edisonpubliclibrary.org/",
	},
};

const detailsConfig = {
	id: "what-to-expect",
	classNames: "blockTint",
	heading: "What to Expect",
	paragraphs: [
		"Anxiety is not a flaw. In many ways, given the world we live in, it makes complete sense. This workshop starts there.",
		"In this free one-hour session, Dr. Tanya Singh will offer a grounded introduction to anxiety, what it is, how it shows up in the mind and body, and what it actually means to manage it. We will look at common myths about anxiety, why some of what we have been taught about calming down does not work, and what a different relationship with anxiety can look like.",
		"The session will cover a range of practical approaches. We will explore how our thoughts shape the anxiety experience and how reframing can shift that. We will also spend time with somatic tools you can use in the moment, including somatic sensing and awareness practices that help you notice where anxiety lives in your body and learn to stay with it rather than fight it. These are not breathing exercises. They are tools for building a sense of internal safety and present-moment grounding when anxiety is running high.",
		"The goal is not to eliminate anxiety but to understand it, work with it, and change your relationship to it over time. If you leave feeling like what you are experiencing goes beyond what a workshop can address, Dr. Singh will also speak to when further support might be worth exploring.",
	],
	list: null,
	cta: {
		text: "Meet Tanya Singh, PhD",
		href: "/about#meet-the-founder",
		variant: "secondary",
	},
	image: null,
};

const eventMapConfig = {
	heading: "Directions",
	embedTitle:
		"Google Maps location of Edison Public Library at 1907 Oak Tree Road, Edison NJ",
	embedSrc:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.585867262968!2d-74.36430052353555!3d40.5728217461235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b700ff655555%3A0x2bc54b4df10ebac6!2s1907%20Oak%20Tree%20Rd%20%23102%2C%20Edison%2C%20NJ%2008820!5e0!3m2!1sen!2sus!4v1772650813661!5m2!1sen!2sus",
};

export default function EdisonLibraryEventPage() {
	return (
		<main id="main-content">
			<EventHeader eventHeaderConfig={eventHeaderConfig} />
			<TwoColumn twoColumnConfig={detailsConfig} />
			<EventMap eventMapConfig={eventMapConfig} />
		</main>
	);
}
