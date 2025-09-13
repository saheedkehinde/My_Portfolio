import { Button } from '@/components/ui/button.jsx'
import { ScrollAnimationWrapper } from './ScrollAnimation.jsx'
import { MessageCircle, Mail, Phone, Github, Linkedin } from 'lucide-react'

const ContactSection = () => {
  return (
    <>
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
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-semibold"
                onClick={() => window.open('https://wa.me/2348160093414?text=Hi%20Saheed,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp Me
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                onClick={() => window.open('mailto:your.saheedkehinde052@gmail.com', '_blank')}
              >
                <Mail className="mr-3 h-6 w-6" />
                Send Email
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                onClick={() => window.open('tel:+2348160093414', '_blank')}
              >
                <Phone className="mr-3 h-6 w-6" />
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
                onClick={() => window.open('https://github.com/saheedkehinde', '_blank')}
              >
                <Github className="h-8 w-8" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-4"
                onClick={() => window.open('https://www.linkedin.com/in/saheed-kehinde-50499a237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
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
              © 2025 Adeogun Saheed Kehinde.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </footer>
    </>
  )
}

export default ContactSection