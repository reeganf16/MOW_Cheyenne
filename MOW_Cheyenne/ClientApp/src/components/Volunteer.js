import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BasicForm } from './BasicForm';
import '../stylesheets/BasicForm.css';
import '../stylesheets/Text.css';
import '../stylesheets/Button.css';

export class Volunteer extends Component {
    static displayName = Volunteer.name;

    render() {
        return (
            <div className='basic-form'>
                <Container>
                    <h1 className='dark-h1 centered'>Volunteer</h1>
                    <hr className='dark-underline'></hr>
                    <BasicForm />
                    <hr className='dark-underline'></hr>
                </Container>
            </div>
        );
    }
}