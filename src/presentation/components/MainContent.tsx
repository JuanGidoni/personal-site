import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Languages from './Languages'
import Contact from './Contact'

interface MainContentProps {
  activeSection: string
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const sectionElement = document.getElementById(activeSection)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [activeSection])

  return (
    <div ref={contentRef} className="flex-grow h-full overflow-y-auto p-4 md:p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Languages />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MainContent