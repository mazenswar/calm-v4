import React from "react";
import PageHero from "../components/sections/pageHero/PageHero";

const pageHeroConfig = {
	eyebrow: "Blog", // optional label above heading e.g. "Our Services"
	heading: "Thoughtful notes on care, clarity, and growth",
	subheading:
		"Essays and practical guidance on anxiety, OCD, perfectionism, KAP, and steadying change",
	image: null,
	// Optional image example:
	// image: {
	// 	src: "/images/community-img.jpg",
	// 	alt: "geometric network illustration",
	// 	width: 300,
	// 	height: 300,
	// },
	// illustration: <GeometricNetwork />,
	align: "left", // "left" or "center"
};

function Blog() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
		</main>
	);
}

export default Blog;
