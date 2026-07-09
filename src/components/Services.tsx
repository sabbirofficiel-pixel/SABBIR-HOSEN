import React from "react";
import { motion } from "motion/react";
import { Monitor, Smartphone, Gauge, Layout, Code, HelpCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="text-primary-blue" size={32} />,
      title: "Web Application Development",
      desc: "Building fast, reactive, and highly scalable custom single-page and server-side web apps using React, Next.js, and TypeScript.",
    },
    {
      icon: <Monitor className="text-primary-blue" size={32} />,
      title: "Responsive Interface Engineering",
      desc: "Crafting robust CSS and Tailwind implementations ensuring fluid adaptability across all screen dimensions and device types.",
    },
    {
      icon: <Smartphone className="text-primary-blue" size={32} />,
      title: "Mobile-First App Frontends",
      desc: "Creating high-fidelity mobile web layouts with native feel, smooth swipe gestures, and immediate touch responsive targets.",
    },
    {
      icon: <Layout className="text-primary-blue" size={32} />,
      title: "UI/UX & Dynamic Prototypes",
      desc: "Developing beautiful micro-interactions, spring physics transitions, and immersive motion design utilizing Framer Motion.",
    },
    {
      icon: <Gauge className="text-primary-blue" size={32} />,
      title: "Page Speed & SEO Optimization",
      desc: "Analyzing code bundles, lazy-loading heavy media, and auditing structures to secure perfect 100/100 Google Lighthouse scores.",
    },
    {
      icon: <HelpCircle className="text-primary-blue" size={32} />,
      title: "API Integration & Architecture",
      desc: "Structuring state stores and connecting frontends seamlessly with GraphQL endpoints, REST APIs, or Firestore backends.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-dark-bg text-text-white px-6 md:px-12 lg:px-24 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-left mb-16" id="services-heading-container">
          <span className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em] block mb-2">
            OFFERINGS & CAPABILITIES // 03
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase inline-block relative"
            id="services-title"
          >
            My <span className="text-white/40">Services</span>
          </motion.h2>
          <div className="w-full h-px bg-white/10 mt-6 mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-white/60 max-w-2xl leading-relaxed tracking-wide font-light"
            id="services-subtitle"
          >
            I deliver high-caliber technical solutions tailored to raise the standard of digital interfaces.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {services.map((service, index) => {
            // Re-render the icon with monochromatic white coloring
            const styledIcon = React.cloneElement(service.icon as React.ReactElement, {
              className: "text-white",
              size: 24,
            });

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(255, 255, 255, 0.45)" }}
                className="p-8 rounded-none bg-[#121212] border border-white/10 hover:bg-[#181818] transition-all duration-300 flex flex-col items-start space-y-4"
                id={`service-card-${index}`}
              >
                <div className="p-3 bg-[#080808] rounded-none border border-white/10" id={`service-icon-wrapper-${index}`}>
                  {styledIcon}
                </div>
                <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
