'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: 'var(--nav-bg)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
      <div className="max-w-5xl mx-auto px-5 py-5">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/" className="text-2xl font-bold transition-all duration-300 hover:scale-105" style={{ color: 'var(--text-color)' }}>
              Charlie
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            role="menubar"
            className="hidden md:flex space-x-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                role="none"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Link
                  role="menuitem"
                  href={item.href}
                  className="relative transition-all duration-300 hover:opacity-70 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 hover:before:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-3 rounded-lg transition-all duration-300 ml-4 hover:scale-110 hover:rotate-12"
            style={{
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--text-secondary)',
              color: 'var(--text-color)'
            }}
            aria-label="Toggle theme"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{
              scale: 1.1,
              rotate: 12,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {mounted && (theme === 'light' ? (
                <FiMoon className="w-5 h-5" style={{ color: 'var(--text-color)' }} />
              ) : (
                <FiSun className="w-5 h-5" style={{ color: 'var(--text-color)' }} />
              ))}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex flex-col space-y-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5, scale: 0.8 } : { rotate: 0, y: 0, scale: 1 }}
              className="w-6 h-0.5 block transition-all duration-300 origin-center"
              style={{ backgroundColor: 'var(--text-color)' }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              className="w-6 h-0.5 block transition-all duration-300"
              style={{ backgroundColor: 'var(--text-color)' }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -5, scale: 0.8 } : { rotate: 0, y: 0, scale: 1 }}
              className="w-6 h-0.5 block transition-all duration-300 origin-center"
              style={{ backgroundColor: 'var(--text-color)' }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                height: 'auto',
                scale: 1,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2, delay: 0.1 },
                  scale: { duration: 0.3, ease: "easeOut" }
                }
              }}
              exit={{
                opacity: 0,
                height: 0,
                scale: 0.95,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }
              }}
              className="md:hidden overflow-hidden rounded-b-2xl shadow-2xl"
              style={{ backgroundColor: 'var(--bg-color)' }}
            >
              <motion.ul
                role="menu"
                className="py-6 space-y-6 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    role="none"
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }
                    }}
                    exit={{
                      opacity: 0,
                      x: -30,
                      scale: 0.8,
                      transition: { delay: (navItems.length - index - 1) * 0.05 }
                    }}
                  >
                    <Link
                      role="menuitem"
                      href={item.href}
                      className="block text-lg font-medium transition-all duration-300 hover:opacity-70 hover:translate-x-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
};

export default Navigation;
