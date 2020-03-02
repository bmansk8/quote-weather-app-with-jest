import React from "react";
import { QuoteMachine } from "./QuoteMachine";
import { NASARover } from "./NASARover";
import { LogIn } from './LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const App = function App() {

    return(
      <Router>
        <div>

          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to="/"> Home </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/quotes"> Quotes </Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route path="/quotes">
            <QuoteMachine />
            <NASARover />
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>

        </div>

      </Router>
    );
}
