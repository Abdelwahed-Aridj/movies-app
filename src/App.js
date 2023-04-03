import React from 'react';
import Content from './Content';
import Header from './Header';
import ParticlesBackground from './ParticlesBackground';

function App() {
  return (
    <div className='App'>
      <ParticlesBackground />
      <div className='particlesheader'>
        <h1>  </h1>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
