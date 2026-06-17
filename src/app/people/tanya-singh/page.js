import CredentialTimeline from "@/app/components/sections/credentialTimeline/CredentialsTimeline";
import CTABanner from "@/app/components/sections/ctaBanner/CTABanner";
import PageHero from "@/app/components/sections/pageHero/PageHero";
import PublicationsList from "@/app/components/sections/publicationsList/PublicationsList";

const pageHeroConfig = {
	eyebrow: "Director and Founder, CALM Therapy",
	heading: "Dr. Tanya Singh, PhD",
	subheading:
		"Licensed Clinical Psychologist specializing in anxiety, OCD and related disorders, complex trauma, and life transitions.",
	image: {
		src: "/images/about/tsn.webp",
		alt: "Dr. Tanya Singh, Licensed Clinical Psychologist",
		width: 600,
		height: 600,
	},
	align: "left",
};

const credentialsConfig = {
	id: "credentials",
	classNames: "blockTint",
	heading: "Training & Credentials",
	intro:
		"Tanya's training spans some of the country's leading academic and clinical institutions.",
	groups: [
		{
			id: "experience",
			title: "Clinical Experience",
			dated: true,
			items: [
				{
					dateRange: "2026 — Present",
					role: "Director and Founder",
					institution: "CALM Therapy, Iselin, NJ",
				},
				{
					dateRange: "2024 — 2026",
					role: "Director and Co-Founder",
					institution:
						"Center for Anxiety and Life Management (CALM Therapy), Erie, PA",
				},
				{
					dateRange: "2022 — 2025",
					role: "Licensed Clinical Psychologist",
					institution: "CBT Center for Anxiety and OCD, Lower Gwynedd, PA",
				},
			],
		},
		{
			id: "training",
			title: "Clinical Training",
			dated: true,
			items: [
				{
					dateRange: "2021 — 2022",
					role: "Doctoral Psychology Intern",
					institution:
						"Rutgers University Behavioral Health Care, New Brunswick, NJ",
				},
				{
					dateRange: "2020 — 2021",
					role: "Advanced Practicum Student",
					institution:
						"Harvard University / Massachusetts General Hospital, Boston, MA",
				},
			],
		},
		{
			id: "education",
			title: "Education",
			dated: true,
			items: [
				{
					dateRange: "2017 — 2022",
					role: "PhD, Clinical Psychology",
					institution:
						"Montclair State University, Department of Psychology, Montclair, NJ",
				},
				{
					dateRange: "2019",
					role: "MA, Clinical Psychology",
					institution: "Montclair State University, Department of Psychology",
				},
				{
					dateRange: "2013 — 2015",
					role: "MA, Psychology in Education",
					institution: "Teachers College, Columbia University, New York, NY",
				},
			],
		},
		{
			id: "memberships",
			title: "Professional Memberships",
			dated: false,
			items: [
				"New Jersey Psychological Association",
				"New York Psychological Association",
			],
		},
	],
};

const publicationsConfig = {
	id: "publications",
	classNames: "",
	heading: "Selected Publications",
	publications: [
		{
			label: null,
			citationParts: [
				{ text: "Greenberg, J., ", emphasis: null },
				{ text: "Singh, T.", emphasis: "bold" },
				{
					text: ", et al. (2021). A live video mind-body treatment to prevent persistent symptoms following mild traumatic brain injury: protocol for a mixed methods study. ",
					emphasis: null,
				},
				{ text: "JMIR Research Protocols", emphasis: "italic" },
				{ text: ", 10(1).", emphasis: null },
			],
			href: "https://www.researchprotocols.org/2021/1/e25746/",
			ariaLabel:
				"Greenberg, Singh et al. 2021, live video mind-body treatment study in JMIR Research Protocols",
		},
		{
			label: null,
			citationParts: [
				{ text: "Singh, T. &", emphasis: "bold" },
				{
					text: " Reyes-Portillo, J.A. (2020). Using Technology to Train Clinicians in Evidence-based Treatment. ",
					emphasis: null,
				},
				{ text: "Psychiatric Services", emphasis: "italic" },
				{ text: ", 71(4), 364-377.", emphasis: null },
			],
			href: "https://psychiatryonline.org/doi/full/10.1176/appi.ps.201900186",
			ariaLabel:
				"Singh and Reyes-Portillo 2020, Using Technology to Train Clinicians in Psychiatric Services",
		},
		{
			label: null,
			citationParts: [
				{ text: "Chaudhury, S. R., ", emphasis: null },
				{ text: "Singh, T.", emphasis: "bold" },
				{
					text: ", Burke, A., Stanley, B., Mann, J. J., Grunebaum, M., Sublette, M.E. & Oquendo, M. A. (2016). Clinical correlates of planned and unplanned suicide attempts. ",
					emphasis: null,
				},
				{
					text: "The Journal of Nervous and Mental Disease",
					emphasis: "italic",
				},
				{ text: ", 204(11), 806-811.", emphasis: null },
			],
			href: "https://www.sciencedirect.com/science/article/abs/pii/S0165032717320700",
			ariaLabel:
				"Chaudhury, Singh et al. 2016, Clinical correlates of suicide attempts in Journal of Nervous and Mental Disease",
		},
		{
			label: "Book Chapter",
			citationParts: [
				{ text: "Szlyk, H. S., ", emphasis: null },
				{ text: "Singh, T.", emphasis: "bold" },
				{
					text: ", & Reyes-Portillo, J. A. (2022). Technology-enhanced interventions for youth suicide prevention. In ",
					emphasis: null,
				},
				{ text: "Handbook of Youth Suicide Prevention", emphasis: "italic" },
				{ text: ".", emphasis: null },
			],
			href: "https://link.springer.com/chapter/10.1007/978-3-030-82465-5_22",
			ariaLabel:
				"Book chapter, Szlyk, Singh, Reyes-Portillo 2022, Technology-enhanced interventions for youth suicide prevention",
		},
		{
			label: "Book Chapter",
			citationParts: [
				{ text: "Stanley, B. & ", emphasis: null },
				{ text: "Singh, T.", emphasis: "bold" },
				{
					text: " (2017). Differential diagnosis of Borderline Personality Disorder. In ",
					emphasis: null,
				},
				{
					text: "Primer of Borderline Personality Disorder",
					emphasis: "italic",
				},
				{ text: ". Oxford University Press.", emphasis: null },
			],
			href: "https://global.oup.com/academic/product/borderline-personality-disorder-9780199997510?cc=us&lang=en&",
			ariaLabel:
				"Book chapter, Stanley and Singh 2017, Differential diagnosis of Borderline Personality Disorder, Oxford University Press",
		},
	],
};

const ctaBannerConfig = {
	heading: "Complete Academic Curriculum Vitae",
	classNames: "blockTint",
	subheading:
		"For a comprehensive view of Dr. Singh's research, publications, conference presentations, and complete professional history, review her full academic curriculum vitae.",
	variant: "brand",
	cta: {
		text: "View Full Resume (PDF)",
		href: "/cv/tanya-singh_cv.pdf",
		variant: "primary",
	},
	secondaryCta: null,
};

export default function TanyaSinghCredentialsPage() {
	return (
		<main id="main-content">
			<PageHero pageHeroConfig={pageHeroConfig} />
			<CredentialTimeline credentialTimelineConfig={credentialsConfig} />
			<PublicationsList publicationsListConfig={publicationsConfig} />
			<CTABanner ctaBannerConfig={ctaBannerConfig} />
		</main>
	);
}
