import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckOTP from "./Components/Registration/CheckOTP";
import GetNumber from "./Components/Registration/GetNumber";
import Registration from "./Components/Registration/Registration"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/GetNumber" component={GetNumber} />
          <Route exact path="/CheckOTP" component={CheckOTP} />
          <Route exact path="/Registration" component={Registration}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
