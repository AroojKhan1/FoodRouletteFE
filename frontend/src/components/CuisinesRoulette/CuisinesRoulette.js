import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Wheel} from 'react-custom-roulette'
import {useNavigate} from 'react-router-dom';
import './CuisineRoulette.css';

function CuisinesRoulette() {
    const [cuisines, setCuisines] = useState([]);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [selectedCuisine, setSelectedCuisine] =useState('');
    const [isSpinning, setIsSpinning] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cuisines/')
            .then(response => {
                console.log('Fetched cuisines:', response.data);
                if (Array.isArray(response.data)) {
                    const formattedData = response.data.map(cuisine => ({option: cuisine.name}));
                    setCuisines(formattedData);
                    console.log('formatted cuisines: ', formattedData);
                } else {
                    console.error('unexpected response data: ', response.data)
                }

            })
            .catch(error => console.error('Error fetching cuisines:', error));
    }, []);

    const handleSpinClick = () => {
        if (cuisines.length > 0) {
            const newPrizeNumber = Math.floor(Math.random() * cuisines.length)
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
            setIsSpinning(true);
        } else {
            console.error('Error: no cuisines available to spin')
        }

    };

    const handleNavigate = () => {
        navigate(`/dishes/${selectedCuisine}`);
    }

    return (
        <div className="roulette-container">
            <h2>Cuisine Roulette</h2>
            {cuisines.length > 0 && (
                <div onClick={handleSpinClick} style={{cursor: 'pointer'}}>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={cuisines}
                        backgroundColors={['#ffd700', '#4CAF50' ]}
                        textColors={['#ffffff']}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            setIsSpinning(false);
                            const selected = cuisines[prizeNumber].option;
                            setSelectedCuisine(selected);

                        }}
                    />
                </div>
            )}
            {!isSpinning && selectedCuisine && (
                <div className="selected-cuisine">
                    you are making: {selectedCuisine}
                    <br/>
                    <button onClick={handleNavigate}>
                        Select a Dish from {selectedCuisine} Cuisine
                    </button>


                </div>
            )}


        </div>
    );

}

export default CuisinesRoulette;