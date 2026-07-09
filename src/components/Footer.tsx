import React from "react";
import { Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/10 py-12 px-6 md:px-12 lg:px-24 text-text-white relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Logo and Copyright */}
        <div className="text-center md:text-left space-y-2" id="footer-branding">
          <span className="font-sans text-xl font-black tracking-tighter text-white uppercase block">
            SABBIR / H
          </span>
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Sabbir Hosen. All rights reserved. Crafted for visual and functional precision.
          </p>
        </div>

        {/* Middle: Social Links */}
        <div className="flex items-center space-x-4" id="footer-socials">
          {[
            { icon: <Facebook size={14} />, href: "https://facebook.com", label: "Facebook" },
            { icon: <Twitter size={14} />, href: "https://twitter.com", label: "Twitter" },
            { icon: <Linkedin size={14} />, href: "https://linkedin.com", label: "LinkedIn" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-300"
              id={`footer-social-${social.label.toLowerCase()}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Right Side: Scroll to top */}
        <motion.button
          whileHover={{ y: -3 }}
          onClick={scrollToTop}
          className="p-3 rounded-none bg-[#121212] border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
          id="footer-scroll-top-btn"
        >
          <ArrowUp size={16} />
        </motion.button>

      </div>
    </footer>
  );
}
