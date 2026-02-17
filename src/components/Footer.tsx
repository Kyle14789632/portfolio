"use client";

import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-card-border bg-card px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="flex items-center gap-1.5 text-sm text-muted">
          © {new Date().getFullYear()} Alex Chen. Built with
          <Heart size={14} className="text-red-500" fill="currentColor" />
          using Next.js & Tailwind CSS
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-lg border border-card-border bg-muted-bg px-4 py-2 text-sm text-muted transition-all hover:text-foreground hover:border-accent/40 hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
