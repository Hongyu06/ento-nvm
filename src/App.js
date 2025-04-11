import logo from './amon.png';
import './App.css';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          No et <code>sortira la</code> vandal chonovoid.
        </p>
        <a
          className="App-link"
          href="https://genshin.hoyoverse.com/es/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cosa God
        </a>
      </header>
    </div>
  );
}

export default App;
