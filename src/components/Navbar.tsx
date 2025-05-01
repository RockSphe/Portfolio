import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 
      ${
        isScrolled
          ? "bg-portfolio-navy/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-portfolio-teal font-bold text-2xl font-mono"
        >
          S<span className="text-portfolio-lightestSlate">.</span>K
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link font-mono text-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-portfolio-teal">{`0${index + 1}.`}</span>{" "}
              {link.name}
            </a>
          ))}
          <a
            href="/SiphesihleKhumalo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button
              variant="outline"
              className="border-portfolio-teal text-portfolio-teal bg-portfolio-dark hover:bg-portfolio-dark/90 hover:scale-105 hover:text-portfolio-light transition-transform duration-200 rounded"
            >
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-teal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-portfolio-lightNavy/95 z-40 flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link font-mono text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-portfolio-teal">{`0${index + 1}.`}</span>{" "}
                {link.name}
              </a>
            ))}
            <a
              href="/SiphesihleKhumalo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button
                variant="outline"
                className="border-portfolio-teal text-portfolio-teal bg-portfolio-dark hover:bg-portfolio-dark/90 hover:scale-105 hover:text-portfolio-light transition-transform duration-200 rounded"
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
