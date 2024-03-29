import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Potionomics from "./Potionomics/Potionomics";
import SearchList from "./SearchList/SearchList";
import MyGear from "./MyGear/MyGear";
import SiteDesign from "./SiteDesign/SiteDesign";
import Shopping from "./Shopping/Shopping";
import SkillsTest from "./PSD_SkillsTest/SkillsTest";
import Ajax from "./AJAX/Ajax";

import "./App.css";

function App() {
  return (
    <Router>
      <span className="home_container">
        <a className="home_link" href="/">
          To Home
        </a>
      </span>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/potionomics" element={<Potionomics />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/mygear" element={<MyGear />} />
        <Route path="/sitedesign" element={<SiteDesign />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/psd_to_html" element={<SkillsTest />} />
        <Route path="/ajax" element={<Ajax />} />
      </Routes>
    </Router>
  );
}

export default App;
