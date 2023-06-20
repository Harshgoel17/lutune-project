import React, { useRef } from "react";
import { BiImage } from "react-icons/bi";

const TestCardCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div className="card-content flex flex-col items-center justify-center uppercase tracking-wider font-sans font-thin text-green-400/[0.6]">
        <BiImage className="text-3xl"/>
        Background Remover
      </div>
      <div className="card-border"></div>
    </div>
  );
};

const TestCard = () => {
  return (
    <div id="cards" className="flex flex-row justify-between">
      <TestCardCard />
      <TestCardCard />
      <TestCardCard />
      <TestCardCard />
      <TestCardCard />
      <TestCardCard />
    </div>
  );
};

export default TestCard;