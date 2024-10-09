import React from 'react'
import { motion } from 'framer-motion'
import { useSkills } from '../hooks/useSkills'

const Skills: React.FC = () => {
  const { skills, loading, error } = useSkills()

  if (loading) return <div>Loading skills...</div>
  if (error) return <div>Error loading skills: {error}</div>

  return (
    <motion.section
      id="skills"
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <h3 className="font-semibold">{skill.name}</h3>
            <p className="text-sm text-gray-600">{skill.category}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills