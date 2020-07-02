import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import '../stylesheets/Hero.css';
import '../stylesheets/Text.css';
import '../stylesheets/Button.css';
import '../stylesheets/News.css';

export function NewsCard(props) {
    return (
      <Card>
        <CardImg topWidth='100%' src={props.image} alt='Card image'></CardImg>
        <CardBody>
          <CardText className='light-body-text'>{props.title}</CardText>
            <a href={props.article} target="_blank" className='btn'>READ NOW</a>
        </CardBody>
      </Card>

    );
}


