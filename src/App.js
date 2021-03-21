import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'

// --router import -- //

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import PostInformation from './components/PostInformation/PostInformation';


function App() {
  return (
    <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
            </ul>
          </nav>
          <hr></hr>



      {/* --Route --// */}
        <Switch>
          <Router exact path="/">
            <Home></Home>
          </Router>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/post/:id">
            <PostInformation></PostInformation>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
