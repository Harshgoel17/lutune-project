import React from 'react';

const TestCardCard = () => {
  const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="card" onMouseMove={handleOnMouseMove}>
      <div className="card-content"></div>
      <div className="card-border"></div>
    </div>
  );
};

export default TestCardCard;