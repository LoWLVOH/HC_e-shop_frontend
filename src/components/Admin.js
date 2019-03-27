import React, { Component } from 'react'
import Admincard from './Admincard';
import Adminnewcard from './Adminnewcard';
import base from '../base'


class Admin extends Component {
    state = {
        products: {}
    }

    componentDidMount () {
        base.syncState(`/products`, {
          context: this,
          state: 'products'
        })
      }

      addProduit = produit => {
          const products = { ...this.state.products }
          products[`produit-${Date.now()}`] = produit
          this.setState({ products })
      }

      majProduit = (id, newProduct) => {
        let products = { ...this.state.products }
        products[id] =  newProduct
        this.setState({ products })
      }

      removeProduit = id => {
        base.remove(`/products/${id}`)
      }

    render () {

        const itemList = Object
        .keys(this.state.products)
        .map(key => (
            <Admincard 
            key={[key]}
            id={key}
            majProduit={this.majProduit}
            removeProduit={this.removeProduit}
            data={this.state.products} />
        ))

        

        return (
            <div className="container">
                <div className="row">
                    {itemList}
                </div>
                <div className="row">
                    <Adminnewcard addProduit={this.addProduit} />
                </div>
            </div>
        )
    }
}

export default Admin