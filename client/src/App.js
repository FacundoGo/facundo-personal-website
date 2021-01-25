import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
        <Nav />
        <h1>Welcome! Bienvenidos! Willkommen! Benvenuti!</h1>
        <p></p>
        <img src={logo} className="App-logo" alt="logo" width="250px"/>
    </div>
  );
}

export default App;
