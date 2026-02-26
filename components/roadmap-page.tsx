"use client";

import { HeroBars } from "@/components/hero-bars";
import { RoadmapItem } from "@/components/roadmap-item";
import { ROADMAP_STEPS } from "@/lib/roadmap";

export function RoadmapPage() {
	return (
		<>
			{/* ── Hero ─────────────────────────────────────────────── */}
			<section className="relative overflow-hidden px-6 pt-8 pb-14 sm:pt-14 sm:pb-20">
				<HeroBars />

				<div
					className="pointer-events-none absolute -top-48 -left-32 size-[400px] rounded-full bg-primary opacity-[0.07] dark:opacity-[0.12] blur-2xl"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute -bottom-20 -right-12 size-[280px] rounded-full bg-primary opacity-[0.04] dark:opacity-[0.08] blur-3xl"
					aria-hidden="true"
				/>

				<div className="relative mx-auto max-w-6xl">
					{/* Eyebrow */}
					<div
						className="stagger-fade-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary mb-6"
						style={{ animationDelay: "30ms" }}
					>
						<span className="relative flex size-2 shrink-0" aria-hidden="true">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
							<span className="relative inline-flex size-2 rounded-full bg-primary" />
						</span>
						What&apos;s coming
					</div>

					<h1
						className="stagger-fade-up font-display text-4xl font-bold text-balance sm:text-5xl lg:text-6xl"
						style={{ animationDelay: "60ms" }}
					>
						The plan.
						<br />
						<span className="text-muted-foreground">No vague promises.</span>
					</h1>

					<p
						className="stagger-fade-up text-muted-foreground mt-5 max-w-lg text-base text-pretty leading-relaxed sm:text-lg"
						style={{ animationDelay: "110ms" }}
					>
						Seven things shipping.{" "}
						<span className="text-foreground/60">
							Each step plays its sound as you scroll.
						</span>
					</p>
				</div>
			</section>

			{/* ── Timeline ─────────────────────────────────────────── */}
			<main
				id="main-content"
				className="mx-auto w-full max-w-3xl flex-1 px-6 pt-10 pb-28"
			>
				{ROADMAP_STEPS.map((step, i) => (
					<RoadmapItem
						key={step.id}
						step={step}
						isLast={i === ROADMAP_STEPS.length - 1}
					/>
				))}
			</main>
		</>
	);
}
