import React from 'react';

const ViewComponent = ({ queue }) => {
    const reverseQueue=queue.slice().reverse()
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {reverseQueue.map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewComponent;
