"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { playSound } from "@/lib/sound-engine";
import { loadSoundAsset } from "@/lib/sound-loader";
import type { Sponsor } from "@/lib/sponsors";
import { SPONSORS } from "@/lib/sponsors";
import { cn } from "@/lib/utils";

// Cache the asset promise so we don't load it on every hover
let orcSoundPromise: Promise<string> | null = null;

async function playOrcSound() {
	try {
		if (!orcSoundPromise) {
			orcSoundPromise = loadSoundAsset(
				"orc-female-standard-npcfarewell-03",
			).then((a) => a.dataUri);
		}
		const dataUri = await orcSoundPromise;
		await playSound(dataUri, { volume: 0.7 });
	} catch {
		// Autoplay blocked or asset missing — fail silently
	}
}

function SponsorAvatar({
	sponsor,
	index,
}: {
	sponsor: Sponsor;
	index: number;
}) {
	const isOrc = sponsor.name === "OrcDev";
	const [visible, setVisible] = useState(false);
	const cooldown = useRef(false);

	const handleEnter = () => {
		setVisible(true);
		if (isOrc && !cooldown.current) {
			cooldown.current = true;
			playOrcSound();
			setTimeout(() => {
				cooldown.current = false;
			}, 2500);
		}
	};

	return (
		<div
			className="relative"
			style={{ zIndex: visible ? 20 : 10 - index }}
			onMouseEnter={handleEnter}
			onMouseLeave={() => setVisible(false)}
		>
			{/* Avatar */}
			<a
				href={sponsor.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={sponsor.name}
				className={cn(
					"block size-8 rounded-full overflow-hidden",
					"border-2 border-background",
					"ring-1 transition-all duration-200 ease-out",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					isOrc
						? "ring-border/40 hover:ring-[#4ade80]/50 hover:scale-125 hover:shadow-md hover:shadow-[#4ade80]/20"
						: "ring-border/40 hover:ring-primary/40 hover:scale-[1.18]",
				)}
			>
				{sponsor.logo ? (
					// biome-ignore lint/performance/noImgElement: sponsor avatar
					<img
						src={sponsor.logo}
						alt={sponsor.name}
						width={32}
						height={32}
						className="size-full object-cover"
					/>
				) : (
					<span className="flex size-full items-center justify-center bg-muted font-display text-xs font-bold text-muted-foreground/50">
						{sponsor.name[0].toUpperCase()}
					</span>
				)}
			</a>

			{/* Tooltip */}
			<div
				className={cn(
					"absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 pointer-events-none select-none",
					"transition-all duration-150",
					visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5",
				)}
			>
				<div className="bg-popover border border-border/70 rounded-md px-2.5 py-1.5 shadow-md whitespace-nowrap">
					<p className="text-[11px] font-medium text-foreground leading-none">
						{sponsor.name}
					</p>
				</div>

				{/* Arrow */}
				<div
					className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
					style={{
						borderLeft: "4px solid transparent",
						borderRight: "4px solid transparent",
						borderTop: `4px solid ${isOrc ? "#6b4015" : "color-mix(in oklch, var(--border) 70%, transparent)"}`,
					}}
				/>
			</div>
		</div>
	);
}

export function HeroSponsors() {
	if (SPONSORS.length === 0) return null;

	return (
		<div
			className="stagger-fade-up flex items-center gap-3 mt-7"
			style={{ animationDelay: "200ms" }}
		>
			<span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/45">
				backed by
			</span>

			{/* Stacked overlapping avatars */}
			<div className="flex items-center -space-x-2">
				{SPONSORS.map((sponsor, i) => (
					<SponsorAvatar key={sponsor.name} sponsor={sponsor} index={i} />
				))}
			</div>

			<span
				className="size-[3px] rounded-full bg-border/80 shrink-0"
				aria-hidden
			/>

			<Link
				href="/sponsors"
				className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/45 hover:text-primary transition-colors duration-150"
			>
				Support →
			</Link>
		</div>
	);
}
