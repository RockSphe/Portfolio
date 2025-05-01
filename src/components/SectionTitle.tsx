
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, className }) => {
  return (
    <h2 className={cn("flex items-center whitespace-nowrap text-2xl md:text-3xl font-bold mb-8 text-portfolio-lightestSlate", className)}>
      <span className="text-portfolio-teal mr-2 font-mono text-xl md:text-2xl">{number}.</span>
      {title}
      <span className="h-px bg-portfolio-lightestNavy w-full max-w-[300px] ml-4 opacity-20"></span>
    </h2>
  );
};

export default SectionTitle;
