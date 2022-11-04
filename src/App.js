import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PopUpPage from "./components/PopUpPage";
import PlantSlideshow from "./components/PlantSlideshow";
import UserSettingsPage from "./components/userSettingsPage";





function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/editUser" element={<UserSettingsPage />}/>
        <Route path="/editplant" element={<Editor />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PopUpPage" element={<PopUpPage />} />
        <Route path="/PlantSlideshow" element={<PlantSlideshow />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
