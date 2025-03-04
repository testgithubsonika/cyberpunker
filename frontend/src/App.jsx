import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Notification from './pages/Notification';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './layout/Header';
import Login from './pages/Login';
import PrivateRouter from './layout/PrivateRouter';
import Sidebar from './layout/Sidebar';
import UploadImage from "./components/UploadComponent"; // Ensure this path is correct

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadImage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRouter />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}
