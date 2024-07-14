import React, {useEffect, useState} from 'react';
import axios from 'axios';

function CuisineRoulette(){
    const [cuisines, setCuisines] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cuisines/')
            .then(response => {
                console.log('Fetched cuisines:', response.data);
            setCuisines(response.data);
            })
            .catch(error => console.error('Error fetching cuisines:', error))
    }, []);

    return(
        <div>
            <h2>Cuisines Roulette</h2>
            <ul>
                {cuisines.map(cuisine =>(
                    <li key={cuisine.id}>{cuisine.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default CuisineRoulette;
