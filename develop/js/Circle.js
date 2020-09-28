import React, { useEffect, useState } from "react";
import Points from "./Points";

const Circle = () => {
  const [points, setPoints] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const handleClick = (e) => {
    e.target.classList == "targetElem" ? e.target.remove() : null;
    if (isStart) return;
    setIsStart((prevState) => !prevState);
    createDots();
  };

  function createDots() {
    const dotInterval = setInterval(() => {
      let posTop = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      let posLeft = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      const dart = document.querySelector(".circle_dart");
      const target = document.createElement("button");
      dart.appendChild(target);
      target.classList.add("targetElem");
      target.style.top = `${posTop}%`;
      target.style.left = `${posLeft}%`;
    }, 1000);
  }

  return (
    <>
      <Points points={points} />
      <section>
        <div onClick={(e) => handleClick(e)} className="container">
          <div className="circle_dart">
            <button className="targetElem"></button>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Circle;
