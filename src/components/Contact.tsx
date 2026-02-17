"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Twitter size={20} />,
  mail: <Mail size={20} />,
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate a submission
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Drop me a message and I&apos;ll get back to you within 24
          hours.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-5">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 md:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                className="w-full rounded-xl border border-input-border bg-input-bg px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-input-focus focus:ring-2 focus:ring-input-focus/20"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                className="w-full rounded-xl border border-input-border bg-input-bg px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-input-focus focus:ring-2 focus:ring-input-focus/20"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({ ...s, message: e.target.value }))
              }
              className="w-full resize-none rounded-xl border border-input-border bg-input-bg px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-input-focus focus:ring-2 focus:ring-input-focus/20"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gradient-from to-gradient-to px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-all hover:shadow-xl hover:shadow-accent-glow hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : status === "sent" ? (
              "Message Sent! ✓"
            ) : (
              <>
                Send Message
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </>
            )}
          </button>
        </motion.form>

        {/* Info sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8 md:col-span-2"
        >
          {/* Location */}
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <div className="mb-3 flex items-center gap-3 text-foreground">
              <MapPin size={20} className="text-accent" />
              <h3 className="font-semibold">Location</h3>
            </div>
            <p className="text-sm text-muted">{personalInfo.location}</p>
            <p className="mt-1 text-sm text-muted">{personalInfo.email}</p>
          </div>

          {/* Socials */}
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <h3 className="mb-4 font-semibold text-foreground">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-muted-bg text-muted transition-all hover:border-accent/40 hover:bg-accent hover:text-white hover:-translate-y-0.5"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
