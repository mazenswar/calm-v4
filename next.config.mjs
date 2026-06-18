/** @type {import('next').NextConfig} */
const projectRoot = new URL(".", import.meta.url).pathname;

const nextConfig = {
	reactStrictMode: true,

	outputFileTracingRoot: projectRoot,

	turbopack: {
		root: projectRoot,
	},

	// Next/Image: allow Sanity CDN (project images)
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: "/images/**",
			},
		],
		// Added 430 and 660 to the default bucket list to better match
		// mobile hero rendering at ~371-400px CSS width / high-DPR phones
		// (Lighthouse flagged 17KB waste on the home hero at 750w).
		// Everything from 640 up is untouched, so desktop image
		// selection should be unaffected.
		deviceSizes: [430, 640, 660, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},

	async redirects() {
		return [
			{
				source: "/specialities/:slug*",
				destination: "/specialties/:slug*",
				permanent: true,
			},
		];
	},

	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{
						key: "Permissions-Policy",
						value: [
							"accelerometer=()",
							"camera=()",
							"geolocation=()",
							"gyroscope=()",
							"magnetometer=()",
							"microphone=()",
							"payment=()",
							"usb=()",
						].join(", "),
					},
				],
			},
		];
	},
};

export default nextConfig;
