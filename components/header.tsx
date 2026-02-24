"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EqLogo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
	const pathname = usePathname();

	return (
		<header className="stagger-fade-up mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
			<Link href="/" className="flex items-center gap-2.5 cursor-pointer">
				<EqLogo />
				<span className="font-display text-lg font-bold">soundcn</span>
			</Link>

			<nav
				className="hidden sm:flex items-center gap-1"
				aria-label="Primary navigation"
			>
				<Link
					href="/roadmap"
					className={cn(
						"rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150",
						"hover:text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
						pathname === "/roadmap"
							? "text-foreground bg-accent"
							: "text-muted-foreground",
					)}
				>
					Roadmap
				</Link>
				<Link
					href="/showcases"
					className={cn(
						"rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150",
						"hover:text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
						pathname === "/showcases"
							? "text-foreground bg-accent"
							: "text-muted-foreground",
					)}
				>
					Showcases
				</Link>
			</nav>

			<div className="flex items-center gap-4">
				<a
					href="https://github.com/kapishdima/soundcn"
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted-foreground hover:text-foreground transition-colors"
					aria-label="GitHub"
				>
					<Github className="size-5" aria-hidden="true" />
				</a>
				<ThemeToggle />
			</div>
		</header>
	);
}
