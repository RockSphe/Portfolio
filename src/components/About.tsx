import React from "react";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section">
        <SectionTitle number="01" title="About Me" />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-lg">
            <p>
              I am a results-driven software engineer blending technical mastery
              with a passion for societal upliftment. From hackathons to
              leadership programs, my journey is shaped by curiosity,
              collaboration, and a deep desire to build transformative digital
              solutions for African communities and beyond.
            </p>
            <p>
              With a Diploma in Computer Science from Tshwane University of
              Technology, I've developed expertise in full-stack development,
              blockchain technologies, and artificial intelligence, allowing me
              to create innovative solutions across various domains.
            </p>
            <p>
              My strategic vision extends from gaining industry experience with
              a forward-thinking tech firm in the short term, to pursuing
              further education mid-term, and ultimately establishing a tech
              company rooted in Africa that delivers cutting-edge solutions to
              solve socio-economic challenges.
            </p>
            <p className="text-portfolio-teal font-medium">
              "Code with purpose. Lead with vision. Build for the future."
            </p>
          </div>

          <div className="relative mx-auto max-w-[300px]">
            <div className="relative z-10 overflow-hidden rounded-md bg-portfolio-teal/20 transition-all">
              <img
                src="/profileCard.png"
                alt="Siphesihle Khumalo"
                className="grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 bg-portfolio-teal/10 hover:bg-transparent transition-all duration-300"></div>
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-portfolio-teal rounded-md z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
