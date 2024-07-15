import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Wheel} from 'react-custom-roulette'

function CuisinesRoulette(){
    const [cuisines, setCuisines]=useState([]);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cuisines/')
            .then(response => {
                console.log('Fetched cuisines:', response.data);
                if(Array.isArray(response.data)){
                    const formattedData = response.data.map(cuisine => ({option:cuisine.name}));
                    setCuisines(formattedData);
                    console.log('formatted cuisines: ', formattedData);
                } else{
                    console.error('unexpected response data: ', response.data)
                }

            })
            .catch(error => console.error('Error fetching cuisines:', error));
    }, []);

    const handleSpinClick = () =>{
        if(cuisines.length>0){
            const newPrizeNumber = Math.floor(Math.random() * cuisines.length)
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        } else{
            console.error('Error: no cuisines available to spin')
        }

    };

    return (
        <div>
            <h2>cuisine Roulette</h2>
            {cuisines.length > 0 && (
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={cuisines}
                    backgroundColors={['#3e3e3e', '#df3428']}
                    textColors={['#ffffff']}
                    onStopSpinning={()=>{
                        setMustSpin(false);
                        alert(`you are making: ${cuisines[prizeNumber].option}`);

                    }}
                />
            )}

                <button onClick={handleSpinClick}> Spin</button>
        </div>
    );

}
export default CuisinesRoulette;