import React, { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingComponent from "./components/Loader.jsx";

const LazyLandingSection = React.lazy(() => import("./sections/Landing"));
const LazySkillsSection = React.lazy(() => import("./sections/Skills"));
const LazyServiceSection = React.lazy(() => import("./sections/Services"));
const LazyExperienceSection = React.lazy(() => import("./sections/Experience"));
const LazyProjectSection = React.lazy(() => import("./sections/Project"));
const LazyContactUs = React.lazy(() => import("./sections/Contact"));

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden bg-gray-800">
      <Header scrollToSection={scrollToSection} />
      <Suspense fallback={<LoadingComponent />}>
        <LazyLandingSection />
        <LazySkillsSection />
        <LazyServiceSection />
        <LazyExperienceSection />
        <LazyProjectSection />
        <LazyContactUs />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
