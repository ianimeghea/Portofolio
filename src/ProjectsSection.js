import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Football Gladiators",
      technologies: "Python, Flask, React, SQLite, Docker, GraphDB",
      description: "A full-stack web application with Flask serving a REST API and React as the frontend. Implemented external APIs and a hosted graphDB triplestore for the backend logic. Allows users to search for footballers, favorite them and add them to teams.",
      projectLink: "#",
      sourceLink: "https://github.com/ianimeghea/football-gladiators"
    },
    {
      id: 2,
      title: "Neural Network",
      technologies: "Python, NumPy",
      description: "Developed a Neural Network in vanilla Python, using only NumPy for matrix calculations. Classifies hand-written digits with an accuracy of 95 percent. Employs Gradient Descent on 100,000 iterations.",
      projectLink: "#",
      sourceLink: "https://github.com/ianimeghea/neural-network-from-scratch"
    },
    {
      id: 3,
      title: "ML Card Game Agent",
      technologies: "Python, SKlearn",
      description: "Developed a card-game playing agent using a neural network model. Complex state-space representations, one-hot encoded features and intriguing game dynamics. Was part of a university course, collaborated with 3 other students.",
      projectLink: "#",
      sourceLink: "https://github.com/ianimeghea/ml-agent"
    },
    {
      id: 4,
      title: "Flashcards App",
      technologies: "React, OpenAI API",
      description: "Programmed a React Web Application that generates flashcards on a given subject using OpenAI's API. Responsive on all devices and very dynamic UI.",
      projectLink: "#",
      sourceLink: "https://github.com/ianimeghea/flashcards"
    },
    {
      id: 5,
      title: "Portfolio Website",
      technologies: "React, Framer Motion",
      description: "Personal portfolio website with animated components, responsive design and interactive elements. Features a unique library shelf design for project display.",
      projectLink: "#",
      sourceLink: "https://github.com/ianimeghea/portfolio"
    },
    {
        id: 6,
        title: "LLM",
        technologies: "Python, NumPy",
        description: "Small scale LLM project for my Machine Learning Course, developed in python using Bigram model and character level tokenizer. Generates authentic-like Shakespeare.",
        projectLink: "#",
        sourceLink: "https://github.com/ianimeghea/portfolio"
      }
  ];

  const handleMouseEnter = (id) => setExpandedProject(id);
  const handleMouseLeave = () => setExpandedProject(null);

  return (
    <section
      id="projects"
      className="projects-section section"
      ref={(ref) => window.projectsRef = ref}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <div className="library-shelf">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`book ${expandedProject === project.id ? 'expanded' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            animate={{
              width: expandedProject === project.id ? '300px' : '50px',
              transition: { duration: 0.3 }
            }}
          >
            <div className="book-spine">
              <h3>{project.title}</h3>
            </div>
            
            <AnimatePresence>
              {expandedProject === project.id && (
                <motion.div 
                  className="book-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3>{project.title}</h3>
                  <p className="project-tech">{project.technologies}</p>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-links">
                   
                    <a href={project.sourceLink} className="project-link">Source Code</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;