import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, Building2, MapPin } from 'lucide-react'
import { ScrollAnimationWrapper } from './ScrollAnimation.jsx'

const ExperienceCard = ({ experience, index }) => {
  return (
    <ScrollAnimationWrapper delay={index * 150}>
      <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/50 border-slate-600/50 mb-8 hover:from-slate-700/80 hover:to-slate-600/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        
        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {experience.title}
              </h3>
              <div className="flex items-center text-blue-400 text-lg mb-2">
                <Building2 className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-400 mt-3 lg:mt-0 bg-slate-700/50 px-4 py-2 rounded-full border border-slate-600/50">
              <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="font-medium">{experience.period}</span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {experience.skills.map((skill, skillIndex) => (
              <Badge 
                key={skillIndex} 
                variant="secondary" 
                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 border border-blue-600/30 hover:from-blue-600/30 hover:to-cyan-600/30 hover:border-blue-500/50 transition-all duration-300 px-3 py-1 text-sm font-medium transform hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
        </CardContent>
      </Card>
    </ScrollAnimationWrapper>
  )
}

export default ExperienceCard

