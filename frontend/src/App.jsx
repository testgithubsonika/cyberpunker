import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Notification from './pages/Notification';
import Home from './pages/Home';

import Profile from './pages/Profile';
import Header from './layout/Header';
import Login from './pages/Login';

export default function App() {
  return (
  
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/Home" element={<Home />} />
         <Route path="/Profile" element={<Profile />} />
           <Route path="/Login" element={<Login />} />
  <Route path="/Notification" element={<Notification />} />
  <Route path="/About" element={<About />} />

    </Routes>

</BrowserRouter>
  )
}
