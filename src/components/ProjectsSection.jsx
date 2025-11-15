import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ScrollAnimationWrapper } from './ScrollAnimation.jsx'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Gfamplus",
    link: "https://www.gfamplus.com/",
    tech: ["ReactJs"]
  },
  {
    title: "Uptick Talent Afrika", 
    description: "",
    link: "https://www.upticktalent.africa/",
    tech: ["Javascript", "ReactJs", "TailwindCSS", "Redux Toolkit", "Next.js"]
  },

{
    title: "VeriShare", 
    link: "https://team-hotel.netlify.app/",
    tech: ["WordPress", "Elementor"]
  },

  {
    title: "Esanad Consult", 
    link: "https://esanadconsult.netlify.app/",
    tech: ["ReactJs"]
  },

  
  {
    title: "Unpause Global", 
    link: "https://unpauseglobal.com/",
    tech: ["WordPress", "Elementor"]
  },
  {
    title: "4242 Global Investment", 
    link: "https://parsers.vc/startup/4242globalinvestment.com/",
    tech: ["WordPress", "Elementor"]
  },

  
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 150}>
              <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <ExternalLink className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 transition-all duration-300"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
