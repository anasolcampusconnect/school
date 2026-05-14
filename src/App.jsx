import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import DaySchool from './pages/DaySchool';
import BoardingSchool from './pages/BoardingSchool';
import Contact from './pages/Contact';
import MandatoryDisclosure from './pages/MandatoryDisclosure';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/day-school" element={<DaySchool />} />
            <Route path="/boarding-school" element={<BoardingSchool />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;