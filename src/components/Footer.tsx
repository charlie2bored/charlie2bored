'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 lg:py-[100px] pb-[max(2rem,calc(1.25rem+env(safe-area-inset-bottom,0px)))]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-5 text-center text-sm sm:text-base"
      >
        <p style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Charlie Vargas. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
