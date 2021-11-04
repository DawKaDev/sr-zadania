import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "pages/styles.scss";

import { Menu, MenuItem } from "components/Menu";
import Section from "./pages/Section";

import Komponenty from "./pages/Komponenty-2";
import Modul3 from "./pages/Modul3";
import Modul4 from "./pages/Modul4";
import Modul5 from "./pages/Modul5";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="main">
      <BrowserRouter>
        <div className={`navMenu ${showMenu ? "show" : ""}`}>
          <h3>Menu</h3>
          <Menu className="sideMenu">
            <MenuItem to="/home">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
            <MenuItem to="/users">Users</MenuItem>
            <button onClick={()=>setShowMenu(!showMenu)}>hide menu</button>
          </Menu>
        </div>
        <div className="body">
          <header className="header">
            <ul>
              <li>
                <button onClick={()=>setShowMenu(!showMenu)}>Menu</button>
              </li>
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
              <li>
                <Link to="/modul5">Moduł 5</Link>
              </li>
            </ul>
          </header>
          <div className="body__container">
            <Switch>
              <Route path="/komponenty" component={Komponenty}/>
              <Route path="/modul3" component={Modul3}/>
              <Route path="/modul4" component={Modul4}/>
              <Route path="/modul5" component={Modul5}/>
              <Route path="/home"><Section title="Home"/></Route>
              <Route path="/about"><Section title="About"/></Route>
              <Route path="/contact"><Section title="Contact"/></Route>
              <Route path="/users" component={Users}/>
              <Route path="/user-profile" component={UserProfile}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
