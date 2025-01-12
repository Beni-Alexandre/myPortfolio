import Home from "./home";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import Portfolio from "./porftfolio";
import "./index.css";
import Contact from "./contact";
function App() {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen items-center justify-center">
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
