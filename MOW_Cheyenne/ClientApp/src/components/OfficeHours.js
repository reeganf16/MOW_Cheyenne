import React, { useState, useEffect} from 'react';
import '../stylesheets/Footer.css';
import '../stylesheets/Text.css';

export function OfficeHours(props) {
    const [officeHours, setOfficeHours] = useState(null); //replaces the this.state in class syntax
    //array desctructuring: meaning useState(null) returs an array with two values. 

    //similar to componentWillMount
    useEffect(() => {
        fetch(`api/metaData/officeHours`)
        .then(response => response.json())
        .then(data => setOfficeHours(data.value)) // {id: 3, key: phoneNumber, value: 5555555555}
    });

    return (
        <p className='footer-text'>{officeHours}</p>
    )
}