import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Link, Redirect, Route,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Redirect to='/'/>
          </Switch>
        </Router>

      </div>
  );
}

export default App;