import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import logo from './logo.svg';
import Mynavbar from './components/Mynavbar.js'
import Mycarousel from './components/Mycarousel.js'
//import Mycart from './components/Mycart.js'
//import Myproduct from './components/Myproduct.js'
import Myconnexion from './components/Myconnexion.js'
import Mycard from './components/Mycard.js'
import Myfooter from './components/Myfooter.js'
import './App.css';

import { Link } from 'react-router-dom'


//firebase
import base from './base'
import firebase from 'firebase/app'
import 'firebase/auth'

const cardtest = {
  card1:{
    titre: 'Tintin et Minou',
    soustitre: 'Livre de tatoo de chaton',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book1.jpg',
    prix: 49,
    stock: 3,
  },
  card2:{
    titre: 'Kiri, Koukou et la sorcière',
    soustitre: "Histoire d'une vielle dame qui mange du fromage avec son chat",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book2.jpg',
    prix: 12,
    stock: 8,
  },
  card3:{
    titre: 'Bill & poules',
    soustitre: 'Le fondateur de microsoft vous apprend à construire votre poulailler',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book3.jpg',
    prix: 50,
    stock: 3,
  },
  card4:{
    titre: 'Histoire de mes futurs aventures',
    soustitre: 'Oeuvre extremement rare car pas encore écrite',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book4.jpg',
    prix: 5000,
    stock: 1,
  },
  card5:{
    titre: 'Edition de Play Boy Rare',
    soustitre: "Avec le fameux poster de Mme Le-Pen passant l'aspirateur",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book5.jpg',
    prix: 650,
    stock: 1,
  },
  card6:{
    titre: 'La Bible',
    soustitre: 'Edition Original dédicacé par José Garcia',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book6.jpg',
    prix: 100,
    stock: 3,
  },
  card7:{
    titre: 'Le Coran',
    soustitre: "Version revu et corrigé par un Rabbin en couple avec le fils d'Eric Zemmour",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book7.jpg',
    prix: 100,
    stock: 3,
  },
  card8:{
    titre: 'La Torah',
    soustitre: 'Version revu et corrigé par Oussama Ben Laden',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'book8.jpg',
    prix: 100,
    stock: 4,
  },
  card9:{
    titre: 'Journal Intime de Jean Luc Lahaie',
    soustitre: 'Tous les souvenirs, photos et chansons pour enfants du chanteur',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pict: 'old-books.jpg',
    prix: 10,
    stock: 35,
  }
}

  

class App extends Component {
  state = {
    id: firebase.auth().currentUser ? firebase.auth().currentUser.uid : '',
    user: {},
    userInfo: null,
    checkUser: false,
    isLog: false,
    login: true,
    connectModal: false,
    userModal: false,
    allProducts: {},
    cart: {}
  }

  componentDidMount () {
    console.log('log'+this.state.id);
    
    base.syncState(`/products`, {
      context: this,
      state: 'allProducts'
    })
    let ctx = this
    let userInfo = {}
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        userInfo = user
        const id = user.uid
        base.syncState(`/cart/${id}/`, {
          context: ctx,
          state: 'cart'
        })
        ctx.setState({ userInfo, id, checkUser: true, isLog: true, connectModal: false, login: true })
      } else {
        ctx.setState({ checkUser: true })
      }
    });
    /*base.syncState(`/cart/${this.state.id}/`, {
      context: this,
      state: 'cart'
    })*/
    //this.chargeItems()
  }

  componentDidUpdate () {
    //this.autoCheck()
    /*let ctx = this
    let checkUser = this.state.checkUser
    let userInfo = { ...this.state.userInfo }
    if (!checkUser) {
      var user = firebase.auth().currentUser
        if (user) {
          // User is signed in.
          userInfo = user
          const id = user.uid
          base.syncState(`/cart/${id}/`, {
            context: ctx,
            state: 'cart'
          })
          ctx.setState({ userInfo, id, checkUser: true, isLog: true, connectModal: false, login: true })
        } else {
          ctx.setState({ checkUser: true })
        }
    }*/
  }

  /*autoCheck = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      let ctx = this
      let userInfo = { ...this.state.userInfo }
      if (user) {
        // User is signed in.
        userInfo = user
        const id = user.uid
        base.syncState(`/cart/${id}/`, {
          context: ctx,
          state: 'cart'
        })
        ctx.setState({ userInfo, id, checkUser: true, isLog: true, connectModal: false, login: true })
      } else {
        ctx.setState({ checkUser: true })
      }
    });
  }*/
  


  logout = () => {
    base.remove(`/cart/${this.state.id}/`)
    const ctx = this
    firebase.auth().signOut().then(function() {
      ctx.setState({ id: '', user: {}, userInfo: null, checkUser: null, isLog: false, login: true, connectModal: false, userModal: false, cart: {} })
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
  

  modalToggle = () => {
    let connectModal = !this.state.connectModal
    this.setState({ connectModal })
  }

  userModalToggle = () => {
    let userModal = !this.state.userModal
    this.setState({ userModal })
  }

  goToConnect = () => {
    if (!this.state.isLog) {
      this.userModalToggle()
      this.modalToggle()
    }
  }

  loginToggle = () => {
    let login = !this.state.login
    this.setState({ login })
  }
  
  chargeItems = () => {
    this.setState({ allProducts: cardtest })
  }

  addItem = data => {
    //let id = this.state.id
    let isLog = this.state.isLog
    if (isLog) {
      let cart = { ...this.state.cart }
      cart[`${data.id}`] = data
      this.setState({ cart })
    } else {
      this.userModalToggle()
    }
  }

  /*cartLentgh = () => {
    let id = this.state.id
    let cart = { ...this.state.cart }
    let cartLentgh = Object.keys(cart[id]).length
    this.setState({ cartLentgh })
  }*/

  handleChange = event => {
    let user = { ...this.state.user }
    user[event.target.name] =  event.target.value
    this.setState({ user })
  }

  userSubmit = event => {
    // Pour le SignUp
    event.preventDefault()
    
    const ctx = this
    const email = this.state.user.email
    const password = this.state.user.password

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      var user = firebase.auth().currentUser;
      if (user) {
        // User is signed in.
        const id = user.uid
        base.syncState(`/cart/${id}/`, {
          context: ctx,
          state: 'cart'
        })
        ctx.setState({ userInfo: user, id, isLog: true, connectModal: false, login: true })
      } else {
        // No user is signed in.
        user = { email , password:'', confirmPassword:''}
        ctx.setState({ user })
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode+' / '+ errorMessage);
    });
  }

  userCheck = event => {
    //Pour le Login
    event.preventDefault()

    const ctx = this
    const email = this.state.user.email
    const password = this.state.user.password

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      var user = firebase.auth().currentUser;
      if (user) {
        // User is signed in.        
        const id = user.uid
        base.syncState(`/cart/${id}/`, {
          context: ctx,
          state: 'cart'
        })
        ctx.setState({ userInfo: user, id, isLog: true, connectModal: false, login: true })
      } else {
        // No user is signed in.
        user = {email, password:'', confirmPassword:''}
        ctx.setState({ user })
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode+' / '+ errorMessage);
    });
  }

  /*checkUser = () => {
    let checkUser = this.state.checkUser
    if (!checkUser) {
      var user = firebase.auth().currentUser;
      console.log(user);
      if (user) {
        // User is signed in.        
        this.setState({ userInfo: user, checkUser: true, isLog: true, connectModal: false, login: true })
      } 
    }
  }*/

  
  

  render() {
    let admin = null
    this.state.user.email === 'test@te.com' ? admin = (<Button><Link className="link" to={'/adminSecretPlace'}>Go to admin</Link></Button>) : admin = null;

    const cardList = Object
                      .keys(this.state.allProducts)
                      .map(carte => (
                        <Mycard 
                        key={[carte]}
                        id={carte}
                        title={this.state.allProducts[carte].titre}
                        subtitle={this.state.allProducts[carte].soustitre}
                        description={this.state.allProducts[carte].desc}
                        picture={this.state.allProducts[carte].pict}
                        price={this.state.allProducts[carte].prix}
                        stock={this.state.allProducts[carte].stock}
                        addItem={this.addItem} />
                      ))
                        
    
    let layout = (
      <>
        <header className="App-header">
          {admin}
          <Mycarousel/>
        </header>
        <section className="card-section">
        <div className='container'>
          <div className='row'>
          <Myconnexion 
            user={this.state.user}
            userCheck={this.userCheck}
            userSubmit={this.userSubmit}
            handleChange={this.handleChange}
            toggle={this.modalToggle}
            isOpen={this.state.connectModal}
            loginToggle={this.loginToggle}
            login={this.state.login} />
            {cardList}
            <div>
              <Modal isOpen={this.state.userModal} toggle={this.userModalToggle} className={this.props.className}>
                <ModalHeader toggle={this.userModalToggle}>Bonjour bel(le) inconu(e)</ModalHeader>
                <ModalBody>
                  Tu dois être connectez pour ajouter un article à ton panier
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.goToConnect}>Connexion</Button>
                  <Button color="secondary" onClick={this.userModalToggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
        </section>
      </>
    )
    
    /*if (this.state.productOpen) {
      layout = (
        <Myproduct allProducts={this.state.allProducts} />
      )
    }*/


    return (
      <div className="App">
        <Mynavbar 
          connexion={this.modalToggle}
          isLog={this.state.isLog}
          id={this.state.id}
          cartNum={Object.keys(this.state.cart).length}
          logout={this.logout} />
        {layout}
        <Myfooter />
      </div>
    );
  }
}

export default App;
