import FadeUp from "@/app/components/ui/fadeUp/FadeUp";
import "./eventmap.scss";

export default function EventMap({ eventMapConfig }) {
	const { heading, embedSrc, embedTitle } = eventMapConfig;

	return (
		<section className="block event-map" aria-labelledby="event-map-heading">
			<div className="block__content container">
				<FadeUp as="h2" id="event-map-heading">
					{heading}
				</FadeUp>
				<FadeUp as="div" className="event-map__embed" delay={100}>
					<iframe
						title={embedTitle}
						src={embedSrc}
						height="450"
						style={{ border: 0, width: "100%" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</FadeUp>
			</div>
		</section>
	);
}
