import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character'
import './App.css';
import RMBanner from './images/RMBanner.jpg'
import styled from 'styled-components';

const Banner = styled.div`
  width:100%;
  height:350px;
  display:flex;
  align-items: center;
  border: 1px solid white;
  background:no-repeat center center fixed; 
  background-size: cover;
  background-image: url(${RMBanner});
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  color: white;
  text-shadow: 2px 2px 5px black;
`

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
      <Banner>
        <h1 className="Header">Rick and Morty Character List</h1>
      </Banner>
      <Character results={characters} />
    </div>
  );
}

export default App;
