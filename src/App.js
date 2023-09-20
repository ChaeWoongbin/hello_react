import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import Home from "./component/Home";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Menu1_1 from "./component/Menu1/Menu1_1";
import Menu1_2 from "./component/Menu1/Menu1_2";
import Menu2_1 from "./component/Menu2/Menu2_1";
import Wrong from './component/Wrong';


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
        <Route path="*" element={<Wrong />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="Menu1_1" element={<Menu1_1 />}></Route>
        <Route path="Menu1_2" element={<Menu1_2 />}></Route>
        <Route path="Menu2_1" element={<Menu2_1 />}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
