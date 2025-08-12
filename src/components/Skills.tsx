import React from 'react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'React/Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'CSS/SCSS', level: 90 },
  { name: 'GraphQL', level: 80 },
];

const frameworks = [
  'Next.js', 'Vue.js', 'Express', 'Tailwind CSS', 'Redux', 'Framer Motion'
];

const tools = [
  'Git', 'Docker', 'Figma', 'VS Code', 'Webpack', 'Vite'
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="skills-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Arsenal
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="skills-section" variants={itemVariants}>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            Programming Languages
          </h3>
          {technicalSkills.map((skill, index) => (
            <div key={skill.name} className="skill-bar-container">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div className="skills-section" variants={itemVariants}>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            Frameworks & Libraries
          </h3>
          <div className="skill-grid">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="skill-card-text">{framework}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="skills-section" variants={itemVariants}>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            Tools & Platforms
          </h3>
          <div className="skill-grid">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="skill-card-text">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;