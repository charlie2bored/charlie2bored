'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Charlie's analytical skills and attention to detail transformed our data strategy. The insights provided were invaluable for our business decisions.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "SJ"
  },
  {
    quote: "Working with Charlie was a game-changer. His ability to communicate complex data insights in simple, actionable terms is exceptional.",
    author: "Michael Chen",
    role: "Data Director, InnovateCorp",
    avatar: "MC"
  },
  {
    quote: "Charlie delivered beyond expectations. The dashboards and visualizations created were not only beautiful but also incredibly functional.",
    author: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    avatar: "ER"
  }
];

const Testimonials = () => {
  return (
    <section className="py-[150px]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-[100px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>
            What People Say
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Feedback from colleagues, clients, and collaborators who have experienced the impact of data-driven solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
              style={{ backgroundColor: 'var(--bg-color)' }}
            >
              <div className="text-4xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--text-secondary)' }}>
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4" style={{
                  backgroundColor: 'var(--text-secondary)',
                  color: 'var(--bg-color)'
                }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-color)' }}>{testimonial.author}</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
