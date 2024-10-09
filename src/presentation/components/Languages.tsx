import React from 'react'
import { motion } from 'framer-motion'

const Languages: React.FC = () => {
  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Fluent' },
    { name: 'French', level: 'Intermediate' },
    // Add more languages as needed
  ]

  return (
    <motion.section
      id="languages"
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <h3 className="font-semibold">{lang.name}</h3>
            <p className="text-gray-600">{lang.level}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Languages