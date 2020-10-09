import React from 'react';


const CharacterCard = (props) => {
    const {character} = props
    return (
        <div className="card">
            <h2 className="card-title">{character.name}</h2>
            <img className='card-image'/>
            <p className='gender'>Gender:</p>
            <p className='location'>Location:</p>
            <p className='status'>Status:</p>
        </div>
      );
}
 
export default CharacterCard;