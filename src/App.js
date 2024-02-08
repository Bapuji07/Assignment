import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import ViewComponent from './components/ViewComponent';
import FinalViewComponent from './components/FinalViewComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [inputQueue, setInputQueue] = useState([]);
  const [finalViewQueue, setFinalViewQueue] = useState([]);
  const handleAdd = (text) => {
    setInputQueue([...inputQueue, text]);
    setFinalViewQueue([...finalViewQueue, text]); 
  };

  const handleEnd = () => {
    if (inputQueue.length === 0) {
      alert('Success! Queue is empty.');
      setInputQueue([]);
      setFinalViewQueue([]);
    } else {
      alert('Queue is not empty. Please wait for all items to process.');
    }
  };

  const handleReset = () => {
    setInputQueue([]);
    setFinalViewQueue([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (inputQueue.length > 0) {
        const currentItem = inputQueue.shift(); 
        setFinalViewQueue([...finalViewQueue, currentItem]); 
      }
    }, 10000); 

    return () => clearInterval(interval);
  }, [inputQueue, finalViewQueue]);

  return (
    <div className="App">
      <Header />
      <div className="container d-flex  justify-content-around w-100 h-100 ">
        <div className='d-flex flex-column w-75 '>
        <InputComponent onAdd={handleAdd} />
        <ViewComponent queue={inputQueue} />
        </div>
        <div>
        <FinalViewComponent queue={finalViewQueue} onEnd={handleEnd} onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}

export default App;
