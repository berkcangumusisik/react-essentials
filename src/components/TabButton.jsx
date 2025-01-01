import './TabButton.css';

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <button className={`tab-button ${isSelected ? 'active' : ''}`} {...props}>
      {children}
    </button>
  );
}
