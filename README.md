# CALM Therapy v4 (calm-v4)

Project-specific README for the CALM Therapy website. This supplements the
Binswar starter README, which documents the underlying component library,
design system, and starter conventions. Read both: the starter README for
how things work mechanically, this one for what CALM actually is and how
this specific build has diverged from or extended that starter.

---

## What CALM Therapy Is

CALM Therapy, LLC is a virtual, private-pay integrative mental health
practice. Tanya Singh, PhD, a licensed clinical psychologist, is the sole
founder and Clinical Director, and handles all clinical work. The practice
serves clients across 43 states and jurisdictions via direct licensure
(NY, NJ, PA) and PSYPACT, is East Coast based, and specializes in anxiety,
OCD, complex trauma, and related conditions.

CALM's philosophy centers on reconnection and deeper healing rather than
symptom management, serving a niche of emotionally and cognitively gifted,
high-functioning adults who have often been underserved by standard
approaches. See `IdealClient.md` and `Branding & Messaging Guide.md` for
the full voice, tone, and audience documentation that should inform any
copy written for this site.

CALM Therapy, LLC is a New Jersey entity. It was previously operating
under the name Center for Anxiety and Life Management; that name is no
longer accurate and should not appear anywhere in code, copy, or config.

## Who Built This and Why This README Exists

This website is built and maintained by Binswar, an external agency
contracted by CALM Therapy to handle web development, design, and related
technical work. Binswar is not a founder, partner, or owner of CALM
Therapy. There is exactly one founder: Tanya Singh, PhD. Any prior
references in this codebase, comments, or documentation suggesting
otherwise (for example, language implying a co-founder or operational
partner role) are outdated and incorrect.

This distinction matters for how this README and any AI assistant
context should be used: this document describes a client project Binswar
is building, not Binswar's own product or agency offering. Do not
conflate the two. Generic Binswar agency-pitch language (e.g. anything
describing "Binswar builds custom websites for therapists...") that
appears anywhere in this codebase as a leftover from the starter template
is a bug, not a feature, and should be treated as unfinished scaffolding
needing replacement, not as accurate content.

## Relationship to the Binswar Starter

This project began as a duplicate of the Binswar starter/showroom
template (see the other README in this repo for the starter's full
documentation: stack, design system, component library, accessibility
standards, delivery checklist). Significant portions of that starter's
documentation still apply directly: the SCSS token system, the
`generateMeta()` / `generateJsonLd()` metadata helpers, the component
config patterns, and the accessibility standard are all in active use
here largely as designed.

What has changed or been extended specifically for CALM:

- The DesignPanel and showroom-only tooling have been removed; this is a
  delivered, production site, not a live client-presentation tool.
- The token system has been extended slightly beyond the generic starter
  defaults (see Token Renumbering below).
- Several net-new shared components were built specifically for this
  project that are not part of the generic starter and may be worth
  porting back into the starter if they prove broadly useful:
  `ResourceGrid`, `CredentialSummary`, `CredentialTimeline`,
  `PublicationsList`, `StateSearch`, `EventGrid`, `LegalContent`,
  `SimpleCTA`, `RateCards`, `OONSection`.
- The Fees & Insurance flow was deliberately split into two pages (see
  Page Architecture below) rather than using a single page with an
  interactive calculator.

## Business Structure Notes (for content/copy decisions, not legal advice)

- CALM Therapy, LLC is correctly structured with Tanya Singh, PhD as sole
  owner. An earlier PA PLLC structure was found to be invalid (PLLCs in
  PA require all members to be licensed in the relevant profession) and
  was dissolved and reformed as the current NJ LLC.
- Binswar/Mazen has no ownership stake and is not a clinician. Any
  content implying otherwise (bios, About page copy, footer credits,
  schema.org structured data fields) should describe Binswar only as the
  site's designer/developer, never as practice leadership or clinical
  staff.
- HIPAA: Binswar's access to this codebase and any operational tooling is
  documented separately and does not constitute access to PHI. The site
  itself does not collect PHI; all client-facing booking now routes
  through Zencare (public scheduling) with SimplePractice used as the
  backend EHR for active clients. See Booking & Platforms below.

## Booking & Platforms

This is a frequent source of stale references, worth checking carefully
whenever editing copy or links:

- **Zencare** is the public-facing platform for scheduling consultations.
  All "Schedule a Consultation" / booking CTAs across the site should
  link to Tanya's Zencare provider profile
  (`https://zencare.co/provider/therapist/tanya-singh`), not to an
  internal `/contact` page (no such page exists or is planned) and not
  directly to SimplePractice.
- **SimplePractice** is used internally as the EHR for active clients
  (clinical notes, billing, records) once someone has become a client.
  It is not the public booking entry point. Privacy Policy and
  Accessibility Statement copy should reflect this division accurately:
  Zencare for the initial public booking touchpoint, SimplePractice for
  ongoing clinical/billing management.
- There is no `/contact` page. Do not reintroduce links to it.

## Page Architecture Notes

A few structural decisions worth knowing before adding or restructuring
pages:

- **Specialties** is organized around six niches (anxiety/OCD, complex
  trauma, treatment-resistant conditions, spiritual/transformative
  experiences, gifted adults, KAP) at `/specialties/[niche-slug]`, with
  `/specialties` itself as a simple overview hub. Older condition-specific
  pages (`/specialties/ocd`, `/specialties/gad`, `/specialties/pd`,
  `/specialties/sad`, `/specialties/bdd`, etc.) exist as separate, deeper
  pages and are intentionally preserved for existing SEO equity. Both the
  niche pages and the older condition pages are live; this is deliberate,
  not duplication to be cleaned up, but worth checking deliberately if
  the structure is ever revisited.
- **Fees & Insurance** is split into two pages: `/fees-and-insurance`
  (rates, why private-pay, kept light, in the navbar) and
  `/verifying-your-insurance-benefits` (the out-of-network reimbursement
  explainer, call script, and process steps; not in the navbar, only
  linked from the fees page). This split exists because insurers
  reimburse a percentage of their own internal "allowed amount," not the
  billed rate, which is usually undisclosed in advance, an interactive
  percentage calculator was deliberately removed as overpromising
  precision in favor of an educational explainer instead.
- **Community Spot** no longer uses MailerLite for its waitlist. Both the
  "open" and "filled" states point to the same Google Form (covered under
  the practice's Google Workspace BAA); filled-state copy explains
  applications are kept on file and contacted in order when a spot opens.
- **Peer Groups** currently has one live group (BIPOC). The hub page's
  `CardGrid` carries both the explanatory intro and the card in one
  section (heading/subheading on the CardGrid itself) rather than a
  separate intro section, to avoid excess white space with only one
  group listed.
- **Legal pages** (`/accessibility`, `/privacy-policy`) both use the
  shared `LegalContent` component and are both set to `noIndex: true` in
  their metadata. Both also use `client.fetch`-free static content, no
  Sanity dependency.
- **Blog** runs on Sanity.io, deployed in this same repo (not a separate
  blog repo). `lib/sanity.client.js`, `sanity.server.js`,
  `sanity.image.js`, `sanity.queries.js`, and the `/api/groq`,
  `/api/revalidate`, `/api/sanity-ping` routes are all in use as
  documented inline. The `/api/groq` indirection (routing reads through
  an internal API route rather than calling Sanity directly from every
  page) is deliberate, intended to separate fetch logic from page
  components, not leftover debugging scaffolding, with the exception of
  `/api/sanity-ping` and parts of `/api/groq`'s GET handler, which are
  genuinely diagnostic and worth removing or gating post-launch.
- Blog categories are planned but not yet implemented; the GROQ query
  already projects `categories[]->{title, slug}` in anticipation, but
  this requires confirming the Sanity Studio schema actually has a
  category document type and that posts are tagged before any frontend
  filtering UI is built.

## Token Renumbering

The original CALM design (pre-starter-migration) used `--brand-7`
(`#fcf3e8`, warm cream) and `--brand-8` (`#7f5a830d`, a 10% tint of
brand-1) for the blog's soft backgrounds. Neither exists by those names
in the starter's token system. They were re-added with continuous
numbering as `--brand-6` and `--brand-7` respectively in `_tokens.scss`,
same hex values, just renumbered to avoid a gap. Any future blog or
soft-background work should use these rather than reinventing equivalent
values.

## Background Alternation Convention

This is a recurring source of bugs worth stating explicitly: the hero
section on any page is always the plain/untinted background. The section
immediately following the hero is always `blockTint`. From there,
sections alternate strictly by source-order position (plain, tint, plain,
tint), regardless of component type, CardGrid, FAQ, TwoColumn, CTABanner,
SimpleCTA all participate in the same alternation based on position, not
on any per-component default. When adding or reordering sections on any
page, recount the full sequence from the hero down rather than assuming
a given component type has a fixed background.

## Copy & Content Rules (enforced consistently across this project)

- No em dashes, no contractions, no fluffy or performative language, no
  generic tips-style content, no call-to-action on every single post,
  captions stay concise.
- "Hello" preferred over "Hi there" in professional correspondence.
- All copy should be filtered through the ideal client lens in
  `IdealClient.md`: intelligent, emotionally deep, quietly carrying
  shame, underserved by standard approaches. Generic mental health
  content that could have been written by or for anyone is off-brand.
- Service area should be referred to as "43 states and jurisdictions,"
  with East Coast based mentioned when contextually relevant.
- KAP content avoids medical claims (cure, treat, eliminate) and follows
  the existing KAP page's tone: clarity and intention over hype.

## Open Items Not Yet Resolved

- Footer partner/membership logos (Journey Clinical, Asian Mental Health
  Collective, NJPA, NYPA, ADAA) are implemented using a white-pill
  treatment (`var(--color-surface)` background, `var(--radius-xl)`,
  asymmetric padding) rather than a color-inversion filter, which did not
  render well across logos of varying detail. Zencare's badge is
  implemented separately via their own provided embed image (colored
  version, not the white version, for visual consistency with the
  treated logos), linking to the same Zencare provider profile URL used
  elsewhere.
- No written permission/brand guidelines were found for Journey Clinical,
  Asian Mental Health Collective, or ADAA logo usage (Zencare has an
  explicit, sanctioned badge program). Risk was assessed as low given
  existing paying/member relationships with each, worst case being a
  takedown request, but informal email confirmation from each
  organization is still pending as of this writing.
- Vercel project has been split into its own dedicated account (under the
  CALM Therapy email) separate from Binswar's personal Vercel account.
  DNS cutover from the prior host to this new deployment, plus
  decommissioning the old project, is still pending.
- A pure filename-casing bug (`pageHero.scss` tracked in Git vs.
  `pagehero.scss` imported in code) caused a Vercel build failure that did
  not reproduce locally on case-insensitive filesystems. Worth a periodic
  sanity check for similar casing mismatches elsewhere in the codebase
  before assuming "builds locally" means "will build on Vercel."
- `next.config.js` explicitly sets both `outputFileTracingRoot` and
  `turbopack.root` to the same computed project root to prevent Vercel's
  own build-time config injection from silently overriding one of them
  with a mismatched value.
- `--color-border-secondary`, referenced in the blog's `ShareButton`
  styling, is not defined anywhere in `_tokens.scss`. Low priority,
  pre-existing gap, not yet fixed.
- Blog category filtering is designed for in the data layer but not yet
  built on the frontend; blocked on Sanity Studio schema/tagging work.
