import './CoreConcept.css';

export function CoreConcepts({ concepts, translations }) {
  return (
    <ul className="concepts-list">
      {concepts.map((concept) => (
        <li key={concept.title} className="concept">
          <img src={concept.image} alt={concept.title} />
          <h3>
            {translations.coreConcepts[concept.title.toLowerCase()]?.title ||
              concept.title}
          </h3>
          <p>
            {translations.coreConcepts[concept.title.toLowerCase()]
              ?.description || concept.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
