"use client";

import { useState } from "react";
import { currentFocus } from "@/data";
import { ExternalLink, MapPin, Search, Briefcase } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatCardProps {
  src: string;
  alt: string;
  aspectClass?: string;
}

// ─── Skeleton shimmer for loading state ───────────────────────────────────────

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl bg-white/5 border border-text-muted/10 overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}

// ─── Individual SVG stat image card ───────────────────────────────────────────

function StatCard({ src, alt, aspectClass = "p-4" }: StatCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative rounded-xl overflow-hidden border border-text-muted/10 bg-[#0A0A0A] flex items-center justify-center ${aspectClass}`}>
      {/* Skeleton shown until image loads */}
      {!loaded && !errored && (
        <Skeleton className="absolute inset-0 rounded-none border-none" />
      )}

      {errored ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-mono text-text-muted/40 uppercase tracking-widest">
            Stats unavailable
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`w-full h-auto object-contain transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function GitHubStats() {
  const BASE = "https://github-readme-stats.vercel.app/api";
  const STREAK = "https://streak-stats.demolab.com";
  const CONTRIB = "https://ghchart.rshah.org";
  const USERNAME = "techieadi4703";

  // Shared query params — transparent bg, indigo accent, slate muted text
  const params = [
    "theme=transparent",
    "hide_border=true",
    "title_color=6366F1",
    "icon_color=6366F1",
    "text_color=94A3B8",
    "bg_color=00000000",
  ].join("&");

  return (
    <div className="mt-10 max-w-3xl">
      {/* Section label */}
      <div className="text-xs font-mono uppercase tracking-[0.3em] text-text-muted mb-5 flex items-center gap-3">
        <span>GitHub Activity</span>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted/40 hover:text-accent transition-colors flex items-center gap-1"
        >
          <ExternalLink size={10} />
          <span className="text-[10px]">{USERNAME}</span>
        </a>
      </div>

      {/* Top row: Stats + Top Languages + Streak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        {/* General Stats */}
        <StatCard
          src={`${BASE}?username=${USERNAME}&show_icons=true&count_private=true&${params}&hide=contribs&include_all_commits=true&rank_icon=github`}
          alt="Aditya's GitHub stats"
        />

        {/* Top Languages */}
        <StatCard
          src={`${BASE}/top-langs?username=${USERNAME}&layout=compact&${params}&langs_count=6&hide=html,css`}
          alt="Most used languages"
        />

        {/* Streak stats */}
        <StatCard
          src={`${STREAK}/?user=${USERNAME}&theme=transparent&hide_border=true&stroke=94A3B8&ring=6366F1&fire=6366F1&currStreakLabel=6366F1&sideLabels=94A3B8&dates=94A3B8&sideNums=F1F5F9&currStreakNum=F1F5F9&background=00000000`}
          alt="GitHub contribution streak"
        />
      </div>

      {/* Bottom row: Contribution heatmap (ghchart) */}
      <div className="rounded-xl border border-text-muted/10 bg-[#0A0A0A] p-4 overflow-hidden">
        <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-text-muted mb-3">
          Contribution graph
        </div>
        <StatCard
          src={`${CONTRIB}/22c55e/${USERNAME}`}
          alt="GitHub contribution heatmap"
        />
      </div>
    </div>
  );
}
