import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BasicForm } from './BasicForm';
import '../stylesheets/BasicForm.css';
import '../stylesheets/Text.css';
import '../stylesheets/Button.css';

export class SignUp extends Component {
    static displayName = SignUp.name;

    render() {
        return (
            <div className='basic-form'>
                <Container>
                    <h1 className='dark-h1 centered'>Sign Up</h1>
                    <hr className='dark-underline'></hr>
                    <BasicForm />
                    <hr className='dark-underline'></hr>
                </Container>
            </div>
        );
    }
}