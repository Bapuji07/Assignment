import React, { useState, useEffect } from 'react';

function FinalViewComponent({ queue, onEnd, onReset }) {
  const [removedItems, setRemovedItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (queue.length > 0) {
        const removedItem = queue.shift();
        setRemovedItems(prevItems => [...prevItems, removedItem]);
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
    setRemovedItems([]);
  };

  return (
    <div className="final-view-container">
      <div className="removed-items">
        <h3>Removed Items:</h3>
        <ul className="list-group">
            {removedItems.map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>
      </div>
      <div className="d-flex gap-2 ">
        <button className="btn btn-primary " type="button" onClick={handleEnd}>End</button>
        <button className="btn btn-primary" type="button" variant="secondary" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default FinalViewComponent;
