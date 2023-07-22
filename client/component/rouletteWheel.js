import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RouletteWheelContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #31a054;
  /* Replace with your preferred color/image */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  animation: ${({ isSpinning }) => (isSpinning ? `${spinAnimation} 3s linear infinite` : 'none')};
`;

const RouletteWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spinWheel = () => {
    if (isSpinning) return; // Prevent spinning while it's already spinning
    setIsSpinning(true);

    // Simulate spinning for 3 seconds and get the random result
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 37);
      setIsSpinning(false);
      setResult(randomNumber);
      console.log('The wheel stopped at:', randomNumber);
    }, 3000); // 3 seconds
  };

  return (
    <RouletteWheelContainer isSpinning={isSpinning}>
      {/* The wheel content, you can add your own design here */}
      {isSpinning ? 'Spinning...' : 'Spin the wheel'}
      {result !== null && <p>The wheel stopped at: {result}</p>}
      <button onClick={spinWheel} disabled={isSpinning}>
        Spin the wheel
      </button>
    </RouletteWheelContainer>
  );
};

export default RouletteWheel;
