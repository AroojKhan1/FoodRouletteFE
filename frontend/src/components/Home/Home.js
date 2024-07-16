import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleCuisineNavigate = () => {
        navigate(`/cuisines`);
    };
    const handleDishNavigate = () => {
        navigate(`/dishes`);
    };

    return (
        <div className="home-container">
            <h1>Welcome to FoodRoulette!! </h1><br/>

            Are you tired of the daily dilemma of what to cook or where to eat out?<br/>
            FoodRoulette is here to solve your mealtime decision fatigue!<br/>
            <br/>
            <h2> What to Cook?</h2><br/>
            Struggling to decide what's for dinner? Let FoodRoulette inspire you with<br/>
            personalized recipe suggestions tailored to your taste and cuisine preferences.<br/>
            Say goodbye to the nightly "what's for dinner?" question.<br/>
            <br/>
            <h2>What to Eat Out? </h2><br/>
            Tired of the indecisive back-and-forth about where to eat out?<br/>
            FoodRoulette helps you and your partner quickly decide the perfect dinner,<br/>
            taking the stress out of choosing and leaving more time for enjoying your meal.<br/>

            Discover the joy of stress-free mealtimes with FoodRoulette. Let's get started!<br/>

            <div className="button-container">
                <button onClick={handleCuisineNavigate} className="big-button">Go to Cuisine Roulette</button>
                <button onClick={handleDishNavigate} className="big-button">Go to Dish Roulette</button>
            </div>
        </div>
    );
}

export default Home;
