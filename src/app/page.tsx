import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <Contact />
    </>
  );
}
