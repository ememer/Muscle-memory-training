import React, { useEffect, useState } from "react";

const Circle = () => {
  const [points, setPoints] = useState(0);

  const handleClick = (e) => {
    if (e.target.classList == "targetElem") {
      setPoints(points + 1);
      e.target.remove();
    } else {
      setPoints(points - 1);
    }
  };

  useEffect(() => {
    const dart = document.querySelector(".circle_dart");
    console.log(dart.offsetWidth);
    function createTargets() {
      let posTop = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      let posLeft = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      console.log(posTop, posLeft);
      const target = document.createElement("button");
      dart.appendChild(target);
      target.classList.add("targetElem");
      target.style.top = `${posTop}%`;
      target.style.left = `${posLeft}%`;
    }
    console.log(points);
    if (points <= 10) {
      createTargets();
    } else {
      console.log("stop");
    }
  }, [points]);

  return (
    <>
      <section>
        <div onClick={(e) => handleClick(e)} className="circle_dart"></div>
      </section>
    </>
  );
};

export default Circle;
