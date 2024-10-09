import React from 'react'

const Avatar: React.FC = () => {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src="https://via.placeholder.com/150" alt="Your Name" className="w-full h-full object-cover" />
    </div>
  )
}

export default Avatar