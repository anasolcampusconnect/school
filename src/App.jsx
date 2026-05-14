import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import PrincipalMessage from './pages/PrincipalMessage';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/principal-message" element={<PrincipalMessage />} />
            
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;