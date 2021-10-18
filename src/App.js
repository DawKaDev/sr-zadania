import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Komponenty from "./pages/Komponenty-2";
import Modul3 from "./pages/Modul3";
import Modul4 from "./pages/Modul4";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/komponenty">Komponenty</Link>
            </li>
            <li>
              <Link to="/modul3">Moduł 3</Link>
            </li>
            <li>
              <Link to="/modul4">Moduł 4</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/komponenty" component={Komponenty}/>
          <Route path="/modul3" component={Modul3}/>
          <Route path="/modul4" component={Modul4}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
