// app/robots.js
import site from "../../config/site";

export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/accessibility", "/privacy-policy"],
		},
		sitemap: `${site.url}/sitemap.xml`,
	};
}
