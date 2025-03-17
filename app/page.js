
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PricingSection from './components/Pricing';
import Services from "./components/Services";
import AboutAcademy from "./components/AboutAcademy";
import Faq from "./components/Faq";



export default function Home() {
  return (
    <>



      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <AboutAcademy />
      <PricingSection />
      <Contact />
      <Faq />
      <Footer />

    </>
  );
}
