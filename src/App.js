import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import Home from "./component/Home";
import Menu1 from "./component/Menu1";
import Menu2 from "./component/Menu2";


function App() {
  return (
    <div className="App">
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
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Menu1" element={<Menu1 />}></Route>
        <Route path="Menu2" element={<Menu2 />}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
