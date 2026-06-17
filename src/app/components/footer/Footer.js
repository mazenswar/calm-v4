import Link from "next/link";
import Image from "next/image";
import "./footer.scss";

const mission = {
	prefix: "Virtual integrative therapy for thoughtful adults in",
	linkText: "43 states and jurisdictions",
	linkHref: "/where-we-serve",
	detail: "East Coast based, grounded in care and clarity.",
};

const inclusion = {
	statement:
		"Committed to inclusion and respect for all people across gender, race, ethnicity, and identity.",
	image: {
		src: "/images/footer/diversity.webp",
		alt: "",
		width: 68,
		height: 68,
	},
};

const directories = {
	heading: "Trusted Partners & Directories",
	logos: [
		{
			label: "Journey Clinical",
			href: "https://www.journeyclinical.com",
			src: "/badges/jc.png",
		},
		{
			label: "Asian Mental Health Collective",
			href: "https://www.asianmhc.org",
			src: "/badges/asianmhc.png",
		},
	],
	zencareBadge: {
		title: "Zencare Therapist Badge",
		src: "https://webassets.zencare.co/badges/therapist_turquoise.png",
		href: "https://zencare.co/provider/therapist/tanya-singh",
		width: 70,
		height: 24,
	},
};

const memberships = {
	heading: "Professional Memberships",
	logos: [
		{
			label: "New Jersey Psychological Association",
			href: "https://psychologynj.org",
			src: "/badges/njpa.png",
		},
		{
			label: "New York Psychological Association",
			href: "https://nyspa.org",
			src: "/badges/nyspa.png",
		},
		{
			label: "Anxiety and Depression Association of America",
			href: "https://adaa.org",
			src: "/badges/adaa.png",
		},
	],
};

const legalLinks = [
	{ label: "Accessibility", href: "/accessibility" },
	{ label: "Privacy Policy", href: "/privacy-policy" },
];

const copyright = {
	name: "CALM Therapy",
	creditText: "Designed by Binswar",
	creditHref: "https://binswar.com",
};

function LogoRow({ logos }) {
	return (
		<ul className="footer__logo-row" role="list">
			{logos.map((logo) => (
				<li key={logo.label}>
					<a
						href={logo.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${logo.label} (opens in a new tab)`}
						className="footer__logo-link"
					>
						<Image
							src={logo.src}
							alt={logo.label}
							width={160}
							height={32}
							className="footer__logo-img"
						/>
					</a>
				</li>
			))}
		</ul>
	);
}

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__main">
				<div className="container footer__grid">
					{/* Mission + inclusion */}
					<div className="footer__col footer__col--mission">
						<p className="footer__mission">
							{mission.prefix}{" "}
							<Link href={mission.linkHref} className="footer__mission-link">
								{mission.linkText}
							</Link>
							.
						</p>
						<p className="footer__mission-detail">{mission.detail}</p>

						<div className="footer__inclusion">
							{inclusion.image && (
								<Image
									src={inclusion.image.src}
									alt={inclusion.image.alt}
									width={inclusion.image.width}
									height={inclusion.image.height}
									className="footer__inclusion-icon"
								/>
							)}
							<p className="footer__inclusion-text">{inclusion.statement}</p>
						</div>
					</div>

					{/* Directories */}
					<div className="footer__col">
						<p className="footer__col-label">{directories.heading}</p>
						<LogoRow logos={directories.logos} />

						{directories.zencareBadge && (
							<a
								href={directories.zencareBadge.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="View our Zencare therapist profile (opens in a new tab)"
								className="footer__zencare-badge"
							>
								<img
									src={directories.zencareBadge.src}
									alt="Zencare Therapist Badge"
									width={directories.zencareBadge.width}
									height={directories.zencareBadge.height}
								/>
							</a>
						)}
					</div>

					{/* Memberships */}
					<div className="footer__col">
						<p className="footer__col-label">{memberships.heading}</p>
						<LogoRow logos={memberships.logos} />
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="footer__bottombar" aria-label="Legal and copyright">
				<div className="container footer__bottombar-inner">
					<p className="footer__copy">
						© {year} {copyright.name}. All rights reserved.{" "}
						{copyright.creditHref && (
							<a
								href={copyright.creditHref}
								className="footer__link"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${copyright.creditText} (opens in a new tab)`}
							>
								{copyright.creditText}
							</a>
						)}
					</p>

					{legalLinks.length > 0 && (
						<ul className="footer__legal" role="list">
							{legalLinks.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className="footer__link">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</footer>
	);
}
