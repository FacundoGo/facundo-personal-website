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
        <h1 style={{ marginTop: '30px' }}>Facundo Gomez Vera</h1>
        <h2>Welcome! Bienvenidos! Willkommen! Benvenuti!</h2>
        <h4>Find out more about me</h4>
        <Main></Main>
        {/* <footer> */}
        <p>Made with <img src={logo} className="App-logo" alt="logo" width="50px"/> in Berlin</p>
        {/* </footer> */}

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
