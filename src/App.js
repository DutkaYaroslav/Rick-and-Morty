import React from 'react';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Navigation from './components/Navigation/Navigation';
import Locations from './components/Locations/Locations';
import Watchlist from './components/Watchlist/Watchlist';
import NotFound from './components/NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
