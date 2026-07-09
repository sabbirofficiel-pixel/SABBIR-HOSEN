import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "motion/react";

// Import the generated image path dynamically or use the exact string
// @ts-ignore
import portraitImg from "../assets/images/sabbir_portrait_1783572947568.jpg";

interface HeroProps {
  onHireClick: () => void;
  onTalkClick: () => void;
}

export default function Hero({ onHireClick, onTalkClick }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen bg-dark-bg text-text-white flex items-center pt-28 pb-16 md:py-0 px-6 md:px-12 lg:px-24 overflow-hidden relative"
    >
      {/* Established Vertical side bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 pl-4 lg:pl-8 opacity-30 select-none">
        <div className="vertical-text text-[9px] uppercase tracking-[0.4em] transform rotate-180 font-mono">
          ESTABLISHED MMXXVI
        </div>
        <div className="h-32 w-px bg-white/20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8" id="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-semibold mb-4">
              STUDIO EDITION 01 // FRONTEND
            </span>
            <h1 className="huge-text font-black uppercase text-white tracking-tighter select-none">
              SABBIR
            </h1>
            <h1 className="huge-text font-black uppercase huge-text-outline tracking-tighter select-none -mt-4 sm:-mt-6 md:-mt-8">
              HOSEN
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-white/80">
              Frontend Developer & Web Architect
            </h2>
            <p className="font-sans text-sm md:text-base text-white/70 max-w-xl leading-relaxed tracking-wide font-light">
              An exploration of structural honesty, custom-crafted motion, and monochromatic spatial dynamics. Redefining the boundaries of modern minimalism through weight, typography, and clean layouts.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
            id="hero-buttons"
          >
            <button
              onClick={onHireClick}
              className="px-8 py-4 bg-white text-black font-sans text-xs uppercase tracking-[0.2em] font-extrabold border border-white hover:bg-transparent hover:text-white transition-all duration-300 transform active:scale-95 cursor-pointer"
              id="hero-btn-hire"
            >
              Hire Me
            </button>
            <button
              onClick={onTalkClick}
              className="px-8 py-4 bg-transparent text-white border border-white/20 font-sans text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform active:scale-95 cursor-pointer"
              id="hero-btn-talk"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* Social Icons (Bottom-Left layout matching image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center space-x-4 pt-4"
            id="hero-social-links"
          >
            {[
              { icon: <Facebook size={16} />, href: "https://facebook.com", label: "Facebook" },
              { icon: <Twitter size={16} />, href: "https://twitter.com", label: "Twitter" },
              { icon: <Linkedin size={16} />, href: "https://linkedin.com", label: "LinkedIn" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 border border-white/10 hover:border-white flex items-center justify-center text-white/60 hover:text-white hover:scale-105 transition-all duration-300"
                id={`hero-social-${social.label.toLowerCase()}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Portrait Image (Blends into background) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end" id="hero-image-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[380px] lg:max-w-[450px] aspect-[3/4] overflow-hidden rounded-2xl border border-white/5"
          >
            {/* The Image itself */}
            <img
              src={portraitImg}
              alt="Sabbir Hosen portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
              id="hero-profile-image"
            />

            {/* Seamless Vignettes & Overlays for blending perfectly into background */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-dark-bg/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/80 pointer-events-none" />
          </motion.div>
        </div>

      </div>

      {/* Decorative Serif Background Title 'Vision' from Bold Typographic theme */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center select-none pointer-events-none opacity-[0.06] z-0">
        <span className="text-[100px] sm:text-[140px] md:text-[200px] font-serif italic text-white tracking-wide">
          Vision
        </span>
      </div>

      {/* Subtle white monochromatic ambient overlay */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-white/[0.015] to-transparent pointer-events-none" />
    </section>
  );
}
