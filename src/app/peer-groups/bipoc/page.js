import FAQ from "@/app/components/sections/faq/FAQ";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import SimpleCTA from "@/app/components/sections/simpleCTA/SImpleCTA";
import TwoColumn from "@/app/components/sections/twoColumn/TwoColumn";
import { generateMeta } from "../../../../config/metadata";
// META ---------------------------------------------------------------------------

export const metadata = generateMeta({
	title: "BIPOC Peer Consultation Group for Clinicians",
	description:
		"A small, monthly virtual peer consultation group for BIPOC clinicians working with anxiety, OCD, and complex trauma. Facilitated by Dr. Tanya Singh.",
	path: "/peer-groups/bipoc",
});

// CONFIG -------------------------------------------------------------------------
const pageHeroConfig = {
	eyebrow: "Peer Groups",
	heading: "BIPOC Group",
	subheading:
		"A small, monthly virtual peer consultation group for BIPOC clinicians, based on the East Coast, who work with anxiety disorders, OCD, and complex trauma.",
	image: null,
	align: "left",
};

const whyConfig = {
	id: "why-this-group",
	classNames: "blockTint",
	heading: "Why This Group Exists",
	paragraphs: [
		"This group was created in response to a gap Dr. Tanya Singh noticed in many consultation spaces, where she was often one of the only clinicians of color in the room. The intention is to create a space where BIPOC clinicians can bring their full perspectives, experiences, and cultural contexts into discussions about clinical work.",
		"The group recognizes that BIPOC clinicians often navigate considerations that are not always visible within traditional Western psychological frameworks. Members bring diverse cultural, professional, and personal perspectives, creating opportunities for richer discussion and learning. Topics discussed so far have included decolonizing psychology, the experience of working as a BIPOC clinician in predominantly non-BIPOC settings, therapist-client matching, cultural influences on treatment, authenticity, adaptation, identity, and the ways culture shapes both clients and clinicians.",
	],
	list: null,
	cta: null,
	image: null,
};

const sessionConfig = {
	id: "what-a-session-looks-like",
	classNames: "",
	heading: "What a Session Looks Like",
	paragraphs: [
		"The group is facilitated by Dr. Tanya Singh. While Tanya helps organize meetings and hold the overall structure of the group, the space is intentionally collaborative. Sessions typically begin with brief introductions, particularly when new clinicians are present. Members bring case consultation questions, reflections on their work, and topics related to multicultural psychology and the experience of being a BIPOC clinician.",
		"When no cases are presented, the group engages in broader discussions related to clinical work, cultural identity, professional experiences, and other topics relevant to BIPOC clinicians. These conversations often evolve organically and lead to deeper reflection and learning. The direction of each meeting is shaped by the needs and interests of the clinicians attending.",
	],
	list: null,
	cta: null,
	image: null,
};

const faqConfig = {
	id: "bipoc-faq",
	classNames: "blockTint",
	heading: "Group Logistics",
	subheading: null,
	contact: null,
	searchable: false,
	showToc: false,
	groups: [
		{
			id: "logistics",
			title: null,
			items: [
				{
					id: "selection",
					q: "How are new members selected?",
					a: "<p>Interested clinicians are invited to submit a brief description of their clinical work, interests, and what they hope to gain from the group. Prospective members also complete a brief form reviewing the group's values and expectations. The goal is not to create a highly selective process, but rather to ensure alignment around the group's purpose and values.</p>",
				},
				{
					id: "spots",
					q: "How many spots are available?",
					a: "<p>The group is intentionally kept small to support meaningful discussion and participation. While approximately six to eight clinicians are currently involved, attendance varies from month to month. Additional spots may be available depending on current participation levels. The group generally aims to remain under ten clinicians.</p>",
				},
				{
					id: "ongoing",
					q: "Is this an ongoing group?",
					a: "<p>Yes. The group is ongoing and does not operate in fixed terms. Clinicians may join after the group has begun and are not expected to start at a particular time.</p>",
				},
				{
					id: "attendance",
					q: "Is attendance required every month?",
					a: "<p>Attendance is encouraged but not mandatory. The hope is that clinicians attend regularly enough to build relationships, trust, and continuity within the group. At the same time, the realities of clinical work are understood, and members are welcome to attend when their schedules allow.</p>",
				},
				{
					id: "recorded",
					q: "Are sessions recorded?",
					a: "<p>No. Sessions are confidential, unrecorded, and intended to provide a safe space for consultation and discussion.</p>",
				},
				{
					id: "how-long",
					q: "How long has the group been running?",
					a: "<p>The group has been meeting for several months and is currently the only active peer consultation group being offered.</p>",
				},
			],
		},
	],
};

const simpleCtaConfig = {
	id: "bipoc-cta",
	classNames: "",
	text: "This is a no-fee group with limited spots in order to maintain a space that allows for meaningful discussion.",
	cta: {
		text: "Complete the Interest Form",
		href: "https://forms.gle/kGVUrDU9Zay2jeSp8",
		variant: "primary",
		external: true,
	},
};

export default function PeerBipocPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<TwoColumn twoColumnConfig={whyConfig} />
			<TwoColumn twoColumnConfig={sessionConfig} />
			<FAQ faqConfig={faqConfig} />
			<SimpleCTA simpleCtaConfig={simpleCtaConfig} />
		</main>
	);
}
