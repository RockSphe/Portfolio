
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 text-center text-portfolio-slate text-sm font-mono">
      <p>Designed & Built with 💻 by Siphesihle Khumalo</p>
      <p className="mt-2">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
