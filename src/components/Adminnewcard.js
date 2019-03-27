import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import './Mycard.css'

class Adminnewcard extends Component {
    state = {
        titre: '',
        soustitre: '',
        prix: 0,
        stock: 0,
        desc: '',
        pict: 'book1.jpg'
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const produit = { ...this.state }
        this.props.addProduit(produit)
        this.setState({ titre: '', soustitre: '', prix: 0, stock: 0, desc: '' })
    }
    
    render () {
        return (
            <Card>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="titre">Titre</Label>
                    <Input type="text" name="titre" id="titre" placeholder="Titre de l'article" onChange={this.handleChange} value={this.state.titre} required />
                </FormGroup>
                <FormGroup>
                    <Label for="soustitre">Sous-titre</Label>
                    <Input type="text" name="soustitre" id="soustitre" placeholder="Sous-titre de l'article" onChange={this.handleChange} value={this.state.soustitre} required />
                </FormGroup>
                <FormGroup>
                    <div className="row">
                        <div className="col-5">
                            <Label for="prix">Prix</Label>
                            <Input type="number" name="prix" id="prix" placeholder="Prix de l'article" onChange={this.handleChange} value={this.state.prix} required />
                        </div>
                        <div className="col-5">
                            <Label for="stock">Stock</Label>
                            <Input type="number" name="stock" id="stock" placeholder="Nombre d'article en stock" onChange={this.handleChange} value={this.state.stock} required />
                        </div>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="desc">Déscription</Label>
                    <Input type="textarea" name="desc" id="desc" onChange={this.handleChange} value={this.state.desc} required />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="pict" id="pict" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <Button type="submit" >Add</Button>
            </Form>
        </Card>
        )
    }
}

export default Adminnewcard