import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Col, Row } from 'reactstrap';

import '../stylesheets/Hero.css';
import '../stylesheets/Text.css';
import '../stylesheets/Button.css';

export class Hero extends Component {
  static displayName = Hero.name;

  render () {
    return (
        <div className='hero'>
          <Jumbotron>
            <Container className='hero-content'>
              <Col className='col-6'>
                <h1 className='light-h1 hero-content'>Hunger. Help. Hope.</h1>
                <hr className='light-underline'></hr>
                <p className='light-body-text'>Welcome to Meals on Wheels of Cheyenne! We provide thousands of nourishing meals to seniors and other homebound residents of Cheyenne and Laramie County, Wyoming.</p>
                <Row>
                  <Col>
                    <Link to='/donate' className='btn'>DONATE</Link>
                  </Col>
                  <Col>
                    <Link to='/sign-up' className='btn'>SIGN UP</Link>
                  </Col>
                  <Col>
                    <Link to='/volunteer' className='btn'>VOLUNTEER</Link>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Jumbotron>
        </div>
    );
  }
}
