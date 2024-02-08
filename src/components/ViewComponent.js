import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewComponent({ queue }) {
    const reversedQueue=queue.slice().reverse()
  return (
    <div className="view-container">
      <h2>Queue</h2>
      <ul>
        {reversedQueue.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewComponent;
