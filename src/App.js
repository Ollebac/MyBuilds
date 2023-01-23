import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Homepage from './Homepage';
import Potionomics from './Potionomics';
import SearchList from "./SearchList";

import './App.css';

function App() {
  return (
    <Router>
      <div className="home_container">
        <a className="home_link" href="/">To Home</a>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/potionomics" element={<Potionomics />} />
        <Route path="/searchlist" element={<SearchList />} />
      </Routes>
    </Router>
  );
}

export default App;
