import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import { CoreConcepts } from './components/CoreConcept';
import { SetupSteps } from './components/SetupSteps';
import Examples from './components/Examples';
import LanguageSelector from './components/LanguageSelector';
import { translations } from './translations';
import { CORE_CONCEPTS, SETUP_CONCEPTS } from './components/data';

function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    // Tarayıcı dilini veya localStorage'dan kayıtlı dili al
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    return savedLang || (translations[browserLang] ? browserLang : 'en');
  });

  useEffect(() => {
    // Dil tercihini kaydet
    localStorage.setItem('preferredLanguage', currentLang);
    // HTML lang attribute'unu güncelle
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const t = translations[currentLang];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentLang}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <LanguageSelector
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
        />
        <Header
          title={t.title}
          subtitle={t.subtitle}
          description={t.headerDescription}
        />
        <main className="container">
          <section>
            <h2 className="gradient-text">{t.setup.title}</h2>
            <SetupSteps concepts={SETUP_CONCEPTS} translations={t} />
          </section>

          <section>
            <h2 className="gradient-text">{t.coreConcepts.title}</h2>
            <CoreConcepts concepts={CORE_CONCEPTS} translations={t} />
          </section>

          <Examples translations={t} />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
