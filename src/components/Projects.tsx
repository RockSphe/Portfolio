import * as React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "MedXpert",
      description:
        "A Java Spring Boot web app improving medical data management and patient engagement.",
      techs: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "#",
      external: "#",
    },
    {
      title: "ReadWell",
      description:
        "A digital library platform using MongoDB for persistent, scalable storage.",
      techs: ["JavaScript", "Node.js", "MongoDB", "Express"],
      github: "#",
    },
    {
      title: "Secure Document Sharing DApp",
      description:
        "A Django-Solidity blockchain system ensuring tamper-proof document integrity.",
      techs: ["Solidity", "Django", "Web3.js", "IPFS"],
      github: "#",
      external: "#",
    },
    {
      title: "GDN Stokvel",
      description:
        "A Django-Postgres fintech tool enabling collective savings and transparent transactions.",
      techs: ["Django", "PostgreSQL", "Bootstrap", "JavaScript"],
      github: "#",
    },
    {
      title: "Ayo-Business-Chat",
      description:
        "A cross-platform communication tool for enterprises with focus on back-end architecture.",
      techs: ["React Native", "Firebase", "Node.js", "WebSockets"],
      github: "#",
      external: "#",
    },
    {
      title: "EcoSort AI",
      description:
        "Computer vision-powered waste classification system built with TensorFlow to promote sustainability.",
      techs: ["Python", "TensorFlow", "OpenCV", "React"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section">
        <SectionTitle number="03" title="Projects That Speak" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techs={project.techs}
              github={project.github}
              external={project.external}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
