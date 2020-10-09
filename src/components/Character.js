// Write your Character component here
import React from 'react';
import CharacterCard from './CharacterCard'




const Character = (props) => {
    const {results} = props
    console.log("here are the results",results)
    return ( 
    <div className='character-container'>
        {results.map((character) => { 
            console.log("myGuy", character)
            return <CharacterCard character={character} key={character.id} />
        })}
        

    </div> );
}
 
export default Character;