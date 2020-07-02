import React, { Component } from 'react';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import '../stylesheets/About.css';
import '../stylesheets/Text.css';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <React.Fragment>
                <div className='about-us'>
                    <Jumbotron>
                        <Container className='hero-content'>
                        <Col className='col-6'>
                            <h1 className='light-h1 hero-content'>About Us</h1>
                            <hr className='light-underline'></hr>
                            <p className='light-body-text'>Annually, we deliver 85,000 meals to the homebound. Meals on Wheels utilizes 25-30 volunteer drivers per day to deliver meals. In addition, daily kitchen volunteers help the cooks prepare, wrap and assemble the meals for delivery. The Meals on Wheels Mart, the organization’s thrift store, utilizes dozens of volunteers.</p>
                        </Col>
                        </Container>
                    </Jumbotron>
                </div>
                <div className='about-info'>
                    <Container>
                        <Row>
                            <Col className='col-6'>
                                <p className='dark-body-text left-paragraph'>Founded in 1970, Meals on Wheels’ earliest meals were prepared by a local restaurant. Within the first year of operation, MOW moved its services to St. Paul’s Lutheran church and hired its own staff for meal preparation.</p>
                                <p className='dark-body-text left-paragraph'>Meals on Wheels has been at the current South Greeley Highway location since 1992 and opened its thrift store, the Meals on Wheels Mart, in 2006.</p>
                                <p className='dark-body-text left-paragraph'>Since its inception, Meals on Wheels has predominantly been funded through local support, including donations from businesses, churches, civic groups and individuals. The program has grown from 20 meals per day in 1970 to 250-300 meals per day currently.</p>
                                <p className='dark-body-text left-paragraph'>Meals on Wheels is a vital part of human services for the community of Cheyenne and Laramie County and is the only area program that delivers hot meals to clients in their own homes, which also allows the added ability to check on their safety. The organization is dedicated to improving the quality of life for those with the greatest physical, nutritional, social and economic needs, with special emphasis on frail, high risk, and disabled seniors. In recognition of the multiple needs of the “whole person,” Meals on Wheels is committed to services which include, but are not limited to: nutrition, health care, and home-care programs. Meals on Wheels is also dedicated to the growth of its volunteer base and is constantly facilitating and expanding the involvement of volunteers.</p>
                            </Col>
                            <Col className='col-6'>
                                <div className='about-secondary'></div>
                                <p className='dark-body-text right-paragraph'>Meals on Wheels of Cheyenne works hard to coordinate services with other local agencies to ensure each client receives all needed services without duplicating services provided by other community agencies. MOW partners with other programs in the community including: NEEDS, Inc., Wyoming Aging Division, Wyoming Senior Services, City-County Health, Home Health Care Providers, LIEAP, Hospitals, the Medical Community, Nursing Homes, Assisted Living Programs, Protection and Advocacy, Adult Day Care, Mental Health Programs, Senior Companions, Censible Nutrition and many others.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>

        );
    }
}
