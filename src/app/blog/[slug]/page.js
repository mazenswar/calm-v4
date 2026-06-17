// blog/[slug]/page.js
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { postBySlugQuery } from "../../../../lib/sanity.queries";
import { urlFor } from "../../../../lib/sanity.image";
import "./style.scss";
import ShareButton from "./ShareButton";

// FUNC ------------------------------------------------------------------------

function getBaseUrl() {
	return (
		process.env.NEXT_PUBLIC_SITE_URL ||
		(process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "http://localhost:3000")
	);
}

async function groqFetch(query, params) {
	const res = await fetch(`${getBaseUrl()}/api/groq`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query, params }),
		next: { revalidate: 60 },
	});
	if (!res.ok) throw new Error(`GROQ proxy error: ${res.status}`);
	const json = await res.json();
	if (!json.ok) throw new Error(json.error || "Unknown GROQ proxy error");
	return json.data;
}

export const revalidate = 60;

function getRefDimensions(ref) {
	if (typeof ref !== "string") return null;
	const m = ref.match(/-(\d+)x(\d+)-/);
	if (!m) return null;
	const w = parseInt(m[1], 10);
	const h = parseInt(m[2], 10);
	if (!Number.isFinite(w) || !Number.isFinite(h) || w === 0 || h === 0)
		return null;
	return { width: w, height: h, aspectRatio: w / h };
}

function formatDate(iso) {
	try {
		const d = new Date(iso || Date.now());
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		}).format(d);
	} catch {
		return "";
	}
}

const ptComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
		h2: ({ children }) => <h2 className="h2">{children}</h2>,
		h3: ({ children }) => <h3 className="h3">{children}</h3>,
		blockquote: ({ children }) => (
			<blockquote className="pt-blockquote">{children}</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => <ul className="pt-ul">{children}</ul>,
		number: ({ children }) => <ol className="pt-ol">{children}</ol>,
	},
	listItem: {
		bullet: ({ children }) => <li className="pt-li">{children}</li>,
		number: ({ children }) => <li className="pt-li">{children}</li>,
	},
	marks: {
		em: ({ children }) => <em className="pt-em">{children}</em>,
		strong: ({ children }) => <strong className="pt-strong">{children}</strong>,
		code: ({ children }) => <code className="pt-code">{children}</code>,
		link: ({ children, value }) => {
			const href = value?.href || "#";
			const isExt = /^https?:\/\//i.test(href);
			return (
				<a
					href={href}
					target={isExt ? "_blank" : undefined}
					rel={isExt ? "noopener noreferrer" : undefined}
					aria-label={isExt ? `${children} (opens in a new tab)` : undefined}
					className="pt-link"
				>
					{children}
				</a>
			);
		},
	},
	types: {
		image: ({ value }) => {
			const ref = value?.asset?._ref;
			if (!ref) return null;
			const dims = getRefDimensions(ref) || {
				width: 1600,
				height: 900,
				aspectRatio: 16 / 9,
			};
			const src = urlFor(value)
				.width(Math.min(1600, dims.width))
				.quality(80)
				.url();
			return (
				<figure className="pt-figure">
					<div
						className="pt-figure__media"
						style={{
							position: "relative",
							width: "100%",
							aspectRatio: `${dims.width} / ${dims.height}`,
						}}
					>
						<Image
							src={src}
							alt={value?.alt || ""}
							fill
							sizes="(min-width: 1024px) 900px, 100vw"
						/>
					</div>
					{value?.caption && (
						<figcaption className="pt-figcaption">{value.caption}</figcaption>
					)}
				</figure>
			);
		},
	},
};

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = await groqFetch(postBySlugQuery, { slug });
	const base = getBaseUrl();
	const url = `${base}/blog/${slug}`;
	const title = post?.seoTitle || post?.title || "CALM Therapy Blog";
	const description =
		post?.seoDescription ||
		post?.excerpt ||
		"Thoughtful notes on care, clarity, and growth from CALM Therapy.";
	const ogRef = post?.mainImage?.asset?._ref || post?.mainImage?.ref;
	let ogUrl = ogRef
		? urlFor({ _type: "image", asset: { _ref: ogRef } })
				.width(1200)
				.height(630)
				.fit("crop")
				.quality(80)
				.url()
		: post?.mainImage?.url || null;
	if (!ogUrl) ogUrl = `${base}/social-share.jpg`;
	const published = post?.publishedAt || post?._createdAt || null;
	const authorName = post?.author?.name;
	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
			type: "article",
			publishedTime: published || undefined,
			authors: authorName ? [authorName] : undefined,
			images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogUrl],
		},
	};
}

export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	const post = await groqFetch(postBySlugQuery, { slug });
	const pageUrl = `${getBaseUrl()}/blog/${slug}`;

	if (!post) {
		return (
			<main id="main-content">
				<section className="block">
					<div className="block__content container">
						<p>Post not found.</p>
					</div>
				</section>
			</main>
		);
	}

	const heroRef = post.mainImage?.asset?._ref || post.mainImage?.ref;
	const heroDims = heroRef
		? getRefDimensions(heroRef)
		: post.mainImage?.dims || null;

	let heroSrc = null;
	if (heroRef) {
		heroSrc = urlFor({ _type: "image", asset: { _ref: heroRef } })
			.width(1600)
			.quality(80)
			.url();
	} else if (post.mainImage?.url) {
		heroSrc = post.mainImage.url;
	}

	return (
		<main id="main-content" className="blog__page">
			<section className="block" aria-labelledby="blog-post-heading">
				<div className="block__content container">
					<article>
						<header className="stack">
							<h1 id="blog-post-heading">{post.title}</h1>
							{post.excerpt && <p className="muted">{post.excerpt}</p>}

							<div className="post-meta">
								<div className="post-meta__author">
									{post?.author?.image?.asset?._ref && (
										<div className="post-meta__avatar">
											<Image
												src={urlFor(post.author.image)
													.width(96)
													.height(96)
													.fit("crop")
													.quality(80)
													.url()}
												alt={post?.author?.name || "Author"}
												width={48}
												height={48}
											/>
										</div>
									)}
									<div className="post-meta__byline">
										{post?.author?.name && (
											<div className="post-meta__by">By {post.author.name}</div>
										)}
										{(post?.publishedAt || post?._createdAt) && (
											<time
												className="post-meta__date muted"
												dateTime={post.publishedAt || post._createdAt}
											>
												{formatDate(post.publishedAt || post._createdAt)}
											</time>
										)}
									</div>
								</div>

								<ShareButton
									url={pageUrl}
									title={post.title}
									text={post.excerpt}
								/>
							</div>

							{heroSrc && heroDims && (
								<div className="post-hero">
									<div
										className="post-hero__media"
										style={{
											position: "relative",
											width: "100%",
											aspectRatio: `${heroDims.width} / ${heroDims.height}`,
										}}
									>
										<Image
											src={heroSrc}
											alt={post.mainImage?.alt || ""}
											fill
											sizes="(min-width: 1024px) 1100px, 100vw"
											priority
										/>
									</div>
								</div>
							)}
						</header>

						{post.body && (
							<div className="prose">
								<PortableText value={post.body} components={ptComponents} />
							</div>
						)}
					</article>
				</div>
			</section>
		</main>
	);
}
