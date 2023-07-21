import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_ROULETTE = gql`
  mutation CreateRoulette($winningName: String!, $winningChance: Float!) {
    createRoulette(winningName: $winningName, winningChance: $winningChance) {
      _id
      winningName
      winningChance
    }
  }
`;

const NewRouletteForm = () => {
    const [winningName, setWinningName] = useState('');
    const [winningChance, setWinningChance] = useState('');

    const [createRoulette] = useMutation(CREATE_ROULETTE);

    const handleCreateRoulette = () => {
        createRoulette({
            variables: { winningName, winningChance: parseFloat(winningChance) },
        })
            .then((data) => {
                // Handle successful creation, reset form, etc.
                console.log('Roulette created successfully:', data);
            })
            .catch((error) => {
                // Handle error, display error message, etc.
                console.error('Error creating Roulette:', error.message);
            });
    };

    return (
        <div>
            {/* Form to input Roulette data */}
            <input
                type="text"
                value={winningName}
                onChange={(e) => setWinningName(e.target.value)}
                placeholder="Winning Name"
            />
            <input
                type="text"
                value={winningChance}
                onChange={(e) => setWinningChance(e.target.value)}
                placeholder="Winning Chance"
            />
            <button onClick={handleCreateRoulette}>Create Roulette</button>
        </div>
    );
};

export default NewRouletteForm;
