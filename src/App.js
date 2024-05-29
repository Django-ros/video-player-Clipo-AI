import React, { useState } from 'react';
import './index.css';
import VideoPlayer from './components/VideoPlayer';
import SubtitleSettings from './components/SubtitleSettings';

function App() {
  const [subtitleStyles, setSubtitleStyles] = useState({
    fontSize: '20px',
    fontColor: '#ffffff',
    bgColor: '#000000',
  });

  const handleStyleChange = (newStyles) => {
    setSubtitleStyles(newStyles);
  };

  return (
    <div className="App">
      <div className="video-container">
        <h2>CLIPO AI PRIVATE LIMITED</h2>
        <VideoPlayer subtitleStyles={subtitleStyles} />
      </div>
      <SubtitleSettings subtitleStyles={subtitleStyles} onStyleChange={handleStyleChange} />
    </div>
  );
}

export default App;
