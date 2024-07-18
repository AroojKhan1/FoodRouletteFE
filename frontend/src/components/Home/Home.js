import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleCuisineNavigate = () => {
        navigate(`/cuisines`);
    };
    const handleDishNavigate = () => {
        navigate(`/dishes`);
    };
    const handleCustomNavigate = () => {
        navigate(`/customRoulette`);
    };

    return (
        <div className="home-container">
            <h2>Welcome to FoodRoulette!! </h2>
            <p className="home-paragraph">
                Are you tired of the daily dilemma of what to cook or where to eat out?<br/>
                <span className="highlight">FoodRoulette is here to solve your mealtime decision fatigue!</span>
            </p>


            <h2> What to Cook?</h2>
            <p className="home-paragraph">
                Struggling to decide what's for dinner? Let FoodRoulette inspire you with<br/>
                personalized recipe suggestions tailored to your cuisine preferences.<br/>
                <span className="highlight">Say goodbye to the nightly "what's for dinner?" question.</span>
            </p>


            <h2>What to Eat Out? </h2>
            <p className="home-paragraph">
                <span className="highlight">Tired of the indecisive back-and-forth about where to eat out?</span><br/>
                FoodRoulette helps you and your partner quickly decide the perfect dinner,<br/>
                taking the stress out of choosing and leaving more time for enjoying your meal.
            </p>


            <p className="home-paragraph">
                Discover the joy of stress-free mealtimes with FoodRoulette. Let's get started!<br/>

            </p>

            <div className="button-container">
                <button onClick={handleCuisineNavigate} className="big-button">Go to Cuisine Roulette</button>
                <button onClick={handleDishNavigate} className="big-button">Go to Dish Roulette</button>
            </div>

            <h2>Resolve Resolve Dining Disputes! </h2>
            <p className="home-paragraph">
                <span className="highlight">This or that?</span><br/>Enter two dishes to end the debate
                with your partner. Spin the roulette,<br/> and whatever it selects, that's your meal!
            </p>

            <h2>Or Solve Your Own Confusion! </h2>
            <p className="home-paragraph">
                <span className="highlight">Can't decide what to eat?</span><br/>Add
                multiple dishes & let foodroulette decide for you <br/>

            </p>


            <div className="button-container">
                <button onClick={handleCustomNavigate} className="big-button">Custom Roulette</button>

            </div>

        </div>

    );
}

export default Home;
