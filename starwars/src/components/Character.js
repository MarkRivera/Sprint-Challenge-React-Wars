// Write your Character component here
import React from "react";
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Character = props => {
    const char = props.charInfo;
    return (
      <div className="character">
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle>{char.name}</CardTitle>
              <CardSubtitle>{char.birth_year}</CardSubtitle>
              <CardText>{char.skin_color}</CardText>
              <CardText>{char.hair_color}</CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
  
  export default Character;