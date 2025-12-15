'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-[100px] pb-[50px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-5 text-center"
      >
        <p style={{ color: 'var(--text-secondary)' }}>&copy; 2024 Charlie. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
