import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id='hero'>
        <h1>Welcome to My Portfolio</h1>
        <p>Your gateway to my projects and skills!</p>
      </section>

      {/* About Section */}
      <section id='about'>
        <h2>About Me</h2>
        <p>I'm a passionate developer with experience in...</p>
      </section>

      {/* Skills Section */}
      <section id='skills'>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
        </ul>
      </section>

      {/* Projects Gallery with Search */}
      <section id='projects'>
        <h2>Projects</h2>
        <input type='text' placeholder='Search projects...' />
        <div className='project-gallery'>
          {/* Project Items will be rendered here */}
        </div>
      </section>

      {/* Blog Section */}
      <section id='blog'>
        <h2>Blog</h2>
        <p>Check out my latest posts...</p>
      </section>

      {/* Contact Form */}
      <section id='contact'>
        <h2>Contact Me</h2>
        <form>
          <input type='text' placeholder='Your Name' required />
          <input type='email' placeholder='Your Email' required />
          <textarea placeholder='Your Message' required></textarea>
          <button type='submit'>Send</button>
        </form>
      </section>

      {/* AI Chat Component */}
      <section id='ai-chat'>
        <h2>Chat with AI</h2>
        <div className='ai-chat-container'>
          {/* AI Chat Component here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;