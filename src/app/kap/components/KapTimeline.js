import FadeUp from "../../components/ui/fadeUp/FadeUp";
import "./kaptimeline.scss";

/* --- KAP TIMLINE CONFIG */

export const kapTimelineConfig = {
	id: "kap-timeline",
	classNames: "blockTint",
	heading: "Our KAP Process",
	subheading: "What to expect from start to finish",
	intro: [
		"The full KAP process typically takes place over the course of approximately six months, depending on your pace and schedule.",
		"If you are considering Ketamine-Assisted Psychotherapy (KAP) with us, here is how the process typically unfolds.",
	],
	steps: [
		{
			id: "step-foundation",
			number: "01",
			title: "Foundational Therapy Sessions",
			tags: ["Build rapport", "Assess safety", "Set intentions"],
			meta: "Minimum of 6 sessions (more if needed to establish safety and readiness)",
			bullets: [
				"Opportunity to strengthen the therapeutic relationship",
				"Space to build coping skills and deepen self-awareness before KAP",
			],
			nestedBullets: {
				label: "Preparation for ketamine work, including:",
				items: [
					"Clarifying intentions, hopes, and goals",
					"Exploring concerns, expectations, and safety planning",
					"Establishing grounding and coping tools",
					"Understanding the dosing process and set and setting",
				],
			},
			note: "After your third session, if KAP appears clinically appropriate, we will refer you to our medical partner, Journey Clinical, for a comprehensive evaluation.",
			link: null,
		},
		{
			id: "step-screening",
			number: "02",
			title: "Medical Screening",
			tags: ["Virtual prescriber"],
			meta: null,
			bullets: [
				{
					text: "Virtual consultation with %link% to review your medical and psychiatric history",
					link: {
						text: "Journey Clinical",
						href: "https://www.journeyclinical.com/patients",
					},
				},
				"If approved, ketamine lozenges are prescribed and shipped to your home",
				"Ongoing contact with Journey Clinical to adjust dosing or care as needed",
			],
			nestedBullets: null,
			note: null,
		},
		{
			id: "step-dosing",
			number: "03",
			title: "Dosing Sessions",
			tags: ["~2-hour session", "Therapist online", "8 sessions total"],
			meta: "Sessions are approximately 2 hours long",
			bullets: [
				"You will be in a quiet, comfortable setting with optional music or eye mask",
				"Your therapist will be present throughout to provide support and ensure safety",
				"A trusted support person must be present in your home, available if needed",
				"The first two dosing sessions are exploratory to find your optimal dose",
				"After this, you will meet again with Journey Clinical to confirm the dosage and receive your remaining prescription",
				"Clients typically complete eight dosing sessions in total, scheduled over several weeks",
				"In some cases, up to two in-home dosing sessions may be offered at the beginning of your KAP journey, discussed on a case-by-case basis",
			],
			nestedBullets: null,
			note: null,
		},
		{
			id: "step-integration",
			number: "04",
			title: "Integration Sessions",
			tags: ["45-min debrief", "Within 1-3 days", "Turn insights into action"],
			meta: "Integration is a vital part of the healing process. This is where insights become lasting change.",
			bullets: [
				"After each dosing session, we meet for at least one 45-minute integration session",
				"Typically scheduled within 24 to 72 hours when neuroplasticity is at its peak",
				"Make sense of emotional, somatic, or visual material",
				"Reflect on themes or breakthroughs that arise",
				"Connect the experience to your ongoing healing process",
				"Use tools like mindfulness, somatic practices, or creative reflection to deepen integration",
				"You will complete eight integration sessions, one after each dosing session",
			],
			nestedBullets: null,
			note: null,
		},
		{
			id: "step-followup",
			number: "05",
			title: "Follow-Up and Long-Term Care",
			tags: [
				"Booster every 6-8 weeks",
				"Maintenance sessions",
				"Safety check-ins",
			],
			meta: null,
			bullets: [
				"After completing your full KAP series, continued support is encouraged through therapy or booster dosing sessions every 6 to 8 weeks, if appropriate",
				"Many clients find benefit in occasional dosing sessions for maintenance or deepening work",
				"Continued care with your therapist and prescriber ensures ongoing alignment and safety",
			],
			nestedBullets: null,
			note: null,
		},
	],
};
/* ── Inline link renderer ───────────────────────────────────── */

function renderBullet(bullet) {
	if (typeof bullet === "string") return bullet;

	const parts = bullet.text.split("%link%");
	return (
		<>
			{parts[0]}
			<a
				href={bullet.link.href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${bullet.link.text} (opens in a new tab)`}
				className="kap-timeline__inline-link"
			>
				{bullet.link.text}
			</a>
			{parts[1]}
		</>
	);
}

/* ── Tag pill ───────────────────────────────────────────────── */

function Tag({ label }) {
	return (
		<span className="kap-timeline__tag" aria-label={label}>
			{label}
		</span>
	);
}

/* ── Single step ────────────────────────────────────────────── */

function TimelineStep({ step, index, total }) {
	const isLast = index === total - 1;

	return (
		<div
			className={`kap-timeline__step ${isLast ? "kap-timeline__step--last" : ""}`}
			id={step.id}
		>
			{/* Left: connector line + number */}
			<div className="kap-timeline__connector" aria-hidden="true">
				<div className="kap-timeline__number">{step.number}</div>
				{!isLast && <div className="kap-timeline__line" />}
			</div>

			{/* Right: content */}
			<FadeUp as="div" className="kap-timeline__body" delay={index * 100}>
				<div className="kap-timeline__main">
					{/* Left column: title + content */}
					<div className="kap-timeline__copy">
						<h3 className="kap-timeline__title">{step.title}</h3>

						{step.meta && <p className="kap-timeline__meta">{step.meta}</p>}

						{step.bullets?.length > 0 && (
							<ul className="kap-timeline__bullets" role="list">
								{step.bullets.map((bullet, i) => (
									<li key={i}>{renderBullet(bullet)}</li>
								))}
							</ul>
						)}

						{step.nestedBullets && (
							<ul className="kap-timeline__bullets" role="list">
								<li>
									{step.nestedBullets.label}
									<ul className="kap-timeline__nested" role="list">
										{step.nestedBullets.items.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</li>
							</ul>
						)}

						{step.note && <p className="kap-timeline__note">{step.note}</p>}
					</div>

					{/* Right column: tags */}
					{step.tags?.length > 0 && (
						<div
							className="kap-timeline__tags"
							aria-label="Key points for this step"
						>
							{step.tags.map((tag, i) => (
								<Tag key={i} label={tag} />
							))}
						</div>
					)}
				</div>
			</FadeUp>
		</div>
	);
}

/* ── Main component ─────────────────────────────────────────── */

export default function KapTimeline() {
	const {
		id = "kap-timeline",
		classNames = "",
		heading,
		subheading,
		intro,
		steps,
	} = kapTimelineConfig;

	return (
		<section
			className={`block kap-timeline ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<FadeUp as="div" className="kap-timeline__header">
					<h2 id={`${id}-heading`}>{heading}</h2>
					{subheading && (
						<p className="kap-timeline__subheading">{subheading}</p>
					)}
					{intro?.map((para, i) => (
						<p key={i} className="kap-timeline__intro">
							{para}
						</p>
					))}
				</FadeUp>

				<div
					className="kap-timeline__steps"
					role="list"
					aria-label="KAP process steps"
				>
					{steps.map((step, index) => (
						<div key={step.id} role="listitem">
							<TimelineStep step={step} index={index} total={steps.length} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
