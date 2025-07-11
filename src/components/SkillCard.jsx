import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { useScrollAnimation } from './ScrollAnimation.jsx'

const SkillCard = ({ skill, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.3)
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedLevel(prev => {
            if (prev >= skill.level) {
              clearInterval(interval)
              return skill.level
            }
            return prev + 2
          })
        }, 20)
        return () => clearInterval(interval)
      }, index * 200) // Stagger animation
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.level, index])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg mr-3 group-hover:bg-blue-500/30 transition-colors">
              <skill.icon className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-3 mb-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${animatedLevel}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-300 text-sm font-medium">{animatedLevel}% Proficiency</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < Math.floor(animatedLevel / 20) 
                      ? 'bg-blue-400' 
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillCard

