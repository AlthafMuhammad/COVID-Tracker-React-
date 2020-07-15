import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';



function App() {
  return (
      <Router>
        <Header/>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/COVID19-Tracker-React">
              <India/>
            </Route>
            <Route path="/COVID19-Tracker-React/india">
              <India/>
            </Route>
            <Route path="/COVID19-Tracker-React/world">
              <World/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>     
  );
}

export default App;
