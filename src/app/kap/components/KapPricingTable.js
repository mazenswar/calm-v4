import Button from "../../components/ui/Button";
import FadeUp from "../../components/ui/fadeUp/FadeUp";
import "./kapricingtable.scss";

function PriceRow({ row }) {
	return (
		<li className="kap-pricing__row">
			<div className="kap-pricing__row-main">
				<span className="kap-pricing__row-label">{row.label}</span>
				{row.value && (
					<span className="kap-pricing__row-value">{row.value}</span>
				)}
			</div>
			{row.subRows?.length > 0 && (
				<ul className="kap-pricing__subrows" role="list">
					{row.subRows.map((sub, i) => (
						<li key={i} className="kap-pricing__subrow">
							<span className="kap-pricing__row-label">{sub.label}</span>
							<span className="kap-pricing__row-value">{sub.value}</span>
						</li>
					))}
				</ul>
			)}
		</li>
	);
}

function PricingColumn({ column }) {
	return (
		<FadeUp as="div" className="kap-pricing__column" delay={100}>
			<div className="kap-pricing__column-header">
				<h3 className="kap-pricing__column-title">{column.title}</h3>
				<p className="kap-pricing__column-provider">{column.provider}</p>
			</div>
			{column.note && <p className="kap-pricing__column-note">{column.note}</p>}
			<ul className="kap-pricing__rows" role="list">
				{column.rows.map((row) => (
					<PriceRow key={row.id} row={row} />
				))}
			</ul>
			{column.footnote && (
				<p className="kap-pricing__footnote">{column.footnote}</p>
			)}
		</FadeUp>
	);
}

export const kapPricingConfig = {
	id: "kap-pricing",
	classNames: "",
	heading: "Investment",
	intro:
		"Ketamine-Assisted Psychotherapy involves both medical and therapeutic services. Below is a breakdown to help you understand the financial commitment and plan ahead.",
	columns: [
		{
			id: "therapy",
			title: "Therapy Costs",
			provider: "CALM Therapy",
			note: "All therapy sessions are billed directly through our practice. Some sessions may be reimbursable through out-of-network benefits and we provide superbills to support that process.",
			rows: [
				{
					id: "foundational",
					label: "Foundational therapy sessions (6 minimum)",
					value: "$250/session",
					subRows: null,
				},
				{
					id: "dosing",
					label: "Dosing sessions (8 total)",
					value: null,
					subRows: [
						{ label: "First hour", value: "$330" },
						{ label: "Additional time", value: "$165 flat" },
					],
				},
				{
					id: "integration",
					label: "Integration sessions (8 total)",
					value: "$250/session",
					subRows: null,
				},
			],
			footnote:
				"Most dosing sessions last 90 to 120 minutes. Insurers typically reimburse the first hour. Any time beyond that is usually out-of-pocket, so we cap it at a flat $165 instead of a second full-hour charge.",
		},
		{
			id: "medical",
			title: "Medical Costs",
			provider: "via Journey Clinical",
			note: "Journey Clinical is a separate medical provider that handles all evaluations and prescriptions related to ketamine. Some services may be covered by insurance depending on your state and provider.",
			rows: [
				{
					id: "consultation",
					label: "Initial medical consultation",
					value: "$250",
					subRows: null,
				},
				{
					id: "lozenges",
					label: "Ketamine lozenges (starter dose for 2 sessions)",
					value: "$97",
					subRows: null,
				},
				{
					id: "followup",
					label:
						"Follow-up medical evaluations (required at least once per quarter)",
					value: "$150",
					subRows: null,
				},
				{
					id: "refills",
					label: "Prescription refills (up to 6 doses)",
					value: "$163",
					subRows: null,
				},
			],
			footnote: null,
		},
	],
	summary: [
		{
			id: "s1",
			label: "Payment model",
			value: "Pay-as-you-go",
			note: "No upfront payment required",
		},
		{
			id: "s2",
			label: "Estimated total",
			value: "~$7,500",
			note: "Spread over approximately six months",
		},
		{
			id: "s3",
			label: "Insurance-ready superbills",
			value: null,
			note: "Out-of-network reimbursement up to 70%",
		},
	],
	cta: {
		text: "Learn more about fees and insurance",
		href: "/fees-and-insurance",
		variant: "secondary",
	},
};

export default function KapPricingTable() {
	const {
		id = "kap-pricing",
		classNames = "",
		heading,
		intro,
		columns,
		summary,
		cta,
	} = kapPricingConfig;

	return (
		<section
			className={`block kap-pricing ${classNames}`.trim()}
			aria-labelledby={`${id}-heading`}
			id={id}
		>
			<div className="block__content container">
				<FadeUp as="div" className="kap-pricing__header">
					<h2 id={`${id}-heading`}>{heading}</h2>
					{intro && <p className="kap-pricing__intro">{intro}</p>}
				</FadeUp>

				<div className="kap-pricing__grid">
					{columns.map((column) => (
						<PricingColumn key={column.id} column={column} />
					))}
				</div>

				{summary?.length > 0 && (
					<FadeUp as="div" className="kap-pricing__summary" delay={200}>
						{summary.map((item) => (
							<div key={item.id} className="kap-pricing__summary-item">
								{item.label && (
									<p className="kap-pricing__summary-label">{item.label}</p>
								)}
								{item.value && (
									<p className="kap-pricing__summary-value">{item.value}</p>
								)}
								{item.note && (
									<p className="kap-pricing__summary-note">{item.note}</p>
								)}
							</div>
						))}
					</FadeUp>
				)}

				{cta && (
					<FadeUp as="div" className="kap-pricing__cta" delay={300}>
						<Button
							text={cta.text}
							href={cta.href}
							variant={cta.variant ?? "secondary"}
							external={cta.external ?? false}
						/>
					</FadeUp>
				)}
			</div>
		</section>
	);
}
