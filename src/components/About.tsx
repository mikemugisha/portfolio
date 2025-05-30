'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
              <img src="/mike.JPEG" alt="Mike Mugisha" className="object-cover w-full h-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Hi, I'm Mike Mugisha
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer and creative problem solver. I love building beautiful, responsive web applications and helping businesses grow through technology and design. Whether you need a website, a custom app, or a unique graphic design, I'm here to help you bring your ideas to life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong foundation in both front-end and back-end development, I strive to
              create seamless user experiences while maintaining clean, efficient code. I'm
              constantly learning and adapting to new technologies to stay at the forefront
              of web development.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 