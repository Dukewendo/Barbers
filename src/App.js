import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Barbers from "./components/Barbers";

//styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="barbers" element={<Barbers />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
