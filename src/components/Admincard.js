import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import './Mycard.css'


const Admincard = ({ id, data, majProduit, removeProduit }) => {
    const product = data[id]
    const { titre, soustitre, prix, desc, pict, stock} = product

    const handleChange = (e, id) => {
        const { name, value } = e.target
        const product = data[id]
        product[name] = value
        majProduit(id, product)
    }


    return (
        <Card>
            <CardImg top className="itemImg" src={require(`../images/${pict}`)} alt={titre} />
            <Form>
                <FormGroup>
                    <Label for="titre">Titre</Label>
                    <Input type="text" name="titre" id="titre" placeholder="Titre de l'article" onChange={e => handleChange(e, id)} value={titre} required />
                </FormGroup>
                <FormGroup>
                    <Label for="soustitre">Sous-titre</Label>
                    <Input type="text" name="soustitre" id="soustitre" placeholder="Sous-titre de l'article" onChange={e => handleChange(e, id)} value={soustitre} required />
                </FormGroup>
                
                <FormGroup>
                    <div className="row">
                        <div className="col-5">
                            <Label for="prix">Prix</Label>
                            <Input type="number" name="prix" id="prix" placeholder="Prix de l'article" onChange={e => handleChange(e, id)} value={prix} required />
                        </div>
                        <div className="col-5">
                            <Label for="stock">Stock</Label>
                            <Input type="number" name="stock" id="stock" placeholder="Nombre d'article en stock" onChange={e => handleChange(e, id)} value={stock} required />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="desc">Déscription</Label>
                    <Input type="textarea" name="desc" id="desc" onChange={e => handleChange(e, id)} value={desc} required />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <Button onClick={() => removeProduit(id)}>Remove</Button>
            </Form>
        </Card>
    )
}

export default Admincard