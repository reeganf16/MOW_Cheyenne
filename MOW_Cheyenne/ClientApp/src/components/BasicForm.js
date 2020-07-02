import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../stylesheets/BasicForm.css';
import '../stylesheets/Text.css';
import '../stylesheets/Button.css';

export class BasicForm extends Component {
    static displayName = BasicForm.name;

    render() {
        return (
            <Form>
                <Col>
                    <FormGroup>
                        <Label className='dark-body-text bold' for="exampleEmail">First Name</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label className='dark-body-text bold' for="examplePassword">Last Name</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label className='dark-body-text bold' for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label className='dark-body-text bold' for="examplePassword">Phone Number</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Phone Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label className='dark-body-text bold' for="exampleText">Message (Optional)</Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder='Message (Optional)'/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Col>
            </Form>
        )
    }
}