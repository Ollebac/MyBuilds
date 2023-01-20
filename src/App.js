import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Homepage from './Homepage';
import Potionomics from "./Potionomics";

function App() {
  return (
    <Router>
      <a href="/">Home</a>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/potionomics" element={<Potionomics />} />
      </Routes>
    </Router>
  );
}

export default App;
