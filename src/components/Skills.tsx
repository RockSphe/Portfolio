
import React from 'react';
import SectionTitle from './SectionTitle';
import SkillBadge from './SkillBadge';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "Java", "Spring Boot", "Python", "Django", 
        "JavaScript", "React", "Kotlin", "React Native", 
        "Solidity", "HTML", "CSS", "Tailwind"
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        "MySQL", "Oracle SQL", "MongoDB", 
        "PostgreSQL", "Firebase"
      ]
    },
    {
      title: "Cloud & Deployment",
      skills: [
        "AWS", "Glassfish", "Tomcat", "Firebase"
      ]
    },
    {
      title: "Blockchain & Emerging Tech",
      skills: [
        "Smart Contracts", "DApps", "Web3", 
        "AI/ML", "TensorFlow", "Computer Vision"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-portfolio-lightNavy/30 cyber-circuit">
      <div className="section">
        <SectionTitle number="02" title="Skills & Expertise" />
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="glass-morphism p-6 rounded-lg border border-portfolio-lightestNavy/50 hover:border-portfolio-teal/30 transform-3d tilt-effect"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold mb-4 text-portfolio-teal"
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skill} name={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-portfolio-lightestSlate"
          >
            Core Competencies
          </motion.h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Full Stack & Cloud Engineering",
                description: "Developing end-to-end applications with responsive UI, robust backends, and scalable cloud deployments.",
                delay: 0
              },
              {
                title: "Blockchain & Smart Contracts",
                description: "Building decentralized applications and implementing secure, trustless systems for real-world use cases.",
                delay: 0.2
              },
              {
                title: "AI & Emerging Tech",
                description: "Leveraging machine learning and AI technologies to create innovative solutions for complex problems.",
                delay: 0.4
              }
            ].map((competency, index) => (
              <motion.div 
                key={competency.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: competency.delay,
                  type: "spring"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="glass-morphism p-6 rounded-lg border border-portfolio-lightestNavy/50 hover:border-portfolio-teal/30 transform-3d"
              >
                <h4 className="text-lg font-bold mb-2 text-portfolio-teal">{competency.title}</h4>
                <p>{competency.description}</p>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-portfolio-teal/30 rounded-br-lg"></div>
                <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-portfolio-teal/30 rounded-tl-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
