import ComponentsImage from '../assets/components.png';
import JsxImage from '../assets/jsx-ui.png';
import PropsImage from '../assets/config.png';
import StateImage from '../assets/state-mgmt.png';

const SetupImage = ComponentsImage;
const StructureImage = JsxImage;
const ConfigImage = PropsImage;
const StartImage = StateImage;

export const SETUP_CONCEPTS = [
  {
    title: 'Setup',
    description: 'Geliştirme ortamını hazırlayın ve projeyi oluşturun.',
    image: SetupImage,
    code: `# Node.js'i yükleyin (nodejs.org)

# pnpm'i yükleyin
npm install -g pnpm

# Yeni proje oluşturun
pnpm create vite react-essentials -- --template react

# Proje klasörüne gidin
cd react-essentials

# Bağımlılıkları yükleyin
pnpm install

# Ek paketleri yükleyin
pnpm add framer-motion prismjs`,
  },
  {
    title: 'Structure',
    description: 'Proje dosyalarını düzenleyin ve klasör yapısını oluşturun.',
    image: StructureImage,
    code: `react-essentials/
├── src/
│   ├── components/   # Bileşenler
│   │   ├── Header/
│   │   ├── CoreConcept/
│   │   └── Examples/
│   ├── assets/      # Görseller
│   ├── styles/      # CSS dosyaları
│   ├── hooks/       # Custom hooks
│   ├── utils/       # Yardımcı fonksiyonlar
│   └── constants/   # Sabit değerler
├── public/          # Statik dosyalar
└── index.html       # Ana HTML`,
  },
  {
    title: 'Config',
    description: 'Projeyi özelleştirin ve yapılandırın.',
    image: ConfigImage,
    code: `// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  css: {
    modules: true,
  },
});`,
  },
  {
    title: 'Start',
    description: 'Projeyi başlatın ve geliştirmeye başlayın.',
    image: StartImage,
    code: `# Geliştirme modunda başlatın
pnpm dev

# Tarayıcıda açın
http://localhost:3000

# Üretim sürümü oluşturun
pnpm build

# Üretim sürümünü test edin
pnpm preview`,
  },
];

export const CORE_CONCEPTS = [
  {
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
    image: ComponentsImage,
    code: `function Welcome() {
  return (
    <div className="welcome">
      <h1>Hello, React!</h1>
      <p>Welcome to our first component.</p>
    </div>
  );
}

// Using the component
<Welcome />`,
  },
  {
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    image: JsxImage,
    code: `const name = 'React';
const element = (
  <div>
    <h1>Hello, {name}!</h1>
    <p>JSX lets you write HTML in JavaScript</p>
    {2 + 2}
  </div>
);`,
  },
  {
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
    image: PropsImage,
    code: `function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Using props
<Greeting name="Alice" age={25} />`,
  },
  {
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update',
    image: StateImage,
    code: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
  },
];
