import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alex.thompson@email.com',
    action: () => window.open('mailto:alex.thompson@email.com'),
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    action: () => window.open('tel:+15551234567'),
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    action: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/alexthompson',
    action: () => window.open('https://github.com/alexthompson'),
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/alexthompson',
    action: () => window.open('https://linkedin.com/in/alexthompson'),
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'alexthompson.dev',
    action: () => window.open('https://alexthompson.dev'),
  },
];

const Contact: React.FC = () => {
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
    <div className="contact-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="contact-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm always excited to collaborate on innovative projects and discuss new opportunities. 
        Feel free to reach out through any of the channels below.
      </motion.p>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.label}
              className="contact-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              onClick={contact.action || undefined}
              style={{ cursor: contact.action ? 'pointer' : 'default' }}
            >
              <div className="contact-icon">
                <Icon size={24} />
              </div>
              <div className="contact-info">
                <div className="contact-label">{contact.label}</div>
                <div className="contact-value">{contact.value}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.button
        className="download-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert('CV download would be implemented here')}
      >
        Download Full CV
      </motion.button>
    </div>
  );
};

export default Contact;