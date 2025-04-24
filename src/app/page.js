import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import _preview from "@/components/Projects/_preview";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <_preview />
      <TechStack />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
