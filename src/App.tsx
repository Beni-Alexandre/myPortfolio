import Home from "./home";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
