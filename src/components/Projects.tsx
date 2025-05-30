'use client'; 

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-600 p-6">
            <h4 className="text-xl font-bold text-blue-700 mb-1">Data Analyst</h4>
            <p className="text-sm text-gray-500 mb-3 italic">Standard Care LLC · Jan 2025 – Present · Maine, USA</p>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
              <li>Designed data solutions to boost reporting accuracy and compliance.</li>
              <li>Automated documentation workflows with Python and SQL.</li>
              <li>Implemented anomaly detection and HIPAA-safe data practices.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-600 p-6">
            <h4 className="text-xl font-bold text-blue-700 mb-1">Resident Assistant</h4>
            <p className="text-sm text-gray-500 mb-3 italic">Oklahoma Christian University · Aug 2023 – May 2024 · Oklahoma, USA</p>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
              <li>Guided 40+ students through personal, academic, and spiritual challenges.</li>
              <li>Organized events and led weekly Bible studies for community building.</li>
              <li>Resolved crises with empathy and upheld residential life standards.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-600 p-6">
            <h4 className="text-xl font-bold text-blue-700 mb-1">IT Specialist</h4>
            <p className="text-sm text-gray-500 mb-3 italic">St Etienne Anglican Church · Jan 2020 – May 2021 · Kigali, Rwanda</p>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
              <li>Oversaw system installs, updates, and user support for staff.</li>
              <li>Managed local network infrastructure and troubleshooting.</li>
              <li>Enhanced ministry efficiency through tech implementation.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Featured Project</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-[1.01]"
        >
          <div className="relative aspect-video w-full h-64 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Eagle Flight Plan System</span>
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Eagle Flight Plan System</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A robust web app built for Oklahoma Christian University Career Services. It tracks students' career readiness progress semester-by-semester. Developed with Agile/Scrum methodology including sprint demos and live client feedback.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Tech Stack:</strong> Vue.js, Vuetify, JavaScript, Node.js, Express, Sequelize, MySQL, AWS, XAMPP
            </p>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/mikemugisha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                View More Projects on GitHub →
              </a>
              <span className="text-xs text-gray-500">Agile · Live Demos · Team Collaboration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
