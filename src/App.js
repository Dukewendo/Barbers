import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MockBarbers from "./components/MockBarbers";
import About from "./components/About";
import Barbers from "./components/Barbers";
import Contact from "./components/Contact";

//styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<MockBarbers />} />
          <Route path="about" element={<About />} />
          <Route path="barbers" element={<Barbers />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
