// About component - Personal introduction and background
import React from 'react';
import ProfileImage from '../assets/profile.png';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              I'm a{' '}
              <span className="underline decoration-4 decoration-blue-500">
                Computer Science student
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passionate Computer Science student skilled in Python, C, JavaScript, HTML, and CSS. Experienced in algorithms, data structures, database management, Git, and Agile methodologies. Proficient in Artificial Intelligence, Machine Learning and Deep Learning, with hands-on experience in developing AI-driven solutions. Currently pursuing B.E in Computer Science (Artificial Intelligence and Machine Learning) at Sri Sairam Engineering College with a CGPA of 8.60.
            </p>{/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Kishore735" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github
              </a>              <a 
                href="https://www.linkedin.com/in/kishore-k-721834236/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                linkedin
              </a>
            </div>
          </div>          {/* Right side - Image */}
          <div className="relative flex justify-center">
            <div className="relative group">
              {/* Main image container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src={ProfileImage}
                  alt="Kishore Profile" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Minimalist floating elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-gray-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/4 -right-8 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
