import './App.css';
import Home from "./Components/Home";
import Sidenav from './Components/sidenav';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Albums } from './pages/Albums';

function App() {
  return (
      <Router>
          {/* <Sidenav /> */}
          <Routes>
              <Route exact path = "/" element={<Home />} />
              <Route path="/albums" element={<Albums />} />
          </Routes>
      </Router>
  );
}

export default App;