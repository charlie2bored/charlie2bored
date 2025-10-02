'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Menu, X, Sun, Moon, Home, User, Briefcase, Settings, Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';
import { useEffect, useState } from 'react';

// Core skills to display in sidebar
const coreSkills = [
  "Next.js", "Tailwind CSS", "TypeScript", "React",
  "Node.js", "Python", "Figma", "Git"
];

export default function Hero() {
  const { personalInfo } = portfolioData;
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time for opening animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Only use scroll hooks after component mounts to avoid SSR issues
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (isLoading) {
    return (
      <section className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} flex items-center justify-center relative overflow-hidden`}>
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Enhanced loading animation */}
            <motion.div className="relative">
              <motion.div
                className={`w-32 h-32 border-4 ${isDark ? 'border-white/20' : 'border-black/20'} rounded-full`}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 w-1 h-8 bg-yellow-400 transform -translate-x-1/2 origin-bottom"
                  animate={{
                    scaleY: [1, 0.3, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              {/* Additional rotating elements */}
              <motion.div
                className={`absolute inset-0 w-32 h-32 border-2 ${isDark ? 'border-yellow-400/30' : 'border-yellow-400/30'} rounded-full`}
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className={`${isDark ? 'text-white' : 'text-black'} text-lg montserrat tracking-wider`}>Loading Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden transition-colors duration-300`}>
      <div className="flex h-screen">
        {/* Dark Mode Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={toggleDarkMode}
          className={`fixed top-6 right-6 z-[60] p-2 ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-700'} border ${isDark ? 'border-gray-600' : 'border-gray-200'} rounded-lg hover:${isDark ? 'bg-gray-700' : 'bg-gray-50'} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed top-6 left-6 z-[60] p-2 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'} border ${isDark ? 'border-gray-600' : 'border-gray-200'} rounded-lg md:hidden hover:${isDark ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-200`}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${isDark ? 'bg-black/50' : 'bg-black/30'} z-40 md:hidden`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sticky Left Navigation Sidebar - Enhanced Responsive */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`fixed left-0 top-0 h-screen w-80 ${isDark ? 'bg-gray-900/95 backdrop-blur-sm border-gray-700' : 'bg-white/95 backdrop-blur-sm border-gray-100'} z-50 flex flex-col justify-center pl-12 transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          <nav className="flex flex-col items-center space-y-4">
            {[
              { icon: Home, href: '#home', label: 'Home' },
              { icon: User, href: '#about', label: 'About' },
              { icon: Briefcase, href: '#projects', label: 'Work' },
              { icon: Settings, href: '#skills', label: 'Skills' },
              { icon: Send, href: '#contact', label: 'Contact' }
            ].map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-3 rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  isDark ? 'hover:bg-gray-800 text-gray-300 hover:text-yellow-400' : 'hover:bg-gray-100 text-gray-600 hover:text-yellow-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Navigate to ${item.label} section`}
              >
                <item.icon size={20} />
              </motion.button>
            ))}
          </nav>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider montserrat">Core Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`${isDark ? 'bg-gray-800 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'} px-2 py-1 rounded text-xs text-center montserrat`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links in Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-12 left-12 flex space-x-4"
          >
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 border ${isDark ? 'border-gray-600 hover:border-yellow-400' : 'border-gray-200 hover:border-yellow-400'} ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-all duration-300`}
            >
              <Github size={18} className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'}`} />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 border ${isDark ? 'border-gray-600 hover:border-yellow-400' : 'border-gray-200 hover:border-yellow-400'} ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-all duration-300`}
            >
              <Linkedin size={18} className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'}`} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2 border ${isDark ? 'border-gray-600 hover:border-yellow-400' : 'border-gray-200 hover:border-yellow-400'} ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-all duration-300`}
            >
              <Mail size={18} className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'}`} />
            </a>
          </motion.div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          style={{ y, opacity }}
          className="flex-1 flex items-center justify-center lg:ml-64 sm:px-4"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Large Name Display */}
              <motion.div className="relative">
                <motion.h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4 junge cursor-pointer select-none ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    textShadow: isDark ? '0 0 20px rgba(255, 255, 255, 0.1)' : '0 0 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {personalInfo.name.split(' ')[0]}
                </motion.h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto w-32 rounded-full"
                />
              </motion.div>

              {/* Title and Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className={`text-xl md:text-2xl font-light ${isDark ? 'text-gray-200' : 'text-gray-800'} tracking-wide junge`}>
                  {personalInfo.title}
                </h2>
                <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-2xl mx-auto montserrat`}>
                  {personalInfo.bio}
                </p>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                  <motion.button
                    onClick={() => scrollToSection('#projects')}
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 font-medium border-2 transition-all duration-300 flex items-center space-x-2 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                      isDark
                        ? 'bg-white text-black border-white hover:border-yellow-400 hover:bg-gray-100'
                        : 'bg-black text-white border-black hover:border-yellow-400 hover:bg-gray-900'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View my work and projects"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10">View My Work</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown size={18} />
                    </motion.div>
                  </motion.button>

                  <motion.a
                    href="/resume.pdf"
                    download
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 font-medium border-2 transition-all duration-300 flex items-center space-x-2 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                      isDark
                        ? 'bg-gray-800 text-white border-gray-600 hover:border-yellow-400 hover:bg-gray-700'
                        : 'bg-white text-black border-gray-300 hover:border-yellow-400 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    aria-label="Download my resume (PDF)"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10">Download Resume</span>
                  </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Progress Indicator */}
        <motion.div
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className={`flex items-center space-x-4 text-xs sm:text-sm montserrat ${isDark ? 'text-gray-400' : 'text-gray-500'} focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded p-2`}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#about')}
            aria-label="Scroll to About section"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              className={`w-12 sm:w-16 h-px ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="font-mono"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
