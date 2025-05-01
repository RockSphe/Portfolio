
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionTitle from './SectionTitle';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section">
        <SectionTitle number="04" title="Get In Touch" className="justify-center" />
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg mb-8">
            I'm currently looking for new opportunities to contribute to innovative projects and teams. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          
          <Button 
            className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal rounded px-8 py-6 text-base"
            asChild
          >
            <a href="mailto:Siphesihle2021@gmail.com">Say Hello</a>
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6 text-portfolio-lightestSlate">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
            <div className="flex items-center space-x-3">
              <Mail className="text-portfolio-teal" size={20} />
              <a href="mailto:Siphesihle2021@gmail.com" className="text-portfolio-lightSlate hover:text-portfolio-teal">
                Siphesihle2021@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="text-portfolio-teal" size={20} />
              <span className="text-portfolio-lightSlate">Midrand, South Africa</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Linkedin className="text-portfolio-teal" size={20} />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-lightSlate hover:text-portfolio-teal">
                LinkedIn
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Github className="text-portfolio-teal" size={20} />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-lightSlate hover:text-portfolio-teal">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
