import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Wheel} from "react-custom-roulette";

function CustomRoulette() {
    const navigate = useNavigate();
    const [customDishes, setcustomDishes] = useState([]);
    const [newDish, setNewDish] = useState('');
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [selectedDish, setSelectedDish] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);


    const handleNavigate = () => {
        axios.delete('http://127.0.0.1:8000/api/deleteCustomDish/')
            .then(() => {
                setcustomDishes([]);
                navigate('/');
            })

    };

    const handleAddDish = (dish) => {
        axios.post('http://127.0.0.1:8000/api/addCustomDish/', {name: dish})
            .then(response => {
                setcustomDishes([...customDishes, {option: dish}]);
                setNewDish('');
            })
            .catch(error => console.error('error adding custom dish:', error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newDish.trim()) {
            handleAddDish(newDish.trim());
        }
    };

    const handleSpinClick = () => {
        if (customDishes.length > 0) {
            const newPrizeNumber = Math.floor(Math.random() * customDishes.length)
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
            setIsSpinning(true);
        } else {
            console.error('error: no dishes to spin')
        }
    };

    return (
        <div>
            <h2>Custom Roulette</h2>
            home button <br/>
            <button onClick={handleNavigate}> home</button>

            <br/>add dish here text box<br/><br/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newDish}
                    onChange={(e) => setNewDish(e.target.value)}
                    placeholder="enter dish name"
                />
                <button type="submit"> add dish</button>

            </form>
            add(submit) button<br/>
            roulette here<br/>
            {customDishes.length > 0 && (
                <div onClick={handleSpinClick} style={{cursor: 'pointer'}}>
                    <Wheel mustStartSpinning={mustSpin}
                           prizeNumber={prizeNumber}
                           data={customDishes}
                           backgroundColors={['#ffd700', '#4CAF50']}
                           textColors={['#ffffff']}
                           onStopSpinning={() => {
                               setMustSpin(false);
                               setIsSpinning(false);
                               const selected = customDishes[prizeNumber].option;
                               setSelectedDish(selected);

                           }
                           }
                    />

                </div>
            )}
            {!isSpinning && selectedDish && (
                <div className="selected-dish">
                    you are making: {selectedDish}
                    <br/>
                    <div/>

                    
                    click to run<br/>
                    gives dish to make from dishes added<br/>
                </div>

            )
            }
        </div>
    );
}
    export default CustomRoulette;