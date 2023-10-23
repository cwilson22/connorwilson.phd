import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Projects from "./Projects";
import Publications from "./Publications";
import Publicity from "./Publicity";
// import Notion from "./Notion";

const Pages = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route path="/connorwilson.phd/" element={<Home user={user} />} />
        <Route path="/connorwilson.phd/publications" element={<Publications user={user} />} />
        {/* <Route path="/projects" element={<Projects user={user} />} /> */}
        <Route path="/connorwilson.phd/publicity" element={<Publicity user={user} />} />
        <Route path="/connorwilson.phd/*" element={<Home user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;
