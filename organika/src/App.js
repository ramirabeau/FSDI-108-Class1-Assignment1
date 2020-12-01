import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import QntPicker from "./components/QntPicker/QntPicker";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1> This is cool </h1> <button> test </button>
      <QntPicker></QntPicker>
      <Footer></Footer>
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
