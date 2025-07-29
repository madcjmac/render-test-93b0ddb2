import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Welcome to your AI-powered app!');

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 {message}</h1>
        <p>Built with Claude AI assistance</p>
        <button 
          className="btn-primary"
          onClick={() => setMessage('Ready to build something amazing!')}
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;