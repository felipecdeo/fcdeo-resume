import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

type Tab = 'about' | 'experience' | 'skills' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  const tabs = [
    { id: 'about' as Tab, label: 'About', icon: User },
    { id: 'experience' as Tab, label: 'Experience', icon: Briefcase },
    { id: 'skills' as Tab, label: 'Skills', icon: Code },
    { id: 'contact' as Tab, label: 'Contact', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <Hero />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app">
      <nav className="nav">
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
      </nav>

      <main className="main">
        <motion.div
          key={activeTab}
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