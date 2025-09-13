import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-serif">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full "></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Saheed
              </h1>
              <p className="text-xs text-gray-400">Frontend Developer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.open('https://wa.me/2348160093414', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Have a Discussion
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

