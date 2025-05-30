'use client';

import { motion } from 'framer-motion';

// Skill categories
const industryKnowledge = [
  'Statistical Data Analysis',
  'Data Visualization',
  'Microsoft Excel',
  'Operating Systems',
  'Network Infrastructure',
  'MySQL',
  'Data Security & Compliance',
  'Automation & Process Optimization',
  'Quality Assurance & Anomaly Detection',
  'Machine Learning (Basic)',
  'Trend Analysis & Risk Assessment'
];

const toolsTechnologies = [
  'C++',
  'HTML/CSS & JavaScript',
  'React',
  'TypeScript',
  'Node.js',
  'Next.js',
  'Tailwind CSS',
  'Python',
  'SQL',
  'Git',
  'CI/CD',
  'Docker'
];

const interpersonalSkills = [
  'Customer Service',
  'Conflict Resolution',
  'Time Management',
  'Decision-Making',
  'Communication',
  'Mentorship',
  'Spiritual Leadership',
  'Crisis Management',
  'Team Collaboration'
];

const additionalSkills = [
  'RESTful APIs',
  'GraphQL',
  'AWS',
  'Agile',
  'UI/UX Design',
  'Testing'
];

// Type for props
type ScrollableListProps = {
  title: string;
  items: string[];
};

// Scrollable skill box
function ScrollableList({ title, items }: ScrollableListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-lg p-6 shadow max-h-64 overflow-y-auto"
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// Main Skills component
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollableList title="Industry Knowledge" items={industryKnowledge} />
          <ScrollableList title="Tools & Technologies" items={toolsTechnologies} />
          <ScrollableList title="Interpersonal Skills" items={interpersonalSkills} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
