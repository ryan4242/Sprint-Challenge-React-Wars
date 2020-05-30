import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Search from './components/Search'
import Character from './components/Character';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  width: 85vw;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/${search}`)
    .then(response => {
      console.log(search);
      setCharacters(response.data.results);
    })
  }, [search]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Search set={setSearch} />
      <Container>
        {characters.map(char => {
          return <Character key={char.url} char={char}/>
        })}
      </Container>     
    </div>
  );
}

export default App;
