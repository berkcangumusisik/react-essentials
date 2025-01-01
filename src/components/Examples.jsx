import { useState, useEffect } from 'react';
import TabButton from './TabButton';
import Card from './Card';
import LoadingSpinner from './LoadingSpinner';
import { CORE_CONCEPTS } from './data';
import { motion, AnimatePresence } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import './Examples.css';

export default function Examples({ translations }) {
  const [selectedTopic, setSelectedTopic] = useState('components');
  const [isLoading, setIsLoading] = useState(false);
  const [showCode, setShowCode] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedTopic]);

  useEffect(() => {
    if (!isLoading) {
      Prism.highlightAll();
    }
  }, [isLoading, selectedTopic]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(selectedConcept?.code || '');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Kod kopyalanamadı:', err);
    }
  };

  const selectedConcept = CORE_CONCEPTS.find(
    (c) => c.title.toLowerCase() === selectedTopic,
  );

  if (!translations || !translations.coreConcepts) {
    return (
      <div className="loading-container glass">
        <LoadingSpinner text="Loading translations..." />
      </div>
    );
  }

  const handleSelect = (topic) => {
    setSelectedTopic(topic.toLowerCase());
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="examples-section glass animated-border"
    >
      <h2 className="gradient-text">{translations.examples.title}</h2>

      <div className="tab-menu glass">
        {CORE_CONCEPTS.map((concept) => {
          const conceptKey = concept.title.toLowerCase();
          return (
            <TabButton
              key={concept.title}
              isSelected={selectedTopic === conceptKey}
              onClick={() => handleSelect(concept.title)}
            >
              {translations.coreConcepts[conceptKey]?.title || concept.title}
            </TabButton>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTopic}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Card variant="gradient" animated={true} className="content-card">
            {isLoading ? (
              <LoadingSpinner text={translations.examples.loading} />
            ) : (
              <>
                <h3 className="gradient-text">
                  {translations.coreConcepts[selectedTopic]?.title}
                </h3>
                <p>{translations.coreConcepts[selectedTopic]?.description}</p>

                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span className="close" title="close"></span>
                      <span className="minimize" title="minimize"></span>
                      <span className="maximize" title="maximize"></span>
                    </div>
                    <div className="terminal-title">
                      <span className="file">{selectedTopic}.jsx</span>
                    </div>
                    <div className="terminal-actions">
                      <button
                        className="copy-btn"
                        onClick={handleCopyCode}
                        title={isCopied ? 'Kopyalandı!' : 'Kodu Kopyala'}
                      >
                        {isCopied ? (
                          <span className="copied">✓</span>
                        ) : (
                          <span>📋</span>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="terminal-content">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <pre className="language-jsx code-block">
                        <code>{selectedConcept?.code}</code>
                      </pre>
                    </motion.div>
                  </div>
                </div>
              </>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
