import React from 'react'
import { motion } from 'framer-motion'

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      position: 'Senior React Developer',
      period: 'Jan 2020 - Present',
      description: 'Lead developer for multiple high-profile projects, mentoring junior developers, and implementing best practices.'
    },
    {
      company: 'Web Solutions Ltd.',
      position: 'React Developer',
      period: 'Mar 2017 - Dec 2019',
      description: 'Developed and maintained various React-based applications, focusing on performance optimization and code quality.'
    },
    // Add more experiences as needed
  ]

  return (
    <motion.section
      id="experience"
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <p className="text-gray-600">{exp.company} | {exp.period}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience