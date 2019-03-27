import React, { Component } from 'react'

import Mynavbar from './Mynavbar'
import Myfooter from './Myfooter'

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import MycartCard from './MycartCard'
import base from '../base'

import { Redirect } from 'react-router'

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

import '../App.css';


class Mycart extends Component {
    state = {
        cart: {},
        checkoutModal: false,
        redirect: false
    }

    componentDidMount () {
        base.syncState(`/cart/${this.props.match.params.id}`, {
          context: this,
          state: 'cart'
        })
        this.totalPrice()
      }

      componentDidUpdate () {
          this.totalPrice()
      }

      checkoutModal = () => {
          let checkoutModal = !this.state.checkoutModal
          this.setState({ checkoutModal })
      }

      totalPrice = () => {
        let totalPrice = 0
        Object
            .keys(this.state.cart)
            .forEach(key => {
                totalPrice += this.state.cart[key].price
            })
            return totalPrice
      }

      removeItem = id => {
        base.remove(`/cart/${this.props.match.params.id}/${id}`)
      }

      removeCart = () => {
        base.remove(`/cart/${this.props.match.params.id}`)
        this.setState({ redirect: true })
      }

    render () {


        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        
                            

        const cardList = Object
                      .keys(this.state.cart)
                      .map(carte => (
                        <MycartCard 
                        key={[carte]}
                        id={carte}
                        title={this.state.cart[carte].title}
                        subtitle={this.state.cart[carte].subtitle}
                        description={this.state.cart[carte].description}
                        picture={this.state.cart[carte].picture}
                        removeItem={this.removeItem} />
                      ))

        let layout = (
            <h1 className="emptyCart">Votre Panier est vide</h1>
        )
        let buttonCheckout = null

        if (Object.keys(this.state.cart).length > 0 ) {
            layout = cardList
            buttonCheckout = (
                <Button onClick={this.checkoutModal}>checkout</Button>
            )
        }

        return (
            <div className="App">
                <Mynavbar 
                    id= ""
                    isLog= {true} />
                    <div className="container">
                        <div className="row">
                            {layout}
                        </div>
                        <div className="amount-row">
                            <p className="no-margin" >Le montant total de votre panier est de:</p>
                            <h3 className="no-margin" >{this.totalPrice()} €</h3>
                        </div>
                        <div className="checkout-row">
                            {buttonCheckout}
                        </div>
                    </div>
                <Myfooter />
                <Modal isOpen={this.state.checkoutModal} toggle={this.checkoutModal} className={this.props.className}>
                    <ModalHeader toggle={this.checkoutModal}>Payement sécurisé par Stripe</ModalHeader>
                    <ModalBody>
                    <StripeProvider apiKey="pk_test_NXHKbOlUkuiGIe0khnITYcaT">
                        <div className="example">
                            <Elements>
                                <CheckoutForm 
                                    checkoutModal={this.checkoutModal}
                                    totalPrice={this.totalPrice}
                                    removeCart={this.removeCart} />
                            </Elements>
                        </div>
                    </StripeProvider>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Mycart