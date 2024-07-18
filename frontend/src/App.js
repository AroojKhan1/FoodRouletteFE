import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CuisineRoulette from './components/CuisinesRoulette/CuisinesRoulette';
import DishRoulette from './components/DishRoulette/DishRoulette';
import Home from './components/Home/Home'
import CustomRoulette from './components/Custom Roulette/CustomRoulette';

function App() {
    return (

        <Router>
            <div className="App">
                <h1> Food Roulette</h1>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cuisines" element={<CuisineRoulette/>}/>
                    <Route path="/dishes" element={<DishRoulette/>}/>
                    <Route path="/dishes/:cuisine" element={<DishRoulette/>}/>
                    <Route path="/customRoulette" element={<CustomRoulette/>}/>
                </Routes>

            </div>
        </Router>

    );
}

export default App;
