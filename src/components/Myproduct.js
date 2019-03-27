import React, { Component } from 'react'
//import Mycard from './Mycard'
import Mynavbar from './Mynavbar.js'
import Myfooter from './Myfooter.js'
import base from '../base'
import '../App.css';


import './Myproduct.css'



class Myproduct extends Component {
    state = {
        product: { pict: 'book1.jpg' },
    }
    
    componentDidMount () {
        base.syncState(`/products/${this.props.match.params.product}`, {
          context: this,
          state: 'product'
        })
      }

    render () {
        
        
        return (
            <div className="App">
                <Mynavbar id="1" />
                    <div className="container">
                        <div className="row">
                            <h1>{this.state.product.titre}</h1>
                        </div>
                        <div className="row">
                            <img alt={this.state.product.titre} src={require(`../images/${this.state.product.pict}`)} />
                        </div>
                        <div className="row">
                            <h3>{this.state.product.soustitre}</h3>
                            <p>{this.state.product.desc}</p>
                        </div>
                    </div>
                <Myfooter />
            </div>
        )
    }
}

export default Myproduct
