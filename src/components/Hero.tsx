import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import { t } from '../assets/translator'; // import the translator

type Props = {
  lang: 'en' | 'pt';
};

const Hero: React.FC<Props> = ({ lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <motion.img
          src="../public/me.png"
          alt="Profile"
          className="profile-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TypewriterText
          text={t('name', lang)}
          className="hero-name"
          delay={800}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TypewriterText
          text={t('title', lang)}
          className="hero-title"
          delay={1500}
        />
      </motion.div>

      <motion.p className="hero-tagline" variants={itemVariants}>
        {t('tagline', lang)}
      </motion.p>

      <motion.div className="about-section" variants={itemVariants}>
        <h2 className="section-title">{t('aboutTitle', lang)}</h2>
        <p className="about-text">
          {t('about1', lang)}
        </p>

        <p className="about-text">
          {t('about2', lang)}
        </p>
        
        <p className="about-text">
          {t('about3', lang)}
        </p>
      </motion.div>

      <motion.div className="stats-grid" variants={itemVariants}>
        <motion.div
          className="stat-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="stat-number">20+</span>
          <span className="stat-label">{t('projects', lang)}</span>
        </motion.div>
        <motion.div
          className="stat-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="stat-number">5</span>
          <span className="stat-label">{t('yearsExp', lang)}</span>
        </motion.div>
        <motion.div
          className="stat-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="stat-number">10</span>
          <span className="stat-label">{t('technologies', lang)}</span>
        </motion.div>
      </motion.div>

      <motion.div className="philosophy" variants={itemVariants}>
        <p className="philosophy-text">
          "{t('philosophy', lang)}"
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;