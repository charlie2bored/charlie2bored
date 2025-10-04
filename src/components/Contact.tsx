'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-[#101010]' : 'bg-[var(--off-white-text)]'}`}>
      {/* Content wrapper with left margin to account for sticky sidebar */}
      <div className="sm:ml-64 md:ml-72 lg:ml-80 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 animate-quantum-shift"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
            Ready to work together? Let&apos;s discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center animate-dimensional-warp animate-delay-100"
          >
            <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>Contact Information</h3>

            <div className="space-y-6">
              <div className="text-center">
                <p className={`text-sm montserrat ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'}`}>Email</p>
                <p className={`font-medium montserrat text-lg ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>{personalInfo.email}</p>
              </div>

              <div className="text-center">
                <p className={`text-sm montserrat ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'}`}>Phone</p>
                <p className={`font-medium montserrat text-lg ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>{personalInfo.phone}</p>
              </div>

              <div className="text-center">
                <p className={`text-sm montserrat ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'}`}>Location</p>
                <p className={`font-medium montserrat text-lg ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>{personalInfo.location}</p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center animate-particle-assembly animate-delay-200"
          >
            <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}>Send a Message</h3>

            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] transition-colors duration-200 montserrat ${isDark ? 'bg-[var(--border-dark)] border-[var(--border-dark)] text-[var(--text-primary-dark)] placeholder-[var(--text-muted-dark)]' : 'bg-white border-[var(--border-light)] text-[var(--text-primary-light)] placeholder-[var(--text-muted-light)]'}`}
                    placeholder="Your name"
                  />
                </div>
                <div className="text-center">
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] transition-colors duration-200 montserrat ${isDark ? 'bg-[var(--border-dark)] border-[var(--border-dark)] text-[var(--text-primary-dark)] placeholder-[var(--text-muted-dark)]' : 'bg-white border-[var(--border-light)] text-[var(--text-primary-light)] placeholder-[var(--text-muted-light)]'}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="text-center">
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] transition-colors duration-200 montserrat ${isDark ? 'bg-[var(--border-dark)] border-[var(--border-dark)] text-[var(--text-primary-dark)] placeholder-[var(--text-muted-dark)]' : 'bg-white border-[var(--border-light)] text-[var(--text-primary-light)] placeholder-[var(--text-muted-light)]'}`}
                  placeholder="What&apos;s this about?"
                />
              </div>

              <div className="text-center">
                <label htmlFor="message" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--brand-gold)] focus:border-[var(--brand-gold)] transition-colors duration-200 montserrat ${isDark ? 'bg-[var(--border-dark)] border-[var(--border-dark)] text-[var(--text-primary-dark)] placeholder-[var(--text-muted-dark)]' : 'bg-white border-[var(--border-light)] text-[var(--text-primary-light)] placeholder-[var(--text-muted-light)]'}`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium border-2 transition-colors duration-200 flex items-center justify-center space-x-2 montserrat bg-[var(--brand-dark)] text-[var(--text-primary-dark)] border-[var(--brand-dark)] hover:bg-[#1a1a1a] hover:border-[var(--brand-gold)]`}
                aria-label="Send message"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
