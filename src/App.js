import logo from './AESE logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <span class="d-flex">
          <div class="d-inline-flex flex-grow-1">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 class="text-white align-self-center">Aese</h1>
          </div>
          <button class="btn"><a href="/" class="text-white no-decoration">Se Connecter</a></button>
        </span>
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
