import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import ProjectsSection from './ProjectsSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  const navLinks = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of navLinks) {
        const element = sectionsRef.current[section];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const registerSection = (section, ref) => {
    if (ref && !sectionsRef.current[section]) {
      sectionsRef.current[section] = ref;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <motion.div
          className="logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IM
        </motion.div>
        <motion.ul
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <a
                href={`#${link}`}
                className={activeSection === link ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  sectionsRef.current[link].scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      <section
        id="home"
        className="hero-section"
        ref={(ref) => registerSection('home', ref)}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="name-title"
          >
            <span className="typing-animation">Iani Meghea</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="subtitle"
          >
            Artificial Intelligence Student & Machine Leaning Developer
          </motion.h2>
          <motion.div
            className="hero-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <a href="https://github.com/ianimeghea" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/iani-meghea-218a56263/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="mailto:i.meghea@student.vu.nl" className="social-link">
              Email
            </a>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="about-section section"
        ref={(ref) => registerSection('about', ref)}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="education">
            <h3>Education</h3>
            <motion.div
              className="education-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4>Vrije University Amsterdam, NL</h4>
              <p className="degree">Bachelor of Artificial Intelligence, Minor in Data Science</p>
              <p className="date">Sep. 2023 – Jun 2026</p>
              <p className="detail">Member of the Honors Program</p>
            </motion.div>
            <motion.div
              className="education-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>National College of Informatics "Tudor Vianu" Bucharest, RO</h4>
              <p className="degree">Mathematics-Informatics Profile</p>
              <p className="date">Sep. 2019 – Jun 2023</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section
  id="experience"
  className="experience-section section"
  ref={(ref) => registerSection('experience', ref)}
>
  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    Experience
  </motion.h2>
  <div className="timeline">
    {/* Machine Learning Research Assistant */}
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-content">
        <h3>Machine Learning Research Assistant</h3>
        <h4>Vrije University Amsterdam, NL</h4>
        <p className="date">Sep 2024 – Present</p>
        <ul>
          <li>Exploring supervised and unsupervised learning techniques for interpreting football data at large scales</li>
          <li>Working on Agglomerative Hierarchical Clustering model for automatically categorizing goals</li>
        </ul>
      </div>
    </motion.div>

    {/* Teaching Assistant - Human-Computer Interaction */}
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="timeline-content">
        <h3>Teaching Assistant - Human-Computer Interaction</h3>
        <h4>Vrije University Amsterdam, NL</h4>
        <p className="date">Apr 2025 – Jun 2025</p>
        <ul>
          <li>Assisting students in learning fundamental concepts of Human-Computer Interaction (HCI)</li>
          <li>Providing guidance on building conversational agents and user-centered design principles</li>
        </ul>
      </div>
    </motion.div>
  </div>
</section>


      <section
        id="projects"
        className="projects-section section"
        ref={(ref) => registerSection('projects', ref)}
      >
        <ProjectsSection />
      </section>

      <section
        id="skills"
        className="skills-section section"
        ref={(ref) => registerSection('skills', ref)}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="skills-container">
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Languages</h3>
            <div className="skill-tags">
              {['JavaScript', 'Python', 'C++', 'SQL', 'HTML/CSS', 'Prolog'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Frameworks</h3>
            <div className="skill-tags">
              {['React', 'Flask', 'Material-UI', 'FastAPI', 'GraphDB'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Developer Tools</h3>
            <div className="skill-tags">
              {['Git', 'Docker', 'VS Code', 'Visual Studio', 'PyCharm', 'Eclipse'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3>Libraries</h3>
            <div className="skill-tags">
              {['pandas', 'NumPy', 'Matplotlib', 'PyTorch', 'SKlearn'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section section"
        ref={(ref) => registerSection('contact', ref)}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <motion.div
          className="contact-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>i.meghea@student.vu.nl</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+40747074705</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-text">
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/iani-meghea-218a56263/" target="_blank" rel="noopener noreferrer">iani-meghea-218a56263</a></p>
              </div>
            </div>
          </div>
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Iani Meghea. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/ianimeghea" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/iani-meghea-218a56263/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;