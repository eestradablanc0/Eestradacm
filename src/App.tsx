import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Growth } from './components/Growth';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Projects } from './components/Projects';

export default function App() {
  return (
    <div className="paper-grain min-h-screen bg-[#F5F3EC] text-[#383733]">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-[#383733] focus:px-4 focus:py-2 focus:text-sm focus:text-[#F5F3EC]"
      >
        Ir al contenido principal
      </a>

      <Header />

      <main id="contenido-principal">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Process />
        <Growth />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
