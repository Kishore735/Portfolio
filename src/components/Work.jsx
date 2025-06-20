// Work component - Portfolio of projects and case studies
import React from 'react';
import QuizImage from '../assets/quiz.png';
import SafeJourneyImage from '../assets/safejourney.png';
import SIHImage from '../assets/SIH.png';
import PoseImage from '../assets/pose.png';
import HealthGuardImage from '../assets/healthguard.png';
import MLImage from '../assets/ml.png';

const Work = () => {  // Project data
  const projects = [    {
      id: 1,
      title: 'Healthcare Chatbot',
      category: 'AI/ML Project',
      image: HealthGuardImage,
      description: 'Personal AI chatbot for health-related information and advice, employing NLP and ML. Won 3rd place in State Level Hackathon.',
      githubUrl: 'https://github.com/Kishore735/healthcare-chatbot'
    },{
      id: 2,
      title: 'Drowsy Driver Detection',
      category: 'Computer Vision',
      image: SafeJourneyImage,
      description: 'Hardware and software solution to detect and alert drowsy drivers, integrating AI and computer vision. Won 2nd place in IEEE National Hackathon.',
      githubUrl: 'https://github.com/Kishore735/SafeJourney-AI'
    },    {
      id: 3,
      title: 'Amazon ML Challenge',
      category: 'Machine Learning',
      image: MLImage,
      description: 'ML model to extract and analyze product attributes like weight from Amazon product data. Achieved Rank 11 in the challenge.',
      githubUrl: 'https://github.com/Kishore735/amazon-ml-challenge'
    },{
      id: 4,
      title: 'Motor Function Assessment',
      category: 'AI Healthcare',
      image: PoseImage,
      description: 'Web application for assessing motor functional ability of children with Cerebral Palsy using AI. Won 1st place in National Level Hackathon.',
      githubUrl: null
    },
    {
      id: 5,
      title: 'Smart India Hackathon',
      category: 'IoT Solution',
      image: SIHImage,
      description: 'Video call intercom with vibration sensor and notification lights for seamless communication in the deaf community. Won 1st place.',
      githubUrl: null
    },{
      id: 6,
      title: 'CodeQuiz',
      category: 'Web Application',
      image: QuizImage,
      description: 'Interactive programming quiz web application with multiple language support (Python, Java, C, C++), real-time feedback, and AI-powered chatbot assistant.',
      githubUrl: 'https://github.com/Kishore735/Quiz'
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Work
        </h2>        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-[4/3] hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}                  className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                    project.title === 'CodeQuiz' || project.title === 'SafeJourney AI' || project.title === 'Drowsy Driver Detection' || project.title === 'Smart India Hackathon' || project.title === 'Motor Function Assessment' || project.title === 'Healthcare Chatbot' || project.title === 'Amazon ML Challenge' ? 'object-contain' : 'object-cover'
                  }`}
                />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.category}</p>
                <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}        </div>

        <div className="text-center mt-16">
          <a 
            href="https://github.com/Kishore735" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
