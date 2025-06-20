// Skills component - Technical skills with progress bars
import React from 'react';

const Skills = () => {
  // Skills data with progress bars
  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React.js', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'C Programming', level: 85, category: 'Programming' },
    { name: 'Machine Learning', level: 85, category: 'AI/ML' },
    { name: 'Deep Learning', level: 80, category: 'AI/ML' },
    { name: 'SQL', level: 75, category: 'Database' },
    { name: 'Git/GitHub', level: 85, category: 'Tools' },
    { name: 'Figma', level: 70, category: 'Design' },
  ];

  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and programming languages
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{skill.name}</h3>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">{skill.category}</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-gray-900">{skill.level}</span>
                  <span className="text-lg text-gray-500">%</span>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Technical Expertise
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Proficient in modern web technologies, AI/ML frameworks, and software development tools. 
              Continuously learning and adapting to new technologies in the rapidly evolving tech landscape.
            </p>
            
            {/* Skill Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">5+</div>
                <div className="text-gray-600">Programming Languages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">3+</div>
                <div className="text-gray-600">Frontend Technologies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">2+</div>
                <div className="text-gray-600">AI/ML Technologies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
                <div className="text-gray-600">Tools & Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
