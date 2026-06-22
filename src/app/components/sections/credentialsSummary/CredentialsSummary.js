import FadeUp from "../../ui/fadeUp/FadeUp";
import Button from "../../ui/Button";
import "./credentialssummary.scss";

export default function CredentialSummary({ credentialSummaryConfig }) {
	const {
		id = "credential-summary",
		classNames = "",
		heading,
		intro,
		groups,
		footer,
	} = credentialSummaryConfig;

	return (
		<section
			className={`block credential-summary ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<FadeUp as="div" className="credential-summary__header">
					{heading && <h2 id={`${id}-heading`}>{heading}</h2>}
					{intro && <p className="credential-summary__intro">{intro}</p>}
				</FadeUp>

				<div className="credential-summary__groups">
					{groups.map((group, i) => (
						<FadeUp
							key={group.id}
							as="div"
							className="credential-summary__group"
							delay={100 + i * 100}
						>
							<h3 className="credential-summary__group-heading">
								{group.title}
							</h3>
							<p className="credential-summary__group-body">{group.body}</p>
						</FadeUp>
					))}
				</div>

				{footer && (
					<FadeUp
						as="div"
						className="credential-summary__footer"
						delay={100 + groups.length * 100}
					>
						{footer.text && (
							<p className="credential-summary__footer-text">{footer.text}</p>
						)}
						{footer.cta && (
							<Button
								text={footer.cta.text}
								href={footer.cta.href}
								variant={footer.cta.variant || "secondary"}
							/>
						)}
					</FadeUp>
				)}
			</div>
		</section>
	);
}
