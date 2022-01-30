import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Publications from "./Publications";
import Publicity from "./Publicity";
import Notion from "./Notion";

const Pages = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/publications" element={<Publications user={user} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/publicity" element={<Publicity user={user} />} />
        <Route path="/predicting-behaviour" element={<Notion user={user} />} />
        <Route path="*" element={<Home user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;
