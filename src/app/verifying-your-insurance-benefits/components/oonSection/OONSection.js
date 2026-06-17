"use client";
import { useState, useRef } from "react";
import FadeUp from "../../../components/ui/fadeUp/FadeUp";
import StaggerGrid from "../../../components/ui/staggerGrid/StaggerGrid";
import "./oonsection.scss";

export default function OONSection({ oonConfig }) {
	const {
		id = "oon",
		classNames = "",
		heading,
		intro,
		warning,
		glossary,
		checkBenefits,
		reimbursementSteps,
	} = oonConfig;

	const [copyStatus, setCopyStatus] = useState("idle");
	const statusTimeoutRef = useRef(null);

	async function handleCopy() {
		const textToCopy = checkBenefits.questions
			.map((item) => item.question)
			.join("\n");

		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopyStatus("copied");
		} catch {
			setCopyStatus("error");
		}

		if (statusTimeoutRef.current) clearTimeout(statusTimeoutRef.current);
		statusTimeoutRef.current = setTimeout(() => setCopyStatus("idle"), 3000);
	}

	return (
		<section
			className={`block oon-section ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<FadeUp as="div" className="oon-section__header">
					<h2 id={`${id}-heading`}>{heading}</h2>
					{intro && <p className="oon-section__intro">{intro}</p>}
				</FadeUp>

				{/* ── Warning: visually distinct, the honesty moment ── */}
				{warning && (
					<FadeUp as="div" className="oon-section__warning" delay={50}>
						<h3 className="oon-section__warning-heading">{warning.heading}</h3>
						{warning.paragraphs.map((para, i) => (
							<p key={i} className="oon-section__warning-text">
								{para}
							</p>
						))}
					</FadeUp>
				)}

				{/* ── Glossary ── */}
				{glossary && (
					<FadeUp as="div" className="oon-section__glossary" delay={100}>
						<h3 className="oon-section__subheading">{glossary.heading}</h3>
						<dl className="oon-section__glossary-list">
							{glossary.items.map((item, i) => (
								<div key={i} className="oon-section__glossary-item">
									<dt className="oon-section__glossary-term">{item.term}</dt>
									<dd className="oon-section__glossary-definition">
										{item.definition}
									</dd>
								</div>
							))}
						</dl>
					</FadeUp>
				)}

				{/* ── Check Your Benefits ── */}
				<FadeUp as="div" className="oon-section__check" delay={150}>
					<h3 className="oon-section__subheading">{checkBenefits.heading}</h3>
					<p className="oon-section__check-intro">{checkBenefits.intro}</p>

					<div className="oon-section__questions-card">
						<ul className="oon-section__questions" role="list">
							{checkBenefits.questions.map((item, i) => (
								<li key={i} className="oon-section__question">
									<p className="oon-section__question-text">{item.question}</p>
									<p className="oon-section__question-explanation">
										{item.explanation}
									</p>
								</li>
							))}
						</ul>

						<div className="oon-section__questions-actions">
							<button
								type="button"
								onClick={handleCopy}
								className="btnSecondary"
								aria-describedby="copy-status"
							>
								Copy questions
							</button>

							{checkBenefits.pdfHref && (
								<a
									href={checkBenefits.pdfHref}
									download
									className="btnGhost"
									aria-label="Download insurance questions checklist as PDF"
								>
									Download as PDF
								</a>
							)}
						</div>

						<p
							id="copy-status"
							className="oon-section__copy-status"
							role="status"
							aria-live="polite"
						>
							{copyStatus === "copied" && "Questions copied to clipboard."}
							{copyStatus === "error" &&
								"Could not copy automatically. Please select and copy the text above."}
						</p>
					</div>
				</FadeUp>

				{/* ── Reimbursement Steps ── */}
				{reimbursementSteps && (
					<FadeUp as="div" className="oon-section__steps" delay={200}>
						<h3 className="oon-section__subheading">
							{reimbursementSteps.heading}
						</h3>

						<StaggerGrid
							as="ol"
							itemAs="li"
							className="oon-section__steps-list"
							baseDelay={250}
							stagger={100}
						>
							{reimbursementSteps.steps.map((step, index) => (
								<div key={step.id} className="oon-section__step">
									<div className="oon-section__step-number" aria-hidden="true">
										{index + 1}
									</div>
									<div className="oon-section__step-content">
										<h4 className="oon-section__step-title">{step.title}</h4>
										<p className="oon-section__step-description">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</StaggerGrid>
					</FadeUp>
				)}
			</div>
		</section>
	);
}
