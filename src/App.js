import logo from './AESE logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <span class="d-flex">
          {/* Block logo + title */}
          <div class="d-inline-flex flex-grow-1">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 class="text-white align-self-center">Aese</h1>
          </div>

          {/* block Nav */}
          <div class="d-inline-flex">
            <ul class="nav align-self-center">
              <li class="nav-items"><a href="#Sec1" class="nav-links text-white text-decoration-none">Accueil</a></li>
              <li class="nav-items"><a href="#Sec2" class="nav-links text-white text-decoration-none">Évènements</a></li>
              <li class="nav-items"><a href="#Sec3" class="nav-links text-white text-decoration-none">Leaderboards</a></li>
              <li class="nav-items"><a href="#Sec3" class="nav-links text-white text-decoration-none">Tournoi</a></li>
              <li class="nav-items"><a href="#Sec4" class="nav-links text-white text-decoration-none">Staff</a></li>
              <li><a href=""><button class="btn text-white">Se Connecter</button></a></li>
            </ul>
          </div>
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
