import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import Button from './components/Button';
import Screen from './components/Screen';
import Clear from './components/Clear'
import { useState } from 'react'

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <main className='App'>
      <header className='freecodecamp-logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='logo' />
      </header>
      <ul className='calculator-container'>
        <Screen input={input} />
        <li className='row'>
          <Button clicking={addInput}>1</Button>
          <Button clicking={addInput}>2</Button>
          <Button clicking={addInput}>3</Button>
          <Button clicking={addInput}>+</Button>
        </li>
        <li className='row'>
          <Button clicking={addInput}>4</Button>
          <Button clicking={addInput}>5</Button>
          <Button clicking={addInput}>6</Button>
          <Button clicking={addInput}>-</Button>
        </li>
        <li className='row'>
          <Button clicking={addInput}>7</Button>
          <Button clicking={addInput}>8</Button>
          <Button clicking={addInput}>9</Button>
          <Button clicking={addInput}>*</Button>
        </li>
        <li className='row'>
          <Button clicking={addInput}>=</Button>
          <Button clicking={addInput}>0</Button>
          <Button clicking={addInput}>.</Button>
          <Button clicking={addInput}>/</Button>
        </li>
        <li className='row'>
          <Clear clearInput={clearInput}>Clear</Clear>
        </li>
      </ul>
    </main>
  );
}

export default App;
