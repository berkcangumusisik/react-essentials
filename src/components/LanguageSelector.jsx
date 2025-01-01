import { motion } from 'framer-motion';
import './LanguageSelector.css';

const TrFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <rect width="1200" height="800" fill="#E30A17" />
    <circle cx="425" cy="400" r="200" fill="#ffffff" />
    <circle cx="475" cy="400" r="160" fill="#E30A17" />
    <path
      d="M583.334 400l116.673-37.987-72.075 98.948V339.039l72.075 98.948z"
      fill="#ffffff"
    />
  </svg>
);

const EnFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
    <path
      d="M0,0 L60,30 M60,0 L0,30"
      clipPath="url(#s)"
      stroke="#C8102E"
      stroke-width="4"
    />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
  </svg>
);

export default function LanguageSelector({ currentLang, onLanguageChange }) {
  return (
    <motion.div
      className="language-selector"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="language-buttons">
        <button
          className={`lang-btn ${currentLang === 'tr' ? 'active' : ''}`}
          onClick={() => onLanguageChange('tr')}
        >
          <span className="flag">
            <TrFlag />
          </span>
          <span className="lang-name">Türkçe</span>
        </button>
        <div className="divider" />
        <button
          className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
          onClick={() => onLanguageChange('en')}
        >
          <span className="flag">
            <EnFlag />
          </span>
          <span className="lang-name">English</span>
        </button>
      </div>
    </motion.div>
  );
}
