import './Card.css';

export default function Card({
  title,
  children,
  variant = 'default',
  className = '',
  animated = false,
}) {
  const classes = `
    card 
    glass 
    ${animated ? 'glass-hover' : ''} 
    ${variant === 'gradient' ? 'gradient-bg' : ''} 
    ${className}
  `;

  return (
    <div className={classes}>
      {title && <h3 className="card-title gradient-text">{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
}
