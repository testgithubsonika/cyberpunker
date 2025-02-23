import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Notification from './pages/Notification';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
  <Route path="/Notification" element={<Notification />} />
  <Route path="/About" element={<About />} />

    </Routes>

    
    App</BrowserRouter>
  )
}
