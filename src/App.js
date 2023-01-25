import './components/css/master.css';
import 'animate.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Navbar from "./components/navBar";
import Home from "./components/home";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
                <Route exact path="/" element={<Home />}/>
          </Routes>
      </Router>
  );
}

export default App;