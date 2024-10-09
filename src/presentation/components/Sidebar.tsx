import React from 'react'
import Avatar from './Avatar'
import SocialLinks from './SocialLinks'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = ['about', 'experience', 'projects', 'skills', 'languages', 'contact']

  return (
    <aside className="w-[300px] bg-gray-50 flex flex-col h-full">
      <div className="p-6 flex flex-col items-center">
        <Avatar />
        <h1 className="text-2xl font-bold mt-4">Your Name</h1>
        <p className="text-gray-600 text-sm">Senior React Developer</p>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-6">
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
      </nav>
      <div className="p-6">
        <SocialLinks />
        <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} Your Name</p>
      </div>
    </aside>
  )
}

export default Sidebar