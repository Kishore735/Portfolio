// Main App component - Portfolio website with multiple sections
import React from 'react'
import Homepage from './components/Homepage'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Work from './components/Work'
import Leetcode from './components/Leetcode'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Homepage/Landing Section */}
      <section id="home">
        <Homepage />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Work/Portfolio Section */}
      <section id="work">
        <Work />
      </section>

      {/* Leetcode Section */}
      <section id="leetcode">
        <Leetcode />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
