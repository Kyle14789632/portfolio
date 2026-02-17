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
            <h3 className="mb-6 text-lg font-bold text-foreground">
              {cat.category}
            </h3>
            <div className="space-y-5">
              {cat.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: catIndex * 0.15 + skillIndex * 0.08,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-gradient-from to-gradient-to"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
