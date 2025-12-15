'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="pt-[200px] pb-[150px] min-h-screen flex items-center" style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)'
    }}>
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-8"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--text-secondary)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
            >
              Based in New York City
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 50,
              damping: 20
            }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--text-color)' }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Charlie
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              &quot;2bored&quot;
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Vargas
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-8 leading-relaxed font-light"
            style={{ color: 'var(--text-secondary)' }}
          >
            Data Analyst & Multimodal Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl mb-12 max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Transforming complex data into actionable insights and crafting intuitive digital experiences that bridge the gap between analytics and design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: "spring",
              stiffness: 80,
              damping: 25
            }}
            className="flex flex-col sm:flex-row gap-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 block text-center"
                >
                  View My Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 rounded-lg transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 block text-center"
                  style={{
                    borderColor: 'var(--text-color)',
                    color: 'var(--text-color)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--text-color)';
                    e.currentTarget.style.color = 'var(--bg-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-color)';
                  }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
