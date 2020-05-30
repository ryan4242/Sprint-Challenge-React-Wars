// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Character = ({char}) => {
  const [planet, setPlanet] = useState('');
  const [species, setSpecies] = useState('')
  const planetCall = char.homeworld;
  const speciesCall = char.species[0];

  useEffect(() => {
    
    axios.get(planetCall)
    .then(response => {
      setPlanet(response.data.name)
    });

    axios.get(speciesCall)
    .then(response => {
      setSpecies(response.data.name)
    })
  }, [planetCall, speciesCall])

  return(
    <div>
      <h3>{char.name}</h3>
      <p>Species: {species}</p>
      <p>Born on: {planet}</p>
    </div>
  )
}

export default Character;