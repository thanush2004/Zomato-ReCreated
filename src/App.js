import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mobile from "./zom_mobile";
import Nav from "./Zom_nav";
import GetApp from "./GetApp";
import Entry from "./Entry";
import Investor from "./Investor";
import InvRed from "./InvRed";
import InvBlack from "./InvBlack";
import Sample from "./sample";
import AddRes from "./AddRes";
import Login from "./login";
import Signup from "./Signup";
import Financials from "./Financials";
import FinDetails from "./fin-details";
import AR from "./AR";
import Announcement from "./Announcement";
import Governance from "./Governance";
import PersonClicked from "./PersonClicked";
import Board from "./Board";
import Esginit from "./ESGinit";
import Resources from "./Resources";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Governance />} /> */}
          <Route path="/" element={<Entry />} />
          <Route path="/Announcement" element={<Announcement />} />
          <Route path="/personClicked" element={<PersonClicked />} />
          <Route path="/board" element={<Board />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/Esginit" element={<Esginit />} />
          <Route path="/Resources" element={<Resources />} />

          <Route path="/Inv" element={<Investor />} />
          <Route path="/AddRes" element={<AddRes />} />
          <Route path="/getApp" element={<GetApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
