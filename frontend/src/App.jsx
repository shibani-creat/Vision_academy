import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Team from './components/Team';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import MissionVision from './components/MissionVision';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Faculty />
      <Courses />
      <Team />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;
