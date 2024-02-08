import React, { useState } from 'react';


function InputComponent({ onAdd }) {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    if (inputText !== '') {
      onAdd(inputText);
      setInputText('');
    }
  };

  return (
    <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter item..." value={inputText} onChange={handleChange} />
          <button className="btn btn-primary" type="button" onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default InputComponent;
