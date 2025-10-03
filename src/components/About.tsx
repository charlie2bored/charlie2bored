'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function About() {
  const { personalInfo, experiences, education } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };

  return (
    <section id="about" className={`py-20 bg-[var(--background)]`}>
      <div className="sm:ml-64 md:ml-72 lg:ml-80 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <p className={`text-lg max-w-2xl mx-auto montserrat ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Get to know more about my background, experience, and passion for technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-white' : 'text-black'}`}>Personal Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>👤</span>
                  </div>
                  <div>
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Name</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.name}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>💼</span>
                  </div>
                  <div>
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Title</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.title}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>📍</span>
                  </div>
                  <div>
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>📧</span>
                  </div>
                  <div>
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-8">
                <h4 className={`text-lg font-semibold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>Bio</h4>
                <p className={`leading-relaxed montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {personalInfo.bio}
                </p>
              </div>
            </motion.div>

            {/* Experience & Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-white' : 'text-black'}`}>Experience & Education</h3>

              {/* Experience */}
              <div className="mb-8">
                <h4 className={`text-lg font-semibold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>Experience</h4>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className={`border-l-2 pl-4 ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="mb-2">
                        <h5 className={`font-semibold junge ${isDark ? 'text-white' : 'text-black'}`}>{exp.position}</h5>
                        <p className={`montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company} • {exp.period}</p>
                      </div>
                      <ul className={`space-y-1 montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm">• {item}</li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded-full montserrat ${isDark ? 'bg-gray-800 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className={`text-lg font-semibold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>Education</h4>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className={`border-l-2 pl-4 ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
                      <h5 className={`font-semibold junge ${isDark ? 'text-white' : 'text-black'}`}>{edu.degree}</h5>
                      <p className={`montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.institution} • {edu.period}</p>
                      <p className={`text-sm mt-1 montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <h4 className={`text-lg font-semibold mb-6 junge text-center ${isDark ? 'text-white' : 'text-black'}`}>Follow Me</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/charlie2bored"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                aria-label="Follow on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/charlie2bored"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                aria-label="Follow on X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://medium.com/@charlie2bored"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                aria-label="Read on Medium"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@charlie2bored"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                aria-label="Follow on TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/charlie2bored"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                aria-label="Follow on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@charlie2bored"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                aria-label="Subscribe on YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Download Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8"
          >
            <div className="text-center">
              <motion.a
                href="/resume.pdf"
                download="Charlie_Vargas_Resume.pdf"
                className={`inline-flex items-center px-8 py-4 font-semibold text-lg border-2 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95 ${
                  isDark
                    ? 'bg-[var(--brand-dark)] text-white border-[var(--brand-dark)] hover:border-yellow-400 hover:bg-[#1a1a1a] hover:shadow-black/30'
                    : 'bg-[var(--brand-dark)] text-white border-[var(--brand-dark)] hover:border-yellow-400 hover:bg-[#1a1a1a] hover:shadow-black/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l4-4m-4 4l-4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Download Resume
              </motion.a>
              <p className={`text-sm mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                PDF • Updated December 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}