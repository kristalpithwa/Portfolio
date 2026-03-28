import Navbar from "../components/Navbar";
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
      <Navbar />
      <div className="noise-overlay" />
      <div className="container max-w-6xl mx-auto px-6 pt-14">
        <Hero />
        <div id="about"><AboutMe /></div>
        <div id="tech"><TechStack /></div>
        <div id="work"><FeaturedWork /></div>
        <OpenSource />
        <div id="contact"><Contact /></div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
