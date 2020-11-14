import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <h1 class="text-white">Aese</h1>
        <button class="btn"><a class="text-white no-decoration">Se Connecter</a></button>
      </header>

      {/* Asso */}
      <div class="Section" id="Sec1">
        <h2>Présentation de l'association + réseaux</h2>
        <p>Ceci est une association top+!</p>
      </div>

      {/* News */}
      <div class="Section" id="Sec2">
        <h2>Nos évènements</h2>
      </div>

      {/* Tournoi */}
      <div class="Section" id="Sec3">
        <h2>Tournamento</h2>
        <p>Leaderboard</p>
        <p>Tournoi</p>
      </div>

      {/* Staff */}
      <div class="Section" id="Sec4">
        <h2>Le Staff</h2>
      </div>
    </div>
  );
}

export default App;
