import React from 'react';

const Controls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
  <div>
    <button type="button" name="good" onClick={onIncrementGood}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onIncrementBad}>
      Bad
    </button>
  </div>
);

export default Controls;
