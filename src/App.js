import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import Joke from './Joke.js';
import jokesData from './jokesData';
import dataJS from './data.JS';



function App() {

  const jokeElements = jokesData.map(joke => {
    return <Joke setup = {joke.setup} punchline = {joke.punchline}/>
  })

  const dataforcard = dataJS.map(item => {
    return <Card img = {item.coverImg}
    rating = {item.stats.rating}
    reviewCount = {item.stats.reviewCount}
    location = {item.location}
    title = {item.title}
    price = {item.price}/>

  })
  // anothr one 

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Card img = "katie-zaferes.png" rating = "5.0" number = { 6 } country = "USA" title = "Life Lessons with Katie Zaferes"
      price = {136}/> */}
      {dataforcard}
      {jokeElements}
      {/* <Joke setup = "How did the hacker escape the police?" 
      punchline = "He just ransomware!"/>
      <hr />
      <Joke setup = "Why don't pirates travel on mountain roads?"
      punchline = "Scurvy"/>
      // testing
      <hr />
      <Joke setup = "Why do bees stay in the hive in the winter?"
      punchline = "Swarm"/>
      <hr />
      <Joke setup = "What's the best thing about Switzerland?"
      punchline = "I don't know, but the flag is a big plus!"/>
      <hr /> */}

    </div>
  );
}

export default App;















/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

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