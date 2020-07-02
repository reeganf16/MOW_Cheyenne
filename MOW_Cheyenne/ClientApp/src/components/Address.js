import React, { useState, useEffect} from 'react';
import '../stylesheets/Footer.css';
import '../stylesheets/Text.css';

export function Address(props) {
    const [address, setAddress] = useState(null); //replaces the this.state in class syntax
    //array desctructuring: meaning useState(null) returs an array with two values. 

    //similar to componentWillMount
    useEffect(() => {
        fetch(`api/metaData/address`)
        .then(response => response.json())
        .then(data => setAddress(data.value)) // {id: 3, key: phoneNumber, value: 5555555555}
    });

    return (
        <p className='footer-text'>{address}</p>
    )
}