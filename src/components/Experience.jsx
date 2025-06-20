// Experience component - Work experience and internships
import React from 'react';

const Experience = () => {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional experience through internships, leadership roles, and industry collaborations
          </p>
        </div>{/* Work Experience Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Work Experience & Internships</h3>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Data Analysis Virtual Intern</h4>
                  <p className="text-gray-600">Tata</p>
                </div>
                <span className="text-sm text-gray-500">August 2023</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Project Development Intern</h4>
                  <p className="text-gray-600">Solid Waste Management</p>
                </div>
                <span className="text-sm text-gray-500">October 2023</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Chair Person</h4>
                  <p className="text-gray-600">IEEE UFFC, Sri Sairam Engineering College</p>
                </div>
                <span className="text-sm text-gray-500">December 2023</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Intern - IT Solutions</h4>
                  <p className="text-gray-600">AP TECHZ</p>
                </div>
                <span className="text-sm text-gray-500">June 2024</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Client Engagement Virtual Intern</h4>
                  <p className="text-gray-600">Bloomberg</p>
                </div>
                <span className="text-sm text-gray-500">June 2024</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Intel Unnati Intern</h4>
                  <p className="text-gray-600">Gen AI Interactive Learning Game</p>
                </div>
                <span className="text-sm text-gray-500">March 2025</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">VIVID TRANS TECH SOLUTIONS</h4>
                  <p className="text-gray-600">IT - Intern</p>
                </div>
                <span className="text-sm text-gray-500">June 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building AI-Driven Solutions
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Currently pursuing B.E in Computer Science (AI & ML) at Sri Sairam Engineering College with a CGPA of 8.61. 
              Experienced in developing innovative AI/ML solutions with multiple hackathon wins and successful internships 
              at top companies like Tata and Bloomberg.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">7+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">5+</div>
                <div className="text-gray-600">Hackathon Wins</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">8.60</div>
                <div className="text-gray-600">Current CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
