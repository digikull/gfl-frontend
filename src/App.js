
import { BrowserRouter, Route, Link, Router ,Switch } from "react-router-dom";
import Home from './Components/Home'
import Form from './Components/CreatePlayer'
import Update from './Components/UpdatePlayer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home}></Route> 
          <Route exact path={"/Form"} component={Form}></Route>  
          <Route exact path={"/Update/:id/"} component={Update}></Route> 
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
