import React, { useState } from "react";
import { motion } from "motion/react";
import { Award, Code2, GraduationCap, Sparkles } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education">("skills");

  const skills = [
    { name: "React.js / Next.js", level: 92 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "Tailwind CSS & CSS Grid", level: 96 },
    { name: "Responsive Web Design", level: 98 },
    { name: "Motion & UI Animations", level: 85 },
  ];

  const experiences = [
    {
      role: "Lead Frontend Engineer",
      company: "Apex Tech Labs",
      period: "2024 - Present",
      desc: "Architecting responsive, high-performance web applications using React, Next.js, and Tailwind CSS. Optimizing performance and loading speed by 40%.",
    },
    {
      role: "Senior React Developer",
      company: "Pixel Perfect Agency",
      period: "2022 - 2024",
      desc: "Built modern dashboards, interactive SaaS tools, and rich creative visual experiences. Promoted to team lead of 4 junior developers.",
    },
    {
      role: "Frontend Developer",
      company: "Creative Web Studio",
      period: "2020 - 2022",
      desc: "Designed and implemented robust static and dynamic client-side websites, with a focus on polished animations and pixel-perfect responsiveness.",
    },
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      school: "Tech University of California",
      period: "2016 - 2020",
      desc: "Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors.",
    },
    {
      degree: "Advanced Web Development Nanodegree",
      school: "Frontend Masters Academy",
      period: "2021",
      desc: "Intense professional training focusing on state management, accessibility, Webpack/Vite performance, and semantic markup.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-dark-bg text-text-white px-6 md:px-12 lg:px-24 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="mb-16 text-left" id="about-heading-container">
          <span className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em] block mb-2">
            BIOGRAPHY & METRICS // 02
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase inline-block relative"
            id="about-title"
          >
            About <span className="text-white/40">Me</span>
          </motion.h2>
          <div className="w-full h-px bg-white/10 mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brief and Info Cards */}
          <div className="lg:col-span-5 space-y-8" id="about-info-panel">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-white">
                STRUCTURAL HONESTY IN DESIGN
              </h3>
              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed font-light tracking-wide">
                As a Frontend Developer, I specialize in bridging the gap between elegant design and high-performance engineering. I take pride in crafting interactive user journeys that are responsive, accessible, and delight users on every device.
              </p>
              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed font-light tracking-wide">
                With over five years of dedicated experience in modern Javascript frameworks, I treat clean code and visual excellence as inseparable values of every software product.
              </p>
            </motion.div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4" id="about-stats-grid">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-none bg-[#121212] border border-white/10 flex flex-col justify-center items-start"
              >
                <span className="font-sans text-4xl font-black text-white tracking-tighter">5+</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-white/40 mt-2 font-bold">Years Experience</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-none bg-[#121212] border border-white/10 flex flex-col justify-center items-start"
              >
                <span className="font-sans text-4xl font-black text-white tracking-tighter">80+</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-white/40 mt-2 font-bold">Projects Sent</span>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Tabs (Skills, Experience, Education) */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8" id="about-tabs-panel">
            
            {/* Tabs Buttons Header */}
            <div className="flex border-b border-white/10 pb-4 mb-6 overflow-x-auto gap-2" id="about-tabs-buttons">
              {[
                { id: "skills", label: "Skills", icon: <Code2 size={14} /> },
                { id: "experience", label: "Experience", icon: <Award size={14} /> },
                { id: "education", label: "Education", icon: <GraduationCap size={14} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-none font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-black border border-white"
                      : "text-white/60 hover:text-white border border-transparent"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[300px]" id="about-tab-content-container">
              
              {/* Skills Tab */}
              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-white">
                        <span className="font-sans">{skill.name}</span>
                        <span className="font-mono text-white/60">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-[#080808] overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className="h-full bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-6 border-l border-white/20 last:pb-0 pb-6"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-[-3.5px] top-2 w-1.5 h-1.5 rounded-full bg-white" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="font-sans text-base font-bold uppercase tracking-wide text-white">
                          {exp.role}
                        </h4>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#080808] px-3 py-1 rounded-none text-white border border-white/20">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                        {exp.company}
                      </h5>
                      <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-6 border-l border-white/20 last:pb-0 pb-6"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-[-3.5px] top-2 w-1.5 h-1.5 rounded-full bg-white" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="font-sans text-base font-bold uppercase tracking-wide text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#080808] px-3 py-1 rounded-none text-white border border-white/20">
                          {edu.period}
                        </span>
                      </div>
                      
                      <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                        {edu.school}
                      </h5>
                      <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
                        {edu.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
