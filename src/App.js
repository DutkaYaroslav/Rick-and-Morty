// невеличкий мій висновок:
// - інпути можна було б зробити реюзабильним, але я їх використовував з фетчами і робив спочатку все в одному компоненті. ТОму не встиг нормально переробити.Стилі теж повторював
// - робив без редаксу, бо давно не використовував і боявся не встигнути. Через тиждень планую повторити його
// - тайпскріпт трохи знаю, але на практиці важкувато було особливо з фетчами.
// тільки на вихідні помітив, що треба було конкретну кількість айтемів на сторінку відображати. не встиг переробити, бо від того й пагінація залежить теж. Якщо це буде критично, то я дороблю.
import React from 'react';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Navigation from './components/Navigation/Navigation';
import Locations from './components/Locations/Locations';
import Watchlist from './components/Watchlist/Watch';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/UI/Layout';
import '@fontsource/roboto';

function App() {
  return (
    <Layout>
      <Navigation />
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/watch">
          <Watchlist />
        </Route>
        {/* <Redirect>
          <Characters />
        </Redirect> */}
      </Switch>
    </Layout>
  );
}

export default App;
