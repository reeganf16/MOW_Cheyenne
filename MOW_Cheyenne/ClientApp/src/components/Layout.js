import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import '../stylesheets/DOM.css';
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <React.Fragment>
        <NavMenu />
          <div className='main-container'>
            {this.props.children}
          </div>
        <Footer />
      </React.Fragment>
    );
  }
}
