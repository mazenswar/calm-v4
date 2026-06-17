import PageHero from "../components/sections/pageHero/PageHero";
import StateSearch from "./components/stateSearch/StateSearch";
import { STATES } from "./states-data";
import { serviceAreaSchema } from "./service-area-schema";

const pageHeroConfig = {
	eyebrow: null,
	heading: "Online Therapy Available in 43 U.S. States and Jurisdictions",
	subheading:
		"We provide virtual therapy to adults across the country, including clients in New York, New Jersey, and Pennsylvania through our direct licenses, and in 40 additional states and jurisdictions through PSYPACT authorization. Search below to see if we serve your state.",
	image: null,
	align: "left",
};

const HOME_STATES = [
	{ name: "New York", code: "NY" },
	{ name: "New Jersey", code: "NJ" },
	{ name: "Pennsylvania", code: "PA" },
];

const stateSearchConfig = {
	id: "states",
	classNames: "blockTint",
	homeStates: HOME_STATES,
	otherStates: STATES,
};

export default function WhereWeServePage() {
	return (
		<main id="main-content">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
			/>
			<PageHero pageHeroConfig={pageHeroConfig} />
			<StateSearch stateSearchConfig={stateSearchConfig} />
		</main>
	);
}
