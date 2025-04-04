import Home from "./home";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import Portfolio from "./porftfolio";
import "./index.css";
import Contact from "./contact";
function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
// min-h-screen items-center justify-center
