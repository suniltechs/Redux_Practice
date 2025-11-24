import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import { BrowserRouter } from "react-router-dom";
import NewHome from "./pages/NewHome";
import EditUser from "./pages/EditUser";
import Fruits from "./pages/Fruits";
import EditFruit from "./pages/EditFruit";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element = {<Users />} />
          <Route path='/newHome' element = {<NewHome />} />
          <Route path='/users/edit/:id' element={<EditUser />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/fruits/edit/:id" element={<EditFruit/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
