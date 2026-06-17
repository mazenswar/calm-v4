// ShareButton.jsx
"use client";
import { useState } from "react";

export default function ShareButton({ url, title, text }) {
	const [copied, setCopied] = useState(false);

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({ title, text, url });
			} catch {
				// user cancelled
			}
			return;
		}
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			window.prompt("Copy this link:", url);
		}
	};

	return (
		<button
			type="button"
			onClick={handleShare}
			className="share-btn"
			aria-label={copied ? "Link copied to clipboard" : "Share this post"}
		>
			{copied ? "Copied!" : "Share"}
		</button>
	);
}
