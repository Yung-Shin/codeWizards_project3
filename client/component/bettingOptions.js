import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import NewRouletteForm from './NewRouletteForm';
import RouletteWheel from './css/rouletteWheel';
import UserInteractions from './userInteractions';

const BettingOptions = () => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />

      <h2>Register</h2>
      <RegisterForm />

      <h2>Create New Roulette</h2>
      <NewRouletteForm />

      <h2>Roulette Wheel</h2>
      <RouletteWheel />

      <h2>User Interactions</h2>
      <UserInteractions />
    </div>
  );
};

export default BettingOptions;
