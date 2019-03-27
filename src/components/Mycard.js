import React from 'react';
import './Mycard.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const Mycard = ({ id, title, subtitle, description, picture, addItem, price, stock }) => {
  const data = { id, title, subtitle, description, picture, price, stock }
  return (
      <Card className='card'>
        <CardImg top className="itemImg" src={require(`../images/${picture}`)} alt={title} />
        <CardBody>
          <div className="row">
            <div>Prix: {price}€</div>
            <div>Stock: {stock}</div>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          {/*<CardText>{description}</CardText>*/}
        </CardBody>
        <div className="row buttonRow">
          <Button><Link className="link-white" to={`/products/${id}`}>View</Link></Button>
          <Button onClick={() => addItem(data)}>Add</Button>
        </div>
      </Card>
  );
};

export default Mycard;
