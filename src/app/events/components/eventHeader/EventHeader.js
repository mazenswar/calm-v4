import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/app/components/ui/fadeUp/FadeUp";
import "./eventheader.scss";

export default function EventHeader({ eventHeaderConfig }) {
	const {
		status,
		title,
		subtitle,
		dateText,
		location,
		libraryListingHref,
		calendarHref,
		footerNote,
		partnerLogo,
	} = eventHeaderConfig;

	return (
		<section
			className="block event-header"
			aria-labelledby="event-header-heading"
		>
			<div className="block__content container">
				<FadeUp as="div" className="event-header__logos">
					<Link href="/" aria-label="CALM Therapy, go to homepage">
						<Image
							src="/logo/logo-hr.webp"
							alt=""
							priority
							width={200}
							height={67}
						/>
					</Link>
					{partnerLogo && (
						<a
							href={partnerLogo.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${partnerLogo.alt} (opens in a new tab)`}
						>
							<Image
								src={partnerLogo.src}
								alt={partnerLogo.alt}
								priority
								width={200}
								height={70}
							/>
						</a>
					)}
				</FadeUp>

				<FadeUp as="div" className="event-header__status" delay={50}>
					<span
						className={`event-header__badge event-header__badge--${status}`}
					>
						{status === "upcoming" ? "Upcoming" : "Past"}
					</span>
				</FadeUp>

				<FadeUp as="div" className="event-header__title" delay={100}>
					<h1 id="event-header-heading">{title}</h1>
					{subtitle && <p className="event-header__subtitle">{subtitle}</p>}
				</FadeUp>

				<FadeUp as="p" className="event-header__date" delay={150}>
					{dateText}
				</FadeUp>

				<FadeUp as="div" className="event-header__details" delay={200}>
					<div className="event-header__detail-line">
						<span className="event-header__icon" aria-hidden="true">
							📍
						</span>
						<a
							href={location.mapHref}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${location.name} on Google Maps (opens in a new tab)`}
						>
							{location.name}
						</a>
					</div>

					{libraryListingHref && (
						<div className="event-header__detail-line">
							<span className="event-header__icon" aria-hidden="true">
								🔗
							</span>
							<a
								href={libraryListingHref}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="View library event listing (opens in a new tab)"
							>
								View Library Listing
							</a>
						</div>
					)}

					{calendarHref && (
						<div className="event-header__detail-line">
							<span className="event-header__icon" aria-hidden="true">
								📅
							</span>
							<a
								href={calendarHref}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Add ${title} to Google Calendar (opens in a new tab)`}
							>
								Add to Calendar
							</a>
						</div>
					)}
				</FadeUp>

				{footerNote && (
					<FadeUp as="p" className="event-header__footer-note" delay={250}>
						{footerNote}
					</FadeUp>
				)}
			</div>
		</section>
	);
}
