import Header from "./components/Header";
import ComponentsImage from "./assets/components.png";
import CoreConcept from './components/CoreConcept';
import JsxImage from "./assets/jsx-ui.png";
import PropsImage from "./assets/config.png";
import StateImage from "./assets/state-mgmt.png";
import TabButton from './components/TabButton';
const CORE_CONCEPTS = [
  {
    title: 'Components',
    description: 'The core UI building block - compose the user interface by combining multiple components.',
    image: ComponentsImage,
  },
  {
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    image: JsxImage,
  },
  {
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing input data to them.',
    image: PropsImage,
  },
  {
    title: 'State',
    description: 'React-managed data which, when changed, causes the component to re-render & the UI to update',
    image: StateImage,
  }
];

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div className="container">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul className="concepts-list">
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept 
                key={concept.title}
                {...concept}
              />
            ))}
          </ul>
        </section>


        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
