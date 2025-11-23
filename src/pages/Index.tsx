import Hero from "@/components/Hero";
import ModelsShowcase from "@/components/ModelsShowcase";
import TechSpecs from "@/components/TechSpecs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ModelsShowcase />
      <TechSpecs />
      <Footer />
    </div>
  );
};

export default Index;
