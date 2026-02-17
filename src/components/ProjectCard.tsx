"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const gradients = [
  "from-indigo-500 to-purple-600",
  "from-rose-500 to-orange-500",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-pink-500",
  "from-violet-500 to-fuchsia-600",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-glow/10 hover:border-accent/20"
    >
      {/* Gradient placeholder image */}
      <div className="relative aspect-video overflow-hidden">
        <div
          className={`flex h-full w-full items-center justify-center ${gradient} transition-transform duration-500 group-hover:scale-105`}
        >
          <div className="flex flex-col items-center gap-2 text-white/90">
            <span className="text-4xl font-bold tracking-wider">
              {project.title
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
            <span className="text-sm font-medium text-white/60">
              {project.tags[0]}
            </span>
          </div>
        </div>
        <div className="absolute inset-0  from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Hover overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-transform hover:scale-110"
            aria-label={`${project.title} GitHub`}
          >
            <Github size={18} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-110"
            aria-label={`${project.title} Live Demo`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-tag-bg px-2.5 py-1 text-xs font-medium text-tag-text"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
