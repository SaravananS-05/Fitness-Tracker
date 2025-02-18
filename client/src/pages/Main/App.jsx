import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import Home from '../Home/Home';
import Exercise from '../Exercise/Exercise';
import { Nutrtion } from '../Nutrition/Nutrtion';
import Settings from '../Settings/Settings';
import { Progress } from '../Progress/Progress';


const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/exercises" element={<Exercise/>} />
      <Route path="/nutrition" element={<Nutrtion/>} />
      <Route path="/progress" element={<Progress/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
  );
};

export default App;
