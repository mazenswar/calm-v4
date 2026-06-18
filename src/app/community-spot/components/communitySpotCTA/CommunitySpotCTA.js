import FadeUp from "@/app/components/ui/fadeUp/FadeUp";
import "./communityspotcta.scss";
import Button from "@/app/components/ui/Button";

export default function CommunitySpotCTA({ communitySpotCtaConfig }) {
	const { isOpen, formUrl, classNames = "" } = communitySpotCtaConfig;

	return (
		<section
			className={`block community-spot-cta ${classNames}`.trim()}
			id="community-spot-cta"
		>
			<div className="block__content container">
				<FadeUp as="div" className="community-spot-cta__inner">
					{isOpen ? (
						<>
							<h2>Ready to Apply?</h2>
							<p>
								Tell us a little about yourself and what you are hoping to work
								on. We will be in touch soon.
							</p>
							<Button href={formUrl} text="Apply Now" external={true} />
						</>
					) : (
						<>
							<h2>Apply for the Waiting List</h2>
							<p>
								This spot is currently filled. You can still complete the same
								application form, and we will keep it on file. When the spot
								opens again, we reach out to the applicants we think would be a
								good fit, generally in the order applications were received.
								Please know this may be a few months. If you are in immediate
								need, we encourage you to explore resources like{" "}
								<a
									href="https://openpathcollective.org"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Open Path Collective (opens in a new tab)"
								>
									Open Path Collective
								</a>{" "}
								for affordable therapy options.
							</p>
							<Button
								href={formUrl}
								text="Complete the Application"
								external={true}
							/>
						</>
					)}
				</FadeUp>
			</div>
		</section>
	);
}
