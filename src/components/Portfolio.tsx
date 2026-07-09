import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Project } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "ui-ux", label: "UI/UX" },
    { id: "creative", label: "Creative" },
  ];

  const projects: Project[] = [
    {
      id: "proj-1",
      title: "Fintech Analytics Dashboard",
      category: "web",
      description: "A real-time financial tracking dashboard featuring customizable widgets, responsive charts, and robust multi-factor security layers.",
      image: "https://picsum.photos/seed/finance/600/400",
      tags: ["React", "TypeScript", "Recharts", "Tailwind"],
      liveUrl: "https://example.com/finance",
      githubUrl: "https://github.com/jacob/finance-dashboard",
    },
    {
      id: "proj-2",
      title: "Atmospheric Audio Synthesizer",
      category: "creative",
      description: "An interactive, web-audio synthesizer generating responsive soundscapes triggered by user mouse cursor positions and physics bubbles.",
      image: "https://picsum.photos/seed/synth/600/400",
      tags: ["Web Audio API", "HTML5 Canvas", "Motion"],
      liveUrl: "https://example.com/synth",
      githubUrl: "https://github.com/jacob/audio-synth",
    },
    {
      id: "proj-3",
      title: "Creative Agency Landing Page",
      category: "ui-ux",
      description: "A gorgeous landing page focusing on editorial typography, fluid 3D card layout effects, and custom SVG path animations.",
      image: "https://picsum.photos/seed/agency/600/400",
      tags: ["Next.js", "Motion", "Tailwind CSS"],
      liveUrl: "https://example.com/agency",
      githubUrl: "https://github.com/jacob/agency-landing",
    },
    {
      id: "proj-4",
      title: "SaaS Task Manager",
      category: "web",
      description: "A clean collaboration board with drag-and-drop mechanics, nested subtask folders, and automatic offline service sync.",
      image: "https://picsum.photos/seed/task/600/400",
      tags: ["React", "Zustand", "Dnd-Kit", "Vite"],
      liveUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/jacob/task-manager",
    },
    {
      id: "proj-5",
      title: "AI Chat Assistant Portal",
      category: "web",
      description: "An elegant portal integrating advanced AI language generation interfaces with Markdown formatting and streaming response speeds.",
      image: "https://picsum.photos/seed/ai/600/400",
      tags: ["Next.js", "TypeScript", "Gemini API"],
      liveUrl: "https://example.com/ai-chat",
      githubUrl: "https://github.com/jacob/ai-chat",
    },
    {
      id: "proj-6",
      title: "Mindfulness Meditation App",
      category: "ui-ux",
      description: "Mobile-first immersive web layout guiding users through relaxed deep breathing intervals and customized state tracking logs.",
      image: "https://picsum.photos/seed/mind/600/400",
      tags: ["React", "Tailwind", "LocalStorage"],
      liveUrl: "https://example.com/mindfulness",
      githubUrl: "https://github.com/jacob/mindfulness",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 bg-dark-bg text-text-white px-6 md:px-12 lg:px-24 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-left mb-16" id="portfolio-heading-container">
          <span className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em] block mb-2">
            SELECTED WORKS & ARCHIVES // 04
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase inline-block relative"
            id="portfolio-title"
          >
            Selected <span className="text-white/40">Works</span>
          </motion.h2>
          <div className="w-full h-px bg-white/10 mt-6 mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-white/60 max-w-2xl leading-relaxed tracking-wide font-light"
            id="portfolio-subtitle"
          >
            Explore selected client commissions and personal engineering projects showcasing interactive craft.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-start gap-2 mb-12" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-none font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-white text-black border border-white"
                  : "bg-transparent text-[#ededed]/60 border border-white/10 hover:text-white hover:border-white/30"
              }`}
              id={`filter-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-none bg-[#121212] border border-white/10 overflow-hidden flex flex-col h-full hover:border-white/30 transition-all duration-300"
                id={`project-card-${project.id}`}
              >
                {/* Project Image Container */}
                <div className="relative overflow-hidden aspect-video cursor-pointer" id={`project-img-wrapper-${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Hover Tint Mask */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-none bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-none bg-[#121212] text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow space-y-4" id={`project-content-${project.id}`}>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-white/50 flex items-center gap-1.5">
                      <Layers size={10} />
                      {project.category === "web"
                        ? "Web App"
                        : project.category === "ui-ux"
                        ? "UI/UX Design"
                        : "Creative Code"}
                    </span>
                    <h3 className="font-sans text-lg font-extrabold uppercase tracking-wide text-white group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-white/70 leading-relaxed flex-grow font-light">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2" id={`project-tags-${project.id}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono bg-[#080808] border border-white/10 px-2.5 py-1 rounded-none text-white/60 uppercase tracking-widest font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
