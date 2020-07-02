import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { NewsCard } from './NewsCard';
import pressImg from '../images/covid-press-release.png';
import covidImg from '../images/action-plan.png';

import '../stylesheets/Hero.css';
import '../stylesheets/Text.css';
import '../stylesheets/News.css';

export class News extends Component {
  static displayName = News.name;

  render () {
    return (
      <div className='news-section'>
          <Container className='middle-aligned'>
            <h1 className='light-h2'>{News.displayName}</h1>
            <hr className='light-underline'></hr>
          </Container>
          <Container>
              <Row>
                <Col>
                    <NewsCard article='/MOW-COVID-19-Press-Release.pdf' image={pressImg} title='PRESS RELEASE - MEALS ON WHEELS OF CHEYENNE COVID-19 RESPONSE'/>
                </Col>
                <Col>
                    <NewsCard article='/MOW-COVID-19-Action-Plan.pdf' image={covidImg} title='MEALS ON WHEELS OF CHEYENNE COVID-19 ACTION PLAN'/>
                </Col>
              </Row>
              <hr className='light-underline'></hr>
          </Container>
      </div>
    );
  }
}