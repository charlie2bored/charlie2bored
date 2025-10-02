'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex">
          {/* Left Navigation Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block w-64 pr-16"
          >
            <nav className="space-y-1">
              {[
                { name: 'Home', color: 'bg-white border border-black/20' },
                { name: 'About', color: 'bg-yellow-400' },
                { name: 'Work', color: 'bg-black text-white' },
                { name: 'Skills', color: 'bg-amber-600' },
                { name: 'Projects', color: 'bg-pink-500' },
                { name: 'Contact', color: 'bg-green-500' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${item.color} px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 block`}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-12"
            >
              {/* Large Name Display - Like the "RAW" in the image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black tracking-tighter leading-none">
                  {personalInfo.name.split(' ')[0]}
                </h1>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl font-light text-gray-800 tracking-wide">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {personalInfo.bio}
                </p>
              </motion.div>

              {/* Social Links with Gold Accents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center space-x-8"
              >
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 group"
                >
                  <Github size={24} className="text-gray-700 group-hover:text-yellow-600" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 group"
                >
                  <Linkedin size={24} className="text-gray-700 group-hover:text-yellow-600" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-4 border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 group"
                >
                  <Mail size={24} className="text-gray-700 group-hover:text-yellow-600" />
                </a>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 mx-auto border-2 border-black hover:border-yellow-400"
                >
                  <span>View My Work</span>
                  <ArrowDown size={20} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 right-8 hidden lg:block"
        >
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>You are now entering section</span>
            <div className="w-16 h-px bg-gray-300"></div>
            <span className="font-mono">01/07</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
