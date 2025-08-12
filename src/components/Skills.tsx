import React from 'react';
import { motion } from 'framer-motion';
import { t } from '../assets/translator';

const frontendSkills = [
  { name: 'React', level: 95 },
  { name: 'React Native', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'HTML5', level: 100 },
  { name: 'CSS3/SCSS', level: 100 },
  { name: 'TypeScript', level: 100 },
  { name: 'JavaScript', level: 100 },
  { name: 'CSS/SCSS', level: 100 }
];

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'SQL Server', level: 80 }
];

const frameworks = [
  'Next.js', 'Vue.js', 'Express', 'Tailwind CSS', 'Redux', 'Bootstrap', 'Ant Design', 'Material-UI'
];

const tools = [
  'Git', 'Docker', 'Figma', 'VS Code', 'Webpack', 'Vite', 'Jest', 'Postman', 'Swagger', 'Android Studio'
];

type Props = {
  lang: 'en' | 'pt';
};

const Skills: React.FC<Props> = ({ lang }) => {
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

  const itemVariants: any = {
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
        {t('skillsTitle', lang)}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="skills-section" variants={itemVariants}>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            {t('frontendTitle', lang)}
          </h3>
          {frontendSkills.map((skill, index) => (
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
            {t('backendTitle', lang)}{' '}
            <span style={{ fontSize: '1rem', color: '#888', marginLeft: '10px' }}>{t('backendNote', lang)}</span>
          </h3>
          {backendSkills.map((skill, index) => (
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
            {t('frameworksTitle', lang)}
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
            {t('toolsTitle', lang)}
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