import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import Button from './components/Button';

function App() {
  return (
    <main className='App'>
      <header className='freecodecamp-logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='logo' />
      </header>
      <ul className='calculator-container'>
        <li className='row'>
          <Button>1</Button>
        </li>
        <li className='row'></li>
        <li className='row'></li>
        <li className='row'></li>
        <li className='row'></li>
      </ul>
    </main>
  );
}

export default App;
