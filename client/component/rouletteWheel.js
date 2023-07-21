// RouletteWheel.js
import React, { useState } from 'react';
import './css/RouletteWheel.css'; // Import the CSS file for styling

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
    <div className="roulette-wheel">
      {/* Your Roulette wheel content */}
      <div className={`wheel ${isSpinning ? 'spinning' : ''}`}>
        {/* The wheel content, you can add your own design here */}
        {isSpinning ? 'Spinning...' : 'Spin the wheel'}
      </div>
      {result !== null && <p>The wheel stopped at: {result}</p>}
      <button onClick={spinWheel} disabled={isSpinning}>
        Spin the wheel
      </button>
    </div>
  );
};

export default RouletteWheel;
