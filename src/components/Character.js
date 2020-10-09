// Write your Character component here
import React from 'react';
import CharacterCard from './CharacterCard'




const Character = (props) => {
    const {results} = props
    console.log("here are the results",results)
    return ( 
    <div className='character-container'>
        {results.forEach((character) => { 
            return <CharacterCard character={character} />
        })}

    </div> );
}
 
export default Character;