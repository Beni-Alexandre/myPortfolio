import Home from "./home";
import { Routes, Route } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
