import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateBlog from "./Pages/CreateBlog";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        exect
        element={
          <div>
            <Navbar />
            <Home />
            <Footer />
          </div>
        }
      />
        <Route
        path="/createblog"
        exect
        element={
          <div>
            <Navbar />
            <CreateBlog />
            <Footer />
          </div>
        }
      />
      <Route path="/Login" exect element={<Login />} />
      <Route path="/Register" exect element={<Register />} />
      <Route
        path="*"
        exect
        element={
          <div className="h-screen flex flex-row justify-center items-center">
            <h1>404 Page not Found.</h1>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
