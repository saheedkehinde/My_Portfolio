import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Header from './components/Header.jsx'
import SkillCard from './components/SkillCard.jsx'
import ExperienceCard from './components/ExperienceCard.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { ScrollAnimationWrapper, useScrollAnimation } from './components/ScrollAnimation.jsx'
import { 
  Code, 
  Palette, 
  Globe, 
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

  const skills = [
    { name: 'React', icon: Code, level: 90 },
    { name: 'JavaScript', icon: Code, level: 85 },
    { name: 'WordPress', icon: Globe, level: 95 },
    { name: 'Elementor', icon: Globe, level: 90 },
    { name: 'Graphic Design', icon: Palette, level: 80 },
    { name: 'Tailwind CSS', icon: Code, level: 85 }
  ]

  const experiences = [
    {
      title: "Frontend Developer", 
      company: "Avoi Skincare Company Limited",
      period: "2024 - 2025",
      description: "Developed a Website For The Rebranded product, Also an E-Commerce Website",
      skills: ["Html", "Css", "Javascript", "React", "Tailwind"]
    },
    {
      title: "Frontend Developer",
      company: "Oasis Infobytes EdTech",
      period: "2023 - 2024",
      description: "Frontend Developer Internship",
      skills: ["Html", "JavaScript", "CSS"]
    },
    {
      title: "Frontend Developer", 
      company: "Flashmiles logistic Company",
      period: "2024 - 2025",
      description: "Developed a Website for contact support for logistic support or partnership",
      skills: ["Javascript", "React", "Tailwind"]
    },
    {
      title: "Frontend Developer", 
      company: "Knowledge First Academy",
      period: "2022 - 2023",
      description: "Developed a website for both online and physical based Platform For learning",
      skills: ["Html", "Css", "Javascript", "React", "Tailwind"]
    },
    {
      title: "WordPress Developer", 
      company: "Shuks Varieties Stores",
      period: "2024 - 2025",
      description: "Developed website for gaming and lottery Industry",
      skills: ["WordPress", "Elementor"]
    },
    {
      title: "WordPress Developer", 
      company: "Unpause Global",
      period: "2023 - 2024",
      description: "Developed the website for this Reliable shopping Company basically from US to Nigeria",
      skills: ["WordPress", "Elementor"]
    },
    {
      title: "WordPress Developer", 
      company: "Gfam Limited",
      period: "2022 - 2023",
      description: "Being web developer that developed the website for this 'Recruitment based company'",
      skills: ["WordPress", "Elementor"]
    },
    {
      title: "WordPress Developer",
      company: "Scratch Me Card",
      period: "2022 - 2023",
      description: "Developed website for gaming and lottery Industry",
      skills: ["WordPress", "Elementor"]
    }
  ]

  const projects = [
    {
      title: "Website: Gfam limited",
      description: "A recruitment Consultant website based",
      link: "#gfam.com",
      tech: ["Wordpress", "Elementor"]
    },
    {
      title: "Website: Scratch Me Card", 
      description: "A website for gaming and lottery Industry",
      link: "#scratchmecard.com",
      tech: ["WordPress", "Elementor"]
    },
    {
      title: "Website: Unpause Global", 
      description: "Shopping Company",
      link: "#unpauseglobal.com",
      tech: ["WordPress", "Elementor"]
    },
    {
      title: "Website: 4242 Global Investment", 
      description: "Business Consulting and investment firm",
      link: "#4242globalinvestment.com",
      tech: ["WordPress", "Elementor"]
    },
    {
      title: "Website: Knowledge First Academy", 
      description: "Online and physical based Platform For learning",
      link: "#knowledgefirstacademy.netlify.app",
      tech: ["Javascript", "Html/Css"]
    },
    {
      title: "Design: Knowledge First Academy",
      description: "Business Flier",
      link: "#", 
      tech: ["Canva", "Pixel Lab"]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        {/* Animated background elements */}
        <AnimatedBackground />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
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
              <h2 className="text-2xl md:text-3xl text-blue-300 font-light">
                Frontend Developer • WordPress Expert • Graphic Designer
              </h2>
              <div className="flex justify-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  2+ Years Experience
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-green-400" />
                  Available Worldwide
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
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 text-lg font-semibold group relative overflow-hidden"
              onClick={() => window.open('https://wa.me/2348160093414', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Let's Chat on WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-slate-900 px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 text-lg font-semibold group relative overflow-hidden"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              View My Work
              <ExternalLink className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 hover:text-white hover:border-gray-500 px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/25 text-lg font-semibold group relative overflow-hidden"
              onClick={() => window.open('#', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Download className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Download CV
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="h-10 w-10 mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </ScrollAnimationWrapper>
          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together. 
              I'm always excited to work on innovative projects that make a difference.
            </p>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25 text-lg font-semibold group relative overflow-hidden"
                onClick={() => window.open('https://wa.me/2348160093414?text=Hi%20Saheed,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                WhatsApp Me
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-slate-900 hover:border-blue-300 px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 text-lg font-semibold group relative overflow-hidden"
                onClick={() => window.open('mailto:Saheedkehinde052@gmail.com', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Mail className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Send Email
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 hover:text-white hover:border-gray-500 px-12 py-5 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/25 text-lg font-semibold group relative overflow-hidden"
                onClick={() => window.open('tel:+2348160093414', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Call Me
              </Button>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={400}>
            <div className="flex justify-center space-x-8">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-4"
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                <Github className="h-8 w-8" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-4"
                onClick={() => window.open('https://linkedin.com/in/yourlinkedinusername', '_blank')}
              >
                <Linkedin className="h-8 w-8" />
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <ScrollAnimationWrapper>
            <p className="text-gray-400">
              © 2024 Adeogun Saheed Kehinde. Crafted with ❤️ using React & Tailwind CSS
            </p>
          </ScrollAnimationWrapper>
        </div>
      </footer>
    </div>
  )
}

export default App

