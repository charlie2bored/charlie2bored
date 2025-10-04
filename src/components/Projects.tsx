'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';
import { useState, useEffect } from 'react';

export default function Projects() {
  const { projects } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };
  const [randomValues, setRandomValues] = useState<{[key: number]: {x: number, y: number}}>({});

  // Generate random values only on client side to avoid hydration mismatch
  useEffect(() => {
    const values: {[key: number]: {x: number, y: number}} = {};
    projects.forEach((_, index) => {
      values[index] = {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50
      };
    });
    setRandomValues(values);
  }, [projects]);

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-[#101010]' : 'bg-[var(--off-white-text)]'}`}>
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
              className={`text-3xl md:text-4xl font-bold mb-4 junge ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'}`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className={`text-lg max-w-2xl montserrat ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'}`}
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
                className={`relative max-w-5xl mx-auto text-center ${isDark ? 'bg-[var(--border-dark)]/90 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} rounded-3xl shadow-2xl border ${isDark ? 'border-[var(--border-dark)]/50' : 'border-[var(--border-light)]/50'} overflow-hidden group cursor-pointer animate-fractal-bloom`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  '--random-x': randomValues[index]?.x || 0,
                  '--random-y': randomValues[index]?.y || 0
                } as React.CSSProperties}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Project Background/Image Area */}
                <div className={`h-64 ${isDark ? 'bg-gradient-to-br from-[var(--border-dark)] to-[var(--text-muted-dark)]' : 'bg-gradient-to-br from-[var(--off-white)] to-gray-50'} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  {/* Project Number */}
                  <div className="absolute top-6 left-6">
                    <span className={`text-6xl font-bold junge ${isDark ? 'text-[var(--text-muted-dark)]' : 'text-[var(--text-muted-light)]'} opacity-30 group-hover:opacity-60 transition-opacity duration-300`}>
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
                      className={`text-2xl md:text-3xl font-bold junge ${isDark ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary-light)]'} group-hover:text-[var(--brand-gold)] transition-colors duration-300 mb-6`}
                      whileHover={{
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Project Description - Centered */}
                    <p className={`text-lg montserrat leading-relaxed ${isDark ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary-light)]'} mb-6`}>
                      {project.description}
                    </p>

                    {/* Key Outcome - Centered */}
                    <motion.div
                      className={`p-6 rounded-xl ${isDark ? 'bg-[var(--border-dark)]' : 'bg-yellow-50'} border-l-4 border-[var(--brand-gold)] relative overflow-hidden mx-auto max-w-md mb-8`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--brand-gold)]/20 rounded-full -translate-y-2 translate-x-2"></div>
                      <p className={`${isDark ? 'text-[var(--brand-gold)]' : 'text-yellow-700'} font-semibold montserrat italic relative z-10`}>
                        {project.outcome}
                      </p>
                    </motion.div>

                    {/* Technologies - Centered */}
                    <div className="flex flex-wrap gap-3 justify-center mb-8">
                      {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={`px-4 py-2 text-sm rounded-full montserrat transition-all duration-300 font-medium border ${isDark ? 'bg-[var(--border-dark)] border-[var(--border-dark)] text-[var(--text-secondary-dark)] hover:bg-[var(--text-muted-dark)] hover:border-[var(--brand-gold)]' : 'bg-gray-100 border-[var(--border-light)] text-[var(--text-secondary-light)] hover:bg-gray-200 hover:border-[var(--brand-gold)]'}`}
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
                        className={`group relative inline-flex items-center px-8 py-4 border-2 rounded-xl transition-all duration-300 montserrat overflow-hidden ${isDark ? 'border-[var(--border-dark)] text-[var(--text-secondary-dark)] hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)]' : 'border-[var(--border-light)] text-[var(--text-secondary-light)] hover:border-[var(--brand-gold)] hover:text-yellow-600'}`}
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
