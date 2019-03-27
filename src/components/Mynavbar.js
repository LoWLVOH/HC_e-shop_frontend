import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
   } from 'reactstrap';
  
import { Link } from 'react-router-dom'

class Mynavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isLog, connexion, id, cartNum, logout } = this.props
    let connectButton = <div className="link" onClick={connexion}>Connexion</div>
    let cartButton = null

    if (isLog) {
      connectButton = <Link className="link" to={`/`} >Boutique</Link>
      if (id !== "") {
        connectButton = <div className="link" onClick={logout}>Déconnexion</div>
        cartButton = <Link className="link" to={`/cart/${id}`} >Mon panier ({cartNum})</Link>
      }
    }

    if (id === "1") {
      connectButton = <Link className="link" to={`/`} >Boutique</Link>
      cartButton = null
    }

    return (
      <div>
        <Navbar color="light" light expand="md" className="navbar">
          <NavbarBrand><Link className="link" to={`/`} >Bouquine.yeah</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  {cartButton}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  {connectButton}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Mynavbar;
