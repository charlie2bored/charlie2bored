'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const shopItems = [
  {
    number: '(01)',
    title: 'React Components Library',
    description: 'A collection of reusable React components for modern web development.',
    price: '$29'
  },
  {
    number: '(02)',
    title: 'UI Design Templates',
    description: 'Professional UI design templates for web and mobile applications.',
    price: '$39'
  },
  {
    number: '(03)',
    title: 'Web Development Guide',
    description: 'Comprehensive guide to modern web development practices and best practices.',
    price: '$19'
  }
];

const Shop = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: 'var(--text-color)' }}>Digital Shop</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Check out some of my digital products and resources
          </p>
        </motion.div>

        <div className="space-y-[80px]">
          {shopItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-[100px_1fr] gap-16"
            >
              <div className="text-xl font-medium pt-3" style={{ color: 'var(--text-color)' }}>
                {item.number}
              </div>

              <div>
                {/* Shop Item Image Placeholder */}
                <div
                  className="aspect-square rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-color)', border: '2px solid var(--text-secondary)' }}
                  role="img"
                  aria-label={`Product image for ${item.title}`}
                >
                  <span className="text-6xl" aria-hidden="true">🛍️</span>
                </div>

                <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>{item.title}</h3>
                <p className="text-lg mb-6 max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{item.price}</span>
                  <button className="border px-6 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1" style={{ borderColor: 'var(--text-color)', color: 'var(--text-color)', backgroundColor: 'transparent' }} onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--text-color)';
                    e.currentTarget.style.color = 'var(--bg-color)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-color)';
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-[100px]"
        >
          <Link
            href="/shop"
            className="px-8 py-4 bg-black dark:bg-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            style={{ color: 'var(--text-color)' }}
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
