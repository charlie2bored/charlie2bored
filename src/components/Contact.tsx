'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-[150px]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[100px]"
          style={{ color: 'var(--text-color)' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>Get In Touch</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-5xl mx-auto">
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
              <div className="text-xl font-medium" style={{ color: 'var(--text-color)' }}>iamcharlesvargas@gmail.com</div>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <div className="text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Phone</div>
              <div className="text-xl font-medium" style={{ color: 'var(--text-color)' }}>+1 (908) 510-5281</div>
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
                className="w-full pb-3 border-b border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-600 dark:placeholder-gray-400"
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
                className="w-full pb-3 border-b border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-600 dark:placeholder-gray-400"
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
                className="w-full pb-3 border-b bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-600 dark:placeholder-gray-400 resize-none"
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
              className="w-fit border px-8 py-4 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-1"
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
          className="flex justify-center gap-16 mt-[100px]"
        >
          {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
            <a
              key={social}
              href="#"
              className="transition-colors duration-300 text-lg font-medium hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              {social}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
