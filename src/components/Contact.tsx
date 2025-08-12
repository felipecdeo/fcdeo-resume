import React from 'react';
// @ts-ignore
import html2canvas from 'html2canvas';
// @ts-ignore
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { t } from '../assets/translator';
import { HiddenCV } from './HiddenCv';

const contactInfo = [
  {
    icon: Mail,
    labelKey: 'contactEmail',
    value: 'devfelipedeo@gmail.com',
    action: () => window.open('mailto:devfelipedeo@gmail.com'),
  },
  {
    icon: Phone,
    labelKey: 'contactPhone',
    value: '+55 14 981071444',
    action: () => window.open('tel:+5514981071444'),
  },
  {
    icon: MapPin,
    labelKey: 'contactLocation',
    value: 'Bariri, SP',
    action: null,
  },
  {
    icon: Github,
    labelKey: 'contactGithub',
    value: 'github.com/felipecdeo',
    action: () => window.open('https://github.com/felipecdeo'),
  },
  {
    icon: Linkedin,
    labelKey: 'contactLinkedin',
    value: 'linkedin.com/in/felipedeo',
    action: () => window.open('https://www.linkedin.com/in/felipedeo/'),
  }
];

type Props = {
  lang: 'en' | 'pt';
};

const Contact: React.FC<Props> = ({ lang }) => {
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

  // Ref para o CV visual
  const cvVisualRef = useRef<HTMLDivElement>(null);

  return (
    <div className="contact-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('contactTitle', lang)}
      </motion.h2>

      <motion.p
        className="contact-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t('contactDesc', lang)}
      </motion.p>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactInfo.map((contact) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.labelKey}
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
                <div className="contact-label">{t(contact.labelKey, lang)}</div>
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
        onClick={async () => {
          if (!cvVisualRef.current) return;
          const element = cvVisualRef.current;
          const canvas = await html2canvas(element, { scale: 2 });
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          // Ajusta altura proporcional
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pageWidth;
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight > pageHeight ? pageHeight : pdfHeight);
          pdf.save('cv.pdf');
        }}
      >
        {t('contactDownload', lang)}
      </motion.button>

      {/* CV visual para captura do PDF, oculto na tela */}

      <HiddenCV lang={lang} cvVisualRef={cvVisualRef} />
    </div>
  );
};

export default Contact;