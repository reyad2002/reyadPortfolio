import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
         <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href={'/'} className="text-2xl font-bold">
              <span className="text-white">Reyad </span>
              <span className="text-cyan-400">Mohamed</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header