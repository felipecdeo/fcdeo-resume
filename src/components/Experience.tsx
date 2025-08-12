import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise applications using React and TypeScript. Mentoring junior developers and architecting scalable solutions.',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and mobile apps. Collaborated with design teams to implement pixel-perfect UIs.',
    technologies: ['React', 'JavaScript', 'CSS3', 'Node.js'],
  },
  {
    title: 'Junior Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Built modern web interfaces and learned industry best practices. Contributed to open-source projects and internal tools.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vue.js'],
  },
];

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="experience-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Journey
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="experience-header">
              <h3 className="experience-title">{experience.title}</h3>
              <h4 className="experience-company">{experience.company}</h4>
              <p className="experience-period">{experience.period}</p>
            </div>
            
            <p className="experience-description">{experience.description}</p>
            
            <div className="tech-tags">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + techIndex * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;