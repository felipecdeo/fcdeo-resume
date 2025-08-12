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
      <nav className="nav" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flex: 1, gap: 10 }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
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
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            className={`lang-switch${lang === 'en' ? ' active' : ''}`}
            onClick={() => setLang('en')}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: 'none',
              color: lang === 'en' ? '#0a0a0aff' : '#fffafaff',
              background: lang === 'en' ? '#eee' : 'transparent',
              cursor: 'pointer',
              fontWeight: lang === 'en' ? 'bold' : 'normal'
            }}
          >
            EN
          </button>
          <button
            className={`lang-switch${lang === 'pt' ? ' active' : ''}`}
            onClick={() => setLang('pt')}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: 'none',
              color: lang === 'pt' ? '#0a0a0aff' : '#fffafaff',
              background: lang === 'pt' ? '#eee' : 'transparent',
              cursor: 'pointer',
              fontWeight: lang === 'pt' ? 'bold' : 'normal'
            }}
          >
            PT
          </button>
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