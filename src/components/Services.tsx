'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Data Analysis',
    description: 'Transforming raw data into actionable insights through advanced analytics, visualization, and predictive modeling.',
    icon: '📊'
  },
  {
    title: 'Business Intelligence',
    description: 'Building comprehensive dashboards and reporting systems that drive strategic decision-making.',
    icon: '📈'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that balance functionality with aesthetic appeal.',
    icon: '🎨'
  },
  {
    title: 'Web Development',
    description: 'Developing responsive, performant websites using modern technologies and best practices.',
    icon: '💻'
  }
];

const Services = () => {
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
            Services & Capabilities
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A multidisciplinary approach combining data science, design, and development to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2"
              style={{ backgroundColor: 'var(--bg-color)' }}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
