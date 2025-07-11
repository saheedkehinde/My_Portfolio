import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Code, Globe } from 'lucide-react'
import { ScrollAnimationWrapper } from './ScrollAnimation.jsx'

const ProjectCard = ({ project, index }) => {
  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('design')) {
      return <Code className="h-6 w-6" />
    }
    return <Globe className="h-6 w-6" />
  }

  return (
    <ScrollAnimationWrapper delay={index * 150}>
      <Card className="bg-gradient-to-br from-slate-700/60 to-slate-800/40 border-slate-600/50 hover:from-slate-600/60 hover:to-slate-700/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group h-full relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        
        <CardContent className="p-6 flex flex-col h-full relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                {getProjectIcon(project.title)}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>
            </div>
            <ExternalLink className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 flex-shrink-0 opacity-70 group-hover:opacity-100" />
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="outline" 
                className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 text-xs font-medium transform hover:scale-105"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full text-cyan-400 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-400/10 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40 group/btn"
            onClick={() => window.open(project.link, '_blank')}
          >
            <span className="mr-2">View Project</span>
            <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
          
          {/* Decorative elements */}
          <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute bottom-3 left-3 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </CardContent>
      </Card>
    </ScrollAnimationWrapper>
  )
}

export default ProjectCard

