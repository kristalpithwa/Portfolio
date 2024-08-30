import React, { Suspense, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingComponent from "./components/Loader.jsx";

const LazyLandingSection = React.lazy(() => import("./sections/Landing"));
const LazyAboutMeSection = React.lazy(() => import("./sections/AboutMe"));
const LazyProjectSection = React.lazy(() => import("./sections/Projects"));
const LazyContactUs = React.lazy(() => import("./sections/Contact"));
// const LazyProjectSection = React.lazy(() => import("./sections/Project"));
// const LazyServiceSection = React.lazy(() => import("./sections/Services"));

function App() {
  const [menu, setMenu] = useState(["Home", "About", "Projects", "Contact"]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden ">
      <Header headerList={menu} scrollToSection={scrollToSection} />
      <Suspense fallback={<LoadingComponent />}>
        <LazyLandingSection />
        <LazyAboutMeSection />
        <LazyProjectSection />
        {/* <LazyServiceSection /> */}
        {/* <LazyProjectSection /> */}
        <LazyContactUs />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
