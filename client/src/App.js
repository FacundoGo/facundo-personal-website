import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <h1>Welcome! Bienvenidos! Willkommen! Benvenuti!</h1>
        <p>Hi! I'm Facundo, check out my page!</p>
        <Main></Main>
        <footer>
        <p>Made with <img src={logo} className="App-logo" alt="logo" width="50px"/> in Berlin</p>
        </footer>
    </div>
  );
}

export default App;
