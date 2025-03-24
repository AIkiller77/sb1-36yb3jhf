import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TestBuilder from './pages/TestBuilder';
import TestTaking from './pages/TestTaking';
import Analytics from './pages/Analytics';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/test-builder" element={<TestBuilder />} />
            <Route path="/take-test" element={<TestTaking />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;