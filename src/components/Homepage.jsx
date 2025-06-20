// Homepage component - Main landing page with hero section and navigation
import React, { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';

const Homepage = () => {
  const [bubbles, setBubbles] = useState([]);
  const [activeSection, setActiveSection] = useState('home');

  // Generate random bubbles on component mount
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < 8; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          opacity: Math.random() * 0.6 + 0.3,
          delay: Math.random() * 2,
          duration: Math.random() * 3 + 2,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);
  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'work', 'leetcode', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navigation height

      // Special case for homepage (top of page)
      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">      {/* Profile Picture - Left of navigation */}
      <div className="absolute top-10 left-1/2 transform -translate-x-[32rem] z-60">
        <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden shadow-lg border-2 border-white">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>{/* Navigation Bar */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">        <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-full px-6 py-3 flex items-center space-x-6">
          {/* Navigation Links */}
          <a 
            href="#home" 
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
              activeSection === 'home' 
                ? 'bg-yellow-500 text-black' 
                : 'text-white hover:bg-yellow-500 hover:text-black'
            }`}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
              activeSection === 'about' 
                ? 'bg-yellow-500 text-black' 
                : 'text-white hover:bg-yellow-500 hover:text-black'
            }`}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
              activeSection === 'skills' 
                ? 'bg-yellow-500 text-black' 
                : 'text-white hover:bg-yellow-500 hover:text-black'
            }`}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
              activeSection === 'experience' 
                ? 'bg-yellow-500 text-black' 
                : 'text-white hover:bg-yellow-500 hover:text-black'
            }`}
          >
            Experience
          </a>
          <a 
            href="#work" 
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
              activeSection === 'work' 
                ? 'bg-yellow-500 text-black' 
                : 'text-white hover:bg-yellow-500 hover:text-black'
            }`}
          >
            Work
          </a>
          <a 
            href="#leetcode" 
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
              activeSection === 'leetcode' 
                ? 'bg-yellow-500 text-black' 
                : 'text-white hover:bg-yellow-500 hover:text-black'
            }`}
          >
            Leetcode
          </a>
          <a 
            href="#contact" 
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
              activeSection === 'contact' 
                ? 'bg-yellow-500 text-black' 
                : 'text-white hover:bg-yellow-500 hover:text-black'
            }`}
          >
            Contact
          </a>
        </div>
      </nav>      {/* Resume Button - Right of navigation */}
      <div className="absolute top-9 right-20 z-50">
        <a 
          href="/Kishore-Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            window.open('/Kishore-Resume.pdf', '_blank');
          }}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 text-sm flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer border-2 border-white"
        >
          📄 Resume
        </a>
      </div>{/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vertical lines in background */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gray-400 opacity-30"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gray-400 opacity-30"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gray-400 opacity-30"></div>
        
        {/* Animated Interactive Bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute bg-black rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-90"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              animation: `float ${bubble.duration}s ease-in-out infinite ${bubble.delay}s, drift ${bubble.duration * 2}s linear infinite`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2)';
              e.target.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.opacity = bubble.opacity;
            }}
          />
        ))}
      </div>

      {/* CSS-in-JS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes drift {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(30px);
          }
          100% {
            transform: translateX(0px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl">          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            I'm Kishore K
          </h1>
          
          {/* Subtitle/Tagline */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Passionate Computer Science student skilled in AI/ML, Python, and web development. Driven to develop innovative and efficient software solutions with hands-on experience in developing AI-driven applications.
          </p>
        </div>
      </div>      {/* Mobile Navigation Menu (can be toggled) */}
      <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 hidden">
        <div className="bg-white w-64 h-full p-6 transform -translate-x-full transition-transform duration-300">          <div className="flex flex-col space-y-6 mt-16">            <a href="#about" className="text-lg font-medium text-gray-800 text-left hover:text-yellow-500 transition-colors">About</a>
            <a href="#skills" className="text-lg font-medium text-gray-800 text-left hover:text-yellow-500 transition-colors">Skills</a>
            <a href="#experience" className="text-lg font-medium text-gray-800 text-left hover:text-yellow-500 transition-colors">Experience</a>
            <a href="#work" className="text-lg font-medium text-gray-800 text-left hover:text-yellow-500 transition-colors">Work</a>
            <a href="#leetcode" className="text-lg font-medium text-gray-800 text-left hover:text-yellow-500 transition-colors">Leetcode</a>
            <a href="#contact" className="text-lg font-medium text-gray-800 text-left hover:text-yellow-500 transition-colors">Contact</a>
            <a 
              href="/Kishore-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-200 text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>      {/* Mobile Navigation Button */}
      <div className="md:hidden absolute top-8 right-32 z-50">
        <button className="bg-black bg-opacity-70 backdrop-blur-md p-3 rounded-full text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
