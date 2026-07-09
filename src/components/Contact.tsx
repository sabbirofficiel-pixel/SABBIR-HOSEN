import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success notification after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-dark-bg text-text-white px-6 md:px-12 lg:px-24 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-left mb-16" id="contact-heading-container">
          <span className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em] block mb-2">
            GET IN TOUCH // 05
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase inline-block relative"
            id="contact-title"
          >
            Contact <span className="text-white/40">Me</span>
          </motion.h2>
          <div className="w-full h-px bg-white/10 mt-6 mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-sm md:text-base text-white/60 max-w-2xl leading-relaxed tracking-wide font-light"
            id="contact-subtitle"
          >
            Let's connect! Please fill out the form below or drop an email directly.
          </motion.p>
        </div>

        {/* Form and Info Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-panel">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-white mb-4">
                Let's Start a Conversation
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed font-light tracking-wide">
                Whether you have a full-scale creative project proposal, want to schedule a brief introductory Zoom call, or just have questions about core frontend design paradigms, I am always happy to talk.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-4" id="contact-info-items">
                
                {/* Email Item */}
                <div className="flex items-start gap-4 p-4 rounded-none bg-[#121212] border border-white/10" id="contact-email-item">
                  <div className="p-3 bg-[#080808] border border-white/10 text-white rounded-none">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[10px] text-white/40 uppercase tracking-widest">Email Me</h4>
                    <a
                      href="mailto:sabbirofficiel@gmail.com"
                      className="font-mono text-sm text-white hover:text-white/70 transition-colors mt-1 block"
                    >
                      sabbirofficiel@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-4 rounded-none bg-[#121212] border border-white/10" id="contact-location-item">
                  <div className="p-3 bg-[#080808] border border-white/10 text-white rounded-none">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[10px] text-white/40 uppercase tracking-widest">Current Location</h4>
                    <span className="font-sans text-sm text-white font-light mt-1 block">
                      Kishorganj, Dhaka, Bangladesh
                    </span>
                  </div>
                </div>

                {/* Availability Item */}
                <div className="flex items-start gap-4 p-4 rounded-none bg-[#121212] border border-white/10" id="contact-hours-item">
                  <div className="p-3 bg-[#080808] border border-white/10 text-white rounded-none">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[10px] text-white/40 uppercase tracking-widest">Availability Status</h4>
                    <span className="font-sans text-sm text-white font-light mt-1 block">
                      Freelance / Full-Time Contracts (Remote)
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-none p-6 sm:p-8" id="contact-form-panel">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-4"
                  id="contact-success-panel"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-white"
                  >
                    <CheckCircle size={56} />
                  </motion.div>
                  <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-sans text-sm text-white/70 max-w-md leading-relaxed font-light">
                    Thank you for reaching out, Sabbir. Your transmission has been processed and he will contact you within 24 business hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="contact-form"
                >
                  <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-white">
                    Send a Message
                  </h3>
                  
                  {/* Name and Email side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40">
                        Your Name <span className="text-white">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#080808] border border-white/10 focus:border-white outline-none px-4 py-3 rounded-none text-sm text-white font-sans transition-all placeholder-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40">
                        Your Email <span className="text-white">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#080808] border border-white/10 focus:border-white outline-none px-4 py-3 rounded-none text-sm text-white font-sans transition-all placeholder-white/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#080808] border border-white/10 focus:border-white outline-none px-4 py-3 rounded-none text-sm text-white font-sans transition-all placeholder-white/20"
                      placeholder="Project Collaboration Proposal"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40">
                      Your Message <span className="text-white">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#080808] border border-white/10 focus:border-white outline-none px-4 py-3 rounded-none text-sm text-white font-sans transition-all resize-none placeholder-white/20"
                      placeholder="Hi Sabbir, I would love to build our new company platform with you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-white border border-white text-black font-sans text-xs uppercase tracking-[0.2em] font-extrabold hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    id="contact-btn-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border border-black border-t-transparent rounded-full animate-spin" />
                        Sending Transmission...
                      </>
                    ) : (
                      <>
                        <Send size={12} />
                        Send Message
                      </>
                    )}
                  </button>

                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
