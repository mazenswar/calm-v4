// app/sitemap.js
import { client } from "../../lib/sanity.client";
import { postSlugsQuery } from "../../lib/sanity.queries";
import site from "../../config/site";

export default async function sitemap() {
	const staticRoutes = [
		"",
		"/about",
		"/fees-and-insurance",
		"/verifying-your-insurance-benefits",
		"/faq",
		"/where-we-serve",
		"/kap",
		"/specialties",
		"/specialties/anxiety-ocd",
		"/specialties/ocd",
		"/specialties/gad",
		"/specialties/pd",
		"/specialties/sad",
		"/specialties/bdd",
		"/specialties/gifted-adults",
		"/specialties/complex-trauma",
		"/specialties/treatment-resistant",
		"/specialties/perfectionism",
		"/specialties/self-worth",
		"/specialties/spiritual-transformative-experiences",
		"/community-spot",
		"/events",
		"/events/edison-library-2026",
		"/peer-groups",
		"/peer-groups/bipoc",
		"/people/tanya-singh",
		"/blog",
	];

	const staticEntries = staticRoutes.map((route) => ({
		url: `${site.url}${route}`,
		lastModified: new Date(),
		changeFrequency: route === "" ? "weekly" : "monthly",
		priority: route === "" ? 1 : 0.7,
	}));

	let blogEntries = [];
	try {
		const slugs = await client.fetch(postSlugsQuery);
		blogEntries = (slugs || []).map((slug) => ({
			url: `${site.url}/blog/${slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		}));
	} catch (e) {
		console.error("Sitemap: failed to fetch blog slugs", e);
	}

	return [...staticEntries, ...blogEntries];
}
