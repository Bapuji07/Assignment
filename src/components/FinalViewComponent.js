import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function FinalViewComponent({ queue, onEnd, onReset }) {
  const [currentItem, setCurrentItem] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (queue.length > 0) {
        setCurrentItem(queue.shift());
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [queue]);

  const handleEnd = () => {
    if (queue.length === 0) {
      onEnd();
    } else {
      const confirmEnd = window.confirm("Queue isn't empty. Are you sure you want to end?");
      if (confirmEnd) {
        const interval = setInterval(() => {
          if (queue.length === 0) {
            clearInterval(interval);
            onEnd();
          }
        }, 1000);
      }
    }
  };

  const handleReset = () => {
    onReset();
    setCurrentItem('');
  };

  return (
    <div className="final-view-container">
      <div className="current-item">{currentItem}</div>
      <div className="buttons">
        <button onClick={handleEnd}>End</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default FinalViewComponent;
