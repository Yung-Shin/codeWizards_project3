import React from 'react';
import Square from './Square';

const scoreboardStyles = {
    position: 'absolute',
    maxWidth: '25px',
    padding: '3px',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'yellow',
    overflow: 'hidden',
    borderRadius: '50%',
    color: 'black'
};

export default function Board({ size, board, score, onClick }) {
    const boardStyles = {
        display: 'grid',
        width: '80vw',
        height: '80vh',
        margin: 'auto',
        padding: 0,
        /* If the `size` prop is available in the Board component,
           you can use it here to set the number of columns. */
        gridTemplateColumns: `repeat(${size}, 1fr)`
    };

    return (
        <div>
            <div style={boardStyles}>
                {board.map((value, index) => (
                    <Square key={index} value={value} onClick={() => onClick(index)} />
                ))}
            </div>
            <div style={scoreboardStyles}>Score: {score}</div>
        </div>
    );
}
