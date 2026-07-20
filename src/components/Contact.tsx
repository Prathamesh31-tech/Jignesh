"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Social Media Management",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", service: "Social Media Management", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full pt-16 pb-12 px-4 sm:px-6 md:px-16 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-purple-900/10 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white uppercase mb-3 sm:mb-4 leading-tight">
            LET&apos;S{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
              COLLABORATE
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light max-w-xl mx-auto px-2">
            Have a brand, campaign, or marketing opportunity in mind? Send a message below.
          </p>
        </div>

        {/* Form + Contact Info Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl glass-card border border-white/5 space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">Contact Information</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. Looking forward to connecting!
              </p>

              <div className="space-y-3.5 sm:space-y-4 pt-2">
                {/* Email */}
                <a
                  href="mailto:jigneshmhatre11@gmail.com"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 uppercase block">Email Address</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-purple-300 transition-colors break-all sm:break-normal block">
                      jigneshmhatre11@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:8149936059"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 uppercase block">Phone Number</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-purple-300 transition-colors block">
                      +91 8149936059
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 uppercase block">Location</span>
                    <span className="text-xs sm:text-sm font-medium text-white block">Mumbai, Maharashtra</span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jignesh-mhatre-005184199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform shrink-0">
                    <LinkedinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 uppercase block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-purple-300 transition-colors truncate block">
                      linkedin.com/in/jignesh-mhatre
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl glass-card border border-white/5">
              {submitted ? (
                <div className="text-center py-10 sm:py-12 space-y-4">
                  <div className="inline-flex p-3.5 sm:p-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-2">
                    <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 animate-bounce" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto font-light">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono uppercase text-white hover:bg-white/20 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Inquiry / Service Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-colors text-xs sm:text-sm"
                    >
                      <option value="Social Media Management">Social Media Management (Instagram & Facebook)</option>
                      <option value="Content Strategy">Content Strategy & Calendar Planning</option>
                      <option value="Influencer Campaigns">Influencer Marketing & Collaborations</option>
                      <option value="Analytics & Reporting">Social Media Analytics & Reporting</option>
                      <option value="UGC Content Creation">UGC Content Creation</option>
                      <option value="Other Opportunity">Other Job / Freelance Opportunity</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, brand requirements, or marketing goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors text-xs sm:text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.4)] active:scale-[0.99]"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} JIGNESH MHATRE. ALL RIGHTS RESERVED.</span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a href="mailto:jigneshmhatre11@gmail.com" className="hover:text-white transition-colors">
              jigneshmhatre11@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:8149936059" className="hover:text-white transition-colors">
              +91 8149936059
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/jignesh-mhatre-005184199"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
