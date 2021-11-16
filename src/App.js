import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './pages/Home/Main';
import Detaile from './pages/detaile/Detaile';
import Shop from './pages/Shop/Shop';
import API from './context/API';



function App() {
  return (
    <API>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Main />} />
            <Route path="/shop/:id" component={() => <Shop />} />
            <Route path="/shop" component={() => <Shop />} />
            <Route path="/detaile/:catID/:id" component={() => <Detaile />} />
          </Switch>
        </Router>

      </div>
      <style jsx>{`
        .App{
          background-image: url("./bg1.png");
        }

        `}</style>
    </API>
  );
}

export default App;
