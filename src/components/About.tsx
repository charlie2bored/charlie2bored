'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function About() {
  const { personalInfo, experiences, education } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };

  return (
    <section id="about" className={`py-20 bg-[var(--off-white-text)]`}>
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-[var(--off-white-text)]' : 'text-gray-900'}`}>
              About Me
            </h2>
            <p className={`text-lg max-w-2xl mx-auto montserrat ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Get to know more about my background, experience, and passion for technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center animate-fractal-bloom animate-delay-100"
            >
              <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-white' : 'text-black'}`}>Personal Information</h3>

              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>👤</span>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Name</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.name}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>💼</span>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Title</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.title}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>📍</span>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>📧</span>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                    <p className={`font-medium montserrat ${isDark ? 'text-white' : 'text-black'}`}>{personalInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-8 text-center">
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
              className="text-center animate-dimensional-warp animate-delay-200"
            >
              <h3 className={`text-2xl font-semibold mb-6 junge ${isDark ? 'text-white' : 'text-black'}`}>Experience & Education</h3>

              {/* Experience */}
              <div className="mb-8 text-center">
                <h4 className={`text-lg font-semibold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>Experience</h4>
                <div className="space-y-6 text-center">
                  {experiences.map((exp, index) => (
                    <div key={index} className={`border-l-2 pl-4 ${isDark ? 'border-gray-600' : 'border-gray-200'} text-center`}>
                      <div className="mb-2">
                        <h5 className={`font-semibold junge ${isDark ? 'text-white' : 'text-black'}`}>{exp.position}</h5>
                        <p className={`montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company} • {exp.period}</p>
                      </div>
                      <ul className={`space-y-1 montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm">• {item}</li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap gap-2 justify-center">
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
              <div className="text-center">
                <h4 className={`text-lg font-semibold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}>Education</h4>
                <div className="space-y-4 text-center">
                  {education.map((edu, index) => (
                    <div key={index} className={`border-l-2 pl-4 ${isDark ? 'border-gray-600' : 'border-gray-200'} text-center`}>
                      <h5 className={`font-semibold junge ${isDark ? 'text-white' : 'text-black'}`}>{edu.degree}</h5>
                      <p className={`montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.institution} • {edu.period}</p>
                      <p className={`text-sm mt-1 montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>


          {/* Download Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 text-center animate-molecular-bond animate-delay-300"
          >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}