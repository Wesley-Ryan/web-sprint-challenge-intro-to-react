import React from 'react';


const CharacterCard = (props) => {
    const {character} = props
    return (
        <div className="card">
            <h2 className="card-title">{character.name}</h2>
            <img src={character.image}className='card-image'/>
    <p className='gender'>Gender: {character.gender}</p>
            <p className='location'>Location: {character.location.name}</p>
            <p className='status'>Status:{character.status}</p>
        </div>
      );
}
 
export default CharacterCard;