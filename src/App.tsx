import { Header } from './components/Header/Header';
import { FeaturedSection } from './components/FeaturedSection/FeaturedSection';
import { benefits } from './data/benefits';

function App() {
  return (
    <>
      <Header
        title="El newsletter de CARAS"
        subtitle="Moda, eventos y cultura de México, directo en tu correo cada semana."
      />
      <main>
        <FeaturedSection title="Por qué suscribirte" benefits={benefits} />
      </main>
    </>
  );
}

export default App;