import React from "react";

import Create_Tournament from "../Create_Tournament/Create_Tournament";
import List_Tournaments from "../List_Tournaments/List_Tournaments";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Todo = () => (
  <div>
 
  <BrowserRouter>
      <Switch>
        <Route  exact path="/List_Tournaments" component={List_Tournaments} />
      </Switch>
    </BrowserRouter>
 
</div>
);

export default Todo;
