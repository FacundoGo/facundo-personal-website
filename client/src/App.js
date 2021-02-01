import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Experience from './components/pages/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
    </div>
  );
}

export default App;
