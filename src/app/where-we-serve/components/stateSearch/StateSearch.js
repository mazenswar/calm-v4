"use client";
import { useState, useMemo } from "react";
import FadeUp from "@/app/components/ui/fadeUp/FadeUp";
import "./statesearch.scss";

export default function StateSearch({ stateSearchConfig }) {
	const {
		id = "state-search",
		classNames = "",
		homeStates,
		otherStates,
	} = stateSearchConfig;

	const [query, setQuery] = useState("");

	const normalizedQuery = query.trim().toLowerCase();

	const filteredHome = useMemo(() => {
		if (!normalizedQuery) return homeStates;
		return homeStates.filter(
			(s) =>
				s.name.toLowerCase().includes(normalizedQuery) ||
				s.code.toLowerCase().includes(normalizedQuery),
		);
	}, [normalizedQuery, homeStates]);

	const filteredOther = useMemo(() => {
		if (!normalizedQuery) return otherStates;
		return otherStates.filter(
			(s) =>
				s.name.toLowerCase().includes(normalizedQuery) ||
				s.code.toLowerCase().includes(normalizedQuery),
		);
	}, [normalizedQuery, otherStates]);

	const totalResults = filteredHome.length + filteredOther.length;
	const hasQuery = normalizedQuery.length > 0;

	return (
		<section className={`block state-search ${classNames}`.trim()} id={id}>
			<div className="block__content container">
				<FadeUp as="div" className="state-search__bar">
					<label htmlFor="state-search-input" className="state-search__label">
						Search for your state
					</label>
					<input
						id="state-search-input"
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Start typing a state name…"
						className="state-search__input"
						aria-describedby="state-search-result-count"
						autoComplete="off"
					/>
					<p
						id="state-search-result-count"
						className="state-search__result-count"
						role="status"
						aria-live="polite"
					>
						{hasQuery
							? `${totalResults} ${totalResults === 1 ? "match" : "matches"} found`
							: ""}
					</p>
				</FadeUp>

				{filteredHome.length > 0 && (
					<FadeUp as="div" className="state-search__group" delay={100}>
						<h2 className="state-search__group-heading">Licensed In</h2>
						<ul
							className="state-search__list state-search__list--home"
							role="list"
						>
							{filteredHome.map((state) => (
								<li
									key={state.code}
									className="state-search__item state-search__item--home"
								>
									{state.name}
								</li>
							))}
						</ul>
					</FadeUp>
				)}

				{filteredOther.length > 0 && (
					<FadeUp as="div" className="state-search__group" delay={150}>
						<h2 className="state-search__group-heading">
							Also Available Through PSYPACT
						</h2>
						<ul className="state-search__list" role="list">
							{filteredOther.map((state) => (
								<li key={state.code} className="state-search__item">
									{state.name}
								</li>
							))}
						</ul>
					</FadeUp>
				)}

				{hasQuery && totalResults === 0 && (
					<FadeUp as="p" className="state-search__empty" role="status">
						We do not currently see clients in that state. Reach out to us if
						you have questions about your specific location.
					</FadeUp>
				)}
			</div>
		</section>
	);
}
