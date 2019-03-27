import React from 'react';
import './Mycard.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const MycartCard = ({ id, title, subtitle, description, picture, removeItem }) => {
  return (
      <Card className='card'>
        <CardImg top className="itemImg" src={require(`../images/${picture}`)} alt={title} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <br/>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <br/>
          <CardText>{description}</CardText>
        </CardBody>
        <div className="row buttonRow">
          <Button onClick={() => removeItem(id)}>Remove</Button>
        </div>
      </Card>
  );
};

export default MycartCard;
