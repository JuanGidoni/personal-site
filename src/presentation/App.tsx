import React, { useState, useCallback, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import MobileNavbar from './components/MobileNavbar'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleSetActiveSection = useCallback((section: string) => {
    setActiveSection(section)
    setIsMobileNavOpen(false)
  }, [])

  const toggleMobileNav = useCallback(() => {
    setIsMobileNavOpen(prev => !prev)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'languages', 'contact']
      const scrollPosition = window.scrollY

      const activeIndex = sections.findIndex((section, index) => {
        const element = document.getElementById(section)
        if (!element) return false
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom
      })

      if (activeIndex !== -1) {
        setActiveSection(sections[activeIndex])
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="lg:hidden">
        <MobileNavbar 
          isOpen={isMobileNavOpen} 
          toggleNav={toggleMobileNav} 
          activeSection={activeSection}
          setActiveSection={handleSetActiveSection}
        />
      </div>
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-[900px] h-[600px] bg-white shadow-2xl rounded-lg flex overflow-hidden">
          <div className="hidden lg:block">
            <Sidebar activeSection={activeSection} setActiveSection={handleSetActiveSection} />
          </div>
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}

export default App