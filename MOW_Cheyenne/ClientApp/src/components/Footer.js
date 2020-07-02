import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import logo from '../images/footer-logo.svg';
import { PhoneNumber } from './PhoneNumber';
import { OfficeHours } from './OfficeHours';
import { MartHours } from './MartHours';
import { Email } from './Email';
import { Address } from './Address';

import '../stylesheets/Footer.css';
import '../stylesheets/Text.css';

export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
        <footer className='footer'>
            <Container>
                <Col >
                  <img className='footer-logo' src={logo} alt="#"/>
                  <MartHours />
                  <Address />
                  <Email />
                  <OfficeHours />
                  <p className='footer-text'>(Available by phone only)</p>
                  <PhoneNumber />
                </Col>
            </Container>
        </footer>
    );
  }
}

