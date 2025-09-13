import { useState, useEffect, lazy, Suspense } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion.js'
import Header from './components/Header.jsx'
import { ScrollAnimationWrapper } from './components/ScrollAnimation.jsx'
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground.jsx'))
const SkillsSection = lazy(() => import('./components/SkillsSection.jsx'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection.jsx'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection.jsx'))
const ContactSection = lazy(() => import('./components/ContactSection.jsx'))
import {
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Star,
  Calendar,
  MapPin,
  Download,
  Phone
} from 'lucide-react'
import './App.css'

function App() {
  const reduced = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullName = "Adeogun Saheed Kehinde"

  useEffect(() => {
    setIsVisible(true)
    
    // Typing animation for name
    let i = 0
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setTypedText(fullName.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        {/* Animated background elements */}
        {!reduced && (
          <Suspense fallback={null}>
            <AnimatedBackground />
          </Suspense>
        )}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-3  bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-lg font-medium mb-6">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Adeogun
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {typedText.split(' ').slice(1).join(' ')}
              </span>
              <span className="animate-pulse text-blue-400">|</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl text-blue-300 font-semibold">
                • Frontend Developer •
              </h2>
              <div className="flex justify-center space-x-4 text-lg text-gray-400">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1  text-yellow-400" />
                  2+ Years Experience
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-green-400" />
                  Available Globally(Remotely)
                </span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Crafting beautiful, responsive web experiences with expertise in React, WordPress, and creative design. 
              Passionate about turning innovative ideas into stunning digital realities that drive results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-11 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-semibold"
              onClick={() => window.open('https://wa.me/2348160093414', '_blank')}
            >
              <MessageCircle className="mr-3 h-8 w-8" />
              Let's Chat on WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-11 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ExternalLink className="ml-3 h-8 w-8" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-11 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
              onClick={() => window.open('https://drive.google.com/file/d/1W59HG_BmzB64sdfeuogmPRYoxLWzkJ0d/view?usp=drivesdk', '_blank')}
            >
              <Download className="mr-3 h-6 w-6" />
              Download CV
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="h-10 w-10 mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Suspense fallback={<div className="py-24 bg-slate-800/50 flex items-center justify-center"><div className="text-white">Loading skills...</div></div>}>
        <SkillsSection />
      </Suspense>
    
      {/* Experience Section */}
      <Suspense fallback={<div className="py-24 bg-slate-900 flex items-center justify-center"><div className="text-white">Loading experience...</div></div>}>
        <ExperienceSection />
      </Suspense>
    
      {/* Projects Section */}
      <Suspense fallback={<div className="py-24 bg-slate-800/50 flex items-center justify-center"><div className="text-white">Loading projects...</div></div>}>
        <ProjectsSection />
      </Suspense>
    
      {/* Contact Section */}
      <Suspense fallback={<div className="py-24 bg-slate-900 flex items-center justify-center"><div className="text-white">Loading contact...</div></div>}>
        <ContactSection />
      </Suspense>
    </div>
  )
}

export default App

