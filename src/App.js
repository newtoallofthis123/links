import './components/css/master.css';
import 'animate.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from "./components/navBar";
import Home from "./components/home";

function App() {
  return (
      <Router>
          <Navbar />
          <Home />
      </Router>
  );
}

export default App;