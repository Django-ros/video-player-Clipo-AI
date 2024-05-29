import React, { useEffect, useRef, useState } from 'react';

const VideoPlayer = ({ subtitleStyles }) => {
  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const [subtitleSrc, setSubtitleSrc] = useState('subtitles.vtt'); // Default subtitle file

  useEffect(() => {
    const video = videoRef.current;
    const track = trackRef.current;

    const applyStyles = () => {
      if (track.track && track.track.activeCues) {
        const cues = track.track.activeCues;
        for (let cue of cues) {
          cue.displayState = '';
          cue.lineAlign = 'center';
          cue.textAlign = 'center';
          cue.size = 100;
          cue.line = -3;
          cue.vertical = '';
          cue.align = 'middle';
          cue.position = 50;

          cue.displayState = `<div style="
            font-size: ${subtitleStyles.fontSize};
            color: ${subtitleStyles.fontColor};
            background-color: ${subtitleStyles.bgColor};
            padding: 5px;
            border-radius: 5px;
          ">${cue.text}</div>`;
        }
      }
    };

    track.addEventListener('cuechange', applyStyles);

    
    applyStyles();

    return () => {
      track.removeEventListener('cuechange', applyStyles);
    };
  }, [subtitleStyles]);

  const handleSubtitleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSubtitleSrc(url);
    }
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src="video.mp4" type="video/mp4" />
        <track ref={trackRef} label="English" kind="subtitles" srclang="en" src={subtitleSrc} default />
        Your browser does not support the video tag.
      </video>
      <input type="file" accept=".vtt,.srt" onChange={handleSubtitleUpload} />
    </div>
  );
};

export default VideoPlayer;