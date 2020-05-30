import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/')
    .then(response => {
      console.log(response);
      setCharacters(response.data.results);
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  console.log('state', characters);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(char => {
        return <Character key={char.url} char={char}/>
      })}
    </div>
  );
}

export default App;
