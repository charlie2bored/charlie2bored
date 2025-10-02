'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export default function Projects() {
  const { projects } = portfolioData;

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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 junge">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto montserrat">
            A collection of my recent work showcasing different skills and technologies
          </p>
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
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 ease-out overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-400 opacity-50">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                {/* Project Category */}
                <span className="text-sm font-medium text-yellow-600 mb-2 block montserrat">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-yellow-600 transition-colors duration-200 junge">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-2 line-clamp-2 montserrat">
                  {project.description}
                </p>

                {/* Key Outcome */}
                <p className="text-sm text-yellow-600 font-medium mb-4 montserrat italic">
                  {project.outcome}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-full montserrat"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-200 montserrat"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-200 montserrat"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="flex items-center text-gray-400 montserrat">
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
          <a
            href="https://github.com/charlie2bored"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 hover:border-yellow-400 transition-colors duration-200 montserrat"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
