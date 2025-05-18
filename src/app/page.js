import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechSkills";
import _preview from "@/components/Projects/_preview";
import Footer from "@/components/Footer";
import Alert from "@/components/Alert";

const Home = () => {
  return (
    <>
      <Alert />
      <HeroSection />
      <_preview />
      <TechStack />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
