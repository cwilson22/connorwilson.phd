import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Publications from "./Publications";
import Publicity from "./Publicity";
import Work from "./Work";
import Awards from "./Awards";
// import Notion from "./Notion";

const Pages = ({ user }) => {
  return (
    // <Router>
      <Routes>
        <Route path={"/"} element={<Home user={user} />}/>
        <Route path={"/publications"} element={<Publications user={user} />}/>
        <Route path={"/projects"} element={<Projects user={user} />}/>
        <Route path={"/publicity"} element={<Publicity user={user} />}/>
        <Route path={"/work"} element={<Work user={user}/>}/>
        <Route path={"/awards"} element={<Awards user={user}/>}/>
        <Route path="*" element={<Home user={user} />}/>
      </Routes>
    // </Router>
    // <>
    //   <Routes>
    //     <Route path={process.env.PUBLIC_URL + "/"} element={<Home user={user} />} />
    //     <Route path={process.env.PUBLIC_URL + "/publications"} element={<Publications user={user} />} />
    //     {/* <Route path="/projects" element={<Projects user={user} />} /> */}
    //     <Route path={process.env.PUBLIC_URL + "/publicity"} element={<Publicity user={user} />} />
    //     <Route path="*" element={<Home user={user} />} />
    //   </Routes>
    // </>
  );
};

export default Pages;
