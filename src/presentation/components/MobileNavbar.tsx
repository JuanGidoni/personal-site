import React from 'react'
import Avatar from './Avatar'
import SocialLinks from './SocialLinks'

interface MobileNavbarProps {
  isOpen: boolean
  toggleNav: () => void
  activeSection: string
  setActiveSection: (section: string) => void
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, toggleNav, activeSection, setActiveSection }) => {
  const navItems = ['about', 'experience', 'projects', 'skills', 'languages', 'contact']

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Your Name</h1>
        <button onClick={toggleNav} className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="p-4 bg-gray-50">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveSection(item)}
                  className={`w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
                    activeSection === item ? 'bg-gray-200 text-gray-900' : 'hover:bg-gray-100'
                  }`}
                >
                  <span className="inline-block w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center">
            <Avatar />
            <div className="ml-4">
              <p className="font-semibold">Your Name</p>
              <p className="text-gray-600 text-sm">Senior React Developer</p>
            </div>
          </div>
          <div className="mt-4">
            <SocialLinks />
          </div>
          <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} Your Name</p>
        </nav>
      )}
    </div>
  )
}

export default MobileNavbar