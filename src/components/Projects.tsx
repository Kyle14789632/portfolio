"use client";

import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          A selection of projects I&apos;ve built — from full-stack web apps to
          developer tools. Each one taught me something new.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
