'use client';

/**
 * Hero Component - Main landing section with animated introduction
 *
 * Features:
 * - Animated loading screen with spinning loader
 * - Stacked block navigation sidebar
 * - Mobile-responsive hamburger menu
 * - Smooth scroll navigation between sections
 * - Social media links integration
 * - Dark mode support
 * - Reading progress indicator
 *
 * @returns JSX.Element
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Menu, X, Sun, Moon } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';
import { useDarkMode } from '@/components/DarkModeProvider';
import { useEffect, useState } from 'react';


export default function Hero() {
  const { personalInfo } = portfolioData;
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Reduced loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

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

  // Calculate reading progress for better UX feedback
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

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
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </motion.button>

        {/* Stacked Block Navigation Sidebar */}
        <div className="hidden md:flex fixed left-0 top-0 h-full w-64 z-50 justify-center">
          <nav className="flex flex-col h-full py-8 space-y-3">
            {[
              { id: 'home', name: 'Home', href: '#home', index: '00', bgColor: 'bg-[var(--brand-light)]', textColor: 'text-[var(--brand-dark)]', indexColor: 'text-[var(--brand-dark)]/60' },
              { id: 'about', name: 'About', href: '#about', index: '01', bgColor: 'bg-[var(--brand-gold)]', textColor: 'text-white', indexColor: 'text-white/80' },
              { id: 'skills', name: 'Skills', href: '#skills', index: '02', bgColor: 'bg-[var(--brand-dark)]', textColor: 'text-white', indexColor: 'text-white/80' },
              { id: 'projects', name: 'Projects', href: '#projects', index: '03', bgColor: 'bg-[var(--brand-light)]', textColor: 'text-[var(--brand-dark)]', indexColor: 'text-[var(--brand-dark)]/60' },
              { id: 'contact', name: 'Contact', href: '#contact', index: '04', bgColor: 'bg-[var(--brand-gold)]', textColor: 'text-white', indexColor: 'text-white/80' }
            ].map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`
                  ${item.bgColor} ${item.textColor}
                  w-full h-32 rounded-xl
                  flex flex-col justify-start items-start
                  p-6 transition-all duration-300
                  hover:translate-x-2 hover:shadow-xl hover:scale-[1.02]
                  cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-yellow-400
                `}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
                aria-label={`Navigate to ${item.name} section`}
                tabIndex={0}
              >
                <span className={`text-sm font-medium ${item.indexColor} tracking-wide absolute top-4 left-4`}>
                  {item.index}
                </span>
                <span className="text-2xl font-bold leading-tight mt-8">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Toggle */}
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className={`fixed left-0 top-0 h-full w-64 ${isDark ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} z-50 md:hidden rounded-r-3xl`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-[var(--brand-dark)]">Navigation</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-[var(--brand-dark)] hover:bg-[var(--brand-light)] rounded-full transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-3">
                {[
                  { id: 'home', name: 'Home', href: '#home', index: '00', bgColor: 'bg-[var(--brand-light)]', textColor: 'text-[var(--brand-dark)]', indexColor: 'text-[var(--brand-dark)]/60' },
                  { id: 'about', name: 'About', href: '#about', index: '01', bgColor: 'bg-[var(--brand-gold)]', textColor: 'text-white', indexColor: 'text-white/80' },
                  { id: 'skills', name: 'Skills', href: '#skills', index: '02', bgColor: 'bg-[var(--brand-dark)]', textColor: 'text-white', indexColor: 'text-white/80' },
                  { id: 'projects', name: 'Projects', href: '#projects', index: '03', bgColor: 'bg-[var(--brand-light)]', textColor: 'text-[var(--brand-dark)]', indexColor: 'text-[var(--brand-dark)]/60' },
                  { id: 'contact', name: 'Contact', href: '#contact', index: '04', bgColor: 'bg-[var(--brand-gold)]', textColor: 'text-white', indexColor: 'text-white/80' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`
                      ${item.bgColor} ${item.textColor}
                      block w-full p-4 rounded-xl
                      text-xl font-bold transition-all duration-200
                      hover:translate-x-2 hover:scale-[1.02] active:scale-[0.98] relative
                    `}
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <span className={`text-sm ${item.indexColor} absolute top-2 left-2`}>
                      {item.index}
                    </span>
                    <span className="text-xl font-bold leading-tight mt-6 block">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}


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

        {/* Main Content Area */}
        <motion.div
          style={{ y, opacity }}
          className="flex-1 flex items-center justify-center sm:ml-64 px-4"
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
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 font-medium border-2 transition-all duration-300 flex items-center space-x-2 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-xl ${
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
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 font-medium border-2 transition-all duration-300 flex items-center space-x-2 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-xl ${
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

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed bottom-4 left-4 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className={`w-32 h-1 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
              style={{ width: `${readingProgress}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {Math.round(readingProgress)}% complete
          </p>
        </motion.div>
      </div>
    </section>
  );
}
