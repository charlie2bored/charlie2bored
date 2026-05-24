'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-16 md:py-28 lg:py-[150px] pb-[max(4rem,calc(3rem+env(safe-area-inset-bottom,0px)))]">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-[100px]"
          style={{ color: 'var(--text-color)' }}
        >
          <h2 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 px-2" style={{ color: 'var(--text-color)' }}>
            Get in touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-3 font-normal leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            For hiring, collaborations, or anything else, email me. I usually get back within a few days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center space-y-10"
        >
          <div>
            <div className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Email</div>
            <a
              href="mailto:iamcharlesvargas@gmail.com"
              className="text-lg sm:text-xl font-medium underline-offset-4 hover:underline break-all"
              style={{ color: 'var(--text-color)' }}
            >
              iamcharlesvargas@gmail.com
            </a>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Location</div>
            <div className="text-lg sm:text-xl font-medium" style={{ color: 'var(--text-color)' }}>New York City, NY</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12 md:gap-16 mt-16 md:mt-[100px] px-2"
        >
          {[
            { label: 'GitHub', url: 'https://github.com/charlie2bored' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/charlie2bored/' },
            { label: 'Twitter', url: 'https://x.com/charlie2bored' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-3 py-2 touch-manipulation transition-colors duration-300 text-lg font-medium hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
