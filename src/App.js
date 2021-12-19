import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "pages/styles.scss";

import { Menu, MenuItem } from "components/Menu";
import Section from "./pages/Section";
import { AccessContext, UserContext, ViewContext } from './contexts';

import Komponenty from "./pages/Komponenty-2";
import Modul3 from "./pages/Modul3";
import Modul4 from "./pages/Modul4";
import Modul5 from "./pages/Modul5";
import { Modul7 } from "./pages/Modul7";
import Modul8 from "./pages/Modul8";
import Modul9 from "./pages/Modul9";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import UserDetails from "components/User/UserDetails";
import Profile from "./pages/Profile";
import Places from "components/Places";
import Movies from "components/Movies";
import useMobile from "hooks/useMobile";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [logged, setIsLogged] = useState(false);
  const isMobile = useMobile();
  const user = {
    email: "jan@kowalski.pl",
    isAdmin: false
  };
  const access = {
    isLogin : logged,
    logIn : () => setIsLogged(true),
    logOut: () => setIsLogged(false)
  };
  const view = {
    isMobile: isMobile
  }

  return (
    <div className="main">
      <BrowserRouter>
      <ViewContext.Provider value={view}>
        <div className={`navMenu ${showMenu ? "show" : ""}`}>
          <h3>Menu</h3>
          <Menu className="sideMenu">
            <MenuItem to="/home" label="home" icon="home"/>
            <MenuItem to="/about" label="about" icon="address-card"/>
            <MenuItem to="/contact" label="contact" icon="phone"/>
            <MenuItem to="/users" label="users" icon="users"/>
            <MenuItem to="/movies" label="movies" icon="film"/>
            <MenuItem to="/places" label="places" icon="globe"/>
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
              <li>
                <Link to="/modul7">Moduł 7</Link>
              </li>
              <li>
                <Link to="/modul8">Moduł 8</Link>
              </li>
              <li>
                <Link to="modul9">Moduł 9</Link>
              </li>
            </ul>
          </header>
          <div className="body__container">
            <Switch>
              <Route path="/komponenty" component={Komponenty}/>
              <Route path="/modul3" component={Modul3}/>
              <Route path="/modul4" component={Modul4}/>
              <Route path="/modul5" component={Modul5}/>
              <Route path="/modul7" component={Modul7}/>
              <Route path="/modul8" component={Modul8}/>
              <Route path="/home"><Section title="Home"/></Route>
              <Route path="/about"><Section title="About"/></Route>
              <Route path="/contact"><Section title="Contact"/></Route>
              <Route exact path="/users/:id" component={UserDetails}/>
              <Route path="/users" component={Users}/>
              <Route path="/user-profile" component={UserProfile}/>
              <Route path="/subscriber/:profileID" component={Profile}/>
              <AccessContext.Provider value={access}>
                <UserContext.Provider value={user}>
                  <Route path="/modul9" component={Modul9}/>
                  <Route path="/movies" component={Movies}/>
                  <Route path="/places" component={Places}/>
                </UserContext.Provider>
              </AccessContext.Provider>
            </Switch>
          </div>
        </div>
        </ViewContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
