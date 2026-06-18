import FadeUp from "@/app/components/ui/fadeUp/FadeUp";
import "./communityspotstatus.scss";
import Button from "@/app/components/ui/Button";

export default function CommunitySpotStatus({ communitySpotStatusConfig }) {
	const { isOpen, formUrl, classNames = "" } = communitySpotStatusConfig;

	return (
		<section
			className={`block community-spot-status ${classNames}`.trim()}
			aria-labelledby="community-spot-status-heading"
			id="community-spot-status"
		>
			<div className="block__content container">
				<FadeUp as="div" className="community-spot-status__inner">
					{isOpen ? (
						<>
							<h2 id="community-spot-status-heading">
								This spot is currently open
								<span aria-hidden="true"> ✳️</span>
							</h2>
							<p>
								We are accepting applications now. If this feels like the right
								fit for you, we would love to hear from you.
							</p>
							<Button href={formUrl} text="Apply" external={true} />
						</>
					) : (
						<>
							<h2 id="community-spot-status-heading">
								This spot is currently filled
								<span aria-hidden="true"> 🟡</span>
							</h2>
							<p>
								You can still complete the application form below. We keep
								completed applications on file, and when the spot opens, we
								reach out to the people we think would be a good fit.
							</p>
							<Button
								url={formUrl}
								text="Complete the Application"
								newWindow={true}
							/>
						</>
					)}
				</FadeUp>
			</div>
		</section>
	);
}
