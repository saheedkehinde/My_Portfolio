import { ScrollAnimationWrapper } from './ScrollAnimation.jsx'
import SkillCard from './SkillCard.jsx'
import { Code, Palette, Globe } from 'lucide-react'

const skills = [
   { name: 'HTML/CSS', icon: Code, level: 100 },
  { name: 'React', icon: Code, level: 97 },
  { name: 'JavaScript', icon: Code, level: 95 },
  { name: 'Typescript', icon: Code, level: 99 },
  { name: 'Tailwind CSS', icon: Code, level: 95 },
  { name: 'WordPress', icon: Globe, level: 95 },
   { name: 'Elementor', icon: Globe, level: 95 },
  { name: 'Graphics Design', icon: Palette, level: 100 },
]

const SkillsSection = () => {
  return (
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
  )
}

export default SkillsSection