import React from 'react';

const Square = ({ id, color, bet, onClick, value }) => {
    const styles = {
        position: 'relative',
        textAlign: 'center',
        border: '1px solid #ddd',
        backgroundColor: color,
        color: color === 'red' ? 'white' : 'black',
    };

    return (
        <div style={styles} className={`box ${color}`} onClick={onClick}>
            {id}
            {value && <div>{value}</div>}
            {bet && <div className='bet'>$</div>}
        </div>
    );
}

export default Square;
