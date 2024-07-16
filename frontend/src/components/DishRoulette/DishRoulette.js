import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Wheel} from "react-custom-roulette";
import './DishRoulette.css'
import {useParams} from "react-router-dom";

function DishRoulette() {
    const {cuisine}=useParams();
    const [dishes, setDishes] = useState([]);
    const [selectedDish, setSelectedDish] = useState('');
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        const fetchDishes = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/dishes', {
                    params: cuisine ? {cuisine} :{}
                });
                console.log('fetched dishes:', response.data);
                if(Array.isArray(response.data)){
                    const formattedData= response.data.map(dish=>({option:dish.name}));
                    setDishes(formattedData);
                    console.log('formatted data: ', formattedData);

                }else{
                    console.error('unexpected response data', response.data);
                }
            }catch (error){
                console.error('error fetching dishes:', error);
            }
        };
        fetchDishes();
    },[cuisine]);

    const handleSpinClick = () => {
        if (dishes.length > 0) {
            const newPrizeNumber = Math.floor(Math.random() * dishes.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
            setIsSpinning(true);
        } else {
            console.error('Error: no dishes available to spin')
        }
    };

    return (
        <div className="roulette-container">
            <h2>Dish Roulette</h2>
            {dishes.length > 0 && (
                <div onClick={handleSpinClick} style={{cursor: 'pointer'}}>
                    <Wheel mustStartSpinning={mustSpin}
                           prizeNumber={prizeNumber}
                           data={dishes}
                           backgroundColors={['#3e3e3e', '#df3428']}
                           textColors={['#ffffff']}
                           onStopSpinning={() => {
                               setMustSpin(false);
                               setIsSpinning(false);
                               setSelectedDish(dishes[prizeNumber].option);

                           }}
                    />


                </div>
            )}
            {!isSpinning && selectedDish && (
                <div className="selected-dish">
                    you are making: {selectedDish}
                </div>
            )}

        </div>
    );
}
export default DishRoulette;