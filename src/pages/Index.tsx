import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
