import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import FeaturedWork from "@/components/sections/FeaturedWork";
import OpenSource from "@/components/sections/OpenSource";
import AvailableOn from "@/components/sections/AvailableOn";
import ClientFeedback from "@/components/sections/ClientFeedback";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="content-wrapper">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-6 pt-14">
        <Hero />
        <div id="about" className="scroll-mt-20">
          <AboutMe />
        </div>
        <div id="tech" className="scroll-mt-20">
          <TechStack />
        </div>
        <div id="work" className="scroll-mt-20">
          <FeaturedWork />
        </div>
        <OpenSource />
        <div id="platforms" className="scroll-mt-20">
          <AvailableOn />
        </div>
        <div id="feedback" className="scroll-mt-20">
          <ClientFeedback />
        </div>
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
