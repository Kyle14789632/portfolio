"use client";

import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-gradient-from/20 to-gradient-to/20 blur-3xl" />
        <div className="orb-delayed absolute -right-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-gradient-to/15 to-gradient-from/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for freelance work
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
          <br />
          <span className="text-muted">{personalInfo.title}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gradient-from to-gradient-to px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-all hover:shadow-xl hover:shadow-accent-glow hover:-translate-y-0.5"
          >
            View Projects
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-card-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:-translate-y-0.5"
          >
            Contact Me
            <Send
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted/30 p-1"
        >
          <motion.div className="h-2 w-1 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
