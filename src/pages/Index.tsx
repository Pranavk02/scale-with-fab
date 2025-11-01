import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Advantage from "@/components/Advantage";
import Platforms from "@/components/Platforms";
import WhoItsFor from "@/components/WhoItsFor";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Advantage />
      <Platforms />
      <WhoItsFor />
      <Comparison />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
