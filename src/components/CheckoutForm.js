import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Button } from 'reactstrap';

import '../App.css';

import firebase from 'firebase/app'
import 'firebase/auth'



class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      email: ''
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount () {
    this.usersync()
  }
  

  usersync = () => {
    const email = firebase.auth().currentUser.email
    this.setState({ email })
  }

  async submit(ev) {
    let email = this.state.email
    let amount = await this.props.totalPrice()
    console.log("email "+email);
    console.log("montant "+amount);
    let {token} = await this.props.stripe.createToken({name: `${email}`});
    console.log(token);
    let response = await fetch("https://desolate-brushlands-51354.herokuapp.com/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: amount+'/'+token.id+'/'+email
    });
  
    if (response.ok) console.log("Purchase Complete!")
    this.props.checkoutModal()
    this.props.removeCart()
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Votre facture vous sera envoyée par mail</p>
        <p>Entrer les coordonées de votre carte de payement</p>
        <CardElement />
        <div className="row">
          <Button onClick={this.submit}>Payer</Button>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);