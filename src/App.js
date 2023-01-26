import './components/css/master.css';
import 'animate.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/navBar";
import Home from "./components/home";
import Get from "./components/go"

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/get/:slug" element={<Get />}></Route>
          </Routes>
      </Router>
  );
}

export default App;