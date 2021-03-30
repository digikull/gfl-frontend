import { BrowserRouter, Switch, Route } from "react-router-dom";

import Registration from "./Components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Registration" component={Registration}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
