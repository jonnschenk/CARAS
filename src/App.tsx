import { Header } from './components/Header/Header';
import { SubscriptionForm } from './components/SubscriptionForm/SubscriptionForm';
import { FeaturedSection } from './components/FeaturedSection/FeaturedSection';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Footer } from './components/Footer/Footer';
import { benefits } from './data/benefits';
import { testimonials } from './data/testimonials';
import { socialLinks } from './data/socialLinks';

function App() {
  return (
    <>
      <Header
        title="El newsletter de CARAS"
        subtitle="Moda, eventos y cultura de México, directo en tu correo cada semana."
      />

      <main>
        <SubscriptionForm
          eyebrow="Suscripción gratuita"
          title="Únete en menos de un minuto"
          description="Dos correos por semana. Sin spam, cancela cuando quieras."
        />
        <FeaturedSection title="Por qué suscribirte" benefits={benefits} />
        <Testimonials
          title="Lo que dicen nuestras lectoras y lectores"
          testimonials={testimonials}
        />
      </main>

      <Footer
        socialLinks={socialLinks}
        email="contacto@caras.com.mx"
        phone="+52 55 0000 0000"
      />
    </>
  );
}

export default App;