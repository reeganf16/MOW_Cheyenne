import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../images/nav-logo.svg';
import '../stylesheets/NavMenu.css';
import '../stylesheets/Text.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow" >
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img src={logo}/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" style={{borderColor: "#FFFFFF"}}/>
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="nav-text" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-text" to="/about-us">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-text" to="/volunteer">Volunteer</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-text" to="/donate">Donate</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-text" to="/sign-up">Sign Up</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
