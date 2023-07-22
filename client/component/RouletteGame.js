import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const SPIN_ROULETTE = gql`
  mutation SpinRoulette($rouletteId: ID!) {
    spinRoulette(rouletteId: $rouletteId) {
      winningName
      won
    }
  }
`;

const RouletteGame = ({ rouletteId }) => {
    const [spinRoulette, { data }] = useMutation(SPIN_ROULETTE);

    const handleSpin = () => {
        spinRoulette({ variables: { rouletteId } });
    };

    const result = data?.spinRoulette || {};

    return (
        <div>
            <button onClick={handleSpin}>Spin the Roulette!</button>
            {result.winningName && (
                <div>
                    <h2>Result:</h2>
                    <p>Winning Name: {result.winningName}</p>
                    <p>You {result.won ? 'Won' : 'Lost'}!</p>
                </div>
            )}
        </div>
    );
};

export default RouletteGame;
