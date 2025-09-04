import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Journey from '@/components/sections/Journey';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Projects />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}