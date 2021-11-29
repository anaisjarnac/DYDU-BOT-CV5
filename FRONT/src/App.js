import './App.css';
import Home from './view/accueil/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";


function App() {
  return (
    <div>


<Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main>
                <Home />
              </Main>
            )}
          />
        
          </Switch>
      </Router> 


   
      
{/* < CreateProject /> */}
    </div>
  );
}

export default App;
