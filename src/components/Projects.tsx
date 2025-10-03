'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function Projects() {
  const { projects } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };


  return (
    <section id="projects" className={`py-20 bg-[var(--background)]`}>
      {/* Content wrapper with left margin to account for sticky sidebar */}
      <div className="sm:ml-64 md:ml-72 lg:ml-80 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 animate-quantum-shift"
          >
            <motion.h2
              className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-white' : 'text-black'}`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className={`text-lg max-w-2xl montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A collection of my recent work showcasing different skills and technologies
            </motion.p>
          </motion.div>

          {/* Projects List - Uniform sizing and centered */}
          <div className="space-y-16 text-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative max-w-5xl mx-auto text-center ${isDark ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} rounded-3xl shadow-2xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'} overflow-hidden group cursor-pointer animate-fractal-bloom`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  '--random-x': Math.random() * 100 - 50,
                  '--random-y': Math.random() * 100 - 50
                } as React.CSSProperties}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Project Background/Image Area */}
                <div className={`h-64 ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-gray-50 to-gray-100'} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  {/* Project Number */}
                  <div className="absolute top-6 left-6">
                    <span className={`text-6xl font-bold junge ${isDark ? 'text-gray-600' : 'text-gray-300'} opacity-30 group-hover:opacity-60 transition-opacity duration-300`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Project Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full montserrat shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

                  {/* Subtle pattern overlay */}
                  <div className={`absolute inset-0 opacity-5 ${isDark ? 'bg-white' : 'bg-black'}`}>
                    <div className="w-full h-full bg-gradient-to-br from-transparent via-current to-transparent"></div>
                  </div>

                  {/* Interactive hover elements */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  />

                </div>

                {/* Project Content */}
                <div className="p-8 md:p-12 text-center">
                  <div className="max-w-4xl mx-auto">
                    {/* Project Title - Centered */}
                    <motion.h3
                      className={`text-2xl md:text-3xl font-bold junge ${isDark ? 'text-white' : 'text-black'} group-hover:text-yellow-600 transition-colors duration-300 mb-6`}
                      whileHover={{
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Project Description - Centered */}
                    <p className={`text-lg montserrat leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                      {project.description}
                    </p>

                    {/* Key Outcome - Centered */}
                    <motion.div
                      className="p-6 rounded-xl bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-400 relative overflow-hidden mx-auto max-w-md mb-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400/20 rounded-full -translate-y-2 translate-x-2"></div>
                      <p className="text-yellow-700 dark:text-yellow-300 font-semibold montserrat italic relative z-10">
                        {project.outcome}
                      </p>
                    </motion.div>

                    {/* Technologies - Centered */}
                    <div className="flex flex-wrap gap-3 justify-center mb-8">
                      {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={`px-4 py-2 text-sm rounded-full montserrat transition-all duration-300 font-medium border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-yellow-400'}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                        }}
                      >
                        {tech}
                      </motion.span>
                      ))}
                    </div>

                    {/* Case Study Link - Centered */}
                    {project.caseStudyUrl && (
                      <motion.a
                        href={project.caseStudyUrl}
                        className={`group relative inline-flex items-center px-8 py-4 border-2 rounded-xl transition-all duration-300 montserrat overflow-hidden ${isDark ? 'border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400' : 'border-gray-200 text-gray-700 hover:border-yellow-400 hover:text-yellow-600'}`}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 font-semibold">View Case Study</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
