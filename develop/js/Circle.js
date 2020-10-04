import React, { useEffect, useState } from "react";
import Points from "./Points";

const Circle = () => {
  const [points, setPoints] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [dotInterval, setDotInterval] = useState();
  const [intervalValue, setIntervalValue] = useState(1500);
  const [flow, setFlow] = useState(0);
  const [missedValue, setMissedValue] = useState(0);
  const [gamePlayLvl, setGamePlayLvl] = useState("Beginner");
  const [gameFlowValue, setGameFlowValue] = useState();
  const handleClick = (e) => {
    e.target.classList == "dot" ? e.target.remove() : null;
    isMissed(e.target.classList);
    if (isStart) return;
    setIsStart((prevState) => !prevState);
    setDotInterval(
      setInterval(() => {
        createDots();
      }, intervalValue)
    );
  };

  useEffect(() => {
    gameFlow(flow);
  }, [points, flow]);

  function slowFlow(missClick) {
    const flowValue = [16, 32, 48, 64];
    console.log("mis", flowValue.indexOf(missClick));
    let idx =
      flowValue.indexOf(missClick) > 0 && flowValue.indexOf(missClick) != -1
        ? flowValue.indexOf(missClick) - 1
        : 0;
    console.log("index", idx);
    setFlow(flowValue[idx]);
    let missedTargets = document.querySelectorAll("button");
    for (const missedTarget of missedTargets) {
      missedTarget.remove();
    }
  }

  function gameFlow(value) {
    switch (true) {
      case value === 16:
        resetParam(1300);
        setGamePlayLvl("Noob");
        setGameFlowValue(16);
        return;
      case value === 32:
        resetParam(1100);
        setGamePlayLvl("Semi");
        setGameFlowValue(32);
        return;
      case value === 48:
        resetParam(800);
        setGamePlayLvl("Pro");
        setGameFlowValue(48);
        return;
      case value === 64:
        resetParam(600);
        setGamePlayLvl("World elite");
        setGameFlowValue(64);
        return;
    }
  }

  function resetParam(interval) {
    setIsStart((prevState) => !prevState);
    clearInterval(dotInterval);
    setTimeout(() => {
      createDots();
    }, intervalValue - 250);
    setIntervalValue(interval);
  }

  function createDots() {
    let posTop = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    let posLeft = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const dart = document.querySelector(".circle_dart");
    const target = document.createElement("button");
    dart.appendChild(target);
    target.classList.add("dot");
    target.style.top = `${posTop}%`;
    target.style.left = `${posLeft}%`;
  }

  function isMissed(value) {
    if (value == "dot") {
      setPoints((prevState) => prevState + 1);
      setFlow((prevState) => (prevState <= 64 ? prevState + 1 : 65));
    } else {
      setPoints((prevState) => (prevState > 0 ? prevState - 1 : 0));
      setFlow((prevState) => (prevState > 0 ? prevState - 2 : 0));
      setMissedValue((prevState) => prevState + 1);
      if (missedValue > 5) {
        slowFlow(gameFlowValue);
        setMissedValue(0);
      }
    }
  }

  return (
    <>
      <Points status={gamePlayLvl} points={points} />
      <section>
        <div onClick={(e) => handleClick(e)} className="container">
          <div className="circle_dart">
            <button className="dot"></button>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Circle;
