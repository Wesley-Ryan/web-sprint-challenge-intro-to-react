import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const [chracters, setCharacters] = useState([])

  useEffect(() =>{ 
    axios.get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      console.log(response.data.results)
    })
    .catch((err) => { 
      console.log("There was an error communicating with the server:", err)
    })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
