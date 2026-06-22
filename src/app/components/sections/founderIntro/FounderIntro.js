import Image from "next/image";
import FadeUp from "../../ui/fadeUp/FadeUp";
import "./founderintro.scss";

export default function FounderIntro({ founderIntroConfig }) {
	const {
		id = "founder-intro",
		classNames = "",
		heading,
		paragraphs,
		image,
	} = founderIntroConfig;

	return (
		<section
			className={`block founder-intro ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<FadeUp as="div" className="founder-intro__header">
					{heading && <h2 id={`${id}-heading`}>{heading}</h2>}
				</FadeUp>

				<div className="founder-intro__body">
					{image && (
						<FadeUp as="figure" className="founder-intro__figure" delay={100}>
							<Image
								src={image.src}
								alt={image.alt}
								width={image.width}
								height={image.height}
								sizes="(max-width: 768px) 92vw, 380px"
							/>
						</FadeUp>
					)}

					<FadeUp as="div" className="founder-intro__prose" delay={50}>
						{paragraphs.map((para, i) => (
							<p key={i}>{para}</p>
						))}
					</FadeUp>
				</div>
			</div>
		</section>
	);
}
