import React, { useState } from 'react';

const SubtitleSettings = ({ subtitleStyles, onStyleChange }) => {
  const [fontSize, setFontSize] = useState(subtitleStyles.fontSize);
  const [fontColor, setFontColor] = useState(subtitleStyles.fontColor);
  const [bgColor, setBgColor] = useState(subtitleStyles.bgColor);

  const handleApply = () => {
    onStyleChange({
      fontSize,
      fontColor,
      bgColor,
    });
  };

  return (
    <div className="subtitle-settings">
      <h3>Subtitle Settings</h3>
      <label htmlFor="fontSize">Font Size:</label>
      <input
        type="number"
        id="fontSize"
        name="fontSize"
        min="10"
        max="40"
        value={fontSize.replace('px', '')}
        onChange={(e) => setFontSize(`${e.target.value}px`)}
      />
      
      <label htmlFor="fontColor">Font Color:</label>
      <input
        type="color"
        id="fontColor"
        name="fontColor"
        value={fontColor}
        onChange={(e) => setFontColor(e.target.value)}
      />
      
      <label htmlFor="bgColor">Background Color:</label>
      <input
        type="color"
        id="bgColor"
        name="bgColor"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
      
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default SubtitleSettings;
