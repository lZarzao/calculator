import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png'

function App() {
  return (
    <main className='App'>
      <header className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logo'
        />
      </header>
      <section className='calculator-container'>

      </section>
    </main>
  );
}

export default App;
