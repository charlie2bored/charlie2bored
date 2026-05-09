'use client';

import { Fragment, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { getPublicResumeUrl } from '@/lib/site';

const NYC_FARE_CASE = '/projects/nyc-fare-analysis';

const caseStudyAnchors: { slug: string; label: string }[] = [
  { slug: 'objective', label: 'Objective' },
  { slug: 'approach', label: 'Approach' },
  { slug: 'process', label: 'Process' },
  { slug: 'findings', label: 'Findings' },
  { slug: 'conclusion', label: 'Conclusion' },
  { slug: 'reflection', label: 'Reflection' },
  { slug: 'contact', label: 'Contact' },
];

function caseStudyHref(pathname: string, slug: string) {
  if (pathname === NYC_FARE_CASE) return `#${slug}`;
  return `${NYC_FARE_CASE}#${slug}`;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();
  const showCaseAnchors = pathname === NYC_FARE_CASE;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) {
      root.style.overflow = 'hidden';
    } else {
      root.style.overflow = '';
    }
    return () => {
      root.style.overflow = '';
    };
  }, [isOpen]);

  const resumeUrl = getPublicResumeUrl();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)]"
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
            {resumeUrl ? (
              <motion.li role="none" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.8 + navItems.length * 0.1, ease: 'easeOut' }}>
                <a
                  role="menuitem"
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-semibold transition-all duration-300 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                  style={{ color: 'var(--text-color)' }}
                  {...(resumeUrl.startsWith('/') ? { download: true } : {})}
                >
                  Résumé
                </a>
              </motion.li>
            ) : null}
          </motion.ul>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            type="button"
            className="p-3 rounded-lg transition-all duration-300 ml-2 md:ml-4 hover:scale-110 hover:rotate-12 touch-manipulation min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
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
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 min-h-[44px] min-w-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
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

        {showCaseAnchors ? (
          <nav
            aria-label="Case study sections"
            className="hidden md:flex flex-wrap items-center gap-y-2 border-t mt-5 pt-4 text-[12px] sm:text-[13px] font-semibold tracking-wide"
            style={{
              borderColor: 'rgba(128, 128, 128, 0.35)',
            }}
          >
            {caseStudyAnchors.map(({ slug, label }, i) => (
              <Fragment key={slug}>
                {i > 0 ? (
                  <span className="mx-3 shrink-0 text-neutral-400 select-none opacity-65" aria-hidden>
                    ·
                  </span>
                ) : null}
                <Link
                  href={caseStudyHref(pathname, slug)}
                  className="transition-opacity duration-200 hover:opacity-65 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-0.5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {label}
                </Link>
              </Fragment>
            ))}
          </nav>
        ) : null}

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
                      className="block text-lg font-medium transition-all duration-300 hover:opacity-70 hover:translate-x-2 py-3 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                {showCaseAnchors ? (
                  <motion.li
                    role="none"
                    className="border-t pt-6 mt-2"
                    style={{ borderColor: 'rgba(128, 128, 128, 0.35)' }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.35 }}
                  >
                    <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>
                      NYC fare case study
                    </div>
                    <ul className="space-y-1">
                      {caseStudyAnchors.map(({ slug, label }) => (
                        <li key={slug}>
                          <Link
                            role="menuitem"
                            href={caseStudyHref(pathname, slug)}
                            className="block py-2.5 text-base font-semibold hover:opacity-70 min-h-[44px] flex items-center"
                            style={{ color: 'var(--text-color)' }}
                            onClick={() => setIsOpen(false)}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                ) : null}
                {resumeUrl ? (
                  <motion.li role="none" initial={{ opacity: 0, x: -30, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1, transition: { delay: navItems.length * 0.1 + 0.3, type: 'spring', stiffness: 200, damping: 20 } }} exit={{ opacity: 0, x: -30 }}>
                    <a
                      role="menuitem"
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-semibold py-3 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                      style={{ color: 'var(--text-color)' }}
                      onClick={() => setIsOpen(false)}
                      {...(resumeUrl.startsWith('/') ? { download: true } : {})}
                    >
                      Résumé (PDF)
                    </a>
                  </motion.li>
                ) : null}
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
