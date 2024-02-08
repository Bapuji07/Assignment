import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <div className="input-container">
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default InputComponent;
