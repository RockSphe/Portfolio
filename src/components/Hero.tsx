import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

// Define the interface for the augmented HTMLDivElement
declare global {
  interface HTMLDivElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}

const Hero: React.FC = () => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize tilt effect on the hero image
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }

    // Cleanup
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section className="min-h-[100vh] flex flex-col justify-center pt-20 pb-16 px-4 md:px-12 lg:px-24 particles cyber-circuit">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-portfolio-teal mb-5"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightestSlate mb-4 gradient-text"
            >
              Siphesihle Khumalo.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6"
            >
              I build for the future web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-xl text-portfolio-slate text-lg mb-12"
            >
              I'm a full-stack innovator and blockchain architect specializing
              in developing secure, scalable, and human-centered applications
              across web, mobile, cloud, and blockchain ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                className="bg-transparent hover:bg-portfolio-teal/10 text-portfolio-teal border border-portfolio-teal rounded px-6 py-5 text-base group pulse-glow"
                asChild
              >
                <a href="#projects" className="flex items-center">
                  Check out my work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="hidden md:block perspective">
            <motion.div
              ref={tiltRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="transform-3d hero-image-container hero-image-glow"
            >
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-navy to-transparent opacity-30 z-10"></div>
                <img
                  src="/profileImage.jpg"
                  alt="Siphesihle Khumalo"
                  className="w-full h-full object-cover object-center"
                />

                {/* Animated overlay elements */}
                <div className="absolute top-[-20px] right-[-20px] w-[120px] h-[120px] border-2 border-portfolio-teal/40 rounded-full breathing"></div>
                <div
                  className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] border-2 border-portfolio-teal/20 rounded-full breathing"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[150px] h-[150px] rounded-full bg-portfolio-teal/20 blur-xl breathing"></div>
                </div>

                {/* Circuit lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,100 Q50,50 100,100 T200,100"
                      fill="none"
                      stroke="rgba(100, 255, 218, 0.3)"
                      strokeWidth="1"
                    />
                    <path
                      d="M0,150 Q100,100 200,150"
                      fill="none"
                      stroke="rgba(100, 255, 218, 0.2)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
