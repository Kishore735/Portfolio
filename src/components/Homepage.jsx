// Homepage component - Main landing page with hero section and navigation
import React, { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';

const Homepage = () => {
  const [bubbles, setBubbles] = useState([]);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    handleScroll(); // Call once to set initial state    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">
      {/* Profile Picture - Desktop only */}
      <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-[32rem] z-60">
        <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden shadow-lg border-2 border-white">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <nav className="hidden md:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black bg-opacity-70 backdrop-blur-md rounded-full px-6 py-3 flex items-center space-x-6">
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
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Profile Picture - Mobile */}
          <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden shadow-lg border-2 border-white">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Resume Button */}
      <div className="hidden md:block absolute top-9 right-20 z-50">
        <a 
          href="/Portfolio/Kishore-Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
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
      `}</style>      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-16 md:pt-0">
        <div className="text-center max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            I'm Kishore K
          </h1>
          
          {/* Subtitle/Tagline */}
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Passionate Computer Science student skilled in AI/ML, Python, and web development. Driven to develop innovative and efficient software solutions with hands-on experience in developing AI-driven applications.
          </p>

          {/* Mobile Resume Button */}
          <div className="md:hidden">
            <a 
              href="/Portfolio/Kishore-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📄 View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={closeMobileMenu}>
        <div className={`bg-white w-80 h-full p-6 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`} onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col space-y-6 mt-16">
            <a 
              href="#home" 
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-left transition-colors py-3 px-4 rounded-lg ${
                activeSection === 'home' 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-800 hover:bg-yellow-100 hover:text-yellow-600'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-left transition-colors py-3 px-4 rounded-lg ${
                activeSection === 'about' 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-800 hover:bg-yellow-100 hover:text-yellow-600'
              }`}
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-left transition-colors py-3 px-4 rounded-lg ${
                activeSection === 'skills' 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-800 hover:bg-yellow-100 hover:text-yellow-600'
              }`}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-left transition-colors py-3 px-4 rounded-lg ${
                activeSection === 'experience' 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-800 hover:bg-yellow-100 hover:text-yellow-600'
              }`}
            >
              Experience
            </a>
            <a 
              href="#work" 
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-left transition-colors py-3 px-4 rounded-lg ${
                activeSection === 'work' 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-800 hover:bg-yellow-100 hover:text-yellow-600'
              }`}
            >
              Work
            </a>
            <a 
              href="#leetcode" 
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-left transition-colors py-3 px-4 rounded-lg ${
                activeSection === 'leetcode' 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-800 hover:bg-yellow-100 hover:text-yellow-600'
              }`}
            >
              Leetcode
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className={`text-lg font-medium text-left transition-colors py-3 px-4 rounded-lg ${
                activeSection === 'contact' 
                  ? 'bg-yellow-500 text-black' 
                  : 'text-gray-800 hover:bg-yellow-100 hover:text-yellow-600'
              }`}
            >
              Contact
            </a>
            
            {/* Resume Button in Mobile Menu */}
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="/Portfolio/Kishore-Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 text-center block"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
