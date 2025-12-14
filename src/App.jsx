import { Suspense } from "react";
import LoadingComponent from "./components/Loader.jsx";
import FallingLettersCanvas from "./FallingLettersCanvas.jsx";
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import TechStack from "./sections/TechStack.jsx";
import FeaturedWork from "./sections/FeaturedWork.jsx";
import OpenSource from "./sections/OpenSource.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-x-hidden">
      <FallingLettersCanvas />

      <Suspense fallback={<LoadingComponent />}>
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
      </Suspense>
    </div>
  );
}

export default App;
