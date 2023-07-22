import React, { useState } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';

const Game = () => {
    const initialGameState = {
        x: 7,
        y: 9,
        coins: 50,
        sel: [],
        eles: Array(63).fill({ bet: false }),
        winner: false,
        styler: ['black', 'white'],
    };

    const [game, setGame] = useState(initialGameState);

    const spin = () => {
        // Implement the spinning logic here
        // Update the game state accordingly
        const newGame = /* calculate the new game state based on the spin logic */
            setGame(newGame); // Update the game state with the newGame object
    }

    const onSquareClick = (index) => {
        // Implement the square click logic here
        // Update the game state accordingly
        const newGame = /* calculate the new game state based on the square click logic */;
        setGame(newGame); // Update the game state with the newGame object
    }

    return (
        <div className='gamearea'>
            <Scoreboard coins={game.coins} />
            <Board size={game.x * game.y} board={game.eles} onClick={onSquareClick} />
            <button onClick={spin} disabled={game.sel.length === 0}>Spin</button>
        </div>
    );
}

export default Game;
