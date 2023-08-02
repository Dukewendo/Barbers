import "./App.css";
import Header from "./components/Header";
import hero from "../src/images/hero.jpg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="hero-img">
        <img src={hero} alt="ishero?" />
      </div>
      <div className="cards">
        <img src="../images/meetbarbers.jpg" alt="barbers" />
      </div>
      <div className="main">
        <img src="../images/chair.jpg" alt="barbers-chair" />
        <h3>Small about paragraph</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          architecto ipsa exercitationem harum tempora velit? Repudiandae
          mollitia aliquid molestias explicabo vitae, adipisci impedit dolorum,
          sed ratione ullam repellat nesciunt fuga.
        </p>
        <button>Book appointment</button>
      </div>
    </div>
  );
}

export default App;
