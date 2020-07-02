import React, { useState, useEffect} from 'react';
import '../stylesheets/Footer.css';
import '../stylesheets/Text.css';

export function MartHours(props) {
    const [martHours, setMartHours] = useState(null); //replaces the this.state in class syntax
    //array desctructuring: meaning useState(null) returs an array with two values. 

    //similar to componentWillMount
    useEffect(() => {
        fetch(`api/metaData/martHours`)
        .then(response => response.json())
        .then(data => setMartHours(data.value)) // {id: 3, key: phoneNumber, value: 5555555555}
    });

    return (
        <p className='footer-text'>{martHours}</p>
    )
}