"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-section-alt">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Technologies I work with on a daily basis, from frontend frameworks to
          cloud infrastructure and everything in between.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            className="rounded-2xl border border-card-border bg-card p-6"
          >
            <h3 className="mb-5 text-lg font-bold text-foreground">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: catIndex * 0.1 + skillIndex * 0.05,
                  }}
                  className="rounded-lg border border-card-border bg-muted-bg px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
