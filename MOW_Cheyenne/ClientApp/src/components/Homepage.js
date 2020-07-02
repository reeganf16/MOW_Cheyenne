import React, { Component } from 'react';
import { Hero } from './Hero';
import { Mission } from './Mission';
import { News } from './News';

import '../stylesheets/Button.css';
import '../stylesheets/Text.css';

export class Homepage extends Component {
  static displayName = Homepage.name;

  render () {
    return (
        <React.Fragment>
            <Hero />
            <Mission /> 
            <News />
        </React.Fragment>
    );
  }
}