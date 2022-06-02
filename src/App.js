import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from './components/Hero.js';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
