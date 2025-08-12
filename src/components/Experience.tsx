import React from 'react';
import { motion } from 'framer-motion';
import { t } from '../assets/translator';

const experiences = [
  {
    titleKey: 'exp1Title',
    company: 'FK Grupo',
    period: '2023 - Present',
    descKey: 'exp1Desc',
    technologies: ['React', 'ReactNative', 'TypeScript', 'Node.js', 'SQL Server', 'MongoDB', 'RabbitMQ'],
  },
  {
    titleKey: 'exp2Title',
    company: 'FK Grupo',
    period: '2020 - 2021',
    descKey: 'exp2Desc',
    technologies: ['React', 'TypeScript', 'Node.js', 'SQL Server'],
  },
  {
    titleKey: 'exp3Title',
    company: 'Freelancer',
    period: '2018 - 2020',
    descKey: 'exp3Desc',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'Pug'],
  },
];

type Props = {
  lang: 'en' | 'pt';
};

const Experience: React.FC<Props> = ({ lang }) => {
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

  const cardVariants: any = {
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
        {t('experienceTitle', lang)}
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
              <h3 className="experience-title">{t(experience.titleKey, lang)}</h3>
              <h4 className="experience-company">{experience.company}</h4>
              <p className="experience-period">{experience.period}</p>
            </div>
            
            <p className="experience-description">{t(experience.descKey, lang)}</p>
            
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