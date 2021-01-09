import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Komponenty from "./pages/Komponenty-2";

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
          </ul>
        </header>
        <Switch>
          <Route path="/komponenty" component={Komponenty}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
