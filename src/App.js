import EditPlayer from "./Components/Player/EditPlayer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route  exactpath="/EditPlayer" component={EditPlayer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
