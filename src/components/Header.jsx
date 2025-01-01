import { motion } from 'framer-motion';
import './Header.css';

export default function Header({ title, subtitle, description }) {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="header-content"
      >
        <div className="header-text">
          <h1 className="gradient-text">{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>

        <div className="header-visual">
          <div className="code-preview">
            <div className="window-header">
              <div className="window-buttons">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
              </div>
              <span className="window-title">App.jsx</span>
            </div>
            <pre className="code-content">
              <code>
                {`import React from 'react';

function App() {
  return (
    <div className="app">
      <h1>Hello React!</h1>
      <p>Welcome to React Essentials</p>
    </div>
  );
}

export default App;`}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
