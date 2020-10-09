// Write your Character component here
import React from 'react';
import CharacterCard from './CharacterCard'




const Character = (props) => {
    const {results} = props
    return ( 
    <div className='character-container'>
        {results.map((character) => { 
            return <CharacterCard character={character} key={character.id} />
        })}
        

    </div> );
}
 
export default Character;