// components/sections/hero/Hero.js
import Image from "next/image";
import Button from "../../ui/Button";
import "./hero.scss";
import FadeUp from "../../ui/fadeUp/FadeUp";

/* ── Main component ─────────────────────────────────────────── */

export default function Hero({ heroConfig }) {
	const img = heroConfig.images?.portrait;

	return (
		<section
			className="hero hero--split-contained block"
			aria-labelledby="hero-heading"
		>
			<div className="container hero__inner">
				<div className="hero__copy">
					<HeroCopy config={heroConfig} />
				</div>
				{img && (
					<div className="hero__media hero__media--circle">
						<Image
							src={img.src}
							alt={img.alt}
							width={500}
							height={500}
							priority
							sizes="(max-width: 768px) 90vw, 480px"
						/>
						{heroConfig.caption && <HeroCaption caption={heroConfig.caption} />}
					</div>
				)}
			</div>
		</section>
	);
}

/* ── Shared sub-components ──────────────────────────────────── */

// HeroCopy renders the heading, eyebrow, subheading, and CTA buttons.
// The h1 carries id="hero-heading" so the section can reference it
// via aria-labelledby="hero-heading".

function HeroCopy({ config }) {
	return (
		<>
			{config.eyebrow && (
				<FadeUp as="p" delay={0} className="hero__eyebrow label">
					{config.eyebrow}
				</FadeUp>
			)}

			<FadeUp
				as="h1"
				delay={config.eyebrow ? 100 : 0}
				className="hero__heading"
				id="hero-heading"
			>
				{config.heading}
			</FadeUp>

			{config.subheading && (
				<FadeUp
					as="p"
					delay={config.eyebrow ? 200 : 100}
					className="hero__subheading lead"
				>
					{config.subheading}
				</FadeUp>
			)}

			{config.cta && (
				<FadeUp
					as="div"
					delay={config.eyebrow ? 300 : 200}
					className="hero__actions"
				>
					<Button
						text={config.cta.text}
						href={config.cta.href}
						variant={config.cta.variant ?? "primary"}
						external={config.cta.external ?? false}
					/>
					{config.ctaSecondary && (
						<Button
							text={config.ctaSecondary.text}
							href={config.ctaSecondary.href}
							variant={config.ctaSecondary.variant ?? "secondary"}
							external={config.ctaSecondary.external ?? false}
						/>
					)}
				</FadeUp>
			)}
		</>
	);
}

// HeroCaption renders the therapist name and title below the portrait image.

function HeroCaption({ caption }) {
	return (
		<div className="hero__caption">
			{caption.name && <p className="hero__caption-name">{caption.name}</p>}
			{caption.title && <p className="hero__caption-title">{caption.title}</p>}
		</div>
	);
}
