import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom:20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);

`

const Content = styled.div`
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
    `;

const CardImage = styled.img`
    width:30%;
    padding:15px;
    border-radius:15px;
`

const CardDetails = styled.div`
    display: flex; 
    flex-direction: column;

`
const CardText = styled.p` 
    display:flex;
    width:100%;
    align-self: flex-start;
`


const CharacterCard = (props) => {
    const {character} = props
    return (
        <Container>
            <h2 className="card-title">{character.name}</h2>
            <Content>
                <CardImage src={character.image}className='card-image'/>
                <CardDetails>
                <CardText>Gender: {character.gender}</CardText>
                <CardText>Location: {character.location.name}</CardText>
                <CardText>Status: {character.status}</CardText>
                </CardDetails>
            </Content>
        </Container>
      );
}
 
export default CharacterCard;