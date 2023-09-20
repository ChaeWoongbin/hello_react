import './App.css';
import Appbar from './component/Appbar';
import {Route, Routes} from 'react-router-dom';
import Home from "./component/Home";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Menu1_1 from "./component/Menu1/Menu1_1";
import Menu1_2 from "./component/Menu1/Menu1_2";
import Menu2_1 from "./component/Menu2/Menu2_1";
import Wrong from './component/Wrong';
import About from './component/About';


function App() {
  return (
    <div className="App">
     <header className="App-header">
        <Appbar/>        
      </header>
      <body>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="*" element={<Wrong />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Menu1" element={<Menu1_1 />}></Route>
        <Route path="Menu2" element={<Menu2_1 />}></Route>
        <Route path="Menu1_1" element={<Menu1_1 />}></Route>
        <Route path="Menu1_2" element={<Menu1_2 />}></Route>
        <Route path="Menu2_1" element={<Menu2_1 />}></Route>
      </Routes></body>
    </div>
  );
}

export default App;
