import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character'
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() =>{ 
    axios.get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      setCharacters(response.data.results)
    })
    .catch((err) => { 
      console.log("There was an error communicating with the server:", err)
    })
  }, [])

  characters.forEach((character) => { 


  })


  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Character List</h1>
      <Character results={characters} />
    </div>
  );
}

export default App;
