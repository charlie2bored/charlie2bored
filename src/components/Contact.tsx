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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>Get In Touch</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-1" style={{ color: 'var(--text-secondary)' }}>
            For hiring, collaborations, or project inquiries: reach out by email or use the form below. I typically reply within a few days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="border-b border-gray-200 pb-5">
              <div className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Email</div>
              <a
                href="mailto:iamcharlesvargas@gmail.com"
                className="text-lg sm:text-xl font-medium underline-offset-4 hover:underline break-all"
                style={{ color: 'var(--text-color)' }}
              >
                iamcharlesvargas@gmail.com
              </a>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <div className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Phone</div>
              <a
                href="tel:+19085105281"
                className="text-lg sm:text-xl font-medium underline-offset-4 hover:underline"
                style={{ color: 'var(--text-color)' }}
              >
                +1 (908) 510-5281
              </a>
            </div>

            <div className="pb-5">
              <div className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Location</div>
              <div className="text-xl font-medium" style={{ color: 'var(--text-color)' }}>New York City, NY</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            role="form"
            aria-label="Contact form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                aria-required="true"
                aria-describedby="name-error"
                className="w-full py-3 border-b border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-600 dark:placeholder-gray-400 touch-manipulation"
                style={{ color: 'var(--text-color)' }}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                aria-required="true"
                aria-describedby="email-error"
                className="w-full py-3 border-b border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-600 dark:placeholder-gray-400 touch-manipulation"
                style={{ color: 'var(--text-color)' }}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                aria-required="true"
                aria-describedby="message-error"
                className="w-full py-3 border-b bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-600 dark:placeholder-gray-400 resize-none touch-manipulation"
                style={{
                  borderColor: 'var(--text-secondary)',
                  color: 'var(--text-color)'
                }}
                required
              />
            </div>

            <button
              type="submit"
              aria-label="Send contact message"
              className="w-full sm:w-fit min-h-[48px] border px-8 py-4 inline-flex items-center justify-center text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-1 touch-manipulation"
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
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Social Links */}
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
