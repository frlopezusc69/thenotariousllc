import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res) {
  res.write('Hello Node')
  res.end()
})

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;