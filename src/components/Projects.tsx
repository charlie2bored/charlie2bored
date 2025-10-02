'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function Projects() {
  const { projects } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };


  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Content wrapper with left margin to account for sticky sidebar */}
      <div className="sm:ml-64 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
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

          {/* Projects List - Inspired by therawmaterials.com */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'ml-0' : 'ml-16'} ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden group cursor-pointer`}
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

                  {/* Project status indicators */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {project.liveUrl && (
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                    {project.githubUrl && (
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                      {/* Project Title */}
                      <motion.h3
                        className={`text-2xl md:text-3xl font-bold junge ${isDark ? 'text-white' : 'text-black'} group-hover:text-yellow-600 transition-colors duration-300`}
                        whileHover={{
                          x: 8,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Project Description */}
                      <p className={`text-lg montserrat leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                      </p>

                      {/* Key Outcome */}
                      <motion.div
                        className="p-4 rounded-lg bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-400 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400/20 rounded-full -translate-y-2 translate-x-2"></div>
                        <p className="text-yellow-700 dark:text-yellow-300 font-semibold montserrat italic relative z-10">
                          {project.outcome}
                        </p>
                      </motion.div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-2 text-sm rounded-full montserrat transition-all duration-300 font-medium border ${isDark ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-yellow-400'}`}
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
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-end">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-6 py-3 border-2 rounded-lg transition-all duration-300 montserrat ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-yellow-400' : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-400'}`}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} className="mr-2" />
                          View Code
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-6 py-3 border-2 rounded-lg transition-all duration-300 montserrat ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-yellow-400' : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-400'}`}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} className="mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/charlie2bored"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-8 py-4 border-2 rounded-full transition-all duration-300 montserrat ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-yellow-400' : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-400'}`}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
