import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import Joke from './Joke.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Joke setup = "How did the hacker escape the police?" 
      punchline = "He just ransomware!"/>
      <Joke setup = "Why don't pirates travel on mountain roads?"
      punchline = "Scurvy"/>
      <Joke setup = "Why do bees stay in the hive in the winter?"
      punchline = "Swarm"/>
      <Joke setup = "What's the best thing about Switzerland?"
      punchline = "I don't know, but the flag is a big plus!"/>
    </div>
  );
}

export default App;



/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/