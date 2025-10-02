'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';

export default function Projects() {
  const { projects } = portfolioData;
  const darkModeContext = useDarkMode();
  const { isDark } = darkModeContext || { isDark: false };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            className={`text-lg max-w-2xl mx-auto montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A collection of my recent work showcasing different skills and technologies
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-sm hover:shadow-xl hover:border-yellow-200 transition-all duration-500 ease-out overflow-hidden group cursor-pointer`}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-gray-50 to-gray-100'} flex items-center justify-center`}>
                <div className={`text-4xl font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'} opacity-50`}>
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                {/* Project Category */}
                <span className="text-sm font-medium text-yellow-600 mb-2 block montserrat">
                  {project.category}
                </span>

                {/* Project Title */}
                <motion.h3
                  className={`text-xl font-semibold mb-3 junge ${isDark ? 'text-white' : 'text-black'}`}
                  whileHover={{
                    x: 4,
                    color: "#f59e0b", // yellow-500
                    transition: { duration: 0.2 }
                  }}
                >
                  {project.title}
                </motion.h3>

                {/* Project Description */}
                <p className={`mb-2 line-clamp-2 montserrat ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Key Outcome */}
                <p className="text-sm text-yellow-600 font-medium mb-4 montserrat italic">
                  {project.outcome}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full montserrat transition-all duration-300 ${isDark ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-yellow-400'}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: isDark ? "#374151" : "#f3f4f6",
                            borderColor: "#f59e0b"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center transition-all duration-300 montserrat ${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'}`}
                      whileHover={{
                        scale: 1.05,
                        x: 2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github size={18} className="mr-1" />
                      </motion.div>
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center transition-all duration-300 montserrat ${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'}`}
                      whileHover={{
                        scale: 1.05,
                        x: 2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ExternalLink size={18} className="mr-1" />
                      </motion.div>
                      Live Demo
                    </motion.a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className={`flex items-center montserrat ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      <Eye size={18} className="mr-1" />
                      View Details
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/charlie2bored"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 border-2 rounded-full transition-all duration-300 montserrat ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-yellow-400' : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-yellow-400'}`}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Github size={20} className="mr-2" />
            </motion.div>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
