import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabButton from './TabButton';
import './CoreConcept.css';

export function SetupSteps({ concepts, translations }) {
  const [selectedConcept, setSelectedConcept] = useState(concepts[0].title);

  const selectedContent = concepts.find(
    (concept) => concept.title === selectedConcept,
  );

  return (
    <div className="setup-section">
      <div className="setup-tabs">
        {concepts.map((concept) => (
          <TabButton
            key={concept.title}
            isSelected={selectedConcept === concept.title}
            onClick={() => setSelectedConcept(concept.title)}
          >
            {translations.setup.steps[concept.title.toLowerCase()]?.title ||
              concept.title}
          </TabButton>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedConcept}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="setup-content"
        >
          <div className="concept-info">
            <img src={selectedContent.image} alt={selectedContent.title} />
            <h3>
              {translations.setup.steps[selectedContent.title.toLowerCase()]
                ?.title || selectedContent.title}
            </h3>
            <p>
              {translations.setup.steps[selectedContent.title.toLowerCase()]
                ?.description || selectedContent.description}
            </p>
          </div>

          <div className="setup-terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
              </div>
              <div className="terminal-title">
                {selectedContent.title.toLowerCase()}.sh
              </div>
            </div>
            <div className="terminal-content">
              <pre>
                <code>{selectedContent.code}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
