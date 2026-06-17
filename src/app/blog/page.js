import Image from "next/image";
import Link from "next/link";
import { POSTS_PAGE_SIZE, postsListQuery } from "../../../lib/sanity.queries";
import { client } from "../../../lib/sanity.client";
import { generateMeta } from "../../../config/metadata";
import "./style.scss";
import PageHero from "../components/sections/pageHero/PageHero";

// META -----------------------------------------------------------------------

export const metadata = generateMeta({
	title: "Blog | Insights on Anxiety, OCD & Integrative Therapy",
	description:
		"Essays and practical guidance on anxiety, OCD, perfectionism, ketamine-assisted psychotherapy, and steadying change, from the clinicians at CALM Therapy.",
	path: "/blog",
});
// VARS -----------------------------------------------------------------------
export const revalidate = 60;
// CONFIG -----------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Blog",
	heading: "Thoughtful notes on care, clarity, and growth",
	subheading:
		"Essays and practical guidance on anxiety, OCD, perfectionism, KAP, and steadying change. New posts are added regularly.",
	image: null,
	align: "left",
};

export default async function BlogIndexPage() {
	const posts = await client.fetch(
		postsListQuery,
		{ page: 0, size: POSTS_PAGE_SIZE },
		{ next: { revalidate: 60 } },
	);

	return (
		<main id="main-content" className="blog">
			<PageHero pageHeroConfig={pageHeroConfig} />

			<section
				className="block blog-list blockTint"
				aria-labelledby="blog-list-heading"
			>
				<div className="block__content container">
					<h2 id="blog-list-heading" className="sr-only">
						Blog posts
					</h2>
					{!posts?.length ? (
						<p className="muted">No posts yet. Check back soon.</p>
					) : (
						<ul role="list" className="posts">
							{posts.map((p) => {
								const slug = p.slug?.current ?? p.slug;
								const cover = p.mainImage?.url;

								return (
									<li className="post" key={p._id}>
										<article className="postCard">
											<div className="postCard__media" aria-hidden="true">
												{cover ? (
													<Image
														src={cover}
														alt=""
														fill
														sizes="(max-width: 768px) 100vw, 33vw"
														style={{ objectFit: "cover" }}
														priority={false}
													/>
												) : (
													<span aria-hidden="true" />
												)}
											</div>

											<div className="postCard__body">
												<h2 className="postCard__title">
													<Link
														href={`/blog/${slug}`}
														aria-label={`Read: ${p.title}`}
													>
														{p.title}
													</Link>
												</h2>

												{p.excerpt && (
													<p className="postCard__excerpt muted">{p.excerpt}</p>
												)}

												<span className="postCard__cta" aria-hidden="true">
													Read more →
												</span>
											</div>
										</article>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</section>
		</main>
	);
}
