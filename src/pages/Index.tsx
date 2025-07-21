
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import EgestorERP from '@/components/EgestorERP';
import NFePlus from '@/components/NFePlus';
import { Location } from '@/components/Location';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <EgestorERP />
      <NFePlus />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
