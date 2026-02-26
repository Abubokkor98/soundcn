import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Section {
	id: string;
	title: string;
	content: React.ReactNode;
}

const PRIVACY_SECTIONS: Section[] = [
	{
		id: "what-we-collect",
		title: "What we collect",
		content: (
			<>
				<p>
					soundcn collects minimal, anonymous data to understand how the site is
					used. Specifically:
				</p>
				<ul>
					<li>
						<strong>Page views and navigation</strong> — which pages are visited
						and general interaction patterns, collected via{" "}
						<a
							href="https://vercel.com/analytics"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vercel Analytics
						</a>
						.
					</li>
					<li>
						<strong>Performance metrics</strong> — Core Web Vitals (load time,
						responsiveness) to improve site performance.
					</li>
				</ul>
				<p>
					We do <strong>not</strong> collect names, email addresses, or any
					personally identifiable information. No accounts are required to use
					soundcn.
				</p>
			</>
		),
	},
	{
		id: "cookies",
		title: "Cookies and storage",
		content: (
			<p>
				soundcn uses browser localStorage only to remember your preferred theme
				(light/dark) and package manager selection. No tracking cookies are set.
				Vercel Analytics uses privacy-preserving, cookieless measurement.
			</p>
		),
	},
	{
		id: "third-parties",
		title: "Third-party services",
		content: (
			<>
				<p>The following third-party services are used:</p>
				<ul>
					<li>
						<strong>Vercel</strong> — hosting and analytics. See{" "}
						<a
							href="https://vercel.com/legal/privacy-policy"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vercel&apos;s Privacy Policy
						</a>
						.
					</li>
					<li>
						<strong>Google Fonts</strong> — Geist and Syne typefaces are loaded
						from Google&apos;s CDN. See{" "}
						<a
							href="https://policies.google.com/privacy"
							target="_blank"
							rel="noopener noreferrer"
						>
							Google&apos;s Privacy Policy
						</a>
						.
					</li>
					<li>
						<strong>Creem</strong> — payment processing for sponsorships. When
						you make a payment, you are subject to{" "}
						<a
							href="https://www.creem.io/privacy"
							target="_blank"
							rel="noopener noreferrer"
						>
							Creem&apos;s Privacy Policy
						</a>
						. soundcn does not store your payment details.
					</li>
				</ul>
			</>
		),
	},
	{
		id: "data-retention",
		title: "Data retention",
		content: (
			<p>
				Aggregate analytics data is retained for up to 90 days. No personal data
				is stored because none is collected.
			</p>
		),
	},
	{
		id: "contact",
		title: "Contact",
		content: (
			<p>
				Questions about privacy? Email us at{" "}
				<a href="mailto:kapishdima@gmail.com">kapishdima@gmail.com</a> or open
				an issue on{" "}
				<a
					href="https://github.com/kapishdima/soundcn"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				.
			</p>
		),
	},
];

const TERMS_SECTIONS: Section[] = [
	{
		id: "license",
		title: "License",
		content: (
			<p>
				soundcn is open-source software released under the{" "}
				<a
					href="https://github.com/kapishdima/soundcn/blob/main/LICENSE"
					target="_blank"
					rel="noopener noreferrer"
				>
					MIT License
				</a>
				. You are free to use, copy, modify, merge, publish, distribute,
				sublicense, and sell copies of the software.
			</p>
		),
	},
	{
		id: "sound-licenses",
		title: "Sound file licenses",
		content: (
			<>
				<p>
					Each sound in the registry includes license metadata. Most sounds are
					released under{" "}
					<a
						href="https://creativecommons.org/publicdomain/zero/1.0/"
						target="_blank"
						rel="noopener noreferrer"
					>
						CC0 1.0
					</a>{" "}
					or permissive open licenses (primarily from{" "}
					<a
						href="https://kenney.nl"
						target="_blank"
						rel="noopener noreferrer"
					>
						Kenney.nl
					</a>
					).
				</p>
				<p>
					The <strong>World of Warcraft collection</strong> is an exception —
					those sound assets are the property of Blizzard Entertainment, Inc.
					and are <strong>not</strong> CC0 or freely licensed. They are included
					for non-commercial, educational, and reference purposes only. Do not
					use them in commercial projects.
				</p>
				<p>
					Check each sound&apos;s metadata before use. soundcn makes no
					warranty that all sounds are free from third-party claims.
				</p>
			</>
		),
	},
	{
		id: "third-party-trademarks",
		title: "Third-party trademarks",
		content: (
			<>
				<p>
					soundcn includes a curated collection of sound assets from{" "}
					<strong>World of Warcraft®</strong>, a game developed and published by
					Blizzard Entertainment, Inc.
				</p>
				<p>
					soundcn is <strong>not affiliated with, endorsed by, or associated
					with Blizzard Entertainment, Inc.</strong> in any way. World of
					Warcraft® is a registered trademark of Blizzard Entertainment, Inc.
					All rights to these sound assets belong to their respective owners.
				</p>
				<p>
					These assets are included for non-commercial, educational, and
					reference purposes only. If you are a rights holder and believe any
					content should be removed, please contact us.
				</p>
			</>
		),
	},
	{
		id: "disclaimer",
		title: "Disclaimer",
		content: (
			<p>
				soundcn is provided &quot;as is&quot; without warranty of any kind,
				express or implied. The authors are not liable for any claim, damages, or
				other liability arising from use of the service or sound files.
			</p>
		),
	},
	{
		id: "refund-policy",
		title: "Refund policy",
		content: (
			<>
				<p>
					Sponsorships are <strong>one-time, voluntary payments</strong> made to
					support open-source development. Because soundcn is a free product and
					no goods or services are delivered in exchange, all payments are
					generally non-refundable.
				</p>
				<p>
					If you believe a payment was made in error, contact us at{" "}
					<a href="mailto:kapishdima@gmail.com">kapishdima@gmail.com</a> within
					14 days of the transaction. We will review each request individually
					and issue a refund at our discretion.
				</p>
			</>
		),
	},
	{
		id: "changes",
		title: "Changes to these terms",
		content: (
			<p>
				We may update this page from time to time. Continued use of soundcn
				after changes are posted constitutes acceptance of the updated terms.
				Changes are tracked in the{" "}
				<a
					href="https://github.com/kapishdima/soundcn"
					target="_blank"
					rel="noopener noreferrer"
				>
					public GitHub repository
				</a>
				.
			</p>
		),
	},
];

function LegalSection({ section }: { section: Section }) {
	return (
		<div id={section.id} className="scroll-mt-8">
			<h3 className="font-display text-base font-semibold text-foreground mb-3">
				{section.title}
			</h3>
			<div className="text-sm text-muted-foreground leading-relaxed space-y-3 [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-primary [&_ul]:mt-2 [&_ul]:space-y-2 [&_ul]:pl-4 [&_ul]:list-disc">
				{section.content}
			</div>
		</div>
	);
}

function TableOfContents({
	label,
	sections,
}: {
	label: string;
	sections: Section[];
}) {
	return (
		<nav aria-label={label}>
			<p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 mb-3">
				{label}
			</p>
			<ul className="space-y-1.5">
				{sections.map((s) => (
					<li key={s.id}>
						<a
							href={`#${s.id}`}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
						>
							{s.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export function LegalPage() {
	const lastUpdated = "February 2026";

	return (
		<div className="flex min-h-svh flex-col">
			<Header />

			<main
				id="main-content"
				className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 sm:py-16"
			>
				{/* Page header */}
				<div className="mb-12">
					<div className="flex items-center gap-2 text-xs text-muted-foreground/50 mb-4">
						<Link href="/" className="hover:text-foreground transition-colors">
							soundcn
						</Link>
						<span>/</span>
						<span>Legal</span>
					</div>
					<h1 className="font-display text-3xl font-bold sm:text-4xl mb-3">
						Privacy &amp; Terms
					</h1>
					<p className="text-muted-foreground text-sm">
						Last updated: {lastUpdated}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
					{/* Sidebar TOC */}
					<aside className="hidden lg:block">
						<div className="sticky top-8 space-y-8">
							<TableOfContents
								label="Privacy Policy"
								sections={PRIVACY_SECTIONS}
							/>
							<TableOfContents
								label="Terms of Service"
								sections={TERMS_SECTIONS}
							/>
						</div>
					</aside>

					{/* Content */}
					<div className="min-w-0 space-y-16">
						{/* Privacy Policy */}
						<section>
							<h2 className="font-display text-xl font-bold mb-8 pb-4 border-b border-border/60">
								Privacy Policy
							</h2>
							<div className="space-y-8">
								{PRIVACY_SECTIONS.map((s) => (
									<LegalSection key={s.id} section={s} />
								))}
							</div>
						</section>

						{/* Terms of Service */}
						<section>
							<h2 className="font-display text-xl font-bold mb-8 pb-4 border-b border-border/60">
								Terms of Service
							</h2>
							<div className="space-y-8">
								{TERMS_SECTIONS.map((s) => (
									<LegalSection key={s.id} section={s} />
								))}
							</div>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
