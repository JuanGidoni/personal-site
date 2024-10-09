import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="mb-12 min-h-[calc(100vh-2rem)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <motion.p
        className="text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I'm a passionate Senior React Developer with over 8 years of experience in building scalable, 
        maintainable, and user-friendly web applications. I love solving complex problems and creating 
        elegant solutions using the latest technologies. My expertise includes React, TypeScript, 
        Node.js, and various modern web development tools and frameworks.
      </motion.p>
    </motion.section>
  )
}

export default About