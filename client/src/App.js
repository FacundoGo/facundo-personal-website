
import './App.css';
import Main from './components/Main';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import Contact from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
        <Route
          exact
          path='/'
          render={props => <Main {...props} />}
        />
        {/* Routes  */}
        <Route
          exact
          path='/Experience'
          render={props => <Experience {...props} />}
        />
          <Route
          exact
          path='/Education'
          render={props => <Education {...props} />}
        />
          <Route
          exact
          path='/Contact'
          render={props => <Contact {...props} />}
        />
    </div>
  );
}

export default App;
