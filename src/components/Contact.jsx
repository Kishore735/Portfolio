// Contact component - Contact information and form
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact
          </h2>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-200 rounded-2xl p-8 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <a 
                href="mailto:kishoreofficial735@gmail.com"
                className="text-xl text-gray-800 font-medium hover:text-gray-600 transition-colors"
              >
                kishoreofficial735@gmail.com
              </a>
            </div>
          </div>
        </div>        {/* Footer Navigation */}
        
        {/* Copyright - Bottom of site */}
        <div className="bottom-0 left-0 right-0 bg-gray-50 py-4">
          <div className="text-center">            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kishore K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
