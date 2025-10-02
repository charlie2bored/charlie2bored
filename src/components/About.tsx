'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';

export default function About() {
  const { personalInfo, experiences, education } = portfolioData;

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, experience, and passion for technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">👤</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium text-gray-900">{personalInfo.name}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">💼</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Title</p>
                  <p className="font-medium text-gray-900">{personalInfo.title}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-semibold">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{personalInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Bio</h4>
              <p className="text-gray-600 leading-relaxed">
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experience & Education</h3>

            {/* Experience */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Experience</h4>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <div className="mb-2">
                      <h5 className="font-semibold text-gray-900">{exp.position}</h5>
                      <p className="text-gray-600">{exp.company} • {exp.period}</p>
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Education</h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                    <p className="text-gray-600">{edu.institution} • {edu.period}</p>
                    <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
