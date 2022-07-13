import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('0');

  const addInput = (val) => {
    if (!isNaN(val)) {
      if (input[0] !== '0') {
        setInput(input + val);
      } else {
        setInput(val);
      }
    } else {
      if (input[0] !== '0') {
        console.log(typeof input)
        if (!isNaN(input[input.length - 1])) {
          setInput(input + val);
        } else {
          setInput(input.slice(0, -1) + val);
        }
      }
    }
  };

  const clearInput = () => {
    setInput('0');
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input).toString());
    } else {
      alert('Please enter values first');
    }
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
          <Button clicking={result}>=</Button>
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
