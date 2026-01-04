import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import TechStack from "../sections/TechStack";
import FeaturedWork from "../sections/FeaturedWork";
import OpenSource from "../sections/OpenSource";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="container max-w-7xl mx-auto px-6 py-20">
        <Hero />
        <AboutMe />
        <TechStack />
        <FeaturedWork />
        <OpenSource />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
