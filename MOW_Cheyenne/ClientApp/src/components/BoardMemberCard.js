import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import placeholderImg from '../images/placeholder.png';
import '../stylesheets/BoardMember.css';
import '../stylesheets/Text.css';

export function BoardMemberCard(props) {
    return (
        <Col className='col-sm-4'>
            <Card>
                <CardImg top width="100%" src={placeholderImg} alt="Card image cap" />
                <CardBody>
                    <CardTitle className='light-h3'>{props.boardMember.firstName} {props.boardMember.lastName}</CardTitle>
                    <CardSubtitle className='light-body-text'>{props.boardMember.boardPosition}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}