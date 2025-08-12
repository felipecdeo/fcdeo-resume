import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

const Hero: React.FC = () => {
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
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
          alt="Profile"
          className="profile-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TypewriterText
          text="Alex Thompson"
          className="hero-name"
          delay={800}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TypewriterText
          text="Senior Frontend Developer"
          className="hero-title"
          delay={1500}
        />
      </motion.div>

      <motion.p className="hero-tagline" variants={itemVariants}>
        Crafting digital experiences with passion and precision
      </motion.p>

      <motion.div className="about-section" variants={itemVariants}>
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Passionate frontend developer with 5+ years of experience creating beautiful, 
          user-centric web and mobile applications. I specialize in React, TypeScript, 
          and modern JavaScript frameworks, with a keen eye for design and performance optimization.
        </p>
      </motion.div>

      <motion.div className="stats-grid" variants={itemVariants}>
        <motion.div
          className="stat-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects</span>
        </motion.div>
        <motion.div
          className="stat-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="stat-number">5</span>
          <span className="stat-label">Years Exp</span>
        </motion.div>
        <motion.div
          className="stat-item"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="stat-number">15</span>
          <span className="stat-label">Technologies</span>
        </motion.div>
      </motion.div>

      <motion.div className="philosophy" variants={itemVariants}>
        <p className="philosophy-text">
          "Code is poetry in motion. Every line should serve a purpose, 
          every component should tell a story, and every user interaction 
          should feel magical."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;