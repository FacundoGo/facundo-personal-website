import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <h1>Welcome! Bienvenidos! Willkommen! Benvenuti!</h1>
        <p></p>
        <img src={logo} className="App-logo" alt="logo" width="250px"/>
    </div>
  );
}

export default App;
