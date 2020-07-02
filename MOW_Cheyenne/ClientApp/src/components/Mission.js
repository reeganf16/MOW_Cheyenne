import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron } from 'reactstrap';

import '../stylesheets/Button.css';
import '../stylesheets/Text.css';
import '../stylesheets/Mission.css';

export class Mission extends Component {
  static displayName = Mission.name;

  render () {
    return (
        <div className='mission-section'>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col className='col-6'>
                            <div className='mission-img'></div>
                        </Col>
                        <Col className='col-6'>
                            <h2 className='dark-h2'>Our Mission</h2>
                            <hr className='dark-underline'></hr>
                            <p className='dark-body-text'>Meals on Wheels of Cheyenne, Inc.’s mission is to assist the elderly, disabled, ill, frail, and convalescing remain in their own homes by providing home-delivered meals and other in-home services. Meals on Wheels is a vital part of human services for Cheyenne and Laramie County and is the only area program that delivers hot meals in person, which allows us the added ability to check on our clients’ safety, provide them with daily companionship, and find out if they have any additional needs that should be met.</p>
                            <hr className='dark-underline'></hr>
                        </Col>
                    </Row>
                </Container>

            </Jumbotron>
        </div>
    );
  }
}
