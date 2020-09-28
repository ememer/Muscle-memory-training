import React, { useEffect, useState } from "react";
import Points from "./Points";

const Circle = () => {
  const [points, setPoints] = useState(0);

  const handleClick = (e) => {
    if (points == 5) return;

    if (e.target.classList == "targetElem") {
      setPoints(points + 1);
      e.target.remove();
      // if (points <= 5) {
      //   createTargets();
      //   console.log(points);
      // } else {
      //   console.log("stop");
      // }
    } else {
      setPoints(points - 1);
    }
  };

  function createTargets() {
    let posTop = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let posLeft = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const dart = document.querySelector(".circle_dart");
    const target = document.createElement("button");
    dart.appendChild(target);
    target.classList.add("targetElem");
    target.style.top = `${posTop}%`;
    target.style.left = `${posLeft}%`;
  }

  useEffect(() => {
    if (points < 5) {
      createTargets();
    } else {
      console.log("stop");
    }
  }, [points]);

  return (
    <>
      <Points points={points} />
      <section>
        <div onClick={(e) => handleClick(e)} className="container">
          <div className="circle_dart">
            {/* <button className="targetElem"></button>{" "} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Circle;
