import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ScrollAnimationWrapper } from './ScrollAnimation.jsx'
import { Calendar } from 'lucide-react'

const experiences = [
  {
    title: "Frontend Developer", 
    company: "Avoi Skincare Company Limited",
    period: "2024 - 2025",
    description: "Developed a Website For The Rebranded product, Also an  E-Commerce Website",
    skills: ["Html", "Css", "Javascript", "React", "Tailwind"]
  },
  {
    title: "Frontend Developer",
    company: "Oasis Infobytes EdTech",
    period: "2023 - 2024",
    description: "Frontend Developer Intership",
    skills: ["Html", "JavaScript", "CSS"]
  },
  {
    title: "Frontend Developer", 
    company: "Flashmiles logistic Company",
    period: "2024 - 2025",
    description: "Developed  a Website for contact support for logistic support or partnership",
    skills: ["Javascript", "React", "Tailwind"]
  },
  {
    title: "Frontend Developer", 
    company: "Knowlwedge First Academy",
    period: "2022 - 2023",
    description: "Developed  a website for  both online and physical based Patform For learning",
    skills: ["Html", "Css", "Javascript", "React", "Tailwind"]
  },
  {
    title: "WordPress Developer", 
    company: "shuks Varieties Stores",
    period: "2024 - 2025",
    description: "Developed website for gaming and lottery Industry ",
    skills: ["WordPress", "Elementor",]
  },
  {
    title: "WordPress Developer", 
    company: "Unpause Global",
    period: "2023 - 2024",
    description: "Developed the website for this Reliable shopping Company basically from US to Nigeria",
    skills: ["WordPress", "Elementor",]
  },
  {
    title: "WordPress Developer", 
    company: "Gfam Limited",
    period: "2022 - 2023",
    description: "Being web developer that developed the website for this 'Recruitment based company' ",
    skills: ["WordPress", "Elementor",]
  },
  {
    title: "WordPress Developer",
    company: "Scratch Me Card",
    period: "2022 - 2023",
    description: "Developed website for gaming and lottery Industry ",
    skills: ["WordPress", "Elementor",]
  },
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </ScrollAnimationWrapper>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 200}>
              <Card className="bg-slate-800/50 border-slate-600 mb-8 hover:bg-slate-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 text-lg">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30 hover:bg-blue-600/30 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection