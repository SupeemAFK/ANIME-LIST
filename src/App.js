import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar';

//pages
import Home from './components/pages/Home/Home';
import AnimeDetailPage from './components/pages/AnimeDetailPage/AnimeDetailPage'
import SearchAnimePage from './components/pages/SearchAnimePage/SearchAnimePage'
import AnimeSeasonPage from './components/pages/AnimeSeasonPage/AnimeSeasonPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/animeDetail/:animeID">
            <AnimeDetailPage />
          </Route>

          <Route path="/search/:animeName">
            <SearchAnimePage />
          </Route>

          <Route path="/season/:year/:season">
            <AnimeSeasonPage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
