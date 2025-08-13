import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import type { Language } from './assets/translator';

type Tab = 'about' | 'experience' | 'skills' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const [lang, setLang] = useState<Language>('pt');
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: 'about' as Tab, label: lang === 'pt' ? 'Sobre Mim' : 'About Me', icon: User },
    { id: 'experience' as Tab, label: lang === 'pt' ? 'Experiência' : 'Experience', icon: Briefcase },
    { id: 'skills' as Tab, label: lang === 'pt' ? 'Habilidades' : 'Skills', icon: Code },
    { id: 'contact' as Tab, label: lang === 'pt' ? 'Contato' : 'Contact', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <Hero lang={lang} />;
      case 'experience':
        return <Experience lang={lang} />;
      case 'skills':
        return <Skills lang={lang} />;
      case 'contact':
        return <Contact lang={lang} />;
      default:
        return <Hero lang={lang} />;
    }
  };

  return (
    <div className="app">
      <nav className="nav">
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menu">
          <span className="menu-icon">&#9776;</span>
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMenuOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
        {/* Language Switch */}
        <div className="lang-switch-container">
          <div
            className={`lang-switch-toggle ${lang} ${lang === 'en' ? 'active en' : 'pt'}`}
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            role="button"
            tabIndex={0}
            aria-label="Alternar idioma"
            style={{ userSelect: 'none' }}
          >
            <span className="lang-switch-label pt">PT</span>
            <span className="lang-switch-label en">EN</span>
            <span className="lang-switch-knob" />
          </div>
        </div>
      </nav>

      <main className="main">
        <motion.div
          key={activeTab + lang}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </main>
    </div>
  );
}

export default App;