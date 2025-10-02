'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Content wrapper with left margin to account for sticky sidebar */}
      <div className="lg:ml-80 sm:px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to work together? Let&apos;s discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-white' : 'text-black'}`}>Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                  <Mail className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`} size={20} />
                </div>
                <div>
                  <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                  <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                  <Phone className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`} size={20} />
                </div>
                <div>
                  <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                  <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                  <MapPin className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`} size={20} />
                </div>
                <div>
                  <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                  <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className={`text-lg font-semibold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border rounded-full transition-colors duration-200 montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-yellow-50 hover:border-yellow-400'}`}
                >
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border rounded-full transition-colors duration-200 montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-yellow-50 hover:border-yellow-400'}`}
                >
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border rounded-full transition-colors duration-200 montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-yellow-50 hover:border-yellow-400'}`}
                >
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-white' : 'text-black'}`}>Send a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                  placeholder="What&apos;s this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 montserrat ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium border-2 transition-colors duration-200 flex items-center justify-center space-x-2 montserrat ${isDark ? 'bg-white text-black border-white hover:bg-gray-100 hover:border-yellow-400' : 'bg-black text-white border-black hover:bg-gray-900 hover:border-yellow-400'}`}
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
