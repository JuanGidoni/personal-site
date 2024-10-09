import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer