
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Search from './pages/Search';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path = {["/", "/search"]}>
            <Search />
            </Route>

          <Route exact path = {["/", "/saved"]}>
          {/* call saved page */}
          </Route>

          <Route>
            <NoMatch />
          </Route>
         
        </Switch>
        </div>
      </Router>
     
 

    </div>
  );
}

export default App;
