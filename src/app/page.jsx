import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import FeaturedWork from "@/components/sections/FeaturedWork";
import OpenSource from "@/components/sections/OpenSource";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="content-wrapper">
      <Navbar />
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
}
