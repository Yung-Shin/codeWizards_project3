import React from 'react';
import Square from './Square';
import styled from 'styled-components';

const BoardContainer = styled.div`
    display: grid;
    width: 80vw;
    height: 80vh;
    margin: auto;
    padding: 0;

    grid-template-columns: repeat(${props => props.size}, 1fr);
`;

export default function Board({ size, board, onClick }) {
    return (
        <BoardContainer size={size}>
            {board.map((value, index) => (
                <Square key={index} value={value} onClick={() => onClick(index)} />
            ))}
        </BoardContainer>
    );
}


// /* If the `size` prop is available in the Board component,
// you can use it here to set the number of columns. */