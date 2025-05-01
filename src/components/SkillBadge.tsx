
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  className?: string;
  index?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, className, index = 0 }) => {
  return (
    <motion.span 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 10
      }}
      whileHover={{ 
        scale: 1.1,
        color: "#64FFDA",
        transition: { duration: 0.2 } 
      }}
      className={cn(
        "inline-block px-3 py-1 rounded-full text-sm font-mono bg-portfolio-lightNavy border border-portfolio-teal/30 text-portfolio-teal transform transition-all duration-300 hover:border-portfolio-teal hover:shadow-glow",
        className
      )}
    >
      {name}
    </motion.span>
  );
};

export default SkillBadge;
