import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Mainpage from './Components/Mainpage';
import Pay from './Components/Pay';
import Method from './Components/Method';
import Net from './Components/Net';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/Pay" element={<Pay />} />
          <Route path="/Method" element={<Method />} />
          <Route path="/Net" element={<Net />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;