import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Donate.css';
import '../stylesheets/Text.css';
import { Container, Col} from 'reactstrap';

export class Donate extends Component {
    static displayName = Donate.name;

    render() {
        return (
            <div className='donate'>
                <Container>
                    <Col>
                        <h1 className='dark-h1 centered'>Donate</h1>
                        <hr className='dark-underline'></hr>
                        <p className='dark-body-text bold'>We now accept donations via GoFundMe:</p>
                        <a className='btn' id='donate-now' href='https://charity.gofundme.com/o/en/donate-widget/8275'>DONATE NOW</a>
                        <p className='dark-body-text bold'>Or send a check made payable to:</p>
                        <p className='dark-body-text address'>Meals on Wheels of Cheyenne</p>
                        <p className='dark-body-text address'>2015 South Greeley Highway</p>
                        <p className='dark-body-text address'>Cheyenne, WY 82001</p>
                        <hr className='dark-underline'></hr>
                    </Col>
                </Container>
            </div>
        );
    }
}
