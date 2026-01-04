import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loader.jsx";
import FallingLettersCanvas from "./FallingLettersCanvas.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

// Import styles if needed, or ensure they are global
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-x-hidden">
      <FallingLettersCanvas />

      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
