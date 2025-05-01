import React, { useRef, useEffect } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

// Interface for the HTMLDivElement with vanillaTilt is already declared in Hero.tsx
// so we don't need to redeclare it here

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  external?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techs,
  github,
  external,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize tilt effect
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 300,
        glare: true,
        "max-glare": 0.1,
        scale: 1.05,
      });
    }

    // Cleanup
    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.2, // Reduced from 0.6 to 0.4
        delay: delay * 0.025, // Reduced multiplier from 0.1 to 0.05
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="project-card glass-morphism transform-3d"
    >
      <div className="flex justify-between items-start mb-6">
        <Folder className="text-portfolio-teal w-10 h-10 floating" />
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform transition-all duration-300 hover:scale-110"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github size={20} />
            </a>
          )}
          {external && (
            <a
              href={external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-lightSlate hover:text-portfolio-teal transform transition-all duration-300 hover:scale-110"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-portfolio-lightestSlate">
        {title}
      </h3>
      <p className="text-portfolio-slate mb-6">{description}</p>

      <div className="mt-auto">
        <ul className="flex flex-wrap gap-2 text-xs font-mono text-portfolio-lightSlate">
          {techs.map((tech, index) => (
            <motion.li
              key={`${title}-${tech}`} // Added unique key combining title and tech
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay * 0.05 + index * 0.05 }} // Reduced multiplier from 0.1 to 0.05
              className="bg-portfolio-lightNavy/80 px-2 py-1 rounded"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Background circuit pattern */}
      <div className="absolute inset-0 cyber-circuit opacity-10 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;
