import React from 'react'
import { motion } from 'framer-motion'

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'Developed a full-stack e-commerce platform using React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      name: 'Task Management App',
      description: 'Created a real-time task management application with React and Firebase.',
      technologies: ['React', 'Firebase', 'Material-UI']
    },
    // Add more projects as needed
  ]

  return (
    <motion.section
      id="projects"
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects