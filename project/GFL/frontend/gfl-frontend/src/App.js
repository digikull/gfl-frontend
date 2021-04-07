import React from "react"; 
import "./index.css";

import List_Tournaments from "./components/List_Tournaments/List_Tournaments";
import Create_Tournament from "./components/Create_Tournament/Create_Tournament";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Todo from "./components/Todo/Todo"; 


function App() {
  return (
    <div className="App">
  <div>
 
<nav class="navbar navbar-dark bg-primary">
        <ul>
          <li>
            <Link className="info_m" to="/Todo">
            <a class="navbar-brand" href="#">Create Tournament</a>
            </Link>
           
          </li>
        </ul>
      </nav>

      <hr />
      <Switch>
        <Route exact path="/Todo" component={Create_Tournament} />
      </Switch>
    </div>
     
    </div>
  );
}

export default App;
